import argparse
import errno
import os

import pandas as pd
from airtable import Airtable
from jinja2 import Environment, PackageLoader, select_autoescape
from slugify import slugify


def stripRelative(path) -> str:
    return path.replace("../../../", "", 1)


def processTable(output_path, base_key, table_name) -> None:

    # os.makedirs(os.path.dirname(output_path), exist_ok=True)

    env = Environment(
        loader=PackageLoader('airtable2md', 'templates'),
        autoescape=select_autoescape(['html', 'xml'])
    )

    airtable = Airtable(base_key, table_name,
                        api_key=os.environ.get('AIRTABLE_API_KEY'))
    records = airtable.get_all()

    # df = pd.DataFrame.from_records((r['fields'] for r in records))
    # print(df.head())

    tools = (r['fields'] for r in records)
    tool_page_template = env.get_template('aws-service.md.jinja2')
    generated_page_paths = []
    for tool in tools:
        name_slug = tool['AWS Service Name']\
            .replace(" ", "-")\
            .replace("/", "-")\
            .lower()
        page_path = f"{output_path}/{name_slug}.md"
        tool_page_template.stream(tool=tool).dump(page_path)
        generated_page_paths.append(stripRelative(page_path))

    registry_data = {"pages": generated_page_paths}
    registry_file_basename = 'cloud-pathfinder.json'
    registry_template = env.get_template(f"{registry_file_basename}.jinja2")
    registry_template.stream(registry_contents=registry_data).dump(
        f"{output_path}/{registry_file_basename}")


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
