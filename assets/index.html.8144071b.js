import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/logo.230dbaf4.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p><img src="' + _imports_0 + '" alt="Logo"></p><h1 id="welcome-to-the-openshift-101-lab" tabindex="-1"><a class="header-anchor" href="#welcome-to-the-openshift-101-lab" aria-hidden="true">#</a> Welcome to the Openshift 101 Lab</h1><p>This lab has been designed as a do-it-at-your-own pace set of exercises. Essentially you are provided a set of training namespaces in an Openshift Environment to perform your work. You are apart of a cohort! So share, collaborate, and problem solve together as you would if you were all apart of the same project team \u{1F603}</p><h2 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes" aria-hidden="true">#</a> Important Notes</h2><p>The lab follows a continuous improvement model. This means we track suggestions, feature improvements, bugs, and typos in github. If you have any issues that are outside of the planned experience for this lab please create an issue so we can improve this workshop for others.</p>', 5);
const _hoisted_6 = {
  href: "https://github.com/BCDevOps/devops-platform-workshops/issues/new?template=101-lab-issue.md&title=101+Lab+Questions%2FBugs",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("You can find issues here");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="get-prepared-for" tabindex="-1"><a class="header-anchor" href="#get-prepared-for" aria-hidden="true">#</a> Get prepared for</h2><ul><li>hands on exerecises using the tools that are commonly leveraged by teams when working on the platform</li><li>running into issues as you debug the build and deployment of a RocketChat Application</li></ul><h2 id="unknown-territory" tabindex="-1"><a class="header-anchor" href="#unknown-territory" aria-hidden="true">#</a> Unknown Territory</h2><p>The OCP 101 Lab was initially delivered as a 2 day session pre-covid. The delivery model has changed to reflect the given times and so we are diving in as faciliators as much as you are \u{1F603} Let&#39;s learn together.</p><h2 id="touch-points-and-support" tabindex="-1"><a class="header-anchor" href="#touch-points-and-support" aria-hidden="true">#</a> Touch Points and Support</h2><p>You are not alone! The lab, when scheduled, has at least one touch point scheduled mid way to address any questions/concerns. There is also a RocketChat channel that will be created specifically for the scheduled lab to be used by the cohort and facilitators.</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_8
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
