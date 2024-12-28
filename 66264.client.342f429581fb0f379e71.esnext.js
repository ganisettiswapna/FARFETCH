(self.webpackChunk_portal_app_portal_cr=self.webpackChunk_portal_app_portal_cr||[]).push([[66264],{28349:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(61599),l=r(52248);let i=l.Z.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    padding-top: ${({width:e,height:t})=>t/e*100}%;
    background-color: ${({isLoaded:e})=>e?"":"var(--colors-page-primary-loading-surface)"};

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;i.displayName="ColorContainer";let n=(0,a.Z)(i,"ColorContainer")},19483:(e,t,r)=>{"use strict";let a,l,i,n;r.d(t,{Z:()=>y});var o=r(52903),s=r(58724),d=r(2784),c=r(28349);let f=(0,d.forwardRef)(({as:e="div",alt:t,imageContainer:r=c.Z,selected:a=!1,size:l,src:i,unavailable:n=!1,...d},f)=>(0,o.tZ)(e,{"aria-selected":a,"data-unavailable":n,ref:f,...d,children:l&&(0,o.tZ)(s.Z,{container:r,width:l,height:l,alt:t,src:i})}));f.displayName="BaseColorIcon";let u="medium",p={[u]:"medium",big:"big"};var b=r(27772);let m=e=>`
    &[data-unavailable='true']  {
        ${(0,b.Z)("ColorContainer")}  {
            &::after {
                content: "";
                position: absolute;
                ${e?"right: 100%":"left: 100%"};
                top: 0.1rem;
                width: 0px;
                height: 142%;
                ${e?"border-left: var(--borders-border-s) solid var(--colors-actions-ghost-light-enabled-label); border-right: var(--borders-border-s) solid var(--colors-actions-ghost-dark-selected-label);":"border-right: var(--borders-border-s) solid var(--colors-actions-ghost-light-enabled-label); border-left: var(--borders-border-s) solid var(--colors-actions-ghost-dark-selected-label);"}
                transform: ${e?"rotate(45deg) translateX(50%)":"rotate(45deg) translateX(-50%)"};
                transform-origin: top ${e?"left":"right"};
            }
       }
    } 
`;var g=r(68150),h=r(61599),v=r(52248);let x=(0,g.Z)({size:{[u]:20,big:40}[u]})((0,v.Z)(f)`
    ${(a=p[u],l=({[u]:"0.2rem",big:"var(--spacers-c4)"})[u],i=({[u]:"xs",big:"m"})[u],`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: var(--icons-${a}-width);
    max-height: var(--icons-${a}-height);
    overflow: unset;
    margin: 0 ${l};
    padding: ${l};
    background: none;
    flex: 0 0 auto;

    ${(0,b.Z)("ColorContainer")} {
        border-radius: var(--borders-corner-${i});
    }
`)}

    ${(p[u],n=({[u]:"var(--borders-corner-s)",big:"1.2rem"})[u],`
    button&,
    a& {
        display: block;
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            top: calc(-1 * var(--borders-border-s));
            left: calc(-1 * var(--borders-border-s));
            width: 100%;
            height: 100%;
            border: var(--borders-border-s) solid var(--colors-actions-ghost-dark-hover-label);
            opacity: 0;
            border-radius: ${n};
            transition: opacity var(--motion-functional-duration-s)
                var(--motion-functional-easing-standard);
        }

        &.focus-visible:focus,
        &:hover {
            &::before {
                opacity: 1;
            }
        }

        &[aria-selected='true'] {
            &::before {
                top: calc(-1 * var(--borders-border-m));
                left: calc(-1 * var(--borders-border-m));
                border: var(--borders-border-m) solid
                    var(--colors-actions-ghost-dark-selected-label);
                opacity: 1;
            }
        }
    }
`)}

    ${({theme:e})=>m(e.isRTL)}
`),y=(0,h.Z)(x,"ColorIcon")},59415:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(61599),l=r(52903),i=r(8069),n=r(2784),o=r(28519);let s=(0,n.forwardRef)(({expandComponent:e=i.F,children:t,collapseText:r="Less",expandText:a="More",onClick:s,...d},c)=>{let f=(0,n.useRef)(null),u=(0,o.Z)(f,c),[p,b]=(0,n.useState)(!0),[m,g]=(0,n.useState)(!1),h=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{let e=new ResizeObserver(e=>{for(let t of e)p||h.current===t.target.clientWidth||b(!0),!m&&t.target.scrollHeight>t.target.clientHeight?g(!0):p&&m&&t.target.scrollHeight==t.target.clientHeight&&(g(!1),b(!0)),h.current=t.target.clientWidth});return e.observe(f.current),()=>e.disconnect()},[p,m]),(0,l.BX)(i.uT,{"data-collapsed":p,...d,ref:u,children:[t,m&&(0,l.BX)(l.HY,{children:[!p&&(0,l.tZ)(l.HY,{children:"\xa0"}),(0,l.tZ)(e,{as:"button",onClick:e=>{b(!p),null==s||s(e)},children:p?a:r})]})]})});s.displayName="BasePageTitleDescription";var d=r(52248);let c=(0,d.Z)(s)`
    margin-block-end: var(--spacers-c4);
    position: relative;
    overflow: hidden;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */
    color: var(--colors-content-primary-enabled-label);
    -webkit-line-clamp: ${({numberOfVisibleLines:e})=>e};
    -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */

    button {
        outline-offset: -0.2rem;
    }

    &[data-collapsed] button {
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: var(--colors-page-primary-enabled-surface);

        &::before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            left: calc(-1 * var(--spacers-l48));
            width: var(--spacers-l48);
            height: 2.2rem;
            background: linear-gradient(
                to right,
                var(--colors-content-primary-enabled-surface),
                var(--colors-page-primary-enabled-surface)
            );
            border-inline-end: var(--spacers-c8) solid var(--colors-page-primary-enabled-surface);
        }
    }

    &[data-collapsed='false'] {
        display: block;

        & button {
            position: static;
            display: inline;
        }
    }
`;c.defaultProps={numberOfVisibleLines:2};let f=(0,a.Z)(c,"PageTitleDescription")},37866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(8069),l=r(61599),i=r(52248);let n=(0,i.Z)(a.wF)`
    margin-inline-start: var(--spacers-c6);
`,o=(0,l.Z)(n,"PriceDiscount")},31756:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(8069),l=r(61599),i=r(52248);let n=(0,i.Z)(a.wF)``,o=(0,l.Z)(n,"PriceInstallments")},84368:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(8069),l=r(61599),i=r(52248);let n=(0,i.Z)(a.wF)`
    text-decoration: line-through;
`,o=(0,l.Z)(n,"PriceOriginal")},59553:e=>{e.exports={link:"_d09c62",primary:"_f79cb6",secondary:"_af17c2",inherit:"_ab4208",underline:"_ddee3e"}},59021:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var a=r(38939),l=r(28165),i=r(8069),n=r(62320);r(2784);let o=(0,a.Z)("div",{target:"e1u8m1jb0"})({name:"ifk22x",styles:"margin-top:var(--spacers-l12);margin-bottom:var(--spacers-l24)"}),s=e=>{let{url:t,title:r}=e;return(0,l.tZ)(o,null,(0,l.tZ)(n.Z,{href:t},(0,l.tZ)(i.lo,null,r)))},d=(0,a.Z)("div",{target:"e17dmapl1"})("max-width:144rem;margin:0 auto;padding:var(--spacers-l48) var(--spacers-l12);@media (",e=>{let{theme:t}=e;return t.mediaQuery.md},"){padding:var(--spacers-l48) var(--spacers-l24);}@media (",e=>{let{theme:t}=e;return t.mediaQuery.lg},"){padding:var(--spacers-l72) var(--spacers-l48);}"),c=(0,a.Z)(i.uD,{target:"e17dmapl0"})("padding-top:var(--spacers-l24);padding-bottom:var(--spacers-l24);@media (",e=>{let{theme:t}=e;return t.mediaQuery.sm},"){padding-top:var(--spacers-l48);padding-bottom:var(--spacers-l48);}"),f=e=>{let{title:t,description:r,links:a}=e;return(0,l.tZ)(d,null,(0,l.tZ)(i.Tw,null,t),(0,l.tZ)(c,null,r),null==a?void 0:a.map((e,t)=>(0,l.tZ)(s,{url:e.url,title:e.title,key:t})))}},82470:(e,t,r)=>{"use strict";t.hP=t.AV=t.Rl=void 0;var a=o(r(60403)),l=r(51246),i=o(r(29978)),n=o(r(3672));function o(e){return e&&e.__esModule?e:{default:e}}t.Rl=a.default,t.AV=l.breakpoints,t.hP=l.mediaqueries,i.default,n.default},51246:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={xs:"20em",sm:"36em",md:"60em",lg:"80em",xl:"112.5em"},a={xs:"19.9375em",sm:"35.9375em",md:"59.9375em",lg:"79.9375em",xl:"112.4375em"},l={iphone6:"only screen and (min-device-width : 23.4375em) and (max-device-width : 41.6875em) and (orientation : portrait)",iphone6plus:"only screen and (min-device-width : 25.875em) and (max-device-width : 46em) and (orientation : portrait)"};for(var i in r)l[i]="(min-width: "+r[i]+")",l["max-"+i]="(max-width: "+a[i]+")";t.breakpoints=r,t.mediaqueries=l},29978:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(r(60403)),l=r(51246);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=a.default["--gutter"],o=a.default["--columns"],s={handleArgs:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(/^\d+$/.test(t[1]))return this.defineProps(!1,t[1],t[2],t[3]);if(!l.mediaqueries[t[1]])throw Error("mediaquery "+t[1]+" is not defined");return this.defineProps(t[1],t[2],t[3],t[4])},defineProps:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return{bp:e,col:t,sum:r,gut:a}},getDeclWithGutter:function(e,t,r){var a=t/e,l=(1*parseFloat(e/t).toFixed(6)).toString(),n="margin-right";return 1===a?{width:"100%","&:nth-child(1n)":{"margin-bottom":r}}:i({width:"calc(99.999% * "+l+" - ("+r+" - "+r+" * "+l+") )","&:nth-child(1n)":i({"margin-bottom":r},n,r)},"&:nth-child("+a+"n)",i({},n,"0"))},getDeclWithoutGutter:function(e,t){return{width:100*e/t+"%"}}};t.default={grid:function(){var e=s.handleArgs.apply(s,arguments),t=e.bp,r=e.col,a=e.sum,l=e.gut,n="false"!==l?s.getDeclWithGutter(r,a,l):s.getDeclWithoutGutter(r,a);return t?i({},"@media (--"+t+")",n):n}}},3672:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={display:{display:"flex"},"align-center":{"align-items":"center"},"justify-center":{"justify-content":"center"}};t.default={"layout-width":{width:"137rem","max-width":"100%"},clearfix:{"&::before, &::after":{content:"",display:"table"},"&::after":{clear:"both"}},flex:r.display,"flex-inline":{display:"inline-flex"},"flex-row":Object.assign({},r.display,{"flex-direction":"row"}),"flex-row-reverse":Object.assign({},r.display,{"flex-direction":"row-reverse"}),"flex-column":Object.assign({},r.display,{"flex-direction":"column"}),"flex-column-reverse":Object.assign({},r.display,{"flex-direction":"column-reverse"}),"flex-wrap":{"flex-wrap":"wrap"},"flex-wrap-reverse":{"flex-wrap":"wrap-reverse"},"flex-nowrap":{"flex-wrap":"nowrap"},"flex-items-start":{"align-items":"flex-start"},"flex-items-center":{"align-items":"center"},"flex-items-end":{"align-items":"flex-end"},"flex-items-baseline":{"align-items":"baseline"},"flex-items-stretch":{"align-items":"stretch"},"flex-justify-start":{"justify-content":"flex-start"},"flex-justify-center":{"justify-content":"center"},"flex-justify-end":{"justify-content":"flex-end"},"flex-justify-around":{"justify-content":"space-around"},"flex-justify-between":{"justify-content":"space-between"},"flex-center-center":Object.assign({},r["align-center"],r["justify-center"]),"flex-content-start":{"align-content":"flex-start"},"flex-content-end":{"align-content":"flex-end"},"flex-content-center":{"align-content":"center"},"flex-content-between":{"align-content":"space-between"},"flex-content-around":{"align-content":"space-around"},"flex-content-stretch":{"align-content":"space-stretch"},"flex-flex-auto":{flex:"1 1 auto"},"flex-flex-none":{flex:"none"},"flex-1":{flex:1,"flex-basis":"0.000000001px"},"flex-2":{flex:2},"flex-3":{flex:3},"flex-4":{flex:4},"flex-5":{flex:5},"flex-6":{flex:6},"flex-7":{flex:7},"flex-8":{flex:8},"flex-9":{flex:9},"flex-10":{flex:10},"flex-11":{flex:11},"flex-12":{flex:12},"flex-self-start":{"align-self":"flex-start"},"flex-self-center":{"align-self":"center"},"flex-self-end":{"align-self":"flex-end"},"flex-self-stretch":{"align-self":"stretch"},"flex-self-baseline":{"align-self":"baseline"},"layout-fit":{position:"absolute",top:0,right:0,bottom:0,left:0},"layout-scroll":{"-webkit-overflow-scrolling":"touch",overflow:"auto"},"position-xy":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"position-x":{position:"absolute",left:"50%",transform:"translateX(-50%)"},"position-y":{position:"absolute",top:"50%",transform:"translateY(-50%)"}}},60403:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"--gutter":"1.5rem","--width":"137rem","--columns":"12"}},62320:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var a=r(7896),l=r(56666),i=r(59740),n=r(9249),o=r(87371),s=r(11987),d=r(95058),c=r(45754),f=r(2784),u=r(59553),p=r.n(u),b=r(72779),m=r.n(b),g=function(e){function t(){return(0,n.Z)(this,t),(0,s.Z)(this,(0,d.Z)(t).apply(this,arguments))}return(0,c.Z)(t,e),(0,o.Z)(t,[{key:"render",value:function(){var e,t=this.props,r=t.children,n=t.href,o=t.theme,s=t.className,d=t.underline,c=(0,i.Z)(t,["children","href","theme","className","underline"]),u=m()((e={},(0,l.Z)(e,p().link,o),(0,l.Z)(e,p()[o],o),(0,l.Z)(e,p().underline,d),(0,l.Z)(e,s,s),e));return f.createElement("a",(0,a.Z)({href:n,className:u},c),r)}}]),t}(f.Component);g.defaultProps={theme:null};let h=g}}]);