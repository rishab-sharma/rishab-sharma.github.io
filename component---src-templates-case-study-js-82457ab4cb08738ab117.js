(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8iLm":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=new Map,m=new Map,u=new Map,p=0;function h(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,i=r.rootMargin,l=r.threshold;if(d.has(e)&&o(!1),e){var s=function(e){return e?u.has(e)?u.get(e):(p+=1,u.set(e,p.toString()),u.get(e)+"_"):""}(a)+(i?l.toString()+"_"+i:l.toString()),c=m.get(s);c||(c=new IntersectionObserver(g,n),s&&m.set(s,c));var h={callback:t,element:e,inView:!1,observerId:s,observer:c,thresholds:c.thresholds||(Array.isArray(l)?l:[l])};return d.set(e,h),c.observe(e),h}}function f(e){if(e){var t=d.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var i=!1,o=!1;n&&d.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,o=!0),t.observer.root===a&&(o=!0))})),!o&&a&&u.delete(a),r&&!i&&r.disconnect(),d.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=d.get(r);if(a&&n>=0){var i=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),a.inView=i,a.callback(i,e)}}))}var b=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return l(c(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),l(c(t),"node",null),l(c(t),"handleNode",(function(e){t.node&&(f(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),l(c(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){this.node||o(!1)},i.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(f(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(f(this.node),this.node=null)},i.componentWillUnmount=function(){this.node&&(f(this.node),this.node=null)},i.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},i.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,i=a.children,o=a.as,l=a.tag,c=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(o||l||"div",s({ref:this.handleNode},c),i)},a}(r.Component);l(b,"displayName","InView"),l(b,"defaultProps",{threshold:0,triggerOnce:!1});var y={inView:!1,entry:void 0};var w=i.d.div.withConfig({displayName:"IFrame__IframeWrapper",componentId:"sc-1igwbwh-0"})(["position:relative;overflow:hidden;padding-top:56.25%;background-color:",";border-radius:10px;"," iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}.loader{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}"],(function(e){return e.theme.accentColor}),(function(e){return e.livedemo&&Object(i.c)(["@media ","{min-height:400px;}"],(function(e){return e.theme.media.tablet}))})),v=i.d.div.withConfig({displayName:"IFrame__LoaderWrapper",componentId:"sc-1igwbwh-1"})(["svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10%;}.paths{> *{animation-name:pathAni;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:ease-in-out;animation-fill-mode:alternate;transform-origin:50% 50%;transform:scale(0.8);}path:nth-child(1){animation-delay:0.2s;}path:nth-child(2){animation-delay:0.3s;}path:nth-child(3){animation-delay:0.4s;}}@keyframes pathAni{0%{transform:scale(0.8);}50%{transform:scale(1);}100%{transform:scale(0.8);}}"]),_=function(){var e="mask-"+Math.random(),t="paint-"+Math.random();return a.a.createElement(v,null,a.a.createElement("svg",{width:"247",height:"210",viewBox:"0 0 247 210",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("mask",{id:e,"mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"265",height:"210"},a.a.createElement("rect",{width:"265",height:"210",fill:"url(#"+t+")"})),a.a.createElement("g",{className:"paths",mask:"url(#"+e+")"},a.a.createElement("path",{opacity:"0.7",d:"M3.03412 220.341C-13.3618 248.782 -3.61438 285.16 24.8056 301.593V301.593L149.776 84.8118C166.172 56.3704 156.424 19.9924 128.004 3.55939V3.55939L3.03412 220.341Z",fill:"url(#"+t+")"}),a.a.createElement("path",{opacity:"0.7",d:"M43.8915 277.869C27.4956 306.31 37.243 342.688 65.663 359.121V359.121L190.633 142.34C207.029 113.899 197.282 77.5205 168.862 61.0875V61.0875L43.8915 277.869Z",fill:"url(#"+t+")"}),a.a.createElement("path",{opacity:"0.7",d:"M84.749 334.041C68.3531 362.483 78.1005 398.861 106.52 415.294V415.294L231.491 198.512C247.886 170.071 238.139 133.693 209.719 117.26V117.26L84.749 334.041Z",fill:"url(#"+t+")"})),a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:t,x1:"0",y1:"0",x2:"203.966",y2:"257.386",gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#6A98F0"}),a.a.createElement("stop",{offset:"1",stopColor:"#4961DC"})))))},x=function(e){var t=e.src,n=e.livedemo,i=Object(r.useState)(!0),o=i[0],l=i[1],s=function(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(y),a=n[0],i=n[1],o=Object(r.useCallback)((function(n){t.current&&f(t.current),n&&h(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&f(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===y||e.triggerOnce||i(y)})),[o,a.inView,a.entry]}({threshold:0,triggerOnce:!0}),c=s[0],d=s[1];return a.a.createElement(w,{livedemo:n,className:"iframe-wrapper",ref:c},a.a.createElement("iframe",{title:t,style:{opacity:o?"0":"1"},src:d?t:void 0,onLoad:function(){l(!1)},frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope",allowFullScreen:!0}),o&&a.a.createElement(_,null))};x.defaultProps={livedemo:!1};t.a=x},"9CTP":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("IP2g"),o=function(e){var t=e.label,n=e.className,r=e.href,o=e.icon;return a.a.createElement("a",{target:"__blank","aria-label":t,title:t,className:n,href:r},a.a.createElement(i.a,{"aria-hidden":"true",icon:o}))};o.defaultProps={label:"Icon Link"},t.a=o},KrdF:function(e,t,n){"use strict";var r=n("vOnD").d.div.withConfig({displayName:"Flex",componentId:"sc-8m2ajn-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:",";"],(function(e){return e.justify}),(function(e){return e.align}),(function(e){return e.nowrap?"no-wrap":"wrap"}));t.a=r},Nr1y:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("vOnD"),a=n("9CTP"),i=Object(r.c)(["background:",";color:#f8f8f8;border:none;cursor:pointer;transition:0.2s;&:disabled{cursor:not-allowed;opacity:0.6;}&:hover{color:#f8f8f8;background:",";transform:scale(1.05);transition:0.2s;}"],(function(e){return e.theme.gradient}),(function(e){return e.theme.gradient2})),o=r.d.button.withConfig({displayName:"Button",componentId:"sc-19s561s-0"})(["",";width:",";height:",";font-size:12px;margin:0px 0;padding:12px 12px;border-radius:",";"],i,(function(e){return e.width?e.width:"auto"}),(function(e){return e.height?e.width:"auto"}),(function(e){return e.round?"50%":"5px"})),l=Object(r.d)(a.a).withConfig({displayName:"Button__IconButton",componentId:"sc-19s561s-1"})(["",";display:inline-block;font-size:18px;text-align:center;line-height:0;padding:10px;margin:0px 0;border-radius:50%;transition:0.2s;&:hover{transform:scale(1.05);transition:0.2s;}"],i);t.b=o},how0:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"ymx62k-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.a=function(e){var t=e.content,n=e.aside;return a.a.createElement(i,null,a.a.createElement("section",{className:"layout__content"},t&&t),a.a.createElement("section",{className:"layout__aside"},a.a.createElement("aside",{className:"sticky__aside"},n&&n)))}},kqOb:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return g}));var r=n("q1tI"),a=n.n(r),i=n("yBb5"),o=n("vrFN"),l=n("KrdF"),s=n("8iLm"),c=n("Nr1y"),d=n("oU4B"),m=n("v7sR"),u=n("how0"),p=n("vOnD"),h=p.d.h4.withConfig({displayName:"case-studystyle__InfoTitle",componentId:"j51zfo-0"})(["color:",";display:flex;width:100%;justify-content:center;align-items:center;text-align:center;font-weight:600;font-size:16px;margin:15px 0;::after{content:'';border-top:1px solid;margin:0 20px 0 10px;flex:1 0 20px;}"],(function(e){return e.theme.primaryColor})),f=p.d.section.withConfig({displayName:"case-studystyle__CaseStudyWrapper",componentId:"j51zfo-1"})(["margin-top:100px;margin-bottom:100px;li{margin:5px 0;}.case__title{margin-bottom:50px;h1{margin:0;line-height:70px;}.case__links{margin:0;}}.case__info{margin-bottom:70px;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;@media ","{grid-template-columns:0.6fr 1fr;}@media ","{grid-template-columns:1fr;}}.case__iframe-container{width:100%;margin:10px 0;}h1{font-size:1.8rem;margin-bottom:50px;}h2,h3,h4,h5,h6{margin:20px 0;color:",";}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.primaryColor})),g="2582775570";t.default=function(e){var t=e.data,n="https://anuraghazra.github.io"+t.markdownRemark.fields.slug,r=t.markdownRemark.frontmatter,p=r.info.links&&a.a.createElement("div",null,a.a.createElement(h,null,"Links & Resources"),a.a.createElement("ul",null,r.info.links.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:e[1]},e[0]))}))));return a.a.createElement(i.a,null,a.a.createElement(o.a,{slug:t.markdownRemark.fields.slug,title:r.title}),a.a.createElement(f,null,a.a.createElement(l.a,{className:"case__title",justify:"space-between",align:"center"},a.a.createElement("h1",null,r.title),a.a.createElement(d.c,{className:"case__links"},a.a.createElement(c.b,{target:"__blank",as:"a",href:r.demo},"Live Demo"),a.a.createElement(c.a,{label:"github",icon:["fab","github"],href:r.src}))),a.a.createElement("section",{className:"case__info"},a.a.createElement("div",null,a.a.createElement("aside",null,a.a.createElement(h,null,"Idea"),a.a.createElement("p",null,r.info.idea)),a.a.createElement("aside",null,a.a.createElement(h,null,"Core Technologies"),a.a.createElement("ul",null,r.info.tech.map((function(e,t){return a.a.createElement("li",{key:t},e)})))),p),a.a.createElement("div",{className:"case__iframe-container"},a.a.createElement(s.a,{src:r.iframe}))),a.a.createElement(u.a,{content:a.a.createElement("article",{className:"markdown-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),aside:a.a.createElement("div",null,a.a.createElement("h4",null,"Share on"),a.a.createElement(m.a,{baseSlugUrl:n,title:r.title}))})))}},oU4B:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return c}));var r=n("vOnD"),a=r.d.section.withConfig({displayName:"ProjectTemplatestyle__ProjectWrapper",componentId:"m55z5h-0"})(["margin:80px 0;"]),i=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectContent",componentId:"m55z5h-1"})(["display:grid;grid-template-columns:1fr 170px 1fr;grid-template-rows:1fr;align-items:center;"]),o=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectDetail",componentId:"m55z5h-2"})(["padding:50px;background-color:",";box-shadow:",";border-radius:10px;min-height:350px;grid-column:1 / 3;grid-row:1;h2{margin-bottom:25px;}.project__detail-container{width:75%;p{line-height:170%;min-height:250px;}}@media ","{min-height:unset;grid-column:1 / 4;grid-row:unset;padding:30px 30px;.project__detail-container{width:100%;p{min-height:unset;}}}"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.media.fablet})),l=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectLinks",componentId:"m55z5h-3"})(["display:flex;align-items:center;margin:20px 0;margin-bottom:0;a{margin-right:10px;}"]),s=r.d.div.withConfig({displayName:"ProjectTemplatestyle__ProjectPreview",componentId:"m55z5h-4"})(["grid-column:2 / 4;grid-row:1;position:relative;right:-20px;@media ","{right:0;grid-column:1 / 4;margin-bottom:20px;}iframe{border-radius:10px;}"],(function(e){return e.theme.media.fablet})),c=r.d.div.withConfig({displayName:"ProjectTemplatestyle__Tags",componentId:"m55z5h-5"})(["@media ","{display:none;}margin:10px;color:",";display:flex;font-size:24px;svg,i{margin-right:25px;}"],(function(e){return e.theme.media.fablet}),(function(e){return e.theme.primaryColor}))},v7sR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("IP2g");t.a=function(e){var t=e.baseSlugUrl,n=e.title,r="https://facebook.com/sharer/sharer.php?u="+t,o='http://twitter.com/share?text="'+n+'" - &url='+t,l="http://www.reddit.com/submit?url="+t+"&title="+n;return a.a.createElement("div",{className:"blog__social-share"},a.a.createElement("a",{"aria-label":"share on facebook",rel:"noopener norefferer",target:"__blank",href:r},a.a.createElement(i.a,{style:{fontSize:24},icon:["fab","facebook"]})),a.a.createElement("a",{"aria-label":"share on twitter",rel:"noopener norefferer",target:"__blank",href:o},a.a.createElement(i.a,{style:{fontSize:24},icon:["fab","twitter"]})),a.a.createElement("a",{"aria-label":"share on reddit",rel:"noopener norefferer",target:"__blank",href:l},a.a.createElement(i.a,{style:{fontSize:24},icon:["fab","reddit"]})))}}}]);
//# sourceMappingURL=component---src-templates-case-study-js-82457ab4cb08738ab117.js.map