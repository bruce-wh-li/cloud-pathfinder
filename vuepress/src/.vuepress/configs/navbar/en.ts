import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/",
  },
  {
    text: "Documentation",
    children: [
      {
        text: "Pre-Reading Material",
        children: [
          {
            text: "Pre-Reading Material",
            link: "/Documentation/AWS-Pre-reading-material/",
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
