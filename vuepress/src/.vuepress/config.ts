import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from '@vuepress/utils'
import { navbar, sidebar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/cloud-pathfinder/",
  // title: "CloudPathfinder",
  description: "CPF Documentation",
  lang: 'en-US',
  // dest: './src/../../docs',
  debug: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/vuepress/src/.vuepress/public/ns/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "VuePress" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  // when using vuepress-vite package, you can omit this field
  // because vite is the default bundler
  bundler: '@vuepress/bundler-vite',
  // options for vite bundler
  bundlerConfig: {
    // see below
  },

  themeConfig: {
    logo: "/cloud_pathfinder_icon_2022.png",
    repo: "",
    docsDir: "",

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: "Edit this page on GitHub",
      },

      // /**
      //  * French locale config
      //  */
      // "/fr/": {
      //   // navbar
      //   navbar: navbar.fr,
      //
      //   // sidebar
      //   sidebar: sidebar.fr,
      //
      //   // page meta
      //   editLinkText: "Edit this page on GitHub",
    },
  },
});
