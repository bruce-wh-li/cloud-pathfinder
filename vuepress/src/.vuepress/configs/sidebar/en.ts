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
  "/materials/gcp_sada/": [
    {
      text: "GCP SADA Collaboration",
      children: [
        "00_about_bc_gov_cloud.md",
        "01_sea_at_bc_gov.md",
        "02_procurement_value_proposition.md",
        "03_shared_responsibility.md",
        "04_providing_an_sea_service.md",
        "05_billing.md",
        "06_communities_of_practice.md",
        "07_service_levels.md",
        "08_demo.md",
        "09_questions_and_answers.md",
        "10_extra_slides.md",
        "summary.md"
      ],
    },
  ],
};
