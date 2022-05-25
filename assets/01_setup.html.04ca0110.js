import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.32c85e0d.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/01_setup_cli_tools.225f9264.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="lab-setup" tabindex="-1"><a class="header-anchor" href="#lab-setup" aria-hidden="true">#</a> Lab Setup</h1><p>Prior to working on labs, the Platform Services team will have created 2 projects:</p><ul><li>ocp101-tools: This namespace/project will have all of the builds related objects</li><li>ocp101-dev: This namespace/project will have all the deployment related objects</li></ul><p>One member from your group has been given administrative rights to the projects and is responsible for adding all other members to each project.</p><p>NOTE: the actual name of the namespaces may vary, and <code>ocp101</code> may be a sequence of random characters.</p><hr><p>Assign yourself a unique name to be used during your application deployments. <strong>Do not copy the application names directly from the lab guides</strong> as you are in a shared environment with the rest of your team.</p><p>For example, if the lab says to create an application named <code>app1-[username]</code>, I would create an app named <code>app1-stewartshea</code>.</p><h2 id="lab-requirements" tabindex="-1"><a class="header-anchor" href="#lab-requirements" aria-hidden="true">#</a> Lab Requirements</h2><p>These labs will require access to the lab ocp environment:</p>', 10);
const _hoisted_11 = {
  href: "https://console.apps.silver.devops.gov.bc.ca/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Silver Web Console");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<h2 id="installing-oc" tabindex="-1"><a class="header-anchor" href="#installing-oc" aria-hidden="true">#</a> Installing OC</h2><p>You may already have <code>oc</code> installed on your machine. Your <code>oc</code> version should match the version of the cluster.</p><p><strong>If you have <code>oc</code></strong> installed run <code>oc version</code>. It should look something like this</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Client Version: openshift-clients-4.6.0-202006250705.p0-176-g5797eaeca\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>If you do not have <code>oc</code> installed</strong> or your version is incorrect follow these instructions.</p>', 5);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("Option 1: If you have access to the Openshift cluster you can simply download directly from the console "),
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "cluster download link"
    })
  ])
], -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Option 2: Alternativly, navigate to the ");
const _hoisted_20 = {
  href: "https://mirror.openshift.com/pub/openshift-v4/clients/ocp/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Openshift CLI Mirror");
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" and download the version of ");
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("code", null, "oc", -1);
const _hoisted_24 = /* @__PURE__ */ createTextVNode(" that matches your operating system.");
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<blockquote><p>For Linux/Mac users that may be working with multiple versions of <code>oc</code>, it is helpful to have both versions of <code>oc</code> (3.xx/4.xx) on your machine. You can create an <code>alias</code> to <code>oc 3.xx</code> instead of adding it to your path. This way you can utilize the different versions for different OpenShift environment.</p></blockquote><ol start="2"><li>Unpack <code>oc</code> into a place that is easily reference-able from a command line interface or add it to your <code>PATH</code></li></ol><h2 id="other-requirements" tabindex="-1"><a class="header-anchor" href="#other-requirements" aria-hidden="true">#</a> Other Requirements</h2><p>In addition, developers require GIT locally installed and must have a 2FA device to support access to GitHub.</p><h2 id="command-line-interfaces" tabindex="-1"><a class="header-anchor" href="#command-line-interfaces" aria-hidden="true">#</a> Command Line Interfaces</h2><p>You will find many examples <code>commands</code> and <em>tricks</em> that highly depend on your OS. These commands were developed on <strong>unix</strong> based systems. Window&#39;s <strong>Command Prompt</strong> will not work with these examples. You will need to either use <strong>WSL</strong>, <strong>Powershell</strong>, <strong>Gitbash</strong>, or similar.</p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_11, [
          _hoisted_12,
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_13,
    createBaseVNode("ol", null, [
      _hoisted_18,
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _hoisted_19,
          createBaseVNode("a", _hoisted_20, [
            _hoisted_21,
            createVNode(_component_ExternalLinkIcon)
          ]),
          _hoisted_22,
          _hoisted_23,
          _hoisted_24
        ])
      ])
    ]),
    _hoisted_25
  ], 64);
}
var _01_setup_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _01_setup_html as default };
