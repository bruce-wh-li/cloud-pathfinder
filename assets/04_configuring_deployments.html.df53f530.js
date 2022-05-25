import { c as createStaticVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/04_deployment_configuration.9c911336.png";
var _imports_1 = "/cloud-pathfinder/assets/04_deploy_strategy_01.2da5d60c.png";
var _imports_2 = "/cloud-pathfinder/assets/04_deploy_strategy_02.ce75a4cf.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="exploring-deployment-options" tabindex="-1"><a class="header-anchor" href="#exploring-deployment-options" aria-hidden="true">#</a> Exploring Deployment Options</h1><p>Additional actions are available to edit your deployment configuration. Review and explore;</p><ul><li>Resource Limits</li><li>Replicas</li></ul><h2 id="using-oc-explain" tabindex="-1"><a class="header-anchor" href="#using-oc-explain" aria-hidden="true">#</a> Using <code>oc explain</code></h2><p><code>oc explain</code> is a great utility to discover all the available fields for an Openshift of K8s object.</p><ul><li>Discover the fields that belong to a Deployment <ul><li><code>oc explain deployment</code></li><li>check out what is inside the <code>spec</code> field</li><li><code>oc explain deployment.spec</code></li><li>From this view you can see that <code>replicas</code> are configurable</li></ul></li></ul><h2 id="versioning-a-deployment-configuration" tabindex="-1"><a class="header-anchor" href="#versioning-a-deployment-configuration" aria-hidden="true">#</a> Versioning a Deployment Configuration</h2><p>At this point in time, your deployment configuration has undergone many changes, such as adding environment variables and adding health checks. Review the deployment configuration <code>ReplicaSet</code> tab:</p><ul><li>Navigate to your Deployment and select <code>ReplicaSet</code><img src="' + _imports_0 + '" alt=""></li><li>Select your latest replica set and select <code>edit</code></li><li>Compare the differences between that replica set and an older one - this can be done through the UI or by comparing the YAML</li></ul><h2 id="changing-the-deployment-strategy-option" tabindex="-1"><a class="header-anchor" href="#changing-the-deployment-strategy-option" aria-hidden="true">#</a> Changing the Deployment Strategy Option</h2><p>The default deployment configuration provides a <code>Rolling Update</code> style deployment, which waits for the container to be ready prior to cutting over traffic and terminating the previous container.</p><ul><li>Change the strategy to a <code>Recreate</code> and redeploy a couple of times</li><li>edit the YAML for the deployment and replace the <code>spec.strategy.type</code> from <code>RollingUpdate</code> to `Recreate <img src="' + _imports_1 + '" alt=""><img src="' + _imports_2 + '" alt=""></li><li>Now make a small change to the deployment to trigger a new deploy (for testing)</li><li><code>oc -n [-dev] set env deployment/rocketchat-[username] TEST=BAR</code></li><li>Go back to topology and observe the behaviour. You should notice that the old pod is killed before a new one is created.</li><li>edit the YAML and switch the strategy back to RollingUpdate</li></ul>', 12);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var _04_configuring_deployments_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _04_configuring_deployments_html as default };
