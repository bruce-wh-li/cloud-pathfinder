import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/10_logging_01.16a911bf.png";
var _imports_1 = "/cloud-pathfinder/assets/10_logging_02.14799430.png";
var _imports_2 = "/cloud-pathfinder/assets/10_logging_03.5884d4d1.png";
var _imports_3 = "/cloud-pathfinder/assets/10_logging_04.166e2983.png";
var _imports_4 = "/cloud-pathfinder/assets/10_logging_viz_01.f436a4f1.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="logging-and-visualizations" tabindex="-1"><a class="header-anchor" href="#logging-and-visualizations" aria-hidden="true">#</a> Logging and Visualizations</h1><blockquote><p>Logging in the Openshift Azure Training Cluster does not leverage Kibana for log surfacing and aggregation. For reference these exercises are available so that you can reference it incase you are using Kibana in the 4.x production cluster.</p></blockquote><h3 id="efk-for-aggregated-logs" tabindex="-1"><a class="header-anchor" href="#efk-for-aggregated-logs" aria-hidden="true">#</a> EFK for Aggregated Logs</h3><p>The OpenShift platform provides an aggregated logging stack that is automatically configured to centralize and store logs from application pods. These logs are only retained for a short period of time, currently about 14 days, but can be used to help identify issues with appliation pods.</p><p>Kibana is the primary interface for viewing and querying logs.</p><h4 id="access-the-archive-link-from-a-pod" tabindex="-1"><a class="header-anchor" href="#access-the-archive-link-from-a-pod" aria-hidden="true">#</a> Access the archive link from a pod</h4><p>The shortcut towards accessing the Kibana is from the <code>Logs</code> tab of a running pod.</p><ul><li>Select the runing <code>rocketchat-[username]</code> pod and select the Logs tab</li></ul><p><img src="' + _imports_0 + '" alt=""></p><ul><li><p>Select the view archive link to be taken to Kibana</p></li><li><p>Review the logging interface and the query that has been automatically populated</p></li></ul><p><img src="' + _imports_1 + '" alt=""></p><ul><li>Modify the query and time picker to select the entire namespace within the last few hours</li></ul><p><img src="' + _imports_2 + '" alt=""></p><ul><li>Review how Kibana surfaces key information about the log sources in the left panel</li></ul><p><img src="' + _imports_3 + '" alt=""></p><ul><li>Create a simple visualization of the information surfaced by Kibana</li></ul><p><img src="' + _imports_4 + '" alt=""></p><h4 id="access-the-kibana-interface-directly" tabindex="-1"><a class="header-anchor" href="#access-the-kibana-interface-directly" aria-hidden="true">#</a> Access the kibana interface directly</h4><p>Kibana can also be accessed directly at the url:</p>', 19);
const _hoisted_20 = {
  href: "https://kibana.pathfinder.gov.bc.ca",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("https://kibana.pathfinder.gov.bc.ca");
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "The namespaces you have access to view will be directly related to your project permissions.", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_20, [
          _hoisted_21,
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_22
  ], 64);
}
var _12_logging_and_visualizations_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _12_logging_and_visualizations_html as default };
