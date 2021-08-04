import argparse
import re
import os

import pandas as pd
from airtable import Airtable
from jinja2 import Environment, PackageLoader, select_autoescape
from slugify import slugify


def stripRelative(path) -> str:
    return path.replace("../../../", "", 1)


def processTable(output_path, base_key, table_name) -> None:

    env = Environment(
        loader=PackageLoader('airtable2md', 'templates'),
        autoescape=select_autoescape(['html', 'xml'])
    )

    airtable = Airtable(base_key, table_name,
                        api_key=os.environ.get('AIRTABLE_API_KEY'))
    records = airtable.get_all()

    tools = (r['fields'] for r in records if r['fields'])
    # tools = (t for t in tools if t['Endorsement Status'][0] == 'Endorsed')
    tool_page_template = env.get_template('aws-services.md.jinja2')

    name_slug = "aws-services"
    page_path = f"{output_path}/{name_slug}.md"
    tool_page_template.stream(tools=tools).dump(page_path)


def init_argparse() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        usage="%(prog)s output_path base_key table",
        description="Generate a collection of markdown files."
    )
    parser.add_argument('output_path', help="output directory")
    parser.add_argument('base_key', help="AirTable base key")
    parser.add_argument('table', help="AirTable table name")
    return parser


parser = init_argparse()
args = parser.parse_args()
processTable(output_path=args.output_path,
             base_key=args.base_key,
             table_name=args.table
             )
