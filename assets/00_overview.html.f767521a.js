import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Welcome!</p><p>In these labs you will explore builds, deployments, as well as some common issues with storage provisioning.</p><p>These labs will focus on a single 2-tier application based on the popular open source chat utility, Rocket.Chat.</p><h2 id="special-notes" tabindex="-1"><a class="header-anchor" href="#special-notes" aria-hidden="true">#</a> Special Notes</h2><p>The training is being delivered in a production Openshift Environment.</p><h2 id="course-format" tabindex="-1"><a class="header-anchor" href="#course-format" aria-hidden="true">#</a> Course Format</h2><p>This course has been designed to be run <em>at your own pace</em>. The lab materials have been designed so that you generally follow the happy bath for a simple two-tier deployment. There will be many intentional bugs along the way that will have you encounter real-life troubleshooting techniques!</p><p>The course length can vary (based on scheduled). It was designed to be run over a period of a few days rather than just a day or two to have time for isolated touchpoints as well as to provide time for discussion. During that time <strong>touch points</strong> will be scheduled with the cohort to talk about special topics and to assist in troubleshooting.</p><h3 id="this-course-is-new" tabindex="-1"><a class="header-anchor" href="#this-course-is-new" aria-hidden="true">#</a> This course is new!</h3>', 10);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("This course has been completely redesigning and will more than likely have its fair share of bugs. If you have anything you longed for please make an ");
const _hoisted_12 = {
  href: "https://github.com/BCDevOps/devops-platform-workshops/issues/new/choose",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createTextVNode("issue");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" on github \u{1F603}");
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "who-is-this-for",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#who-is-this-for",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Who is this for?")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("While we love the idea of everyone getting their hands onto Openshift. The individuals that will get the most value out of the workshop are members that will be performing active developement in Openshift. This includes Application Development as well as Operational Management. The course is "),
  /* @__PURE__ */ createBaseVNode("strong", null, "very technical"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Please be aware the throughout the labs, you will be guided to make common mistakes, and then guide you on how to fix them.")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_11,
      createBaseVNode("a", _hoisted_12, [
        _hoisted_13,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_14
    ]),
    _hoisted_15,
    _hoisted_16,
    _hoisted_17
  ], 64);
}
var _00_overview_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _00_overview_html as default };
