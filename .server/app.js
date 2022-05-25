"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
var core = require("@vueuse/core");
var serverRenderer = require("vue/server-renderer");
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$e;
  })),
  "v-ba934fd8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$c;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$a;
  })),
  "v-79e93bb0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return usingVue_html$2;
  })),
  "v-f40eecc6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _00_overview_html$2;
  })),
  "v-ba3cb574": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _01_adding_team_members_html$2;
  })),
  "v-32544c5e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _01_setup_html$2;
  })),
  "v-273773da": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _01b_web_console_overview_html$2;
  })),
  "v-5a010f13": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _02_builds_html$2;
  })),
  "v-3bcadad8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _03_deployment_html$2;
  })),
  "v-4187e026": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _04_configuring_deployments_html$2;
  })),
  "v-6a6dd123": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _05_resource_management_html$2;
  })),
  "v-26751152": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _06_application_availability_html$2;
  })),
  "v-73606806": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _07_autoscaling_html$2;
  })),
  "v-43fbd36a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _08_persistent_storage_html$2;
  })),
  "v-df9b4e24": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _09_persistent_configurations_html$2;
  })),
  "v-582f1e4f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _10_event_streams_html$2;
  })),
  "v-8420501a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _11_debugging_containers_html$2;
  })),
  "v-fa5396c0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _12_logging_and_visualizations_html$2;
  })),
  "v-4c7d4ed7": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _13_metrics_html$2;
  })),
  "v-1c21796d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_cheatsheet_html$2;
  })),
  "v-395b7c70": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _15_pod_lifecycle_html$2;
  })),
  "v-07e7129c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$8;
  })),
  "v-3d274ca2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return SUMMARY_html$2;
  })),
  "v-6c4156d6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000100_who_are_you_html$2;
  })),
  "v-198dcdd4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000200_About_bcgov_cloud_html$2;
  })),
  "v-f5bac64c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000300_sea_at_bc_Gov_html$2;
  })),
  "v-47972128": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000400_procurement_value_proposition_html$2;
  })),
  "v-23ebbb5c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000500_shared_responsibility_model_html$2;
  })),
  "v-33831eca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000600_Providing_an_sea_service_html$2;
  })),
  "v-5d500bf2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000700_billing_html$2;
  })),
  "v-9d1fc074": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000800_communities_of_practise_html$2;
  })),
  "v-4bec5dd9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000900_service_levels_html$2;
  })),
  "v-2b892ac5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _001000_demo_html$2;
  })),
  "v-755bd53c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _001100_questions_html$2;
  })),
  "v-3b5059cf": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$6;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$3 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-ba934fd8": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-79e93bb0": () => Promise.resolve().then(function() {
    return usingVue_html;
  }).then(({ data: data2 }) => data2),
  "v-f40eecc6": () => Promise.resolve().then(function() {
    return _00_overview_html;
  }).then(({ data: data2 }) => data2),
  "v-ba3cb574": () => Promise.resolve().then(function() {
    return _01_adding_team_members_html;
  }).then(({ data: data2 }) => data2),
  "v-32544c5e": () => Promise.resolve().then(function() {
    return _01_setup_html;
  }).then(({ data: data2 }) => data2),
  "v-273773da": () => Promise.resolve().then(function() {
    return _01b_web_console_overview_html;
  }).then(({ data: data2 }) => data2),
  "v-5a010f13": () => Promise.resolve().then(function() {
    return _02_builds_html;
  }).then(({ data: data2 }) => data2),
  "v-3bcadad8": () => Promise.resolve().then(function() {
    return _03_deployment_html;
  }).then(({ data: data2 }) => data2),
  "v-4187e026": () => Promise.resolve().then(function() {
    return _04_configuring_deployments_html;
  }).then(({ data: data2 }) => data2),
  "v-6a6dd123": () => Promise.resolve().then(function() {
    return _05_resource_management_html;
  }).then(({ data: data2 }) => data2),
  "v-26751152": () => Promise.resolve().then(function() {
    return _06_application_availability_html;
  }).then(({ data: data2 }) => data2),
  "v-73606806": () => Promise.resolve().then(function() {
    return _07_autoscaling_html;
  }).then(({ data: data2 }) => data2),
  "v-43fbd36a": () => Promise.resolve().then(function() {
    return _08_persistent_storage_html;
  }).then(({ data: data2 }) => data2),
  "v-df9b4e24": () => Promise.resolve().then(function() {
    return _09_persistent_configurations_html;
  }).then(({ data: data2 }) => data2),
  "v-582f1e4f": () => Promise.resolve().then(function() {
    return _10_event_streams_html;
  }).then(({ data: data2 }) => data2),
  "v-8420501a": () => Promise.resolve().then(function() {
    return _11_debugging_containers_html;
  }).then(({ data: data2 }) => data2),
  "v-fa5396c0": () => Promise.resolve().then(function() {
    return _12_logging_and_visualizations_html;
  }).then(({ data: data2 }) => data2),
  "v-4c7d4ed7": () => Promise.resolve().then(function() {
    return _13_metrics_html;
  }).then(({ data: data2 }) => data2),
  "v-1c21796d": () => Promise.resolve().then(function() {
    return _14_cheatsheet_html;
  }).then(({ data: data2 }) => data2),
  "v-395b7c70": () => Promise.resolve().then(function() {
    return _15_pod_lifecycle_html;
  }).then(({ data: data2 }) => data2),
  "v-07e7129c": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-3d274ca2": () => Promise.resolve().then(function() {
    return SUMMARY_html;
  }).then(({ data: data2 }) => data2),
  "v-6c4156d6": () => Promise.resolve().then(function() {
    return _000100_who_are_you_html;
  }).then(({ data: data2 }) => data2),
  "v-198dcdd4": () => Promise.resolve().then(function() {
    return _000200_About_bcgov_cloud_html;
  }).then(({ data: data2 }) => data2),
  "v-f5bac64c": () => Promise.resolve().then(function() {
    return _000300_sea_at_bc_Gov_html;
  }).then(({ data: data2 }) => data2),
  "v-47972128": () => Promise.resolve().then(function() {
    return _000400_procurement_value_proposition_html;
  }).then(({ data: data2 }) => data2),
  "v-23ebbb5c": () => Promise.resolve().then(function() {
    return _000500_shared_responsibility_model_html;
  }).then(({ data: data2 }) => data2),
  "v-33831eca": () => Promise.resolve().then(function() {
    return _000600_Providing_an_sea_service_html;
  }).then(({ data: data2 }) => data2),
  "v-5d500bf2": () => Promise.resolve().then(function() {
    return _000700_billing_html;
  }).then(({ data: data2 }) => data2),
  "v-9d1fc074": () => Promise.resolve().then(function() {
    return _000800_communities_of_practise_html;
  }).then(({ data: data2 }) => data2),
  "v-4bec5dd9": () => Promise.resolve().then(function() {
    return _000900_service_levels_html;
  }).then(({ data: data2 }) => data2),
  "v-2b892ac5": () => Promise.resolve().then(function() {
    return _001000_demo_html;
  }).then(({ data: data2 }) => data2),
  "v-755bd53c": () => Promise.resolve().then(function() {
    return _001100_questions_html;
  }).then(({ data: data2 }) => data2),
  "v-3b5059cf": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData$2 = vue.ref(pagesData$3);
const pageDataEmpty$2 = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData$2 = vue.ref(pageDataEmpty$2);
const usePageData$2 = () => pageData$2;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData$2.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty$2;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty$2;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData$2.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData$2.value.key) {
      pageData$2.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales, routePath) => resolveLocalePath(locales, routePath);
const siteData$3 = {
  "base": "/cloud-pathfinder/",
  "lang": "en-US",
  "title": "",
  "description": "CPF Documentation",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/vuepress/src/.vuepress/public/ns/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/images/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/images/icons/safari-pinned-tab.svg",
        "color": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ]
  ],
  "locales": {}
};
const siteData$2 = vue.ref(siteData$3);
const useSiteData = () => siteData$2;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData$2.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData$2();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData$2();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance$1 = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup$1 = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance$1(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$2 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup$1(() => {
  return;
});
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/index.md"]],
  ["v-ba934fd8", "/config/", { "title": "Config" }, ["/config/index.html", "/config/README.md"]],
  ["v-fffb8e28", "/guide/", { "title": "Introduction" }, ["/guide/index.html", "/guide/README.md"]],
  ["v-79e93bb0", "/guide/using-vue.html", { "title": "Using Vue in Markdown" }, ["/guide/using-vue", "/guide/using-vue.md"]],
  ["v-f40eecc6", "/openshift101/00_overview.html", { "title": "Overview" }, ["/openshift101/00_overview", "/openshift101/00_overview.md"]],
  ["v-ba3cb574", "/openshift101/01_adding_team_members.html", { "title": "Adding Team Members" }, ["/openshift101/01_adding_team_members", "/openshift101/01_adding_team_members.md"]],
  ["v-32544c5e", "/openshift101/01_setup.html", { "title": "Lab Setup" }, ["/openshift101/01_setup", "/openshift101/01_setup.md"]],
  ["v-273773da", "/openshift101/01b_web_console_overview.html", { "title": "OCP 4 Web Console" }, ["/openshift101/01b_web_console_overview", "/openshift101/01b_web_console_overview.md"]],
  ["v-5a010f13", "/openshift101/02_builds.html", { "title": "Builds" }, ["/openshift101/02_builds", "/openshift101/02_builds.md"]],
  ["v-3bcadad8", "/openshift101/03_deployment.html", { "title": "Deployment" }, ["/openshift101/03_deployment", "/openshift101/03_deployment.md"]],
  ["v-4187e026", "/openshift101/04_configuring_deployments.html", { "title": "Exploring Deployment Options" }, ["/openshift101/04_configuring_deployments", "/openshift101/04_configuring_deployments.md"]],
  ["v-6a6dd123", "/openshift101/05_resource_management.html", { "title": "Resource Requests and Limits" }, ["/openshift101/05_resource_management", "/openshift101/05_resource_management.md"]],
  ["v-26751152", "/openshift101/06_application_availability.html", { "title": "Application Availability" }, ["/openshift101/06_application_availability", "/openshift101/06_application_availability.md"]],
  ["v-73606806", "/openshift101/07_autoscaling.html", { "title": "Autoscaling" }, ["/openshift101/07_autoscaling", "/openshift101/07_autoscaling.md"]],
  ["v-43fbd36a", "/openshift101/08_persistent_storage.html", { "title": "Persistent Storage" }, ["/openshift101/08_persistent_storage", "/openshift101/08_persistent_storage.md"]],
  ["v-df9b4e24", "/openshift101/09_persistent_configurations.html", { "title": "Persistent Configurations" }, ["/openshift101/09_persistent_configurations", "/openshift101/09_persistent_configurations.md"]],
  ["v-582f1e4f", "/openshift101/10_event_streams.html", { "title": "Event Streams" }, ["/openshift101/10_event_streams", "/openshift101/10_event_streams.md"]],
  ["v-8420501a", "/openshift101/11_debugging_containers.html", { "title": "Debugging Containers" }, ["/openshift101/11_debugging_containers", "/openshift101/11_debugging_containers.md"]],
  ["v-fa5396c0", "/openshift101/12_logging_and_visualizations.html", { "title": "Logging and Visualizations" }, ["/openshift101/12_logging_and_visualizations", "/openshift101/12_logging_and_visualizations.md"]],
  ["v-4c7d4ed7", "/openshift101/13_metrics.html", { "title": "Openshift 4 Metrics" }, ["/openshift101/13_metrics", "/openshift101/13_metrics.md"]],
  ["v-1c21796d", "/openshift101/14_cheatsheet.html", { "title": "Cheatsheet" }, ["/openshift101/14_cheatsheet", "/openshift101/14_cheatsheet.md"]],
  ["v-395b7c70", "/openshift101/15_pod_lifecycle.html", { "title": "Pod Lifecycle" }, ["/openshift101/15_pod_lifecycle", "/openshift101/15_pod_lifecycle.md"]],
  ["v-07e7129c", "/openshift101/", { "title": "Welcome to the Openshift 101 Lab" }, ["/openshift101/index.html", "/openshift101/README.md"]],
  ["v-3d274ca2", "/openshift101/SUMMARY.html", { "title": "Summary" }, ["/openshift101/SUMMARY", "/openshift101/SUMMARY.md"]],
  ["v-6c4156d6", "/Documentation/Pre-reading-material/000100_who_are_you.html", { "title": "Who are you ?" }, ["/Documentation/Pre-reading-material/000100_who_are_you", "/Documentation/Pre-reading-material/000100_who_are_you.md"]],
  ["v-198dcdd4", "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html", { "title": "About BC Government Cloud" }, ["/Documentation/Pre-reading-material/000200_About_bcgov_cloud", "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.md"]],
  ["v-f5bac64c", "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html", { "title": "ECF at BC Government" }, ["/Documentation/Pre-reading-material/000300_sea_at_bc_Gov", "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.md"]],
  ["v-47972128", "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html", { "title": "Procurement Value Proposition" }, ["/Documentation/Pre-reading-material/000400_procurement_value_proposition", "/Documentation/Pre-reading-material/000400_procurement_value_proposition.md"]],
  ["v-23ebbb5c", "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html", { "title": "Shared Responsibility Model" }, ["/Documentation/Pre-reading-material/000500_shared_responsibility_model", "/Documentation/Pre-reading-material/000500_shared_responsibility_model.md"]],
  ["v-33831eca", "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html", { "title": "Providing an ECF Service" }, ["/Documentation/Pre-reading-material/000600_Providing_an_sea_service", "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.md"]],
  ["v-5d500bf2", "/Documentation/Pre-reading-material/000700_billing.html", { "title": "Billing" }, ["/Documentation/Pre-reading-material/000700_billing", "/Documentation/Pre-reading-material/000700_billing.md"]],
  ["v-9d1fc074", "/Documentation/Pre-reading-material/000800_communities_of_practise.html", { "title": "Communities of practice" }, ["/Documentation/Pre-reading-material/000800_communities_of_practise", "/Documentation/Pre-reading-material/000800_communities_of_practise.md"]],
  ["v-4bec5dd9", "/Documentation/Pre-reading-material/000900_service_levels.html", { "title": "Service Levels" }, ["/Documentation/Pre-reading-material/000900_service_levels", "/Documentation/Pre-reading-material/000900_service_levels.md"]],
  ["v-2b892ac5", "/Documentation/Pre-reading-material/001000_demo.html", { "title": "Demo" }, ["/Documentation/Pre-reading-material/001000_demo", "/Documentation/Pre-reading-material/001000_demo.md"]],
  ["v-755bd53c", "/Documentation/Pre-reading-material/001100_questions.html", { "title": "Questions ?" }, ["/Documentation/Pre-reading-material/001100_questions", "/Documentation/Pre-reading-material/001100_questions.md"]],
  ["v-3b5059cf", "/Documentation/Pre-reading-material/", { "title": "Overview" }, ["/Documentation/Pre-reading-material/index.html", "/Documentation/Pre-reading-material/readme.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const pagesData$1 = vue.ref(pagesData$3);
const pageDataEmpty$1 = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData$1 = vue.ref(pageDataEmpty$1);
const usePageData$1 = () => pageData$1;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData$1.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData$1.value.key) {
      pageData$1.value = data2;
    }
  };
}
const siteData$1 = vue.ref(siteData$3);
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData$1.value = data2;
  };
}
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData$1();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n) {
      var started = NProgress.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress.status = n === 1 ? null : n;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n = NProgress.status;
      if (!n) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress.set(n);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars$1 = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData$2();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData$2();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const themeData$1 = {
  "logo": "/cloud_pathfinder_icon_2022.png",
  "repo": "",
  "backToTop": true,
  "mediumZoom": true,
  "externalLinkIcon": true,
  "nprogress": true,
  "docsRepo": "https://github.com/bcgov/cloud-pathfinder",
  "docsBranch": "master",
  "docsDir": "vuepress/src",
  "editLinkPattern": ":repo/edit/:branch/:path",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Documentation",
          "children": [
            {
              "text": "Pre-Reading Material",
              "children": [
                {
                  "text": "Pre-Reading Material",
                  "link": "/Documentation/Pre-reading-material/"
                }
              ]
            }
          ]
        },
        {
          "text": "Courses",
          "children": [
            {
              "text": "OpenShift",
              "children": [
                {
                  "text": "OpenShift 101",
                  "link": "/openshift101/"
                }
              ]
            }
          ]
        },
        {
          "text": "Material",
          "children": [
            {
              "text": "PDF's",
              "children": [
                {
                  "text": "Pre-reading-material",
                  "link": "https://github.com/bcgov/cloud-pathfinder/raw/master/docs/assets/Pre-reading-material.pdf"
                }
              ]
            }
          ]
        },
        {
          "text": "CloudPathfinder",
          "link": "https://github.com/bcgov/cloud-pathfinder"
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "Guide",
            "children": [
              "",
              "using-vue"
            ]
          }
        ],
        "/openshift101/": [
          {
            "text": "OpenShift 101",
            "children": [
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
              "SUMMARY.md"
            ]
          }
        ],
        "/Documentation/Pre-reading-material/": [
          {
            "text": "Pre Reading Material",
            "children": [
              "000100_who_are_you.md",
              "000200_About_bcgov_cloud.md",
              "000300_sea_at_bc_Gov.md",
              "000400_procurement_value_proposition.md",
              "000500_shared_responsibility_model.md",
              "000600_Providing_an_sea_service.md",
              "000700_billing.md",
              "000800_communities_of_practise.md",
              "000900_service_levels.md",
              "001000_demo.md",
              "001100_questions.md"
            ]
          }
        ]
      },
      "editLinkText": "Edit this page on GitHub",
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var clientAppSetup2 = defineClientAppSetup$1(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const pagesData = vue.ref(pagesData$3);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const siteData = vue.ref(siteData$3);
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var vars = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
var clientAppEnhance2 = defineClientAppEnhance$1(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$Y = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$X = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const _sfc_main$W = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(ExternalLinkIcon), _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var index = "";
var clientAppEnhance3 = defineClientAppEnhance$1(({ app, router }) => {
  app.component("Badge", _sfc_main$Y);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$X);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$W);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = defineClientAppEnhance$1(({ app, router, siteData: siteData2 }) => {
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
const provideGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData$2.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData$2.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData$2.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData$2.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData$2.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData$2.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData$2.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData$2.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData$2.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData: siteData$2 });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$V = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var index_html$d = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$B]]);
var index_html$e = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$d
});
const _sfc_main$U = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h1><h2 id="foo" tabindex="-1"><a class="header-anchor" href="#foo" aria-hidden="true">#</a> foo</h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><!--]-->`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/config/index.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var index_html$b = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$A]]);
var index_html$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$b
});
const _sfc_main$T = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>VuePress is composed of two parts: a <a href="https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core" target="_blank" rel="noopener noreferrer">minimalistic static site generator`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> with a Vue-powered <a href="https://v1.vuepress.vuejs.org/theme/" target="_blank" rel="noopener noreferrer">theming system`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> and <a href="https://v1.vuepress.vuejs.org/plugin/" target="_blank" rel="noopener noreferrer">Plugin API`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, and a <a href="https://v1.vuepress.vuejs.org/theme/default-theme-config.html" target="_blank" rel="noopener noreferrer">default theme`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> optimized for writing technical documentation. It was created to support the documentation needs of Vue&#39;s own sub projects.</p><p>Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.</p><!--]-->`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var index_html$9 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$z]]);
var index_html$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$9
});
const _sfc_main$S = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="using-vue-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true">#</a> Using Vue in Markdown</h1><h2 id="browser-api-access-restrictions" tabindex="-1"><a class="header-anchor" href="#browser-api-access-restrictions" aria-hidden="true">#</a> Browser API Access Restrictions</h2><p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html" target="_blank" rel="noopener noreferrer">universal code requirements`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p><p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><!--]-->`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/using-vue.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var usingVue_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$y]]);
var usingVue_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": usingVue_html$1
});
const _sfc_main$R = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Welcome!</p><p>In these labs you will explore builds, deployments, as well as some common issues with storage provisioning.</p><p>These labs will focus on a single 2-tier application based on the popular open source chat utility, Rocket.Chat.</p><h2 id="special-notes" tabindex="-1"><a class="header-anchor" href="#special-notes" aria-hidden="true">#</a> Special Notes</h2><p>The training is being delivered in a production Openshift Environment.</p><h2 id="course-format" tabindex="-1"><a class="header-anchor" href="#course-format" aria-hidden="true">#</a> Course Format</h2><p>This course has been designed to be run <em>at your own pace</em>. The lab materials have been designed so that you generally follow the happy bath for a simple two-tier deployment. There will be many intentional bugs along the way that will have you encounter real-life troubleshooting techniques!</p><p>The course length can vary (based on scheduled). It was designed to be run over a period of a few days rather than just a day or two to have time for isolated touchpoints as well as to provide time for discussion. During that time <strong>touch points</strong> will be scheduled with the cohort to talk about special topics and to assist in troubleshooting.</p><h3 id="this-course-is-new" tabindex="-1"><a class="header-anchor" href="#this-course-is-new" aria-hidden="true">#</a> This course is new!</h3><p>This course has been completely redesigning and will more than likely have its fair share of bugs. If you have anything you longed for please make an <a href="https://github.com/BCDevOps/devops-platform-workshops/issues/new/choose" target="_blank" rel="noopener noreferrer">issue`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> on github \u{1F603}</p><h2 id="who-is-this-for" tabindex="-1"><a class="header-anchor" href="#who-is-this-for" aria-hidden="true">#</a> Who is this for?</h2><p>While we love the idea of everyone getting their hands onto Openshift. The individuals that will get the most value out of the workshop are members that will be performing active developement in Openshift. This includes Application Development as well as Operational Management. The course is <strong>very technical</strong>.</p><p><strong>Please be aware the throughout the labs, you will be guided to make common mistakes, and then guide you on how to fix them.</strong></p><!--]-->`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/00_overview.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var _00_overview_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$x]]);
var _00_overview_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _00_overview_html$1
});
var _imports_0$o = "/cloud-pathfinder/assets/01_projects.243b8808.png";
var _imports_1$i = "/cloud-pathfinder/assets/01_add_access.4a2b1898.png";
var _imports_2$e = "/cloud-pathfinder/assets/01_edit.f5ee7678.png";
const _sfc_main$Q = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="adding-team-members" tabindex="-1"><a class="header-anchor" href="#adding-team-members" aria-hidden="true">#</a> Adding Team Members</h1><blockquote><p>Depending on the Lab Format, this section may have already been done. If you are not the &#39;devops&#39; admins for the openshift 101 dev/tools projects you can check to see if you have access to the projects with <code>oc projects</code>. If you have access to the openshift 101 project you will see something like this.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>* ocp101-june-dev - OpenShift <span class="token number">101</span> <span class="token punctuation">(</span>dev<span class="token punctuation">)</span>
ocp101-june-tools - OpenShift <span class="token number">101</span> <span class="token punctuation">(</span>tools<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h2 id="team-permissions" tabindex="-1"><a class="header-anchor" href="#team-permissions" aria-hidden="true">#</a> Team Permissions</h2><p>Once all projects have been created by the Platform Services team, the team admin must navigate to each project and assign your users the appropriate permissions.</p><p>As a team, find each project and add the rest of the team members. Feel free to experiment with the default roles.</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$o)} alt=""></p><ul><li><p>Once in the project, switch to <code>Developer view</code> and then navigate to <code>Project -&gt; Project Access</code></p></li><li><p>Select <code>Add Access</code> at the bottom</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$i)} alt=""></p><ul><li>Add each user based on their GitHub id. Please note that we are using SSO with GitHub login at the moment, don&#39;t forget the suffix <code>@github</code>!</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$e)} alt=""></p><ul><li>Select <code>Save</code></li></ul><p>This can also be done on the CLI with the <code>oc</code> utility:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc policy add-role-to-user <span class="token punctuation">[</span>role<span class="token punctuation">]</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h2><ul><li><p>Admin: This is the most privileged of the default roles. This role allows everything that <strong>Edit</strong> allow plus the management of <strong>user and service account access</strong></p></li><li><p>Edit: This is the primary role required for developers/devops to do work in a project. It allows the creation/edit/deletion of Openshift Objects including <strong>Secrets</strong></p></li><li><p>View: This is the basic role that provides users with read access to your project. <strong>Secrets are not viewable</strong> with this privilege.</p></li></ul><!--]-->`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/01_adding_team_members.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var _01_adding_team_members_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$w]]);
var _01_adding_team_members_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _01_adding_team_members_html$1
});
var _imports_0$n = "/cloud-pathfinder/assets/01_setup_cli_tools.225f9264.png";
const _sfc_main$P = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="lab-setup" tabindex="-1"><a class="header-anchor" href="#lab-setup" aria-hidden="true">#</a> Lab Setup</h1><p>Prior to working on labs, the Platform Services team will have created 2 projects:</p><ul><li>ocp101-tools: This namespace/project will have all of the builds related objects</li><li>ocp101-dev: This namespace/project will have all the deployment related objects</li></ul><p>One member from your group has been given administrative rights to the projects and is responsible for adding all other members to each project.</p><p>NOTE: the actual name of the namespaces may vary, and <code>ocp101</code> may be a sequence of random characters.</p><hr><p>Assign yourself a unique name to be used during your application deployments. <strong>Do not copy the application names directly from the lab guides</strong> as you are in a shared environment with the rest of your team.</p><p>For example, if the lab says to create an application named <code>app1-[username]</code>, I would create an app named <code>app1-stewartshea</code>.</p><h2 id="lab-requirements" tabindex="-1"><a class="header-anchor" href="#lab-requirements" aria-hidden="true">#</a> Lab Requirements</h2><p>These labs will require access to the lab ocp environment:</p><ul><li><a href="https://console.apps.silver.devops.gov.bc.ca/" target="_blank" rel="noopener noreferrer">Silver Web Console`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h2 id="installing-oc" tabindex="-1"><a class="header-anchor" href="#installing-oc" aria-hidden="true">#</a> Installing OC</h2><p>You may already have <code>oc</code> installed on your machine. Your <code>oc</code> version should match the version of the cluster.</p><p><strong>If you have <code>oc</code></strong> installed run <code>oc version</code>. It should look something like this</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Client Version: openshift-clients-4.6.0-202006250705.p0-176-g5797eaeca
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>If you do not have <code>oc</code> installed</strong> or your version is incorrect follow these instructions.</p><ol><li><p>Option 1: If you have access to the Openshift cluster you can simply download directly from the console <img${serverRenderer.ssrRenderAttr("src", _imports_0$n)} alt="cluster download link"></p></li><li><p>Option 2: Alternativly, navigate to the <a href="https://mirror.openshift.com/pub/openshift-v4/clients/ocp/" target="_blank" rel="noopener noreferrer">Openshift CLI Mirror`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> and download the version of <code>oc</code> that matches your operating system.</p></li></ol><blockquote><p>For Linux/Mac users that may be working with multiple versions of <code>oc</code>, it is helpful to have both versions of <code>oc</code> (3.xx/4.xx) on your machine. You can create an <code>alias</code> to <code>oc 3.xx</code> instead of adding it to your path. This way you can utilize the different versions for different OpenShift environment.</p></blockquote><ol start="2"><li>Unpack <code>oc</code> into a place that is easily reference-able from a command line interface or add it to your <code>PATH</code></li></ol><h2 id="other-requirements" tabindex="-1"><a class="header-anchor" href="#other-requirements" aria-hidden="true">#</a> Other Requirements</h2><p>In addition, developers require GIT locally installed and must have a 2FA device to support access to GitHub.</p><h2 id="command-line-interfaces" tabindex="-1"><a class="header-anchor" href="#command-line-interfaces" aria-hidden="true">#</a> Command Line Interfaces</h2><p>You will find many examples <code>commands</code> and <em>tricks</em> that highly depend on your OS. These commands were developed on <strong>unix</strong> based systems. Window&#39;s <strong>Command Prompt</strong> will not work with these examples. You will need to either use <strong>WSL</strong>, <strong>Powershell</strong>, <strong>Gitbash</strong>, or similar.</p><!--]-->`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/01_setup.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var _01_setup_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$v]]);
var _01_setup_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _01_setup_html$1
});
var _imports_0$m = "/cloud-pathfinder/assets/01b_console_view_01.5b08f26c.png";
var _imports_1$h = "/cloud-pathfinder/assets/01b_console_view_02.cc959558.png";
const _sfc_main$O = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ocp-4-web-console" tabindex="-1"><a class="header-anchor" href="#ocp-4-web-console" aria-hidden="true">#</a> OCP 4 Web Console</h1><p>If you have previous experience with Openshift (version 3.11) the web console is going to look very different to what you are used to.</p><h2 id="highlights" tabindex="-1"><a class="header-anchor" href="#highlights" aria-hidden="true">#</a> Highlights</h2><p>The web console separates functions that are runnable in openshift by two personas:</p><ul><li>Developer</li><li>Administrator</li></ul><h3 id="developer-view" tabindex="-1"><a class="header-anchor" href="#developer-view" aria-hidden="true">#</a> Developer View</h3><p>Developer View is a simplified view of the web console that is more closely related to the work that that developers perform. <img${serverRenderer.ssrRenderAttr("src", _imports_0$m)} alt="developer view"></p><h3 id="administrator-view" tabindex="-1"><a class="header-anchor" href="#administrator-view" aria-hidden="true">#</a> Administrator View</h3><p>This view is more detailed and provides access to more of the Openshift Infrastructure Objects that are required to deploy a project <img${serverRenderer.ssrRenderAttr("src", _imports_1$h)} alt="admin view"></p><p>During this workshop you will be interacting with both views.</p><!--]-->`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/01b_web_console_overview.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var _01b_web_console_overview_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$u]]);
var _01b_web_console_overview_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _01b_web_console_overview_html$1
});
var _imports_0$l = "/cloud-pathfinder/assets/01_builds.8eb0cbe3.png";
var _imports_1$g = "/cloud-pathfinder/assets/01_build_logs.2a97211f.png";
var _imports_2$d = "/cloud-pathfinder/assets/01_build_logs_02.3cd72f8d.png";
var _imports_3$b = "/cloud-pathfinder/assets/01_build_logs_03.34e693e1.png";
const _sfc_main$N = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="builds" tabindex="-1"><a class="header-anchor" href="#builds" aria-hidden="true">#</a> Builds</h1><p>In this lab, you will create a simple Docker based build for the Rocket Chat application.</p><h2 id="the-tools-project" tabindex="-1"><a class="header-anchor" href="#the-tools-project" aria-hidden="true">#</a> The Tools Project</h2><p>The tools project is what will hold various support tools for the application. In this case, all builds will run in this project.</p><h2 id="creating-a-docker-based-build" tabindex="-1"><a class="header-anchor" href="#creating-a-docker-based-build" aria-hidden="true">#</a> Creating a Docker-Based Build</h2><p>The Rocket.Chat application build will be based off a minimal Dockerfile in a <a href="https://github.com/BCDevOps/devops-platform-workshops-labs/tree/master/apps/rocketchat" target="_blank" rel="noopener noreferrer">public repository`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>. Leveraging the commandline, you can use the <code>oc new-build</code> command to create all of the necessary OpenShift build components.</p><p>Ensure that all team members have edit rights into the project. Once complete, each member can create their own Rocket.Chat docker build.</p><ul><li>To start, switch to the <strong>Tools Project</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc project <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>With the <code>oc</code> cli, create the build</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> new-build https://github.com/BCDevOps/devops-platform-workshops-labs/ --context-dir<span class="token operator">=</span>apps/rocketchat --name<span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>The output of the previous command should be similar to the following:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
--<span class="token operator">&gt;</span> Found image 8431f8b <span class="token punctuation">(</span><span class="token number">21</span> hours old<span class="token punctuation">)</span> <span class="token keyword">in</span> image stream <span class="token string">&quot;ocp101a-tools/rocketchat&quot;</span> under tag <span class="token string">&quot;latest&quot;</span> <span class="token keyword">for</span> <span class="token string">&quot;rocketchat&quot;</span>

    Node.js <span class="token number">8</span> 
    --------- 
    Node.js <span class="token number">8</span> available as container is a base platform <span class="token keyword">for</span> building and running various Node.js <span class="token number">8</span> applications and frameworks. Node.js is a platform built on Chrome<span class="token string">&#39;s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

    Tags: builder, nodejs, nodejs8

    * A Docker build using source code from https://github.com/BCDevOps/devops-platform-workshops-labs/ will be created
      * The resulting image will be pushed to image stream &quot;rocketchat-[username]:latest&quot;
      * Use &#39;</span>start-build<span class="token string">&#39; to trigger a new build

--&gt; Creating resources with label build=rocketchat-[username] ...
    imagestream &quot;rocketchat-[username]&quot; created
    buildconfig &quot;rocketchat-[username]&quot; created
--&gt; Success
    Build configuration &quot;rocketchat-[username]&quot; created and build triggered.
    Run &#39;</span>oc logs -f bc/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>&#39; to stream the build progress.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>The build will take between a couple of minutes to about 15 minutes</li></ul><div class="language-oc ext-oc line-numbers-mode"><pre class="language-oc"><code># Watch and wait for build
oc -n [-tools] logs -f bc/rocketchat-[username]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>You can now explore the Web Console to watch the build status from <code>Builds</code><em>note</em> you will see multiple builds from each team member</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$l)} alt=""></p><ul><li>Or this can be done on the CLI</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> get <span class="token function">bc</span>
oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> status
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>The build status can be monitored from the Web Console by selecting the <code>Logs</code> link</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$g)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_2$d)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_3$b)} alt=""></p><!--]-->`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/02_builds.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var _02_builds_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$t]]);
var _02_builds_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _02_builds_html$1
});
var _imports_0$k = "/cloud-pathfinder/assets/03_deploy_image_04.0adbb3ea.png";
var _imports_1$f = "/cloud-pathfinder/assets/03_deploy_image_05.009613f5.png";
var _imports_2$c = "/cloud-pathfinder/assets/03_deploy_image_08a.c80edf77.png";
var _imports_3$a = "/cloud-pathfinder/assets/03_deploy_image_08b.47d111f1.png";
var _imports_4$6 = "/cloud-pathfinder/assets/03_deploy_mongo_01.6de02fdc.png";
var _imports_5$4 = "/cloud-pathfinder/assets/03_deploy_mongo_02.a51b14fc.png";
var _imports_6$4 = "/cloud-pathfinder/assets/03_deploy_mongo_03.c7563a32.png";
var _imports_7$4 = "/cloud-pathfinder/assets/03_deploy_env_01.7c77f5c7.png";
var _imports_8$2 = "/cloud-pathfinder/assets/03_deploy_env_02.ec48c0b3.png";
var _imports_9$1 = "/cloud-pathfinder/assets/03_deploy_config_01.3e4a6cc5.png";
var _imports_10$1 = "/cloud-pathfinder/assets/03_deploy_route.22d76860.png";
var _imports_11$1 = "/cloud-pathfinder/assets/03_deploy_pod_delete_01.891795f0.png";
var _imports_12$1 = "/cloud-pathfinder/assets/03_deploy_pod_delete_02.09aa3545.png";
const _sfc_main$M = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h1><p>Since the build and deploy stages are separate, and we have a built image from the previous exercise, we can now deploy this image into the dev project.</p><h2 id="the-dev-project" tabindex="-1"><a class="header-anchor" href="#the-dev-project" aria-hidden="true">#</a> The Dev Project</h2><p>The dev project is where applications are deployed. In this case, we will deploy RocketChat and MongoDB to the dev namespace.</p><h3 id="create-an-imagestreamtag" tabindex="-1"><a class="header-anchor" href="#create-an-imagestreamtag" aria-hidden="true">#</a> Create an ImageStreamTag</h3><blockquote><p>Although we use the tag name <code>dev</code> there are better naming conventions! We strongly suggest associating image tags with a version that is meaninful for your project!</p></blockquote><ul><li>From the CLI</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># retagging the image stream from latest to dev</span>
oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> tag rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>:latest rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>:dev

<span class="token comment"># Verify that the \`dev\` tag has been created</span>
oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> get imagestreamtag/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>:dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="create-an-image-based-deployment" tabindex="-1"><a class="header-anchor" href="#create-an-image-based-deployment" aria-hidden="true">#</a> Create an Image-Based Deployment</h2><p><strong>Objective</strong>: Deploy RocketChat from the image previously built.</p><ul><li>from the CLI</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> new-app <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span>/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>:dev --name<span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>The output should be as follows</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--<span class="token operator">&gt;</span> Found image b949f08 <span class="token punctuation">(</span><span class="token number">2</span> hours old<span class="token punctuation">)</span> <span class="token keyword">in</span> image stream <span class="token string">&quot;[devops-training-namespace]-tools/rocketchat-[username]&quot;</span> under tag <span class="token string">&quot;dev&quot;</span> <span class="token keyword">for</span> <span class="token string">&quot;[devops-training-namespace]-tools/rocketchat-[username]:dev&quot;</span>

    Node.js <span class="token number">8</span> 
    --------- 
    Node.js <span class="token number">8</span> available as container is a base platform <span class="token keyword">for</span> building and running various Node.js <span class="token number">8</span> applications and frameworks. Node.js is a platform built on Chrome<span class="token string">&#39;s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

    Tags: builder, nodejs, nodejs8

    * This image will be deployed in deployment config &quot;rocketchat-[username]&quot;
    * Ports 3000/tcp, 8080/tcp will be load balanced by service &quot;rocketchat-[username]&quot;
      * Other containers can access this service through the hostname &quot;rocketchat-[username]&quot;
    * This image declares volumes and will default to use non-persistent, host-local storage.
      You can add persistent volumes later by running &#39;</span>volume deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --add <span class="token punctuation">..</span>.<span class="token string">&#39;

--&gt; Creating resources ...
    imagestreamtag &quot;rocketchat-[username]:dev&quot; created
    deployment &quot;rocketchat-[username]&quot; created
    service &quot;rocketchat-[username]&quot; created
--&gt; Success
    Application is not exposed. You can expose services to the outside world by executing one or more of the commands below:
     &#39;</span>oc expose svc/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token string">&#39; 
    Run &#39;</span>oc status&#39; to view your app.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="speed-up-application-startup" tabindex="-1"><a class="header-anchor" href="#speed-up-application-startup" aria-hidden="true">#</a> Speed-up application startup</h2><p><strong>Objective</strong>: Get RocketChat to startup faster by tweaking <code>Resource Requests and Limits</code>.</p><blockquote><p>Resource adjustment is also something that will be covered in a later exercise</p></blockquote><p>Increasing the resources (especially CPU) right now will help with faster pod startup.</p><ul><li>From the terminal, run the follow oc command:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> resources deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --requests<span class="token operator">=</span><span class="token string">&#39;cpu=500m,memory=512Mi&#39;</span> --limits<span class="token operator">=</span><span class="token string">&#39;cpu=1000m,memory=1024Mi&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="objective-1-identify-imagepull-problem" tabindex="-1"><a class="header-anchor" href="#objective-1-identify-imagepull-problem" aria-hidden="true">#</a> <strong>Objective 1</strong>: Identify ImagePull Problem</h2><p>As the Web UI indicated, the <code>dev</code> project service accounts do not have the appropriate access to pull the image from the <code>tools</code> project. Admin users manage service accounts and will need to grant rolebindings in order to provide image pull access from two respective namespaces.</p><ul><li>Navigate to <code>Topology</code> and click on the deployment to investigate further</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$k)} alt=""></p><ul><li>Click on the pod within the deployment config and navigate to the pods <code>Events</code> tab for more detail</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$f)} alt=""></p><ul><li>From the CLI add a service account to tools granting image pull access to the from the dev project:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> policy add-role-to-user system:image-puller system:serviceaccount:<span class="token punctuation">[</span>-dev<span class="token punctuation">]</span>:default
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>With the appropriate access in place, you can try bringing up a new pod to see if the issue has been resolved. With Deployments this can be done by <code>oc scale deployment/rocketchat-[username] --replicas=0</code> waiting for the pods to scale down to 0 and then to scale back up with <code>oc scale deployment/rocketchat-[username] --replicas=1</code></p><ul><li>Validate that the image is able to be pulled</li></ul><h2 id="objective-2-importing-images-to-the-deploy-namespace" tabindex="-1"><a class="header-anchor" href="#objective-2-importing-images-to-the-deploy-namespace" aria-hidden="true">#</a> <strong>Objective 2</strong>: Importing Images to the deploy namespace</h2><p>Deploying images from another namespace can run you into some issues that are easily solvable if you import a copy of the image to your deploy namespace. This is a BC Gov best practice in fact.</p><h3 id="why-build-in-tools-then" tabindex="-1"><a class="header-anchor" href="#why-build-in-tools-then" aria-hidden="true">#</a> Why Build in Tools Then?</h3><p>Your Tools namespace has quota that can be best utilized for your CI (Continuous Integration) and devops workloads. Since building an image is apart of the CI pipeline you can run your builds there without impacting the cpu or memory availability for deployment workloads.</p><p>When you ran <code>oc new-app</code> a new imagestream was created in your <code>dev</code> namespace with an image that points to your <code>tools</code> namespace. To import the image from one namespace to another you can:</p><ol><li>Re-tag your tools image tag into this new imagestream</li></ol><p><code>oc -n [-dev] tag [-tools]/rocketchat-[username]:dev rocketchat-[username]:dev</code></p><ol start="2"><li>Modify your Rocket Chat deployment to point to the new image stream. <code>oc -n [-dev] set image deployment/rocketchat-[username] rocketchat-[username]=rocketchat-[username]:dev</code></li></ol><h2 id="objective-3-identify-crashloopbackoff-problem" tabindex="-1"><a class="header-anchor" href="#objective-3-identify-crashloopbackoff-problem" aria-hidden="true">#</a> <strong>Objective 3</strong>: Identify CrashLoopBackOff problem</h2><p>Notice that the deployment is still failing.</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$c)} alt=""></p><p>Navigate to the pod and review the logs to determine why the container will not start.</p><p>From the console click the deployment config and click <strong>view logs</strong> beside the failing pod</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$a)} alt=""></p><ul><li>Or from the CLI</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Show your pod&#39;s log</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> logs -f <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods --field-selector<span class="token operator">=</span>status.phase<span class="token operator">=</span>Running -l <span class="token assign-left variable">deployment</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o name --no-headers <span class="token operator">|</span> <span class="token function">head</span> -1<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><em>note</em> you can follow the logs with <code>-f</code> argument</p><p>Taking a look at the logs it is clear that the RocketChat pod is failing because it is not able to connect to a <strong>mongo database</strong>.</p><h2 id="deploying-the-database" tabindex="-1"><a class="header-anchor" href="#deploying-the-database" aria-hidden="true">#</a> Deploying the Database</h2><h3 id="create-mongo-database-with-ephemeral-storage" tabindex="-1"><a class="header-anchor" href="#create-mongo-database-with-ephemeral-storage" aria-hidden="true">#</a> Create Mongo Database with Ephemeral Storage</h3><p>Having identified that the application is trying to connect to a mongo database, add a mongo database to the project for your application.</p><h3 id="from-cli" tabindex="-1"><a class="header-anchor" href="#from-cli" aria-hidden="true">#</a> From CLI</h3><ul><li>Find out what &#39;mongodb-ephemeral&#39; is</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> new-app --search mongodb-ephemeral
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>The output will tell us that <code>mongodb-ephemeral</code> is a template in the <code>openshift</code> project:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-----
mongodb-ephemeral
  Project: openshift
  MongoDB database service, without persistent storage. For <span class="token function">more</span> information about using this template, including OpenShift considerations, see https://github.com/sclorg/mongodb-container/blob/master/3.2/README.md.

WARNING: Any data stored will be lost upon pod destruction. Only use this template <span class="token keyword">for</span> testing
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>List available parameters of the template</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n openshift get template/mongodb-ephemeral -o json <span class="token operator">|</span> oc process -f - --parameters<span class="token operator">=</span>true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Create MongoDB based on a template in the catalog</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> new-app --template<span class="token operator">=</span>openshift/mongodb-ephemeral -p <span class="token assign-left variable">MONGODB_VERSION</span><span class="token operator">=</span><span class="token number">3.6</span> -p <span class="token assign-left variable">DATABASE_SERVICE_NAME</span><span class="token operator">=</span>mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -p <span class="token assign-left variable">MONGODB_USER</span><span class="token operator">=</span>dbuser -p <span class="token assign-left variable">MONGODB_PASSWORD</span><span class="token operator">=</span>dbpass -p <span class="token assign-left variable">MONGODB_DATABASE</span><span class="token operator">=</span>rocketchat --name<span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>If you ran the cli command you would get an output like this</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Creating resources <span class="token punctuation">..</span>.
    secret <span class="token string">&quot;mongodb-patricksimonian&quot;</span> created
    <span class="token function">service</span> <span class="token string">&quot;mongodb-patricksimonian&quot;</span> created
    deployment.apps.openshift.io <span class="token string">&quot;mongodb-patricksimonian&quot;</span> created
--<span class="token operator">&gt;</span> Success
    Application is not exposed. You can expose services to the outside world by executing one or <span class="token function">more</span> of the commands below:
    <span class="token string">&#39;oc expose svc/mongodb-patricksimonian&#39;</span> 
    Run <span class="token string">&#39;oc status&#39;</span> to view your app.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="from-the-web-console" tabindex="-1"><a class="header-anchor" href="#from-the-web-console" aria-hidden="true">#</a> From the Web Console</h3><ul><li><p>From the side menu click <code>+Add</code>, then select <code>From Catalog</code></p></li><li><p>In the search catalog area, type <code>mongo</code> and select <code>mongodb-ephemeral</code></p></li><li><p>Click Instantiate Template</p></li><li><p>Ensure to customize the details with a service name such as <code>mongodb-[username]</code>, username/password and default database such as <code>rocketchat</code></p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_4$6)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_5$4)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_6$4)} alt=""></p><h3 id="verify-mongodb-is-up" tabindex="-1"><a class="header-anchor" href="#verify-mongodb-is-up" aria-hidden="true">#</a> Verify MongoDB is up</h3><ul><li>Find the mongodb deployment by going back to <code>Topology</code></li><li>Wait until MongoDB has been successfully deployed MongoDB will generate a lot of logs. Since MongoDB comes with a readiness probe check for pod/container readiness, to know when it is up and ready.</li></ul><p>You can safely ignore repeated messages as such:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2020-02-06T06:23:41.391+0000 [conn11041]  authenticate db: rocketchat { authenticate: 1, nonce: &quot;xxx&quot;, user: &quot;dbuser&quot;, key: &quot;xxx&quot; }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="deployment-configuration-options" tabindex="-1"><a class="header-anchor" href="#deployment-configuration-options" aria-hidden="true">#</a> Deployment Configuration Options</h3><p>As a result of using a generic <code>new-app</code> style deployment, as opposed to openshift specific templates, a lot of defaults are leveraged.</p><h3 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h3><p>By default your rocketchat deployment has no environment variables defined. So while RocketChat is trying to start and a database has been deployed, the app does not know how or where to connect to MongoDB. We will need to add environment variables to the deployment configuration.</p><ul><li><p>In the Web Console, navigate to <code>Topology</code> and select your rocketchat deployment</p></li><li><p>Select the <code>Actions</code> tab on the top right <img${serverRenderer.ssrRenderAttr("src", _imports_7$4)} alt=""></p></li><li><p>Select <code>Edit Deployment</code></p></li><li><p>Select the <code>Environment</code> tab <img${serverRenderer.ssrRenderAttr("src", _imports_8$2)} alt=""></p></li><li><p>Add the following environment variable with the connection string details configured for mongodb</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_URL</span><span class="token operator">=</span>mongodb://dbuser:dbpass@mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>:27017/rocketchat
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_9$1)} alt=""></p><p>You can also use the CLI to apply the environment variable.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token function">env</span> deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> <span class="token string">&quot;MONGO_URL=mongodb://dbuser:dbpass@mongodb-[username]:27017/rocketchat&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Click Save</li><li>Navigate to <code>Topology</code> and investigate your RocketChat Deployment Config. It should be redeploying (successfully this time)</li></ul><h4 id="stretch-sensitive-configurations" tabindex="-1"><a class="header-anchor" href="#stretch-sensitive-configurations" aria-hidden="true">#</a> STRETCH: Sensitive Configurations</h4><blockquote><p>this is a stretch exercise, completing this section is not a requirement for the next section of the lab</p></blockquote><p>If you are feeling at odds with things like <strong>dbpass</strong> being out in the open as an environment variable. That is a good thing! For demonstration purposes you are creating a <code>Single Value Env</code>. Sensitive information like passwords should be stored in a <code>Secret</code> and referenced as <code>envFrom</code>. In addition, you can also use the <a href="https://docs.openshift.com/container-platform/4.4/nodes/containers/nodes-containers-downward-api.html#nodes-containers-downward-api-container-secrets_nodes-containers-downward-api" target="_blank" rel="noopener noreferrer">Downward API`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> to refer to the secret created by MongoDB.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout pause deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> 

oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> patch deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -p <span class="token string">&#39;{&quot;spec&quot;:{&quot;template&quot;:{&quot;spec&quot;:{&quot;containers&quot;:[{&quot;name&quot;:&quot;rocketchat-[username]&quot;, &quot;env&quot;:[{&quot;name&quot;:&quot;MONGO_USER&quot;, &quot;valueFrom&quot;:{&quot;secretKeyRef&quot;:{&quot;key&quot;:&quot;database-user&quot;, &quot;name&quot;:&quot;mongodb-[username]&quot;}}}]}]}}}}&#39;</span>

oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> patch deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -p <span class="token string">&#39;{&quot;spec&quot;:{&quot;template&quot;:{&quot;spec&quot;:{&quot;containers&quot;:[{&quot;name&quot;:&quot;rocketchat-[username]&quot;, &quot;env&quot;:[{&quot;name&quot;:&quot;MONGO_PASS&quot;, &quot;valueFrom&quot;:{&quot;secretKeyRef&quot;:{&quot;key&quot;:&quot;database-password&quot;, &quot;name&quot;:&quot;mongodb-[username]&quot;}}}]}]}}}}&#39;</span>

oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> <span class="token function">env</span> deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> <span class="token string">&#39;MONGO_URL=mongodb://$(MONGO_USER):$(MONGO_PASS)@mongodb-[username]:27017/rocketchat&#39;</span>

oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout resume deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> 

<span class="token comment"># Check environment variables configuration</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o json <span class="token operator">|</span> jq <span class="token string">&#39;.spec.template.spec.containers[].env&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="create-a-route-for-your-rocket-chat-app" tabindex="-1"><a class="header-anchor" href="#create-a-route-for-your-rocket-chat-app" aria-hidden="true">#</a> Create a Route for your Rocket.Chat App</h2><p>Your rocketchat application should already have a route created for it. If you were using <code>oc new-app</code> however, a route would not have been created by default.</p><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><p>There are 2 ways of creating routes using CLI.</p><ul><li>Using <code>oc expose</code> for unsecure (http) route</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> expose svc/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Using <code>oc create route</code> for secure (https) route</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> create route edge rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --service<span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --insecure-policy<span class="token operator">=</span>Redirect
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>After creating the route you may access your application! <img${serverRenderer.ssrRenderAttr("src", _imports_10$1)} alt="rocketchat"></p><h2 id="exploring-health-checks" tabindex="-1"><a class="header-anchor" href="#exploring-health-checks" aria-hidden="true">#</a> Exploring Health Checks</h2><ul><li>If you redeploy the rocket chat application there is an interval where the pod is considered ready but it is still not available to be accessed.</li><li>You can check this by killing the pod, waiting for the pod to redeploy and be <code>ready</code> and then visit your Rocket Chat url.</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_11$1)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_12$1)} alt=""></p><h3 id="adding-a-healthcheck" tabindex="-1"><a class="header-anchor" href="#adding-a-healthcheck" aria-hidden="true">#</a> Adding a Healthcheck</h3><p>A container that is marked <code>ready</code> when it is not is an indication of a lack of (or misconfigured) healthcheck.</p><p>You can add a healthcheck for <code>readiness</code> and <code>liveness</code>.</p><h3 id="using-cli" tabindex="-1"><a class="header-anchor" href="#using-cli" aria-hidden="true">#</a> Using cli</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> probe deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --readiness --get-url<span class="token operator">=</span>http://:3000/ --initial-delay-seconds<span class="token operator">=</span><span class="token number">15</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3><p>You added a <strong>readiness</strong> check to the <code>rocketchat-[username]</code> deployment so that you no longer have a false positive of when the pod should be considered available. By default pods are considered to be &#39;ready&#39; when the container starts up and the entrypoint script is running. This however is not useful for things like webservers or databases! Not only do you need the entrypoint script to run but you need to wait for the server to listen on a port.</p><!--]-->`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/03_deployment.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var _03_deployment_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$s]]);
var _03_deployment_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _03_deployment_html$1
});
var _imports_0$j = "/cloud-pathfinder/assets/04_deployment_configuration.9c911336.png";
var _imports_1$e = "/cloud-pathfinder/assets/04_deploy_strategy_01.2da5d60c.png";
var _imports_2$b = "/cloud-pathfinder/assets/04_deploy_strategy_02.ce75a4cf.png";
const _sfc_main$L = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="exploring-deployment-options" tabindex="-1"><a class="header-anchor" href="#exploring-deployment-options" aria-hidden="true">#</a> Exploring Deployment Options</h1><p>Additional actions are available to edit your deployment configuration. Review and explore;</p><ul><li>Resource Limits</li><li>Replicas</li></ul><h2 id="using-oc-explain" tabindex="-1"><a class="header-anchor" href="#using-oc-explain" aria-hidden="true">#</a> Using <code>oc explain</code></h2><p><code>oc explain</code> is a great utility to discover all the available fields for an Openshift of K8s object.</p><ul><li>Discover the fields that belong to a Deployment <ul><li><code>oc explain deployment</code></li><li>check out what is inside the <code>spec</code> field</li><li><code>oc explain deployment.spec</code></li><li>From this view you can see that <code>replicas</code> are configurable</li></ul></li></ul><h2 id="versioning-a-deployment-configuration" tabindex="-1"><a class="header-anchor" href="#versioning-a-deployment-configuration" aria-hidden="true">#</a> Versioning a Deployment Configuration</h2><p>At this point in time, your deployment configuration has undergone many changes, such as adding environment variables and adding health checks. Review the deployment configuration <code>ReplicaSet</code> tab:</p><ul><li>Navigate to your Deployment and select <code>ReplicaSet</code><img${serverRenderer.ssrRenderAttr("src", _imports_0$j)} alt=""></li><li>Select your latest replica set and select <code>edit</code></li><li>Compare the differences between that replica set and an older one - this can be done through the UI or by comparing the YAML</li></ul><h2 id="changing-the-deployment-strategy-option" tabindex="-1"><a class="header-anchor" href="#changing-the-deployment-strategy-option" aria-hidden="true">#</a> Changing the Deployment Strategy Option</h2><p>The default deployment configuration provides a <code>Rolling Update</code> style deployment, which waits for the container to be ready prior to cutting over traffic and terminating the previous container.</p><ul><li>Change the strategy to a <code>Recreate</code> and redeploy a couple of times</li><li>edit the YAML for the deployment and replace the <code>spec.strategy.type</code> from <code>RollingUpdate</code> to \`Recreate <img${serverRenderer.ssrRenderAttr("src", _imports_1$e)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_2$b)} alt=""></li><li>Now make a small change to the deployment to trigger a new deploy (for testing)</li><li><code>oc -n [-dev] set env deployment/rocketchat-[username] TEST=BAR</code></li><li>Go back to topology and observe the behaviour. You should notice that the old pod is killed before a new one is created.</li><li>edit the YAML and switch the strategy back to RollingUpdate</li></ul><!--]-->`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/04_configuring_deployments.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var _04_configuring_deployments_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$r]]);
var _04_configuring_deployments_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _04_configuring_deployments_html$1
});
var _imports_0$i = "/cloud-pathfinder/assets/11_resources_01.087add1d.png";
var _imports_1$d = "/cloud-pathfinder/assets/11_resources_02.cc1fe457.png";
var _imports_2$a = "/cloud-pathfinder/assets/11_resources_03.3d6b182d.png";
const _sfc_main$K = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="resource-requests-and-limits" tabindex="-1"><a class="header-anchor" href="#resource-requests-and-limits" aria-hidden="true">#</a> Resource Requests and Limits</h1><p>Tuning the resources assigned to a pod will have a direct effect on the performance of the application.</p><p>Many templates include reasonable CPU and Memory resource configurations, however, new apps simply are deployed with the platform default.</p><blockquote><p>Platform Resource Request defaults are maintained by platform services. It is a measurement based on the average cpu/memory utilization and serves as a great starting point for your pods horsepower</p></blockquote><h2 id="explore-default-resource-configurations" tabindex="-1"><a class="header-anchor" href="#explore-default-resource-configurations" aria-hidden="true">#</a> Explore Default Resource Configurations</h2><p>Since the Rocket Chat application was built from scratch and not deployed from a template, explore the current resources allocated to the pods:</p><ul><li>Navigate to your rocketchat deploymentconfig and select <code>Yaml</code></li><li>Take a look a the resources spec under <code>.spec.template.spec.containers.resources</code> it should be <code>{}</code>. This identifies that it is using the default resource allocation.</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$i)} alt=""></p><ul><li>Review the current metrics of your <code>rocketchat-[username]</code> pod by navigating to it from the DeploymentConfig and then selecting <code>Pods</code></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$d)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_2$a)} alt=""></p><ul><li><p>Reduce the CPU (request and limit) to <code>65 millicores</code> and Memory (request and limits) to <code>100 Megabytes</code> and monitor the startup time of the pod</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> resources deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --requests<span class="token operator">=</span>cpu<span class="token operator">=</span>65m,memory<span class="token operator">=</span>100Mi --limits<span class="token operator">=</span>cpu<span class="token operator">=</span>65m,memory<span class="token operator">=</span>100Mi
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Monitor the startup events of your pod and measure the time it takes to start</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Restart deployment; and observe</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout restart deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># Wait for deployment to finish</span>
<span class="token function">time</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout restart deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>you may notice your pod starts to crash loop. This is most likely because the <code>liveness</code> probe you added from an earlier lab is timing out. This is an important consideration when deciding to tune pod resources. It is always a balance.</p></blockquote></li><li><p>Remove the limits previously imposed, and set your pod to <code>1 core</code> (or <code>1000 millicores</code>) for the request and limit</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> resources deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --requests<span class="token operator">=</span>cpu<span class="token operator">=</span>1000m,memory<span class="token operator">=</span>512Mi --limits<span class="token operator">=</span>cpu<span class="token operator">=</span>1000m,memory<span class="token operator">=</span>1024Mi
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Monitor the status and speed of the new deployment</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Start new deployment; and</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout restart deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># Wait for deployment to finish</span>
<span class="token function">time</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout restart deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h2 id="sharing-resources" tabindex="-1"><a class="header-anchor" href="#sharing-resources" aria-hidden="true">#</a> Sharing Resources</h2><p>If there are many team members (and therefor workloads) working together in the same namespace there is a chance that requesting 1 core of cpu and 1 core of memory will not work. Why could that be?</p><ul><li>Reset resources utilization to something more appropriate</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> resources deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --requests<span class="token operator">=</span>cpu<span class="token operator">=</span>150m,memory<span class="token operator">=</span>256Mi --limits<span class="token operator">=</span>cpu<span class="token operator">=</span>200m,memory<span class="token operator">=</span>400Mi
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="troubleshooting-oom" tabindex="-1"><a class="header-anchor" href="#troubleshooting-oom" aria-hidden="true">#</a> Troubleshooting OOM</h2><p>The dreaded <code>OOM</code> or Out of Memory is when your pods are utilizing less memory than is required for the containers inside of the pod to work. Often there are <strong>no logs</strong> visible during these issues. Often the symptoms of OOM are <code>CrashLoop Back off</code> failure events as well as <code>rollout</code> failures. These can be investigated in the <code>Events</code> panel. To resolve this you can first increase memory utilization. After that you should investigate if the memory utilization fix is a band-aid or not. In other words, is the application consuming more memory than it should.</p><!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/05_resource_management.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var _05_resource_management_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$q]]);
var _05_resource_management_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _05_resource_management_html$1
});
var _imports_0$h = "/cloud-pathfinder/assets/04_app_availability_01.e996d9ea.png";
var _imports_1$c = "/cloud-pathfinder/assets/04_app_availability_02.412f8dd9.png";
var _imports_2$9 = "/cloud-pathfinder/assets/04_app_availability_03.a87f2fd1.png";
var _imports_3$9 = "/cloud-pathfinder/assets/04_app_availability_05.5aafb080.png";
var _imports_4$5 = "/cloud-pathfinder/assets/04_app_availability_06.1c742193.png";
const _sfc_main$J = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="application-availability" tabindex="-1"><a class="header-anchor" href="#application-availability" aria-hidden="true">#</a> Application Availability</h1><p>Prior to beginning this lab, navigate to the public route you created and finish the initial setup of your application. Ensure to select <code>Keep standlone</code> on the last page of the initial Rocket.Chat application setup.</p><h3 id="single-pod-applications" tabindex="-1"><a class="header-anchor" href="#single-pod-applications" aria-hidden="true">#</a> Single Pod Applications</h3><p>Single pod applications are not highly-available and can be abruptly terminated if the pod crashes or due to regularly scheduled platform maintenance. In order to simulate the effect on an application:</p><ul><li>Navigate to the pod, select <code>Actions</code> and <code>Delete</code><ul><li>Select <code>Delete pod immediately</code></li></ul></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$h)} alt=""></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$c)} alt=""></p><ul><li>Refresh URL of application</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$9)} alt=""></p><h3 id="scaling-pods" tabindex="-1"><a class="header-anchor" href="#scaling-pods" aria-hidden="true">#</a> Scaling Pods</h3><p>To increase the availability of an application and defend against unplanned outages or planned maintenance tasks, an application must have multiple pods/instance running. For this reason, stateless applications are desirable as they do not require custom clustering configurations.</p><p><strong>Note</strong> Stateful applications do not support &quot;scaling pods&quot; as a form of high availability. Such a stateful example would be the mongodb database. For this reason, this lab focuses on the rocketchat application which will function with multiple pods. Please refer to specific application documentaion for details on scalability support.</p><ul><li>Navigate to <code>Topology</code> and scale your Deployment by selecting it and pressing <code>Actions &gt; Edit Count</code> and increasing the count to 2</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$9)} alt=""></p><ul><li>Or from the CLI</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>Notice the balancing across nodes by exploring the details of each pod <img${serverRenderer.ssrRenderAttr("src", _imports_4$5)} alt=""></p><ul><li>Or from the CLI notice the hosts the pod runs on (in the last field)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods --field-selector<span class="token operator">=</span>status.phase<span class="token operator">=</span>Running -l <span class="token assign-left variable">deployment</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o wide
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>you can also simply combine with grep:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oc -n [-dev] get pods -o wide | grep rocketchat-[username]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>The output should look similar to this:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-7-k6kcc    <span class="token number">1</span>/1       Running   <span class="token number">0</span>          16m       <span class="token number">172.51</span>.68.135   training-aro-us-vmdqq-worker-westus22-kvjdt
rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-7-k82w2    <span class="token number">0</span>/1       Running   <span class="token number">0</span>          1m        <span class="token number">172.51</span>.76.32    training-aro-us-vmdqq-worker-westus23-kvjdt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Delete single pod, refresh the URL of application and notice that the application is served by the surviving pods</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods --field-selector<span class="token operator">=</span>status.phase<span class="token operator">=</span>Running -l <span class="token assign-left variable">deployment</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o name <span class="token operator">|</span> <span class="token function">head</span> -1 <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token punctuation">{</span><span class="token punctuation">}</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> delete <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">watch</span> -dg -n <span class="token number">1</span> <span class="token function">curl</span> -fsSL http://rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-<span class="token punctuation">[</span>-dev<span class="token punctuation">]</span>.<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span>.apps.pathfinder.aro.devops.gov.bc.ca/api/info

<span class="token comment"># Notice that eventually your RocketChat will be back to having 2 pods</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods --field-selector<span class="token operator">=</span>status.phase<span class="token operator">=</span>Running -l <span class="token assign-left variable">deployment</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>Perform deployment, refresh the URL of application and notice that the application is served by the surviving pods</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout latest deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># Monitor pods being created and deleted; and</span>
<span class="token function">watch</span> -dg -n <span class="token number">1</span> -x oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods -l <span class="token assign-left variable">deployment</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># From another terminal, monitor RocketChat response</span>
<span class="token function">watch</span> -dg -n <span class="token number">1</span> <span class="token function">curl</span> -fsSL http://rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-<span class="token punctuation">[</span>-dev<span class="token punctuation">]</span>.<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span>.apps.pathfinder.aro.devops.gov.bc.ca/api/info

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul><!--]-->`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/06_application_availability.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var _06_application_availability_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$p]]);
var _06_application_availability_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _06_application_availability_html$1
});
var _imports_0$g = "/cloud-pathfinder/assets/05_autoscaling_02.3c338d88.png";
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="autoscaling" tabindex="-1"><a class="header-anchor" href="#autoscaling" aria-hidden="true">#</a> Autoscaling</h1><p>Autoscaling can be configured on pods to enable OpenShift to add or remove pods as load varies. In general, the Horizonal Pod Autoscaler sets: - Upper limit of pods - Lower limit of pods - Metric threshold to use for scaling tasks</p><p>Currently CPU and memory metrics are supported, with additional arbitrary metrics support intended for the future.</p><h3 id="autoscaling-pods" tabindex="-1"><a class="header-anchor" href="#autoscaling-pods" aria-hidden="true">#</a> Autoscaling Pods</h3><p>This lab will provide a simple demonstration of autoscaling based on CPU, as this is configurable in the Web Console.</p><ul><li>First take some time to discover the configurable fields that belong to a HorizontalPodAutoscaler <code>oc explain HorizontalPodAutoscaler</code></li><li>from the cli run</li></ul><blockquote><p>You are configuring a very low CPU request target (such as 10%) so that you can test it easily by browsing the web application. In production the target would be closer to 70-80%</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> autoscale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --min <span class="token number">1</span> --max <span class="token number">10</span> --cpu-percent<span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>Browse to the application to generate some load and monitor the behavior of the pods</p></li><li><p>Generate some activity such as creating messages, channels, etc.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># update the URL below and grab a new integration URL</span>
<span class="token comment"># Open RocketChat, go to Adminstration &gt; Integrations &gt;  New Integration &gt; Incoming WebHook</span>
<span class="token comment">#    Set &quot;Enabled&quot; to &quot;true&quot;</span>
<span class="token comment">#    Set &quot;Post to Channel&quot;  to &quot;#general&quot;</span>
<span class="token comment">#    Set &quot;Post as&quot;  as &quot;rocket.cat&quot;</span>
<span class="token comment">#    Click on &quot;Save Changes&quot; at the bottom</span>
<span class="token comment">#    Copy &quot;Webhook URL&quot; (see &quot;COPY TO CLIPBOARD&quot; button/link)</span>
<span class="token comment">#    Replace &quot;https://rocketchat-[username]-[-dev].pathfinder.gov.bc.ca/hooks/&lt;integration&gt;/&lt;token&gt;&quot; with the real roken.</span>
<span class="token comment">#    Make sure the domain matches the exposed route (no &quot;localhost:3000&quot;)!!!</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;{&quot;text&quot;:&quot;Example message&quot;,&quot;attachments&quot;:[{&quot;title&quot;:&quot;Rocket.Chat&quot;,&quot;title_link&quot;:&quot;https://rocket.chat&quot;,&quot;text&quot;:&quot;Rocket.Chat, the best open source chat&quot;,&quot;image_url&quot;:&quot;https://rocket.chat/images/mockup.png&quot;,&quot;color&quot;:&quot;#764FA5&quot;}]}&#39;</span> <span class="token operator">&gt;</span> /tmp/rocketchat-post-msg.json <span class="token operator">&amp;&amp;</span> ab -p /tmp/rocketchat-post-msg.json -n <span class="token number">10000</span> -c <span class="token number">10</span> -T <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">[</span>http://rocketchat-patricksimonian-ocp101-june-dev.apps.training-us.clearwater.devops.gov.bc.ca<span class="token punctuation">]</span>/hooks/<span class="token operator">&lt;</span>integration<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>Review the deployment config and try to add or remove replicas</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$g)} alt=""></p><ul><li>Remove the autoscaler<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> delete hpa/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><!--]-->`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/07_autoscaling.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var _07_autoscaling_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var _07_autoscaling_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _07_autoscaling_html$1
});
var _imports_0$f = "/cloud-pathfinder/assets/06_persistent_storage_01.38c1c211.png";
var _imports_1$b = "/cloud-pathfinder/assets/06_persistent_storage_02.f96eae85.png";
var _imports_2$8 = "/cloud-pathfinder/assets/06_persistent_storage_03.b3df3267.png";
var _imports_3$8 = "/cloud-pathfinder/assets/06_persistent_storage_04a.2eed33af.png";
var _imports_4$4 = "/cloud-pathfinder/assets/06_persistent_storage_04b.c83eb52f.png";
var _imports_5$3 = "/cloud-pathfinder/assets/06_persistent_storage_07.4ac0e027.png";
var _imports_6$3 = "/cloud-pathfinder/assets/06_persistent_storage_08.6d2ea357.png";
var _imports_7$3 = "/cloud-pathfinder/assets/06_persistent_storage_09.c41c9434.png";
var _imports_8$1 = "/cloud-pathfinder/assets/06_persistent_storage_10.ec59d28f.png";
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="persistent-storage" tabindex="-1"><a class="header-anchor" href="#persistent-storage" aria-hidden="true">#</a> Persistent Storage</h1><p>Up to this point you have leveraged a single mongodb pod with ephemeral storage. In order to maintain the application data, persistent storage is required.</p><ul><li>Let&#39;s first take a look at our application prior to this lab <img${serverRenderer.ssrRenderAttr("src", _imports_0$f)} alt=""></li></ul><h3 id="deleting-pods-with-ephemeral-storage" tabindex="-1"><a class="header-anchor" href="#deleting-pods-with-ephemeral-storage" aria-hidden="true">#</a> Deleting Pods with Ephemeral Storage</h3><p><strong>Objective</strong>: Observe that by using ephemeral storage causes RocketChat to lose any previous data or configuration after a redeployment.</p><p>To understand what will happen when a pod with ephemeral storage is removed,</p><ul><li>Scale down both the rocketchat and mongo applications to 0 pods<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Scale back up each application pod to 1 replica<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$b)} alt=""></p><h3 id="adding-storage-to-existing-deployment-configurations" tabindex="-1"><a class="header-anchor" href="#adding-storage-to-existing-deployment-configurations" aria-hidden="true">#</a> Adding Storage to Existing Deployment Configurations</h3><p><strong>Objective</strong>: Add persistent storage to MongoDB so that it won&#39;t lose data created by RocketChat.</p><p>Now that we notice all messages and configuration is gone whenever pods cycle, let&#39;s add persistent storage to the mongodb pod.</p><ul><li><p>Scale down both the rocketchat and mongo applications to 0 pods</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Remove the emptyDir Storage by navigating to the mongodb deploymentconfig <img${serverRenderer.ssrRenderAttr("src", _imports_2$8)} alt=""></p></li><li><p>Add a new volume by navigating to <code>Administrator -&gt; Storage -&gt; Persitant Volume Claims -&gt; Create Persistant Volume Claims</code> and name it <code>mongodb-[username]-file</code></p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$8)} alt=""></p><ul><li><p>Select the <code>managed-premium</code> storage class. Set the type to RWO, the size to 1GB, and name it <code>mongodb-[username]-file</code></p></li><li><p>Navigate back to your Mongo DeploymentConfig and select <code>Add Storage</code> from the <code>Actions</code> Tab</p></li><li><p>The mount path is <code>/var/lib/mongodb/data</code><img${serverRenderer.ssrRenderAttr("src", _imports_4$4)} alt=""></p></li></ul><blockquote><p>PLEASE NOTE: The storage classes you are interacting with are specific to this Azure-based Openshift Cluster. The production Openshift Cluster utilizes different storage classes. From an application perspective that are slight differences in performance typically but the implementation remains the same.</p></blockquote><ul><li>Scale up <code>mongodb-[username]</code> instance to 1 pod<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>When mongo is running, scale <code>rocketchat-[username]</code> to 1 pod<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Access the RocketChat URL and complete the Setup Wizard again</li><li>Scale down and scale back up both the database and the rocketchat app<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># Scale up MongoDB to 1 replica; and</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># Scale up RocketChat to 1 replica</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li>Verify that data was persisted by accessing RocketChat URL and observing that it doesn&#39;t show the Setup Wizard.</li></ul><h4 id="rwo-storage" tabindex="-1"><a class="header-anchor" href="#rwo-storage" aria-hidden="true">#</a> RWO Storage</h4><p>RWO Storage is analagous to attaching a physical disk to a pod. For this reason, RWO storage <strong>cannot be mounted to more than 1 pod at the same time</strong>.</p><p><strong>Objective</strong>: Cause deployment error by using the wrong deployment strategy for the storage class.</p><p>RWO storage (which was selected above) can only be attached to a single pod at a time, which causes issues in certain deployment strategies.</p><ul><li>Ensure your <code>mongodb-[username]</code> deployment strategy is set to \`Rolling and then trigger a redeployment.</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_5$3)} alt=""></p><ul><li>Notice and investigate the issue</li></ul><blockquote><p>rolling deployments will start up a new version of your application pod before killing the previous one. There is a brief moment where two pods for the mongo application exist at the same time. Because the storage type is <strong>RWO</strong> it is unable to mount to two pods at the same time. This will cause the rolling deployment to hang and eventually time out.</p></blockquote><p><img${serverRenderer.ssrRenderAttr("src", _imports_6$3)} alt=""></p><ul><li>Switch to recreate</li></ul><h3 id="rwx-storage" tabindex="-1"><a class="header-anchor" href="#rwx-storage" aria-hidden="true">#</a> RWX Storage</h3><p><strong>Objective</strong>: Cause MongoDB to corrupt its data file by using the wrong storage class for MongoDB.</p><p>RWX storage allows multiple pods to access the same PV at the same time.</p><ul><li>Scale down <code>mongodb-[username]</code> to 0 pods<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_7$3)} alt=""></p><ul><li><p>Remove the previous storage volume and recreate as <code>managed-premium</code> (mounting at <code>/var/lib/mongodb/data</code>) with type RWX, and naming it <code>mongodb-[username]-file-rwx</code></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_8$1)} alt=""></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout pause dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> 
<span class="token comment"># Remove all volumes</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.spec.template.spec.volumes[].name}{&quot;\\n&quot;}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token punctuation">{</span><span class="token punctuation">}</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> volumes dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --remove <span class="token string">&#39;--name={}&#39;</span>

<span class="token comment"># Add a new volume by creating a PVC. If the PVC already exists, omit &#39;--claim-class&#39;, &#39;--claim-mode&#39;, and &#39;--claim-size&#39; arguments</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> volume dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --add --name<span class="token operator">=</span>mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-data -m /var/lib/mongodb/data -t pvc --claim-name<span class="token operator">=</span>mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-file --claim-class<span class="token operator">=</span>managed-premium --claim-mode<span class="token operator">=</span>ReadWriteMany --claim-size<span class="token operator">=</span>1G
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>Scale up <code>mongodb-[username]</code> to 1 pods</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Redeploy with Rolling deployment</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># you can resume rollout; or</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout resume dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout latest dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h3 id="fixing-it" tabindex="-1"><a class="header-anchor" href="#fixing-it" aria-hidden="true">#</a> Fixing it</h3><p><strong>Objective</strong>: Fix corrupted MongoDB storage by using the correct storage class for MongoDB.</p><p>After using the <code>azure-file</code> storage class (RWX) with rolling deployment, you got to a point where your mongodb is now corrupted. That happens because MongoDB does NOT support multiple processes/pods reading/writing to the same location/mount (<code>/var/lib/mongodb/data</code>) of single/shared pvc.</p><p>To fix that we will need to replace the <code>RWX</code> PVC with a <code>RWO</code> PVC and change the deployment strategy from <code>Rolling</code> to <code>Recreate</code> as follow:</p><ul><li>Scale down <code>rocketchat-[username]</code> to 0 pods<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Scale down <code>mongodb-[username]</code> to 0 pods<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Go to the <code>mongodb-[username]</code> DeploymentConfig and <code>Pause Rollouts</code> (under <code>Actions</code> menu on the top right side)<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout pause dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Remove all existing volumes on <code>mongodb-[username]</code><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Remove all volumes</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -o <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.spec.template.spec.volumes[].name}{&quot;\\n&quot;}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token punctuation">{</span><span class="token punctuation">}</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> volumes dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --remove <span class="token string">&#39;--name={}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li>Attach a new volume using the existing <code>mongodb-[username]-file</code> PVC<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> <span class="token builtin class-name">set</span> volume dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --add --name<span class="token operator">=</span>mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-data -m /var/lib/mongodb/data -t pvc --claim-name<span class="token operator">=</span>mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-file
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Change the deployment strategy to use <code>Recreate</code> deployment strategy<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> patch dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> -p <span class="token string">&#39;{&quot;spec&quot;:{&quot;strategy&quot;:{&quot;activeDeadlineSeconds&quot;:21600,&quot;recreateParams&quot;:{&quot;timeoutSeconds&quot;:600},&quot;resources&quot;:{},&quot;type&quot;:&quot;Recreate&quot;}}}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Go to the <code>mongodb-[username]</code> DeploymentConfig and <code>Resume Rollouts</code> (under <code>Actions</code> menu on the top right side)<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout resume dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Check if a new deployment is being rollout. If not, please do a manual deployment by clicking on <code>Deploy</code><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout latest dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Scale up <code>mongodb-[username]</code> to 1 pod, and wait for the pod to become ready<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Scale up <code>rocketchat-[username]</code> to 1 pod, and wait for the pod to become ready<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Check deployment and make sure <code>mongodb-[username]-file-rwx</code> PVCs are not being used, and delete those PVCs.<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> delete pvc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-file-rwx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/08_persistent_storage.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var _08_persistent_storage_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var _08_persistent_storage_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _08_persistent_storage_html$1
});
var _imports_0$e = "/cloud-pathfinder/assets/07_persistent_config_01.38461ded.png";
var _imports_1$a = "/cloud-pathfinder/assets/07_persistent_config_02.0795b339.png";
var _imports_2$7 = "/cloud-pathfinder/assets/07_persistent_config_04.367d2e74.png";
var _imports_3$7 = "/cloud-pathfinder/assets/07_persistent_config_03.4b9ec4e9.png";
var _imports_4$3 = "/cloud-pathfinder/assets/07_persistent_config_05.08dba9ea.png";
var _imports_5$2 = "/cloud-pathfinder/assets/07_persistent_config_06.b0d255bb.png";
var _imports_6$2 = "/cloud-pathfinder/assets/07_persistent_config_07.f9037c1e.png";
var _imports_7$2 = "/cloud-pathfinder/assets/07_persistent_config_08.9d6a1c0e.png";
var _imports_8 = "/cloud-pathfinder/assets/07_persistent_config_09.e34819b5.png";
var _imports_9 = "/cloud-pathfinder/assets/07_persistent_config_10.f8170398.png";
var _imports_10 = "/cloud-pathfinder/assets/07_persistent_config_11.46a1d679.png";
var _imports_11 = "/cloud-pathfinder/assets/07_persistent_config_12.43a97a52.png";
var _imports_12 = "/cloud-pathfinder/assets/07_persistent_config_13.d607f48e.png";
var _imports_13 = "/cloud-pathfinder/assets/07_persistent_config_14.b1eb6fe2.png";
var _imports_14 = "/cloud-pathfinder/assets/07_persistent_config_15.3aef90e5.png";
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="persistent-configurations" tabindex="-1"><a class="header-anchor" href="#persistent-configurations" aria-hidden="true">#</a> Persistent Configurations</h1><p>In cases where configurations need to change frequently or common configurations should be shared across deployments or pods, it is not ideal to build said configurations into the container image or maintain multiple copies of the configuration. OpenShift supports <code>configMaps</code> which can be a standalone object that is easily mounted into pods. In cases where the configuration file or data is sensitive in nature, OpenShift supports <code>secrets</code> to handle this sensitive data.</p><h3 id="configmaps" tabindex="-1"><a class="header-anchor" href="#configmaps" aria-hidden="true">#</a> ConfigMaps</h3><h4 id="creating-a-config-map-and-adding-it-to-a-deployment" tabindex="-1"><a class="header-anchor" href="#creating-a-config-map-and-adding-it-to-a-deployment" aria-hidden="true">#</a> Creating a Config Map and Adding it to a Deployment</h4><p>Create a configMap with arbitrary data and mount it inside of your <code>rocketchat-[username]</code> pod:</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$e)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_1$a)} alt=""></p><ul><li>In the Web Console, go to <code>+Add</code> and select <code>YAML</code></li><li>Paste in the following ConfigMap Code and save</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">myfile.txt</span><span class="token punctuation">:</span> Hello world
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketchat<span class="token punctuation">-</span><span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">-</span>configmap
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><p>Attach the <code>configMap</code> to your <code>rocketchat-[username]</code> deployment by navigating to the <code>YAML</code> tab in your Rocket Chat DeploymentConfig and pasting in the following code</p><ol><li>You will first need to create a <code>volume</code>. This is located under <code>.spec.template.spec.volumes</code></li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketchat<span class="token punctuation">-</span><span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">-</span>configmap
    <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketchat<span class="token punctuation">-</span><span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">-</span>volume
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>Then create a <code>volumeMount</code> under <code>.spec.template.spec.containers.volumeMounts</code></li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketchat<span class="token punctuation">-</span><span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">-</span>volume
    <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /opt/configs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><blockquote><p>pro tip: if you are not sure what fields are available you can always use oc explain! <code>oc explain deployment.spec.template.spec.containers.volumeMounts</code></p></blockquote><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$7)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_3$7)} alt=""></p><blockquote><p>it should like similar to this <img${serverRenderer.ssrRenderAttr("src", _imports_4$3)} alt=""></p></blockquote><ul><li><p>Save the changes which will trigger a new deployment of your <code>rocketchat-[username]</code> pod</p></li><li><p>Using the pod terminal in the Web Console or <code>oc rsh</code>, explore the path of the mounted configMap</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_5$2)} alt=""></p><h4 id="changing-config-map-content" tabindex="-1"><a class="header-anchor" href="#changing-config-map-content" aria-hidden="true">#</a> Changing Config Map Content</h4><p>The content in your <code>configMap</code> can be changed and in most cases it&#39;s NOT dynamically updated in the pod. With that said, a new deployment will be required for the changes to be picked up.</p><ul><li>Edit your <code>configMap</code> to add a new key-value pair that represents another file</li></ul><p>Navigate to <code>Administrator View -&gt; Workloads -&gt; Configmaps</code> from the console and select your ConfigMap from the list</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5$2)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_6$2)} alt=""></p><ul><li>Using the pod terminal in the Web Console or <code>oc rsh</code>, explore the path of the mounted configMap</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_7$2)} alt=""></p><h3 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets" aria-hidden="true">#</a> Secrets</h3><p>Secrets can be added in a similar way as config maps but are geared towards the management of sensitive information. In OpenShift, these are base64 encoded, and encrypted on disk when stored in the cluster. In Pods, they never live on disk (unlike configmaps) and are only in memory. Secrets, from the Web Console, are focused on supporting:</p><ul><li>Username/Passwords</li><li>SSH Keys</li><li>SSL Certificates</li><li>Git config files</li></ul><p>&quot;Opaque&quot; secrets are supported and can contain any type of data, however, these must be configured on the command line with the <code>oc</code> cli.</p><h3 id="creating-secrets" tabindex="-1"><a class="header-anchor" href="#creating-secrets" aria-hidden="true">#</a> Creating Secrets</h3><ul><li>In the Web Console, go to <code>+Add</code> and select <code>YAML</code></li><li>Paste in the following Secret Code and save</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">stringData</span><span class="token punctuation">:</span>
  <span class="token key atrule">SECRET_API_KEY</span><span class="token punctuation">:</span> <span class="token string">&quot;I&#39;m ULTRA SECRET&quot;</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> rocketchat<span class="token punctuation">-</span><span class="token punctuation">[</span>username<span class="token punctuation">]</span><span class="token punctuation">-</span>secret
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img${serverRenderer.ssrRenderAttr("src", _imports_8)} alt=""></p><ul><li>Explore the other mongo secrets to see different variations of secret data by navigating to <code>Administrator View -&gt; Workloads -&gt; Secrets</code></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_9)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_10)} alt=""></p><ul><li><p>Navigate back to your <code>rocketchat-[username]-secret</code> and attach the <code>secret</code> to your <code>rocketchat-[username]</code> DeploymentConfig by navigating to the <code>Add Secret to Workload</code></p></li><li><p>Attach the secret as an environment variable</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_11)} alt=""><img${serverRenderer.ssrRenderAttr("src", _imports_12)} alt=""></p><ul><li><p>This change will trigger a new deployment of your <code>rocketchat-[username]</code> pod</p></li><li><p>Once the pods have been redeployed the environment variable should be available for them to use. This is a very common pattern that applications can use to hold sensitive information like api keys in memory. You can verify that the environment variable exists by accessing the pod terminal or using <code>oc rsh</code> and outputting its value with a simple <code>echo $SECRET_API_KEY</code></p></li><li><p>From the cli, review the secret with <code>oc describe secret rocketchat-[username]-secret</code></p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc describe secret rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-secret
Name:         rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-secret
Namespace:    <span class="token punctuation">[</span>namespace<span class="token punctuation">]</span>
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

Type:  Opaque

Data
<span class="token operator">==</span><span class="token operator">==</span>
SECRET_API_KEY:  <span class="token number">16</span> bytes
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>Export the secret to view the contents with <code>oc get --export secret rocketchat-[username]-secret -o yaml</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc get --export secret rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-secret -o yaml
apiVersion: v1
data:
  SECRET_API_KEY: <span class="token assign-left variable">SSdtIFVMVFJBIFNFQ1JFVA</span><span class="token operator">==</span>
kind: Secret
metadata:
  creationTimestamp: null
  name: rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-secret
  selfLink: /api/v1/namespaces/<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span>/secrets/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>-secret
type: Opaque
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>on Mac&#39;s and Linux machines that have the base64 binary, you can decode the value as a reference</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;c2hlYXN0ZXdhcnQ=&quot;</span> <span class="token operator">|</span> base64 -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>To edit an existing secret, from the webconsole you can navigate to the secret and select the <code>YAML</code> tab or <code>oc edit secret rocketchat-[username]-secret</code> from the cli. Secrets are base64 encoded. If adding new values or editing existing values of a Secret it is often easier to edit in plain text and have it b64 encoded for you. To do this you will need to modify the <code>data</code> field and change it to <code>stringData</code> prior to adding or editing values.</p></li><li><p>Add another secret value but this time as a sensitive configuration file such as an ssh key</p></li></ul><p>From the web console <img${serverRenderer.ssrRenderAttr("src", _imports_13)} alt=""> With <code>oc edit</code><img${serverRenderer.ssrRenderAttr("src", _imports_14)} alt=""></p><blockquote><p>take note that you were adding a new value <code>id_rsa</code> under a field called <code>stringData</code>. Openshift will automatically, encode that as base64 and place it in the <code>data</code> field upon saving. You can confirm this with <code>oc get secret rocketchat-[username]-secret -o yaml</code> after saving.</p></blockquote><ul><li>Redeploy the application after secret changes</li></ul><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/09_persistent_configurations.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _09_persistent_configurations_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var _09_persistent_configurations_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _09_persistent_configurations_html$1
});
var _imports_0$d = "/cloud-pathfinder/assets/08_event_stream_01.819027c9.png";
var _imports_1$9 = "/cloud-pathfinder/assets/08_event_stream_02.364cb96b.png";
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="event-streams" tabindex="-1"><a class="header-anchor" href="#event-streams" aria-hidden="true">#</a> Event Streams</h1><p>Event streams exist on many objects as well as at the project level. The project is the highest level that a developer can explore to see all events with that particular project.</p><h3 id="exploring-event-streams" tabindex="-1"><a class="header-anchor" href="#exploring-event-streams" aria-hidden="true">#</a> Exploring Event Streams</h3><p>The Web Console is the primary tool to visualize events sorted by time.</p><ul><li>Explore the events of a pod <ul><li>Navigate to the <strong>Administrator View</strong> go to <code>Workloads -&gt; Pods</code> and then select <code>Events</code></li></ul></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$d)} alt=""></p><ul><li>For project wide events, navigate to the <strong>Developer View</strong> and go to <code>Advanced -&gt; Events</code></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$9)} alt=""></p><ul><li>Or on the CLI in your project</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc get events --sort-by<span class="token operator">=</span><span class="token string">&#39;.lastTimestamp&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Navigate through some of the events and review some of the output that could be helpful in debugging pods</li></ul><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/10_event_streams.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var _10_event_streams_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var _10_event_streams_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _10_event_streams_html$1
});
var _imports_0$c = "/cloud-pathfinder/assets/09_debugging_00.58d64180.png";
var _imports_1$8 = "/cloud-pathfinder/assets/09_debugging_01.78b1c233.png";
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="debugging-containers" tabindex="-1"><a class="header-anchor" href="#debugging-containers" aria-hidden="true">#</a> Debugging Containers</h1><h3 id="accessing-local-logs" tabindex="-1"><a class="header-anchor" href="#accessing-local-logs" aria-hidden="true">#</a> Accessing Local Logs</h3><p>Logs of a running pod can be accessed from the Web Console or from the <code>oc</code> cli:</p><ul><li>The <code>Logs</code> tab of any running pod can be used to view active logs for the current pod</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$c)} alt=""></p><ul><li>The <code>oc</code> command can be used to view or tail the logs:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> logs -f <span class="token operator">&lt;</span>pod name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If there is more than one container in a given pod, the <code>-c &lt;container-name&gt;</code> switch is used to specify the desired container logs.</p><h3 id="using-a-debug-container" tabindex="-1"><a class="header-anchor" href="#using-a-debug-container" aria-hidden="true">#</a> Using a Debug Container</h3><p><strong>Objective</strong>: Create some error on app pod to start debugging: In this lab, we will scale down the database deployment so that application pods will experience errors and crash.</p><ul><li>Scale down database:<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> scale dc/mongodb-<span class="token punctuation">[</span>username<span class="token punctuation">]</span> --replicas<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Restart rocketchat:<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> rollout restart deployment/rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Once the new pod starts, notice the CrashLoopBackOff</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$8)} alt=""></p><h4 id="using-the-oc-command-to-start-a-debug-container" tabindex="-1"><a class="header-anchor" href="#using-the-oc-command-to-start-a-debug-container" aria-hidden="true">#</a> Using the <code>oc</code> command to start a debug container</h4><ul><li>Find the name of a pod you would like to debug<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> pods
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>Run the <code>oc debug</code> command to start a debug pod (your output will vary)<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> debug <span class="token operator">&lt;</span>rocketchat-pod-name<span class="token operator">&gt;</span>
Defaulting container name to rocketchat-shelly.
Use <span class="token string">&#39;oc describe pod/rocketchat-shelly-6-bm827-debug -n ocp101-june-dev&#39;</span> to see all of the containers <span class="token keyword">in</span> this pod.

Debugging with pod/rocketchat-shelly-6-bm827-debug, original command: container-entrypoint <span class="token function">node</span> main.js
Waiting <span class="token keyword">for</span> pod to start <span class="token punctuation">..</span>.
If you don&#39;t see a <span class="token builtin class-name">command</span> prompt, try pressing enter.
sh-4.2$ 
sh-4.2$ 
sh-4.2$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">exit</span>

Removing debug pod <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h3 id="rsh-and-rsync" tabindex="-1"><a class="header-anchor" href="#rsh-and-rsync" aria-hidden="true">#</a> RSH and RSYNC</h3><p>RSH is available to all normal pods through the web console under the <code>Terminal</code> tab, as well as through the <code>oc rsh</code> command.</p><ul><li>With your choice of access, rsh into one of the application pods and test access within the namespace <ul><li>cURL internal and external resources</li><li>Test internal name resolution, external name resolution, etc.</li><li>Explore your userid</li></ul></li></ul><p>RSYNC is also available in many pods, available through the <code>oc rsync</code> command.</p><ul><li>On the CLI, type <code>oc rsync -h</code></li><li>Using this command, copy the contents of the mongo data directory to your local machine, or from your machine to the remote pod</li></ul><h3 id="port-forwarding" tabindex="-1"><a class="header-anchor" href="#port-forwarding" aria-hidden="true">#</a> Port Forwarding</h3><p>The <code>oc port-forward</code> command enables users to forward remote ports running in the cluster into a local development machine.</p><ul><li>Find your pod and use the port forward command</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pods  <span class="token operator">|</span> <span class="token function">grep</span> rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> port-forward <span class="token punctuation">[</span>pod name from above<span class="token punctuation">]</span> <span class="token number">8000</span>:3000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Navigate to http://127.0.0.1:8000</li></ul><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/11_debugging_containers.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var _11_debugging_containers_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var _11_debugging_containers_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _11_debugging_containers_html$1
});
var _imports_0$b = "/cloud-pathfinder/assets/10_logging_01.16a911bf.png";
var _imports_1$7 = "/cloud-pathfinder/assets/10_logging_02.14799430.png";
var _imports_2$6 = "/cloud-pathfinder/assets/10_logging_03.5884d4d1.png";
var _imports_3$6 = "/cloud-pathfinder/assets/10_logging_04.166e2983.png";
var _imports_4$2 = "/cloud-pathfinder/assets/10_logging_viz_01.f436a4f1.png";
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="logging-and-visualizations" tabindex="-1"><a class="header-anchor" href="#logging-and-visualizations" aria-hidden="true">#</a> Logging and Visualizations</h1><blockquote><p>Logging in the Openshift Azure Training Cluster does not leverage Kibana for log surfacing and aggregation. For reference these exercises are available so that you can reference it incase you are using Kibana in the 4.x production cluster.</p></blockquote><h3 id="efk-for-aggregated-logs" tabindex="-1"><a class="header-anchor" href="#efk-for-aggregated-logs" aria-hidden="true">#</a> EFK for Aggregated Logs</h3><p>The OpenShift platform provides an aggregated logging stack that is automatically configured to centralize and store logs from application pods. These logs are only retained for a short period of time, currently about 14 days, but can be used to help identify issues with appliation pods.</p><p>Kibana is the primary interface for viewing and querying logs.</p><h4 id="access-the-archive-link-from-a-pod" tabindex="-1"><a class="header-anchor" href="#access-the-archive-link-from-a-pod" aria-hidden="true">#</a> Access the archive link from a pod</h4><p>The shortcut towards accessing the Kibana is from the <code>Logs</code> tab of a running pod.</p><ul><li>Select the runing <code>rocketchat-[username]</code> pod and select the Logs tab</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$b)} alt=""></p><ul><li><p>Select the view archive link to be taken to Kibana</p></li><li><p>Review the logging interface and the query that has been automatically populated</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$7)} alt=""></p><ul><li>Modify the query and time picker to select the entire namespace within the last few hours</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$6)} alt=""></p><ul><li>Review how Kibana surfaces key information about the log sources in the left panel</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$6)} alt=""></p><ul><li>Create a simple visualization of the information surfaced by Kibana</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_4$2)} alt=""></p><h4 id="access-the-kibana-interface-directly" tabindex="-1"><a class="header-anchor" href="#access-the-kibana-interface-directly" aria-hidden="true">#</a> Access the kibana interface directly</h4><p>Kibana can also be accessed directly at the url:</p><ul><li><a href="https://kibana.pathfinder.gov.bc.ca" target="_blank" rel="noopener noreferrer">https://kibana.pathfinder.gov.bc.ca`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><p>The namespaces you have access to view will be directly related to your project permissions.</p><!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/12_logging_and_visualizations.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var _12_logging_and_visualizations_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var _12_logging_and_visualizations_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _12_logging_and_visualizations_html$1
});
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="openshift-4-metrics" tabindex="-1"><a class="header-anchor" href="#openshift-4-metrics" aria-hidden="true">#</a> Openshift 4 Metrics</h1><blockquote><p>this feature is in tech preview. This means that it is operational but is not supported under any commercial Service Level Agreement</p></blockquote><p>Openshift 4 provides a more indepth way to surface metrics for your workloads. These metrics are queries using <code>PromQL</code>.</p><h2 id="running-a-sample-metric-query" tabindex="-1"><a class="header-anchor" href="#running-a-sample-metric-query" aria-hidden="true">#</a> Running a Sample Metric Query</h2><ul><li>Navigate to your <strong>dev namespace</strong> and select <code>Monitoring -&gt; Metrics</code></li><li>Select an sample query provided <code>CPU Usage</code> and observe the cpu utilization of your pods</li></ul><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/13_metrics.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var _13_metrics_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var _13_metrics_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _13_metrics_html$1
});
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="cheatsheet" tabindex="-1"><a class="header-anchor" href="#cheatsheet" aria-hidden="true">#</a> Cheatsheet</h1><p>This is a placeholder to work with the students and determine what they find valuable in this sheet.</p><h2 id="deleting-your-lab" tabindex="-1"><a class="header-anchor" href="#deleting-your-lab" aria-hidden="true">#</a> Deleting your lab</h2><div class="custom-container warning"><p class="custom-container-title">[WARNING]</p><p>You should ALWAYS validate the output before using <code>oc delete</code>. You can do that by replacing <code>oc delete</code> with <code>oc get</code>, or if using with xargs prefix with <code>echo</code>.</p></div><div class="custom-container warning"><p class="custom-container-title">[WARNING]</p><p>Always double check, and triple check before running <code>oc delete</code>!!!</p></div><div class="custom-container warning"><p class="custom-container-title">[WARNING]</p><p>Be very careful when copying and pasting directly into a terminal!!!</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List/validate resources to be deleted by labels</span>
oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> get all -l <span class="token assign-left variable">build</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># Delete by labels</span>
oc -n <span class="token punctuation">[</span>-tools<span class="token punctuation">]</span> delete all -l <span class="token assign-left variable">build</span><span class="token operator">=</span>rocketchat-<span class="token punctuation">[</span>username<span class="token punctuation">]</span>

<span class="token comment"># List/validate resources to be deleted by get+grep+delete</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get all,pvc,secret,configmap -o name --no-headers <span class="token operator">|</span> <span class="token function">grep</span> -i -F -e <span class="token string">&#39;-[username]&#39;</span>

<span class="token comment"># Delete resources by using get+grep+delete</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get all -o name --no-headers <span class="token operator">|</span> <span class="token function">grep</span> -i -F -e <span class="token string">&#39;-[username]&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token punctuation">{</span><span class="token punctuation">}</span> oc  -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> delete <span class="token string">&#39;{}&#39;</span>

<span class="token comment"># Delete data/unrecoverable resources (not covered by &#39;all&#39;) by using get+grep+delete</span>
oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> get pvc,secret,configmap -o name --no-headers <span class="token operator">|</span> <span class="token function">grep</span> -i -F -e <span class="token string">&#39;-[username]&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> -I <span class="token punctuation">{</span><span class="token punctuation">}</span> oc -n <span class="token punctuation">[</span>-dev<span class="token punctuation">]</span> delete <span class="token string">&#39;{}&#39;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/14_cheatsheet.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var _14_cheatsheet_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var _14_cheatsheet_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _14_cheatsheet_html$1
});
var _imports_0$a = "/cloud-pathfinder/assets/12_pod_lifecycle_01.593aced3.png";
var _imports_1$6 = "/cloud-pathfinder/assets/12_pod_lifecycle_02.540bee29.png";
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="pod-lifecycle" tabindex="-1"><a class="header-anchor" href="#pod-lifecycle" aria-hidden="true">#</a> Pod Lifecycle</h1><p>A Pod can be extended beyond the normal operation of the container by allowing developers to:</p><ul><li>add <code>init</code> containers</li><li>add <code>pre</code> and <code>post</code> lifecycle hooks</li><li>modify the default <code>entrypoint</code> of a container</li></ul><h2 id="init-containers" tabindex="-1"><a class="header-anchor" href="#init-containers" aria-hidden="true">#</a> Init Containers</h2><p>Init containers are best used to prepare the pod for normal operation. In this lab, you will add a simple init container that posts a message to rocketchat with your pod hostname.</p><p><strong>Objective</strong>: Create an init container</p><ul><li>From the Web Console, navigate to <code>Topology</code> and select your <code>rocketchat-[username]</code> deploymentconfig.</li><li>Navigate to the <strong>YAML</strong> tab. <blockquote><p>If you wish to perform this from the cli with the <code>oc</code> tool, type <code>oc edit deployment/rocketchat-[username]</code></p></blockquote></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$a)} alt=""></p><ul><li>Add the following section of code under <code>spec: -&gt; template: -&gt; spec:</code></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>      <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> init
        <span class="token key atrule">image</span><span class="token punctuation">:</span> giantswarm/tiny<span class="token punctuation">-</span>tools
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c=$(curl -X POST -H &#39;Content-Type: application/json&#39; --data &#39;{\\&quot;text\\&quot;:\\&quot;Say Hello\\&quot;}&#39; https://chat.pathfinder.gov.bc.ca/hooks/xxx/xxx)&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>Select Save</li><li>Ask the instructor to ensure the rocketchat instance is displayed to the class</li><li>Explore the <code>Pod Details</code> to notice the differente with the Init Container</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$6)} alt=""></p><p>In order to obtain logs from the init container, the <code>oc</code> command can be used by specifying <code>-c init</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oc -n [-dev] logs rocketchat-[username]-[pod-id] -c init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks" aria-hidden="true">#</a> Lifecycle Hooks</h2><p>Lifecycle hooks can be configured to start and stop a container properly. The lifecycle hook is tied directly to each container. Add a similar pre and post hook as the <code>initContainer</code> to demonstrate when it executes in your rocketchat deployment.</p><ul><li>From the Web Console, navigate to the <code>rocketchat-[username]</code> deploymentconfig and click on <code>YAML</code> tab <ul><li>If you wish to perform this from the cli with the <code>oc</code> tool, type <code>oc edit deployment/rocketchat-[username]</code></li></ul></li><li>Add the following section of code under <code>spec: -&gt; template: -&gt; spec: -&gt; containers</code></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>          <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
            <span class="token key atrule">postStart</span><span class="token punctuation">:</span>
              <span class="token key atrule">exec</span><span class="token punctuation">:</span>
                <span class="token key atrule">command</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c=$(curl -X POST -H &#39;Content-Type: application/json&#39; --data &#39;{\\&quot;text\\&quot;: \\&quot;&#39;\\&quot;$HOSTNAME\\&quot;&#39; is at the postStart phase, huzzah! \\&quot;}&#39; https://chat.pathfinder.gov.bc.ca/hooks/xxx/xxx)&quot;</span><span class="token punctuation">]</span>
            <span class="token key atrule">preStop</span><span class="token punctuation">:</span>
              <span class="token key atrule">exec</span><span class="token punctuation">:</span>
                <span class="token key atrule">command</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c=$(curl -X POST -H &#39;Content-Type: application/json&#39; --data &#39;{\\&quot;text\\&quot;: \\&quot;&#39;\\&quot;$HOSTNAME\\&quot;&#39; is just about to STOPPPPPP! \\&quot;}&#39; https://chat.pathfinder.gov.bc.ca/hooks/xxx/xxx)&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>Select Save</li><li>Ask the instructor to ensure the rocketchat instance is displayed to the class</li></ul><h2 id="overriding-the-entrypoint" tabindex="-1"><a class="header-anchor" href="#overriding-the-entrypoint" aria-hidden="true">#</a> Overriding the Entrypoint</h2><p>It may be necessary, from time to time, to override the initial command/entrypoint of a container image. Generally this is used for troubleshooting purposes, or to override a vendor provided image.</p><ul><li>From the Web Console, navigate to the <code>rocketchat-[username]</code> deploymentconfig and click on <code>YAML</code> tab <ul><li>If you wish to perform this from the cli with the <code>oc</code> tool, type <code>oc edit deployment/rocketchat-[username]</code></li></ul></li><li>Add the following section of code under <code>spec: -&gt; template: -&gt; spec: -&gt; containers</code></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>          <span class="token key atrule">command</span><span class="token punctuation">:</span>  <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c=$(curl -X POST -H &#39;Content-Type: application/json&#39; --data &#39;{\\&quot;text\\&quot;: \\&quot;&#39;\\&quot;$HOSTNAME\\&quot;&#39; is AN OVERRIDING COMMAND! \\&quot;}&#39; https://chat.pathfinder.gov.bc.ca/hooks/xxx/xxx)&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Take note of the pattern that will happen in the rocketchat notification screen</li><li>Remove the previous command to enable the rocketchat instance to start properly again</li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><ul><li>https://blog.openshift.com/kubernetes-pods-life/</li></ul><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/15_pod_lifecycle.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var _15_pod_lifecycle_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var _15_pod_lifecycle_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _15_pod_lifecycle_html$1
});
var _imports_0$9 = "/cloud-pathfinder/assets/logo.230dbaf4.png";
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$9)} alt="Logo"></p><h1 id="welcome-to-the-openshift-101-lab" tabindex="-1"><a class="header-anchor" href="#welcome-to-the-openshift-101-lab" aria-hidden="true">#</a> Welcome to the Openshift 101 Lab</h1><p>This lab has been designed as a do-it-at-your-own pace set of exercises. Essentially you are provided a set of training namespaces in an Openshift Environment to perform your work. You are apart of a cohort! So share, collaborate, and problem solve together as you would if you were all apart of the same project team \u{1F603}</p><h2 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes" aria-hidden="true">#</a> Important Notes</h2><p>The lab follows a continuous improvement model. This means we track suggestions, feature improvements, bugs, and typos in github. If you have any issues that are outside of the planned experience for this lab please create an issue so we can improve this workshop for others.</p><p><a href="https://github.com/BCDevOps/devops-platform-workshops/issues/new?template=101-lab-issue.md&amp;title=101+Lab+Questions%2FBugs" target="_blank" rel="noopener noreferrer">You can find issues here`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h2 id="get-prepared-for" tabindex="-1"><a class="header-anchor" href="#get-prepared-for" aria-hidden="true">#</a> Get prepared for</h2><ul><li>hands on exerecises using the tools that are commonly leveraged by teams when working on the platform</li><li>running into issues as you debug the build and deployment of a RocketChat Application</li></ul><h2 id="unknown-territory" tabindex="-1"><a class="header-anchor" href="#unknown-territory" aria-hidden="true">#</a> Unknown Territory</h2><p>The OCP 101 Lab was initially delivered as a 2 day session pre-covid. The delivery model has changed to reflect the given times and so we are diving in as faciliators as much as you are \u{1F603} Let&#39;s learn together.</p><h2 id="touch-points-and-support" tabindex="-1"><a class="header-anchor" href="#touch-points-and-support" aria-hidden="true">#</a> Touch Points and Support</h2><p>You are not alone! The lab, when scheduled, has at least one touch point scheduled mid way to address any questions/concerns. There is also a RocketChat channel that will be created specifically for the scheduled lab to be used by the cohort and facilitators.</p><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/index.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index_html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var index_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$7
});
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h1><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/00_overview.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Overview`);
      } else {
        return [
          vue.createTextVNode("Overview")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/01_setup.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Setup`);
      } else {
        return [
          vue.createTextVNode("Setup")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/01_adding_team_members.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Adding User Access`);
      } else {
        return [
          vue.createTextVNode("Adding User Access")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/01b_web_console_overview.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`OCP4 Web Console`);
      } else {
        return [
          vue.createTextVNode("OCP4 Web Console")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/02_builds.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Builds`);
      } else {
        return [
          vue.createTextVNode("Builds")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/03_deployment.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Deployments`);
      } else {
        return [
          vue.createTextVNode("Deployments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/04_configuring_deployments.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Configuring Deployments`);
      } else {
        return [
          vue.createTextVNode("Configuring Deployments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/05_resource_management.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resource Management`);
      } else {
        return [
          vue.createTextVNode("Resource Management")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/06_application_availability.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Application Availability`);
      } else {
        return [
          vue.createTextVNode("Application Availability")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/07_autoscaling.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Autoscaling`);
      } else {
        return [
          vue.createTextVNode("Autoscaling")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/08_persistent_storage.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Persistent Storage`);
      } else {
        return [
          vue.createTextVNode("Persistent Storage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/09_persistent_configurations.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Persistent Configurations`);
      } else {
        return [
          vue.createTextVNode("Persistent Configurations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/10_event_streams.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Event Streams`);
      } else {
        return [
          vue.createTextVNode("Event Streams")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/11_debugging_containers.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Debugging Containers`);
      } else {
        return [
          vue.createTextVNode("Debugging Containers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/12_logging_and_visualizations.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Logging and Visualizations`);
      } else {
        return [
          vue.createTextVNode("Logging and Visualizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/13_metrics.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Metrics`);
      } else {
        return [
          vue.createTextVNode("Metrics")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/openshift101/14_cheatsheet.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cheat Sheet`);
      } else {
        return [
          vue.createTextVNode("Cheat Sheet")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/openshift101/SUMMARY.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var SUMMARY_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var SUMMARY_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": SUMMARY_html$1
});
var _imports_0$8 = "/cloud-pathfinder/assets/product_owner.0f7f639d.png";
var _imports_1$5 = "/cloud-pathfinder/assets/security.bec005cb.png";
var _imports_2$5 = "/cloud-pathfinder/assets/developer.38e17e21.png";
var _imports_3$5 = "/cloud-pathfinder/assets/audience.21ae0872.png";
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="who-are-you" tabindex="-1"><a class="header-anchor" href="#who-are-you" aria-hidden="true">#</a> Who are you ?</h1><h2 id="take-a-look-at-your-team" tabindex="-1"><a class="header-anchor" href="#take-a-look-at-your-team" aria-hidden="true">#</a> Take a look at your team</h2><ul><li><p>Teams are comprised of</p><ul><li>Government employees</li><li>Contractors</li></ul></li><li><p>Roles and titles like</p><ul><li>Project Manager, Product Owner, Manager, Expense Authority\u2026 Ministry Information Security Officer, Ministry Privacy Officer, Architect\u2026 Full Stack Developer, DevOps, Technologist, Site Reliability Specialist\u2026</li></ul></li></ul><h2 id="product-owner" tabindex="-1"><a class="header-anchor" href="#product-owner" aria-hidden="true">#</a> Product Owner</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$8)} alt="Product owner"></p><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$5)} alt="Security"></p><h2 id="developer" tabindex="-1"><a class="header-anchor" href="#developer" aria-hidden="true">#</a> Developer</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$5)} alt="Developer"></p><h2 id="audience" tabindex="-1"><a class="header-anchor" href="#audience" aria-hidden="true">#</a> Audience</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$5)} alt="people jumping into a swimming pool together"></p><ul><li>POs, Devs and Compliance; group start</li><li>Shared understanding from the beginning</li><li>Journey together</li></ul><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000100_who_are_you.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var _000100_who_are_you_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var _000100_who_are_you_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000100_who_are_you_html$1
});
var _imports_0$7 = "/cloud-pathfinder/assets/org_landscape.9dd9e6cc.png";
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="about-bc-government-cloud" tabindex="-1"><a class="header-anchor" href="#about-bc-government-cloud" aria-hidden="true">#</a> About BC Government Cloud</h1><ul><li>What is BC Government Cloud Pathfinder ?</li></ul><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><p><strong>GoC</strong> = Government of Canada</p></li><li><p><strong>SEA</strong> = Secure Environment Accelerator</p></li><li><p><strong>CSP</strong> = Cloud Service Provider</p></li></ul></div><ul><li><p>We are a central team in BC Government tasked with delivering Cloud</p></li><li><p>We have onboarded to the GoC Cloud Brokerage</p></li><li><p>We have a service order with 1 Cloud Service Provider that includes a SEA</p></li><li><p>We are on a mission to collaborate with the GoC to use several CSPs</p></li><li><p>We want to offer a consistent service experience across several clouds; our on-prem OpenShift container platform, AWS and others.</p></li><li><p>Our clients are all ministries in BC Government</p></li><li><p>Customer Focus</p><ul><li>Our Customers: Project Managers / Product Owners / Expense Authorities</li><li>Our Users: Developer Teams</li><li>Compliance Users: Security Operations OCIO</li></ul></li><li><p>Good Service</p><ul><li>Who do I go to if I have quality issues with Cloud Pathfinder\u2019s service?</li></ul></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$7)} alt="organization ladder"></p><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var _000200_About_bcgov_cloud_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var _000200_About_bcgov_cloud_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000200_About_bcgov_cloud_html$1
});
var _imports_0$6 = "/cloud-pathfinder/assets/bcgov_ecf.3f70b2bc.png";
var _imports_1$4 = "/cloud-pathfinder/assets/sea.ef90dc66.png";
var _imports_2$4 = "/cloud-pathfinder/assets/aws_sea_concepts.a65dd417.png";
var _imports_3$4 = "/cloud-pathfinder/assets/compliant_services_aws.653c0028.png";
var _imports_4$1 = "/cloud-pathfinder/assets/aws_sea_future_growth.4dc80d2f.png";
var _imports_5$1 = "/cloud-pathfinder/assets/aws_training_landscape.e8e4f1ea.png";
var _imports_6$1 = "/cloud-pathfinder/assets/aws_training_components.166a665d.png";
var _imports_7$1 = "/cloud-pathfinder/assets/Training-Track-All-CSPs-with-architecture.eabcf07e.png";
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ecf-at-bc-government" tabindex="-1"><a class="header-anchor" href="#ecf-at-bc-government" aria-hidden="true">#</a> ECF at BC Government</h1><ul><li>The Cloud Pathfinder team have added Automation and Customization layers on top of the Secure Environment Accelerator(SEA) product solution provided by Government of Canada and Cloud Service Provider and calls it Enterprise Cloud Factory.</li></ul><h2 id="bc-government-enterprise-cloud-factory-ecf" tabindex="-1"><a class="header-anchor" href="#bc-government-enterprise-cloud-factory-ecf" aria-hidden="true">#</a> BC Government Enterprise Cloud Factory (ECF)</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$6)} alt="AWS ECF"></p><ul><li>AWS ECF at BC Government</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$4)} alt="AWS ECF"></p><ul><li>The above images shows the relationship between services offered in different scopes of the various contexts of the AWS ECF. BC Government teams will be working primarily in the green area with some services from the blue.</li><li>The green services have been tested by the Cloud Pathfinder team for good fit within the guardrails of the environment.</li><li>Some services are not compatible but in general there is a pattern for teams to use the blue ones if needed.</li></ul><h2 id="ecf-concepts" tabindex="-1"><a class="header-anchor" href="#ecf-concepts" aria-hidden="true">#</a> ECF Concepts</h2><ul><li>AWS ECF Concept</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$4)} alt="AWS ECF concepts"></p><h2 id="public-cloud-ecf-services" tabindex="-1"><a class="header-anchor" href="#public-cloud-ecf-services" aria-hidden="true">#</a> Public Cloud ECF Services</h2><ul><li>AWS</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$4)} alt="compliant services in aws"></p><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><strong>CPF:</strong> Cloud pathfinder Team</li><li><strong>ECS</strong> = Elastic Container Service</li><li><strong>EC2</strong> = Elastic Compute Cloud/Virtual Machines</li><li><strong>CSP</strong> = Cloud Service Provider</li><li><strong>Lambdas</strong> = a serverless technology where code is run on CSP maintained servers, turned off when not in use</li><li><strong>IAM</strong> = Identity Access Management of users in the CSP</li><li><strong>AI/ML</strong> = Artificial Intelligence and Machine Learning Cloud services</li></ul></div><ul><li>We are aiming for a common service experience regardless of which cloud you are consuming in BC Government.</li></ul><h2 id="ecf-future-growth" tabindex="-1"><a class="header-anchor" href="#ecf-future-growth" aria-hidden="true">#</a> ECF Future Growth</h2><p>Depicted as follows is the growth of services in AWS over time</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_4$1)} alt="Future growth of AWS ECF"></p><ul><li>Over time, regardless of the particular brand of the cloud, the number of services in the ECF available to BC Government teams will go up and we expect the green set of services to mostly overlap the blue.</li></ul><h2 id="training-landscape" tabindex="-1"><a class="header-anchor" href="#training-landscape" aria-hidden="true">#</a> Training Landscape</h2><p>Below is the Training landscape for the AWS</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5$1)} alt="Trainig Landscape"></p><h2 id="training-components" tabindex="-1"><a class="header-anchor" href="#training-components" aria-hidden="true">#</a> Training Components</h2><ul><li>AWS ECF Training Components</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_6$1)} alt="Training Components"></p><ul><li>We see here that the training available online and from each Cloud Service Provider like AWS does not take into account the SEAs as these are very cutting-edge environments. Over time the training will catch up. For now, we have customized training so that teams do not get confused when the patterns they learned elsewhere do not function in the ECF. We show them equivalent, safe ways of operating in the ECF.</li></ul><h2 id="training-track" tabindex="-1"><a class="header-anchor" href="#training-track" aria-hidden="true">#</a> Training Track</h2><ul><li>Training Track (all CSP pattern)</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_7$1)} alt="Trainig Track"></p><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _000300_sea_at_bc_Gov_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var _000300_sea_at_bc_Gov_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000300_sea_at_bc_Gov_html$1
});
var _imports_0$5 = "/cloud-pathfinder/assets/negotiation_service_order.c428f20e.png";
var _imports_1$3 = "/cloud-pathfinder/assets/map.8a3681f7.png";
var _imports_2$3 = "/cloud-pathfinder/assets/forest.7fc2f295.jpg";
var _imports_3$3 = "/cloud-pathfinder/assets/cloud_value_for_ministries.ea4ff1fb.png";
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="procurement-value-proposition" tabindex="-1"><a class="header-anchor" href="#procurement-value-proposition" aria-hidden="true">#</a> Procurement Value Proposition</h1><h2 id="negotiation-of-our-first-service-order" tabindex="-1"><a class="header-anchor" href="#negotiation-of-our-first-service-order" aria-hidden="true">#</a> Negotiation of our First Service Order</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$5)} alt="negotiation of our first service order"></p><p>Actually it went more like this</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$3)} alt="How it actually went"></p><h2 id="procurement-value-add-for-ministries" tabindex="-1"><a class="header-anchor" href="#procurement-value-add-for-ministries" aria-hidden="true">#</a> Procurement Value Add for Ministries</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$3)} alt="pathway in a forest with trees on either side"></p><ul><li>Don\u2019t have to negotiate privacy, security, legal terms with vendors</li><li>Don\u2019t have to dig into the cloud services</li><li>Only need to focus on describing their project in the PIA and STRA</li></ul><h2 id="cloud-lifecycle-value-add-for-ministries" tabindex="-1"><a class="header-anchor" href="#cloud-lifecycle-value-add-for-ministries" aria-hidden="true">#</a> Cloud LifeCycle Value Add for Ministries</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$3)} alt="cloud value for ministries"></p><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000400_procurement_value_proposition.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var _000400_procurement_value_proposition_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var _000400_procurement_value_proposition_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000400_procurement_value_proposition_html$1
});
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="shared-responsibility-model" tabindex="-1"><a class="header-anchor" href="#shared-responsibility-model" aria-hidden="true">#</a> Shared Responsibility Model</h1><p>Please refer to <a href="https://developer.gov.bc.ca/Cloud-Pathfinder-Onboarding-Journey/Performing" target="_blank" rel="noopener noreferrer">DevHub`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for the Shared Responsibility Model.</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000500_shared_responsibility_model.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var _000500_shared_responsibility_model_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var _000500_shared_responsibility_model_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000500_shared_responsibility_model_html$1
});
var _imports_0$4 = "/cloud-pathfinder/assets/sea_architecture.89b4b9ff.png";
var _imports_1$2 = "/cloud-pathfinder/assets/path_report.502b5f13.png";
var _imports_2$2 = "/cloud-pathfinder/assets/aws_early_version.d958c085.png";
var _imports_3$2 = "/cloud-pathfinder/assets/bc_gov_aws_sea.756287fc.png";
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="providing-an-ecf-service" tabindex="-1"><a class="header-anchor" href="#providing-an-ecf-service" aria-hidden="true">#</a> Providing an ECF Service</h1><h2 id="the-ecf-is-non-trivial" tabindex="-1"><a class="header-anchor" href="#the-ecf-is-non-trivial" aria-hidden="true">#</a> The ECF is non-trivial</h2><ul><li>There is a lot of complexity that is simplified by Cloud Pathfinder providing ECF as a service to Ministries</li><li>Several thousand dollars per month to run empty</li><li>Requires a full-time highly-skilled team to stay on top of it</li></ul><p>The Below Images shows the Complexity of the ECF</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$4)} alt="The ECF Architecture"></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$2)} alt="Cloud pathfinder easiest path report"></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$2)} alt="BC Government AWS Early version"></p><ul><li>AWS calls this a \u201CLightweight Landing Zone\u201D</li><li>Product Custom built by AWS Professional Services \u201CProServe\u201D</li></ul><h2 id="bc-government-aws-ecf" tabindex="-1"><a class="header-anchor" href="#bc-government-aws-ecf" aria-hidden="true">#</a> BC Government AWS ECF</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$2)} alt="BC Government AWS ECF"></p><ul><li>AWS calls this an \u201CEnterprise Landing Zone\u201D</li><li>Product built &amp; maintained by AWS and GoC Government of Canada</li></ul><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var _000600_Providing_an_sea_service_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var _000600_Providing_an_sea_service_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000600_Providing_an_sea_service_html$1
});
var _imports_0$3 = "/cloud-pathfinder/assets/aws_cost_calculator.fbfc49c8.png";
var _imports_1$1 = "/cloud-pathfinder/assets/billing_email.891ee600.png";
var _imports_2$1 = "/cloud-pathfinder/assets/example_report.5d98b0d0.png";
var _imports_3$1 = "/cloud-pathfinder/assets/jv.29011eae.png";
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="billing" tabindex="-1"><a class="header-anchor" href="#billing" aria-hidden="true">#</a> Billing</h1><h2 id="billing-examples-t-shirt-estimate-scenario-1-small" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-1-small" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 1 - Small</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">25 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">80 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 2.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 25.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">1 GB, 1 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">1 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 48.39</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">50 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4.50</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">50 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 28.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 129.14</td></tr></tbody></table><ul><li>ALB: 1.08GB/hr, 25connections/sec, 2min duration,1 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-2-medium" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-2-medium" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 2 - Medium</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">250 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">800 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 20.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 88.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">10 GB, 10 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 18.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">3 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 145.16</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">500 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 45.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">500 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 278.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 634.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-3-large" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-3-large" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 3 - Large</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">2500 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">8,000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 200.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 712.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">100 GB, 100 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 178.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">3 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 145.16</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">5000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 450.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">5000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 2,775.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4,500.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="custom-cost-examples" tabindex="-1"><a class="header-anchor" href="#custom-cost-examples" aria-hidden="true">#</a> Custom Cost Examples ?</h2><p>Yes!</p><ul><li>AWS Pricing Calculator</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$3)} alt="Screen Shot of the AWS Price Calculator page"></p><ul><li>Use <a href="https://calculator.aws" target="_blank" rel="noopener noreferrer">AWS Pricing Calculator`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for now</li></ul><h2 id="billing-process-example" tabindex="-1"><a class="header-anchor" href="#billing-process-example" aria-hidden="true">#</a> Billing Process Example</h2><ul><li>These are samples of periodic billing report files we generate for Ministry teams</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$1)} alt="sample weekly billing report email"></p><ul><li><p>Email sent out to owners of the project every week with attached consumption report.</p></li><li><p>The Email contains information about the total cloud consumption cost across the environments and the details of the environments for the period mentioned in the email.</p></li><li><p>The Excell spredsheet attached to the email contains the cost spent on each resource inside the environment</p></li><li><p>Note that the cost also include the baseline costs for running the Secure Environment Accelerator guardrail and logging services within each account. You will see service charges from CloudTrail, CloudWatch, Systems Manager, Secrets Manager, S3, Simple Queue Service, Simple Notification Service, AWS Config, Elastic Load Balancing, GuardDuty, Key Management Service, Lambda, Macie, Security Hub, NAT gateway. If your team has a SandBox account workload environment, you will see EC2 charges due to the independent direct networking. We will will be migrating teams away from SandBoxes to more protected workload environments better aligned to the guardrails.</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$1)} alt="Example SpreadSheet Report"></p><h2 id="jv-process" tabindex="-1"><a class="header-anchor" href="#jv-process" aria-hidden="true">#</a> JV Process</h2><ul><li>Accounting process that enables <ul><li>Cloud Services Providers and Shared Services Canada to invoice BC Government, and</li><li>You the ministry teams to pay-per-use to cover this cost while</li><li>We endeavour to provide a transparent experience</li></ul></li><li>Occurs every 3 months</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$1)} alt="JV Process"></p><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000700_billing.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var _000700_billing_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var _000700_billing_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000700_billing_html$1
});
var _imports_0$2 = "/cloud-pathfinder/assets/communities1.24a7a9bd.png";
var _imports_1 = "/cloud-pathfinder/assets/communities3.e6e3b8b8.png";
var _imports_2 = "/cloud-pathfinder/assets/communities2.7c4a61df.png";
var _imports_3 = "/cloud-pathfinder/assets/teams.86d58058.png";
var _imports_4 = "/cloud-pathfinder/assets/rocket_chat.b4b8d505.png";
var _imports_5 = "/cloud-pathfinder/assets/teams_rocketchat.85fabf93.png";
var _imports_6 = "/cloud-pathfinder/assets/teams_logo.93d00942.png";
var _imports_7 = "/cloud-pathfinder/assets/rocketchat_logo.1e5dfda2.png";
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="communities-of-practice" tabindex="-1"><a class="header-anchor" href="#communities-of-practice" aria-hidden="true">#</a> Communities of practice</h1><h2 id="value-of-communities" tabindex="-1"><a class="header-anchor" href="#value-of-communities" aria-hidden="true">#</a> Value of Communities</h2><ul><li>A strong community will <ul><li>Provide an answer before the platform team can <ul><li>Operational cost savings</li><li>Faster Service turnarounds</li></ul></li><li>Self-organize to co-create reusable artifacts <ul><li>Reduce duplication and one-offs</li><li>Lighten application maintenance lifecycle requirements</li></ul></li><li>Create Stewards <ul><li>Early adopters become Influencers</li><li>Influencers become Stewards</li></ul></li></ul></li></ul><h2 id="customer-focus-\u2013-3-cops" tabindex="-1"><a class="header-anchor" href="#customer-focus-\u2013-3-cops" aria-hidden="true">#</a> Customer Focus \u2013 3 CoPs</h2><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><p><strong>OCIO</strong> = Office of the Associate Deputy Minister and Government Chief Information Officer</p></li><li><p><strong>CoP</strong> = Community of Practise</p></li><li><p><strong>SecOps</strong> = OCIO Security Operations Team</p></li><li><p><strong>MISO</strong> = Ministry Information Security Officer, embedded as part of the developer team</p></li></ul></div><ul><li>Our Customers: Project Managers / Product Owners / Expense Authorities</li><li>Our Users: Developer Teams</li><li>Compliance Users: Security Operations OCIO, MISOs</li></ul><h2 id="service-design-customer-focus" tabindex="-1"><a class="header-anchor" href="#service-design-customer-focus" aria-hidden="true">#</a> Service Design Customer Focus</h2><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><strong>UX:</strong> User Experience experts</li><li><strong>SD:</strong> Service Designer</li></ul></div><ul><li>UX / SD engage with 3 Customer/Users groups <ul><li>Gain deep understanding of needs, workflows, pain points</li><li>Create tickets from this work prioritizing needs</li><li>Focus on delivery time <ul><li>Self-serve or fast turnaround</li><li>Reliability</li><li>Tools teams need</li></ul></li></ul></li></ul><h2 id="strong-communities-in-bc-government" tabindex="-1"><a class="header-anchor" href="#strong-communities-in-bc-government" aria-hidden="true">#</a> Strong Communities in BC Government</h2><ul><li>Devops Commons</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)} alt="image of community in BC Government"><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="image of community in BC Government"><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="image of community in BC Government"></p><ul><li>Features <ul><li>Every 2 Months</li><li>History from 2016 onwards</li><li>Community Focused</li><li>Daily Open Participation</li></ul></li><li>Promotes <ul><li>Collaboration on Shared efforts</li><li>Networking across silos</li><li>Best practices via Stewards</li></ul></li></ul><h2 id="focus-of-teams-and-rocket-chat" tabindex="-1"><a class="header-anchor" href="#focus-of-teams-and-rocket-chat" aria-hidden="true">#</a> Focus of Teams and Rocket Chat</h2><p>Focus on Teams</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="image of microsoft teams"></p><ul><li>Teams <ul><li>&quot;The Workshop&quot;, it <ul><li>Internally connects team</li><li>Eases conferencing out</li><li>Is focused primarily on <ul><li>Leadership</li><li>Scrum Masters</li><li>Employees</li></ul></li></ul></li></ul></li></ul><p>Focus of RocketChat</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_4)} alt="image of rocketchat"></p><ul><li>RocketChat <ul><li>\u201CThe Bazaar\u201D, and just like OCIO Connect, it <ul><li>Connects People</li><li>Highlights Best Practices</li><li>Is Inclusive <ul><li>Contractors</li><li>vendors</li><li>Leadership</li><li>Scrum Masters</li><li>Employees</li></ul></li></ul></li></ul></li></ul><p>Recommend Both!</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5)} alt="image of rocket chat"></p><ul><li>Bazaars and Workshops <ul><li>Together both provide team&#39;s collaboration space and access to community</li><li>Allows others to find your team and modern video call meetings</li></ul></li></ul><p>A Teams platform</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_6)} alt="logo of microsoft teams"></p><p>A Community platform</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_7)} alt="Rocket chat logo"></p><ul><li><p>Cloud Pathfinder is available on both</p></li><li><p>Cloud Pathfinder Rocket chat channel : <a href="https://chat.developer.gov.bc.ca/channel/aws-lz2" target="_blank" rel="noopener noreferrer">aws-lz2`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000800_communities_of_practise.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var _000800_communities_of_practise_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var _000800_communities_of_practise_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000800_communities_of_practise_html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="service-levels" tabindex="-1"><a class="header-anchor" href="#service-levels" aria-hidden="true">#</a> Service Levels</h1><ul><li>Cloud Pathfinder Service Levels <ul><li><p>Provide training for teams</p></li><li><p>Provision new team members (0.5 business day turnaround)</p></li><li><p>Facilitate and respond to open and private support channels</p></li><li><p>Connect vendor support (cut through vendor complexity)</p></li><li><p>Review and include new requests for cloud components (usually 3 week turnaround)</p></li><li><p>Provide clear billing in multi-tenancy</p></li><li><p>Remove overhead of offboarding contractors or departing employees (IDIR gone? AWS gone!)</p></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000900_service_levels.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var _000900_service_levels_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var _000900_service_levels_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000900_service_levels_html$1
});
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h1><ul><li>Demo of Authentication to AWS <ul><li><p>Showing lack of users to manage</p></li><li><p>Make your life easy to not have to delete users</p></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/001000_demo.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var _001000_demo_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var _001000_demo_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _001000_demo_html$1
});
var _imports_0$1 = "/cloud-pathfinder/assets/questions.cd1fc2c4.png";
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="questions" tabindex="-1"><a class="header-anchor" href="#questions" aria-hidden="true">#</a> Questions ?</h1><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$1)} alt="image for questions and anwers"></p><ul><li>*This is where we would normally have a discussion if we were doing a live session</li></ul><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/001100_questions.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var _001100_questions_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var _001100_questions_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _001100_questions_html$1
});
var _imports_0 = "/cloud-pathfinder/assets/cpf_logo.d53bd5ec.png";
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo called Cloud Pathfinder"></p><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Welcome to the Cloud Pathfinder Pre-Reading Material which is the information Pack for BC Gov Ministry Teams Considering Cloud.</p><p>Today we will go over the below topics</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000100_who_are_you.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Who are You ?`);
      } else {
        return [
          vue.createTextVNode("Who are You ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About BC Gov Cloud`);
      } else {
        return [
          vue.createTextVNode("About BC Gov Cloud")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ECF at BC Gov`);
      } else {
        return [
          vue.createTextVNode("ECF at BC Gov")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Procurement Value Proposition`);
      } else {
        return [
          vue.createTextVNode("Procurement Value Proposition")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shared Responsibility`);
      } else {
        return [
          vue.createTextVNode("Shared Responsibility")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Providing an ECF service`);
      } else {
        return [
          vue.createTextVNode("Providing an ECF service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000700_billing.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Billing`);
      } else {
        return [
          vue.createTextVNode("Billing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000800_communities_of_practise.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Communities of Practice`);
      } else {
        return [
          vue.createTextVNode("Communities of Practice")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000900_service_levels.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service Levels`);
      } else {
        return [
          vue.createTextVNode("Service Levels")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001000_demo.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Demos`);
      } else {
        return [
          vue.createTextVNode("Demos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001100_questions.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Questions &amp; Answers`);
      } else {
        return [
          vue.createTextVNode("Questions & Answers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/index.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var index_html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$5
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$A = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": null,
    "heroImage": "/cloud_pathfinder_logo_2022.png",
    "tagline": null,
    "actions": [
      {
        "text": "Quick Start",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "Cloud 101",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      },
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      },
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      }
    ],
    "footer": "The CloudPathFinder Team",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "index.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$A
});
const data$z = {
  "key": "v-ba934fd8",
  "path": "/config/",
  "title": "Config",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "foo",
      "slug": "foo",
      "children": []
    },
    {
      "level": 2,
      "title": "bar",
      "slug": "bar",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "config/README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$z
});
const data$y = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$y
});
const data$x = {
  "key": "v-79e93bb0",
  "path": "/guide/using-vue.html",
  "title": "Using Vue in Markdown",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Browser API Access Restrictions",
      "slug": "browser-api-access-restrictions",
      "children": []
    },
    {
      "level": 2,
      "title": "",
      "slug": "",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/using-vue.md"
};
var usingVue_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$x
});
const data$w = {
  "key": "v-f40eecc6",
  "path": "/openshift101/00_overview.html",
  "title": "Overview",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Special Notes",
      "slug": "special-notes",
      "children": []
    },
    {
      "level": 2,
      "title": "Course Format",
      "slug": "course-format",
      "children": [
        {
          "level": 3,
          "title": "This course is new!",
          "slug": "this-course-is-new",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Who is this for?",
      "slug": "who-is-this-for",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/00_overview.md"
};
var _00_overview_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$w
});
const data$v = {
  "key": "v-ba3cb574",
  "path": "/openshift101/01_adding_team_members.html",
  "title": "Adding Team Members",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Team Permissions",
      "slug": "team-permissions",
      "children": []
    },
    {
      "level": 2,
      "title": "Roles",
      "slug": "roles",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/01_adding_team_members.md"
};
var _01_adding_team_members_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$v
});
const data$u = {
  "key": "v-32544c5e",
  "path": "/openshift101/01_setup.html",
  "title": "Lab Setup",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Lab Requirements",
      "slug": "lab-requirements",
      "children": []
    },
    {
      "level": 2,
      "title": "Installing OC",
      "slug": "installing-oc",
      "children": []
    },
    {
      "level": 2,
      "title": "Other Requirements",
      "slug": "other-requirements",
      "children": []
    },
    {
      "level": 2,
      "title": "Command Line Interfaces",
      "slug": "command-line-interfaces",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/01_setup.md"
};
var _01_setup_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$u
});
const data$t = {
  "key": "v-273773da",
  "path": "/openshift101/01b_web_console_overview.html",
  "title": "OCP 4 Web Console",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Highlights",
      "slug": "highlights",
      "children": [
        {
          "level": 3,
          "title": "Developer View",
          "slug": "developer-view",
          "children": []
        },
        {
          "level": 3,
          "title": "Administrator View",
          "slug": "administrator-view",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/01b_web_console_overview.md"
};
var _01b_web_console_overview_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$t
});
const data$s = {
  "key": "v-5a010f13",
  "path": "/openshift101/02_builds.html",
  "title": "Builds",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "The Tools Project",
      "slug": "the-tools-project",
      "children": []
    },
    {
      "level": 2,
      "title": "Creating a Docker-Based Build",
      "slug": "creating-a-docker-based-build",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/02_builds.md"
};
var _02_builds_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$s
});
const data$r = {
  "key": "v-3bcadad8",
  "path": "/openshift101/03_deployment.html",
  "title": "Deployment",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "The Dev Project",
      "slug": "the-dev-project",
      "children": [
        {
          "level": 3,
          "title": "Create an ImageStreamTag",
          "slug": "create-an-imagestreamtag",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Create an Image-Based Deployment",
      "slug": "create-an-image-based-deployment",
      "children": []
    },
    {
      "level": 2,
      "title": "Speed-up application startup",
      "slug": "speed-up-application-startup",
      "children": []
    },
    {
      "level": 2,
      "title": "Objective 1: Identify ImagePull Problem",
      "slug": "objective-1-identify-imagepull-problem",
      "children": []
    },
    {
      "level": 2,
      "title": "Objective 2: Importing Images to the deploy namespace",
      "slug": "objective-2-importing-images-to-the-deploy-namespace",
      "children": [
        {
          "level": 3,
          "title": "Why Build in Tools Then?",
          "slug": "why-build-in-tools-then",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Objective 3: Identify CrashLoopBackOff problem",
      "slug": "objective-3-identify-crashloopbackoff-problem",
      "children": []
    },
    {
      "level": 2,
      "title": "Deploying the Database",
      "slug": "deploying-the-database",
      "children": [
        {
          "level": 3,
          "title": "Create Mongo Database with Ephemeral Storage",
          "slug": "create-mongo-database-with-ephemeral-storage",
          "children": []
        },
        {
          "level": 3,
          "title": "From CLI",
          "slug": "from-cli",
          "children": []
        },
        {
          "level": 3,
          "title": "From the Web Console",
          "slug": "from-the-web-console",
          "children": []
        },
        {
          "level": 3,
          "title": "Verify MongoDB is up",
          "slug": "verify-mongodb-is-up",
          "children": []
        },
        {
          "level": 3,
          "title": "Deployment Configuration Options",
          "slug": "deployment-configuration-options",
          "children": []
        },
        {
          "level": 3,
          "title": "Environment Variables",
          "slug": "environment-variables",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Create a Route for your Rocket.Chat App",
      "slug": "create-a-route-for-your-rocket-chat-app",
      "children": [
        {
          "level": 3,
          "title": "CLI",
          "slug": "cli",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Exploring Health Checks",
      "slug": "exploring-health-checks",
      "children": [
        {
          "level": 3,
          "title": "Adding a Healthcheck",
          "slug": "adding-a-healthcheck",
          "children": []
        },
        {
          "level": 3,
          "title": "Using cli",
          "slug": "using-cli",
          "children": []
        },
        {
          "level": 3,
          "title": "Summary",
          "slug": "summary",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/03_deployment.md"
};
var _03_deployment_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$r
});
const data$q = {
  "key": "v-4187e026",
  "path": "/openshift101/04_configuring_deployments.html",
  "title": "Exploring Deployment Options",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Using oc explain",
      "slug": "using-oc-explain",
      "children": []
    },
    {
      "level": 2,
      "title": "Versioning a Deployment Configuration",
      "slug": "versioning-a-deployment-configuration",
      "children": []
    },
    {
      "level": 2,
      "title": "Changing the Deployment Strategy Option",
      "slug": "changing-the-deployment-strategy-option",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/04_configuring_deployments.md"
};
var _04_configuring_deployments_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$q
});
const data$p = {
  "key": "v-6a6dd123",
  "path": "/openshift101/05_resource_management.html",
  "title": "Resource Requests and Limits",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Explore Default Resource Configurations",
      "slug": "explore-default-resource-configurations",
      "children": []
    },
    {
      "level": 2,
      "title": "Sharing Resources",
      "slug": "sharing-resources",
      "children": []
    },
    {
      "level": 2,
      "title": "Troubleshooting OOM",
      "slug": "troubleshooting-oom",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/05_resource_management.md"
};
var _05_resource_management_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$p
});
const data$o = {
  "key": "v-26751152",
  "path": "/openshift101/06_application_availability.html",
  "title": "Application Availability",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Single Pod Applications",
      "slug": "single-pod-applications",
      "children": []
    },
    {
      "level": 3,
      "title": "Scaling Pods",
      "slug": "scaling-pods",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/06_application_availability.md"
};
var _06_application_availability_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$o
});
const data$n = {
  "key": "v-73606806",
  "path": "/openshift101/07_autoscaling.html",
  "title": "Autoscaling",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Autoscaling Pods",
      "slug": "autoscaling-pods",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/07_autoscaling.md"
};
var _07_autoscaling_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-43fbd36a",
  "path": "/openshift101/08_persistent_storage.html",
  "title": "Persistent Storage",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Deleting Pods with Ephemeral Storage",
      "slug": "deleting-pods-with-ephemeral-storage",
      "children": []
    },
    {
      "level": 3,
      "title": "Adding Storage to Existing Deployment Configurations",
      "slug": "adding-storage-to-existing-deployment-configurations",
      "children": []
    },
    {
      "level": 3,
      "title": "RWX Storage",
      "slug": "rwx-storage",
      "children": []
    },
    {
      "level": 3,
      "title": "Fixing it",
      "slug": "fixing-it",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/08_persistent_storage.md"
};
var _08_persistent_storage_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-df9b4e24",
  "path": "/openshift101/09_persistent_configurations.html",
  "title": "Persistent Configurations",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "ConfigMaps",
      "slug": "configmaps",
      "children": []
    },
    {
      "level": 3,
      "title": "Secrets",
      "slug": "secrets",
      "children": []
    },
    {
      "level": 3,
      "title": "Creating Secrets",
      "slug": "creating-secrets",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/09_persistent_configurations.md"
};
var _09_persistent_configurations_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-582f1e4f",
  "path": "/openshift101/10_event_streams.html",
  "title": "Event Streams",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Exploring Event Streams",
      "slug": "exploring-event-streams",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/10_event_streams.md"
};
var _10_event_streams_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-8420501a",
  "path": "/openshift101/11_debugging_containers.html",
  "title": "Debugging Containers",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Accessing Local Logs",
      "slug": "accessing-local-logs",
      "children": []
    },
    {
      "level": 3,
      "title": "Using a Debug Container",
      "slug": "using-a-debug-container",
      "children": []
    },
    {
      "level": 3,
      "title": "RSH and RSYNC",
      "slug": "rsh-and-rsync",
      "children": []
    },
    {
      "level": 3,
      "title": "Port Forwarding",
      "slug": "port-forwarding",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/11_debugging_containers.md"
};
var _11_debugging_containers_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-fa5396c0",
  "path": "/openshift101/12_logging_and_visualizations.html",
  "title": "Logging and Visualizations",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "EFK for Aggregated Logs",
      "slug": "efk-for-aggregated-logs",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/12_logging_and_visualizations.md"
};
var _12_logging_and_visualizations_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-4c7d4ed7",
  "path": "/openshift101/13_metrics.html",
  "title": "Openshift 4 Metrics",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Running a Sample Metric Query",
      "slug": "running-a-sample-metric-query",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/13_metrics.md"
};
var _13_metrics_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-1c21796d",
  "path": "/openshift101/14_cheatsheet.html",
  "title": "Cheatsheet",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Deleting your lab",
      "slug": "deleting-your-lab",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/14_cheatsheet.md"
};
var _14_cheatsheet_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-395b7c70",
  "path": "/openshift101/15_pod_lifecycle.html",
  "title": "Pod Lifecycle",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Init Containers",
      "slug": "init-containers",
      "children": []
    },
    {
      "level": 2,
      "title": "Lifecycle Hooks",
      "slug": "lifecycle-hooks",
      "children": []
    },
    {
      "level": 2,
      "title": "Overriding the Entrypoint",
      "slug": "overriding-the-entrypoint",
      "children": []
    },
    {
      "level": 2,
      "title": "References",
      "slug": "references",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/15_pod_lifecycle.md"
};
var _15_pod_lifecycle_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-07e7129c",
  "path": "/openshift101/",
  "title": "Welcome to the Openshift 101 Lab",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Important Notes",
      "slug": "important-notes",
      "children": []
    },
    {
      "level": 2,
      "title": "Get prepared for",
      "slug": "get-prepared-for",
      "children": []
    },
    {
      "level": 2,
      "title": "Unknown Territory",
      "slug": "unknown-territory",
      "children": []
    },
    {
      "level": 2,
      "title": "Touch Points and Support",
      "slug": "touch-points-and-support",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-3d274ca2",
  "path": "/openshift101/SUMMARY.html",
  "title": "Summary",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "openshift101/SUMMARY.md"
};
var SUMMARY_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-6c4156d6",
  "path": "/Documentation/Pre-reading-material/000100_who_are_you.html",
  "title": "Who are you ?",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Take a look at your team",
      "slug": "take-a-look-at-your-team",
      "children": []
    },
    {
      "level": 2,
      "title": "Product Owner",
      "slug": "product-owner",
      "children": []
    },
    {
      "level": 2,
      "title": "Security",
      "slug": "security",
      "children": []
    },
    {
      "level": 2,
      "title": "Developer",
      "slug": "developer",
      "children": []
    },
    {
      "level": 2,
      "title": "Audience",
      "slug": "audience",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000100_who_are_you.md"
};
var _000100_who_are_you_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-198dcdd4",
  "path": "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html",
  "title": "About BC Government Cloud",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000200_About_bcgov_cloud.md"
};
var _000200_About_bcgov_cloud_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-f5bac64c",
  "path": "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html",
  "title": "ECF at BC Government",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "BC Government Enterprise Cloud Factory (ECF)",
      "slug": "bc-government-enterprise-cloud-factory-ecf",
      "children": []
    },
    {
      "level": 2,
      "title": "ECF Concepts",
      "slug": "ecf-concepts",
      "children": []
    },
    {
      "level": 2,
      "title": "Public Cloud ECF Services",
      "slug": "public-cloud-ecf-services",
      "children": []
    },
    {
      "level": 2,
      "title": "ECF Future Growth",
      "slug": "ecf-future-growth",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Landscape",
      "slug": "training-landscape",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Components",
      "slug": "training-components",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Track",
      "slug": "training-track",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000300_sea_at_bc_Gov.md"
};
var _000300_sea_at_bc_Gov_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-47972128",
  "path": "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html",
  "title": "Procurement Value Proposition",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Negotiation of our First Service Order",
      "slug": "negotiation-of-our-first-service-order",
      "children": []
    },
    {
      "level": 2,
      "title": "Procurement Value Add for Ministries",
      "slug": "procurement-value-add-for-ministries",
      "children": []
    },
    {
      "level": 2,
      "title": "Cloud LifeCycle Value Add for Ministries",
      "slug": "cloud-lifecycle-value-add-for-ministries",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000400_procurement_value_proposition.md"
};
var _000400_procurement_value_proposition_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-23ebbb5c",
  "path": "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html",
  "title": "Shared Responsibility Model",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000500_shared_responsibility_model.md"
};
var _000500_shared_responsibility_model_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-33831eca",
  "path": "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html",
  "title": "Providing an ECF Service",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "The ECF is non-trivial",
      "slug": "the-ecf-is-non-trivial",
      "children": []
    },
    {
      "level": 2,
      "title": "BC Government AWS ECF",
      "slug": "bc-government-aws-ecf",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000600_Providing_an_sea_service.md"
};
var _000600_Providing_an_sea_service_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-5d500bf2",
  "path": "/Documentation/Pre-reading-material/000700_billing.html",
  "title": "Billing",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 1 - Small",
      "slug": "billing-examples-t-shirt-estimate-scenario-1-small",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 2 - Medium",
      "slug": "billing-examples-t-shirt-estimate-scenario-2-medium",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 3 - Large",
      "slug": "billing-examples-t-shirt-estimate-scenario-3-large",
      "children": []
    },
    {
      "level": 2,
      "title": "Custom Cost Examples ?",
      "slug": "custom-cost-examples",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Process Example",
      "slug": "billing-process-example",
      "children": []
    },
    {
      "level": 2,
      "title": "JV Process",
      "slug": "jv-process",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000700_billing.md"
};
var _000700_billing_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-9d1fc074",
  "path": "/Documentation/Pre-reading-material/000800_communities_of_practise.html",
  "title": "Communities of practice",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Value of Communities",
      "slug": "value-of-communities",
      "children": []
    },
    {
      "level": 2,
      "title": "Customer Focus \u2013 3 CoPs",
      "slug": "customer-focus-\u2013-3-cops",
      "children": []
    },
    {
      "level": 2,
      "title": "Service Design Customer Focus",
      "slug": "service-design-customer-focus",
      "children": []
    },
    {
      "level": 2,
      "title": "Strong Communities in BC Government",
      "slug": "strong-communities-in-bc-government",
      "children": []
    },
    {
      "level": 2,
      "title": "Focus of Teams and Rocket Chat",
      "slug": "focus-of-teams-and-rocket-chat",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000800_communities_of_practise.md"
};
var _000800_communities_of_practise_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-4bec5dd9",
  "path": "/Documentation/Pre-reading-material/000900_service_levels.html",
  "title": "Service Levels",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000900_service_levels.md"
};
var _000900_service_levels_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-2b892ac5",
  "path": "/Documentation/Pre-reading-material/001000_demo.html",
  "title": "Demo",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/001000_demo.md"
};
var _001000_demo_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-755bd53c",
  "path": "/Documentation/Pre-reading-material/001100_questions.html",
  "title": "Questions ?",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/001100_questions.md"
};
var _001100_questions_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-3b5059cf",
  "path": "/Documentation/Pre-reading-material/",
  "title": "Overview",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 16535115e5,
    "contributors": [
      {
        "name": "Jon McCaig",
        "email": "66041048+jon-mc-git@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/readme.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData$2();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
