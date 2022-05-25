import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, e as createTextVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "summary",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#summary",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Summary")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Overview");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Setup");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Adding User Access");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("OCP4 Web Console");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Builds");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Deployments");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Configuring Deployments");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Resource Management");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Application Availability");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Autoscaling");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Persistent Storage");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Persistent Configurations");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Event Streams");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Debugging Containers");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Logging and Visualizations");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Metrics");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Cheat Sheet");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/00_overview.html" }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/01_setup.html" }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/01_adding_team_members.html" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/01b_web_console_overview.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/02_builds.html" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/03_deployment.html" }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/04_configuring_deployments.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/05_resource_management.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/06_application_availability.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/07_autoscaling.html" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/08_persistent_storage.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/09_persistent_configurations.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/10_event_streams.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/11_debugging_containers.html" }, {
          default: withCtx(() => [
            _hoisted_15
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/12_logging_and_visualizations.html" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/13_metrics.html" }, {
          default: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/openshift101/14_cheatsheet.html" }, {
          default: withCtx(() => [
            _hoisted_18
          ]),
          _: 1
        })
      ])
    ])
  ], 64);
}
var SUMMARY_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { SUMMARY_html as default };
