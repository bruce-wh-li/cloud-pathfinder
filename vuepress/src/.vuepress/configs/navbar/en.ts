import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Guide",
    link: "/guide/",
  },
  {
    text: "Courses",
    // arialLabel: 'Courses',
    children: [
      {
        text: "OpenShift",
        children: [
          {
            text: "OpenShift101",
            link: "/openshift101/",
          },
          {
            text: "OpenShift102",
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
