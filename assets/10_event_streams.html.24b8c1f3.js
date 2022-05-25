import { c as createStaticVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/08_event_stream_01.819027c9.png";
var _imports_1 = "/cloud-pathfinder/assets/08_event_stream_02.364cb96b.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="event-streams" tabindex="-1"><a class="header-anchor" href="#event-streams" aria-hidden="true">#</a> Event Streams</h1><p>Event streams exist on many objects as well as at the project level. The project is the highest level that a developer can explore to see all events with that particular project.</p><h3 id="exploring-event-streams" tabindex="-1"><a class="header-anchor" href="#exploring-event-streams" aria-hidden="true">#</a> Exploring Event Streams</h3><p>The Web Console is the primary tool to visualize events sorted by time.</p><ul><li>Explore the events of a pod <ul><li>Navigate to the <strong>Administrator View</strong> go to <code>Workloads -&gt; Pods</code> and then select <code>Events</code></li></ul></li></ul><p><img src="' + _imports_0 + '" alt=""></p><ul><li>For project wide events, navigate to the <strong>Developer View</strong> and go to <code>Advanced -&gt; Events</code></li></ul><p><img src="' + _imports_1 + '" alt=""></p><ul><li>Or on the CLI in your project</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oc get events --sort-by<span class="token operator">=</span><span class="token string">&#39;.lastTimestamp&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Navigate through some of the events and review some of the output that could be helpful in debugging pods</li></ul>', 11);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var _10_event_streams_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _10_event_streams_html as default };
