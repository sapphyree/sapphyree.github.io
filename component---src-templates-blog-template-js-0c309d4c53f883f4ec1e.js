(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[637],{1046:function(e,t,a){"use strict";a.d(t,{w_:function(){return m}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function m(e){return function(t){return n.createElement(u,c({attr:c({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var a,r=e.attr,l=e.size,i=e.title,m=s(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},5610:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(5444),r=a(7294),l=a(9883);function c(){var e=(0,n.K2)("4193315388").site.siteMetadata,t=e.author;e.description,e.display;return r.createElement("footer",{className:"footer"},r.createElement("nav",{className:"level"},r.createElement("div",{className:"level-left"},r.createElement("p",null,"© ",t," 2021")),r.createElement("div",{className:"level-right"},r.createElement(l.Z,null))))}},7374:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(7294),r=a(5444);function l(){var e=(0,r.K2)("3651661821"),t=e.site.siteMetadata.display,a=e.allNavbarYaml.nodes;return n.createElement(c,null,n.createElement(s,{title:t}),n.createElement(i,null,n.createElement(m,{items:a})))}function c(e){var t=e.children;return n.createElement("div",{className:"navbar is-spaced is-transparent"},t)}function s(e){var t=e.title;return n.createElement("div",{className:"navbar-brand"},n.createElement("div",{className:"navbar-item is-size-4"},n.createElement(r.rU,{to:"/"},n.createElement("span",{class:"glowBlue"},t.substring(0,1)),n.createElement("span",{class:"glowPink"},t.substring(1,11)),n.createElement("span",{class:"glowBlue"},t.substring(11,12)))))}function i(e){var t=e.children;return n.createElement("div",{className:"navbar-menu is-active is-transparent"},t)}function m(e){var t=e.items;return n.createElement("div",{className:"navbar-end"},t.map((function(e,t){return"/"===e.link[0]?n.createElement(r.rU,{to:e.link,className:"navbar-item is-tab is-size-5",activeClassName:"is-active"},n.createElement("span",{class:"glowBlue"},e.name)):n.createElement("a",{href:e.link,className:"navbar-item is-size-5"},n.createElement("span",{class:"glowBlue"},e.name))})))}},9883:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=(a(5444),a(3201)),l=a(2775);function c(){return n.createElement("nav",{className:"level is-mobile"},n.createElement("div",{className:"level-left"},n.createElement("a",{className:"level-item has-text-white",href:"https://www.twitter.com/ssapphyree"},n.createElement(r.fWC,null)),n.createElement("a",{className:"level-item has-text-white",href:"https://www.github.com/sapphyree"},n.createElement(r.hJX,null)),n.createElement("a",{className:"level-item has-text-white",href:"https://www.instagram.com/ssapphyree"},n.createElement(r.Zf_,null)),n.createElement("a",{className:"level-item has-text-white",href:"https://www.discord.com/users/126210192378429440"},n.createElement(r.j2d,null)),n.createElement("a",{className:"level-item has-text-white",href:"https://www.linkedin.com/in/victoria-tilley-09a84a1aa"},n.createElement(r.ltd,null)),n.createElement("a",{className:"level-item has-text-white",href:"mailto:victoriartilley@gmail.com"},n.createElement(l.ixJ,null))))}},5494:function(e,t,a){"use strict";a.d(t,{ZP:function(){return c}});var n=a(7294),r=a(7374),l=a(5610);function c(e){var t=e.children;return n.createElement(s,null,n.createElement(i,null,t),n.createElement(l.Z,null))}function s(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(r.Z,null),t)}function i(e){var t=e.children;return n.createElement("section",{className:"section"},n.createElement("div",{className:"container"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},t))))}},8357:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(7294),r=a(5494);function l(e){var t=e.data.markdownRemark;return n.createElement(r.ZP,null,n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-half"},n.createElement("div",{className:"content"},n.createElement("h1",{className:"title has-text-white"},t.frontmatter.title),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-0c309d4c53f883f4ec1e.js.map