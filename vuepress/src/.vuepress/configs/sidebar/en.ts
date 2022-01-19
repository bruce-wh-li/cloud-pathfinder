import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: ["", "using-vue"],
    },
  ],
  "/openshift101/": [
    {
      text: "OpenShift 101",
      children: [
        "00_overview",
        "01_setup.md",
        "01_adding_team_members",
        "01b_web_console_overview.md",
        "02_builds.md",
        "03_deployment.md",
        "04_configuring_deployments.md",
        "05_resource_management.md",
        "06_application_availability.md",
        "07_autoscaling.md",
        "08_persistent_storage.md",
        "09_persistent_configurations.md",
        "10_event_streams.md",
        "11_debugging_containers.md",
        "12_logging_and_visualizations.md",
        "13_metrics.md",
        "14_cheatsheet.md",
        "15_pod_lifecycle.md",
        "SUMMARY.md",
      ],
    },
  ],
};
