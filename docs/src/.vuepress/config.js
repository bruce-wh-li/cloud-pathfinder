const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CloudPathfinder',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: "book",
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Courses',
        arialLabel: 'Courses',
        items: [
          {
            text: 'OpenShift',
            items: [
              {
                text: 'OpenShift101',
                link: '/openshift101/'
              },
              {
                text: 'OpenShift102',
                link: '/openshift101/'
              },
            ]
          }
        ]
      },
      {
        text: 'CloudPathfinder',
        link: 'https://github.com/unoah/cloud-pathfinder'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/openshift101/': [
        {
          title: 'OpenShift 101',
          collapsable: true,
          children: [
            '00_overview',
            '01_setup.md',
            '01_adding_team_members',
            '01b_web_console_overview.md',
            '02_builds.md',
            '03_deployment.md',
            '04_configuring_deployments.md',
            '05_resource_management.md',
            '06_application_availability.md',
            '07_autoscaling.md',
            '08_persistent_storage.md',
            '09_persistent_configurations.md',
            '10_event_streams.md',
            '11_debugging_containers.md',
            '12_logging_and_visualizations.md',
            '13_metrics.md',
            '14_cheatsheet.md',
            '15_pod_lifecycle.md',
            'SUMMARY.md',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', {
      selector: String,
      align: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundColor: String,
      successText: String
      }
    ]
  ]
}
