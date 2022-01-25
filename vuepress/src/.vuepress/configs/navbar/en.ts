import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/",
  },
  {
    text: "Materials",
    children: [
      {
        text: "Pre-Reading Materials",
        children: [
          {
            text: "GCP SADA Collaboration",
            link: "/materials/gcp_sada/",
          },
        ],
      },
    ],
  },
  {
    text: "Courses",
    children: [
      {
        text: "OpenShift",
        children: [
          {
            text: "OpenShift 101",
            link: "/openshift101/",
          },
        ],
      },
    ],
  },
  {
    text: "CloudPathfinder",
    link: "https://github.com/bcgov/cloud-pathfinder",
  },
];
