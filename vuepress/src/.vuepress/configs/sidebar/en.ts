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
  "/Documentation/Pre-reading-material/": [
    {
      text: "Pre Reading Material",
      children: [
        "000100_About_bcgov_cloud.md",
        "000200_sea_at_bc_Gov.md",
        "000300_procurement_value_proposition.md",
        "000400_shared_responsibility_model.md",
        "000500_Providing_an_sea_service.md",
        "000600_billing.md",
        "000700_communities_of_practise.md",
        "000800_service_levels.md",
        "000900_demo.md",
        "001000_questions.md",
        "summary.md",
      ],
    },
  ],
};
