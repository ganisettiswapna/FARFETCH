(self.webpackChunk_portal_app_portal_cr=self.webpackChunk_portal_app_portal_cr||[]).push([[99045],{545:(e,t,r)=>{"use strict";r.d(t,{bf:()=>b,gP:()=>w,aq:()=>y});var i=r(52903),n=r(27772),o=r(61599),a=r(52248);let s=a.Z.div`
    position: relative;
    width: 100%;
    min-height: calc(var(--spacers-c12) * 2 + var(--icons-medium-height));
    padding: var(--spacers-c12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: var(--borders-corner-m);
    word-break: break-word;
    ${({hasIcon:e})=>e?"padding-inline-start: calc(var(--spacers-c12) + var(--icons-medium-width) + var(--spacers-c6));":"padding-inline-start: var(--spacers-c12);"}

    ${(0,n.Z)("Icon")} {
        position: absolute;
        top: calc(50% - var(--spacers-c12));
        left: var(--spacers-c12);
    }
`,l=(0,o.Z)(s,"AlertNotificationContent");var c=r(8069),u=r(95476),d=r(2784),h=r(26527);let p=(0,d.forwardRef)(({children:e,hasIcon:t=!1,iconComponent:r=(0,i.tZ)(u.Z,{id:"infoCircle"}),wrapperComponent:n=c.uT,...o},a)=>(0,i.BX)(l,{ref:a,"aria-live":"polite",hasIcon:t,...o,children:[t&&r,(0,h.Z)(e,n)]}));p.displayName="BaseAlertNotification";let f=p,v=e=>`
        background-color: var(--colors-notifications-light-${e}-default-surface);
        ${(0,n.Z)("Icon")} {
            fill: var(--colors-notifications-light-${e}-default-icon);
        }

        ${(0,n.Z)("AlertNotificationContent")} {
            color: var(--colors-notifications-light-${e}-default-label);
        }
    `,g={info:{iconId:"infoCircle",role:"status"},error:{iconId:"exclamationCircle",role:"alert"},success:{iconId:"tickCircle",role:"status"}},m=e=>{let t=(0,a.Z)(f)`
        ${v(e)}
    `;return t.defaultProps={iconComponent:(0,i.tZ)(u.Z,{id:g[e].iconId}),role:g[e].role},t},w=(0,o.Z)(m("info"),"AlertNotification"),b=(0,o.Z)(m("error"),"AlertErrorNotification"),y=(0,o.Z)(m("success"),"AlertSuccessNotification")},66963:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(52903),n=r(2784),o=r(52248);let a=o.Z.div`
    max-width: 144rem;
    color: var(--colors-general-brand-ui01);
    font-size: 1.4rem;
    margin-block: 2.4rem;
`,s=o.Z.h1`
    margin: 0;
    font-size: 1.5rem;
`,l=o.Z.p`
    color: var(--colors-general-error01);
    font-weight: bold;
    padding-block: 1.2rem;
`,c=o.Z.details`
    white-space: pre-wrap;
`,u=o.Z.summary`
    max-width: fit-content;
    outline: none;
    cursor: pointer;
`,d=({error:e,errorStack:t})=>{var r,n;return(null===(r=null==process?void 0:{NODE_ENV:"production",IS_SINGLE_RENDERER:!0})||void 0===r?void 0:r.NODE_ENV)!=="development"?null:(0,i.BX)(a,{children:[(0,i.tZ)(s,{children:"Oops... Looks like something went wrong!"}),(0,i.tZ)(l,{children:null===(n=null==e?void 0:e.toString)||void 0===n?void 0:n.call(e)}),t&&(0,i.BX)(c,{children:[(0,i.tZ)(u,{children:"View details"}),t]})]})};var h=r(49203);class p extends n.Component{constructor(){super(...arguments),this.state={error:null,errorInfo:null},this.getFallbackComponent=e=>{var t;let{render:r,fallback:o}=this.props;return"function"==typeof r?r(e):o&&(0,n.isValidElement)((0,i.tZ)(o,{}))?(0,i.tZ)(o,{}):(null===(t=null==process?void 0:{NODE_ENV:"production",IS_SINGLE_RENDERER:!0})||void 0===t||t.NODE_ENV,null)}}componentDidCatch(e,t){let{onError:r}=this.props;null==r||r(e,null==t?void 0:t.componentStack),h.monitoringService.error((null==e?void 0:e.message)||e),this.setState({error:e,errorInfo:t})}render(){let{error:e,errorInfo:t}=this.state;if(null!==e){let r={error:e,errorStack:null==t?void 0:t.componentStack};return[this.props.debug&&(0,i.tZ)(d,{...r}),this.getFallbackComponent(r)]}return this.props.children}}p.defaultProps={debug:!1};let f=p},14801:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var i=r(52903),n=r(2784),o=r(45234),a=r(28461);let s=(0,n.forwardRef)(({as:e="div",children:t,disabled:r=!1,error:s=!1,required:l=!1,...c},u)=>{let d=(0,n.useRef)((0,o.g)()),h=!!n.Children.toArray(t).find(e=>{var t;return(null===(t=e.type)||void 0===t?void 0:t.displayName)==="HelperText"}),p=d.current&&h?`helper-${d.current}`:void 0;return(0,i.tZ)(a.Z.Provider,{value:{disabled:r,error:s,required:l,id:d.current,helperId:p},children:(0,i.tZ)(e,{ref:u,...c,children:t})})});s.displayName="BaseFormControl";let l=s;var c=r(61599),u=r(52248);let d=(0,u.Z)(l)`
    width: 100%;
    display: flex;
    flex-direction: column;

    > *:not(:last-child) {
        margin-bottom: var(--spacers-c4);
    }
`,h=(0,c.Z)(d,"FormControl")},18765:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i=r(20042),n=r(27772),o=r(61599),a=r(79915);let s=6,l=(e,t)=>{let r=`${(0,n.Z)(e)} > & > `,i=`${(0,n.Z)(e)} > ${(0,n.Z)("ListItemContent")}`;return Array.from({length:s},(e,t)=>t+1).map(e=>`${r.repeat(e)}${i} {
            padding-left: calc(${(0,a.Y)(t)} * ${e+1});
        }`)};var c=r(79943);let u=({lateralSpacer:e,byDataAttribute:t=!1})=>{let r=t?`[${c.E3}="true"]`:"";return`
        ${(0,n.Z)("ListItemContent")}${r}, ${(0,n.Z)("ListItemGhost")}${r} {
            &::after {
                position: absolute;
                content: '';
                border-bottom: var(--borders-border-s) solid var(--colors-content-primary-enabled-stroke);
                width: calc(100% - 2 * ${(0,a.Y)(e)});
                top: calc(100% - var(--borders-border-s));
                left: ${(0,a.Y)(e)};
            }
        }

        ${(0,n.Z)("ListItemGhost")}${r} {
            &::after {
                left: 0;
                width: 100%;
            }
        }
    `};var d=r(52248);let h=(0,d.Z)("ul",{shouldForwardProp:(0,i.p)("hasDivider","lateralSpacer","roundedCorners","as")})`
    ${({hasDivider:e,lateralSpacer:t,roundedCorners:r})=>`
        width: 100%;
        list-style-type: none;

        ${(0,n.Z)("ListItemContent")} {
            padding: 0 ${(0,a.Y)(t)};
            ${r&&"border-radius: var(--borders-corner-s);"}
        }

        ${l("ListItemSmall",t)}
        ${l("ListItem",t)}

        ${e?u({lateralSpacer:t}):u({lateralSpacer:t,byDataAttribute:!0})}

        ${(0,n.Z)("ListItemSecondaryAction")} {
            padding-right: calc(${(0,a.Y)(t)} - var(--spacers-c10));
        }

        ${(0,n.Z)("ListItem")}:has(${(0,n.Z)("ListItemSecondaryAction")}) {
            ${(0,n.Z)("ListItemContent")} {
                padding-right: 0;
            }
        }
    `}
`;h.defaultProps={lateralSpacer:"c16",roundedCorners:!1};let p=(0,o.Z)(h,"List")},79943:(e,t,r)=>{"use strict";r.d(t,{E3:()=>o,LU:()=>n,df:()=>i});let i="46px",n="34px",o="data-has-divider"},79915:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});let i="c16",n=e=>`var(--spacers-${e||i}, 16px)`},24278:(e,t,r)=>{"use strict";r.d(t,{G2:()=>a,V8:()=>o,nI:()=>i,vg:()=>n});let i={width:340,height:44},n={width:504,height:44},o={SMALL:"small",MEDIUM:"medium"},a={FIXED_HEIGHT:"fixed-height",FIXED_RATIO:"fixed-ratio"}},67195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var i=r(52903),n=r(2784),o=r(24278),a=r(61599),s=r(52248);let l=s.Z.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: ${o.nI.height/o.nI.width*100}%;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: ${100*o.vg.width/o.nI.width}%;
    }

    @media (${({theme:e})=>e.mediaQuery.sm}) {
        padding-bottom: ${o.vg.height/o.vg.width*100}%;

        svg {
            width: 100%;
        }
    }
`;(0,a.Z)(l,"FarfetchChinaLogoContainer");let c=(0,n.forwardRef)(({container:e=l,...t},r)=>{let n=e;return(0,i.tZ)(n,{children:(0,i.BX)("svg",{ref:r,...t,viewBox:"0 0 504 44",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.tZ)("g",{className:"chineseCharacters",children:(0,i.tZ)("path",{d:"M504 24.352h-5.223v12.215a4.704 4.704 0 01-1.407 3.74 4.913 4.913 0 01-3.816 1.378h-6.448l-2.04-3.149h-13.262v1.18h-5.213V26.721h20.097v10.266h4.825a1.92 1.92 0 001.49-.539c.393-.384.594-.918.55-1.46V24.352H463v-4.719h3.193l-2.04-3.548c8.039-.39 11.63-2.24 13.7-4.728h-13.19V6.628h15.476c.396-1.41.599-2.865.601-4.328h5.632c-.092 1.31-.225 3.199-.408 4.328h16.445v4.729h-14.456a58.621 58.621 0 0113.64 4.728l-3.622 3.548H504v4.719zm-8-4.719a65.012 65.012 0 00-13-5.907 20.003 20.003 0 01-13 5.907h26zM481 31.05h-9v3.149h8.99l.01-3.149zM397.812 21.028a28.032 28.032 0 01-8.205 12.39A41.694 41.694 0 00402 37.222l-3.262 4.517a39.285 39.285 0 01-13.58-5.108 45.792 45.792 0 01-12.916 5.108l-2.729-4.397a40.567 40.567 0 0011.376-4.006 27.345 27.345 0 01-4.761-5.688 33.679 33.679 0 01-12.292 10.846L360 34.49c7.802-4.006 13.49-11.347 15.383-18.368h-8.638c-.65.428-1.322.822-2.013 1.182l-2.014-4.737c2.426-1.002 4.762-4.337 5.467-9.014l5.547.841a14.535 14.535 0 01-3.081 7.07h6.04a76.39 76.39 0 001.671-9.123l5.87.921c-.403 2.845-.89 5.562-1.46 8.153h17.98v4.737h-19.208a73.44 73.44 0 01-1.229 3.555h12.866l.886-.4 3.745 1.722zM380 24.374a25.406 25.406 0 005.116 6.149 22.589 22.589 0 004.884-6.15h-10zm13.492-13.31A21.927 21.927 0 00388 5.053l4.324-2.303A20.615 20.615 0 01398 8.479l-4.508 2.584zM449.813 21a27.986 27.986 0 01-8.193 12.37 41.753 41.753 0 0012.38 3.8l-3.261 4.51a39.327 39.327 0 01-13.567-5.1 45.936 45.936 0 01-12.883 5.12l-2.728-4.39a40.531 40.531 0 0011.364-4 27.622 27.622 0 01-4.761-5.68 33.578 33.578 0 01-12.34 10.82l-3.824-4c7.79-4 13.477-11.33 15.369-18.34h-8.636a22.8 22.8 0 01-2.013 1.18l-2.013-4.73c2.436-1 4.761-4.33 5.466-9l5.555.84a14.593 14.593 0 01-3.09 7.06h6.09a78.245 78.245 0 001.7-9.16l5.858.92c-.396 2.84-.879 5.553-1.45 8.14h17.976v4.73H433.56c-.403 1.21-.796 2.42-1.238 3.55h12.862l.886-.4 3.744 1.76zM431 24.34a25.91 25.91 0 005.617 6.14A23.01 23.01 0 00442 24.36l-11-.02zm13.943-13.29a21.083 21.083 0 00-4.943-6l3.892-2.3A19.728 19.728 0 01449 8.47l-4.057 2.58z"})}),(0,i.tZ)("path",{d:"M57.136 19c-1.068-2.38-1.621-3.62-2.369-5.48-.69 1.86-.97 2.43-2.223 5.63L50 25.6h10L57.136 19zM46.567 33.56l-3.712 8.11H32l18.917-39.4h9.166L79 41.67H68.287l-4.047-8.11H46.567zm59.25-14.21c2.139 0 3.028-.14 3.907-.62 1.396-.828 2.262-2.348 2.276-4a4.791 4.791 0 00-2.276-4c-.84-.48-1.73-.57-3.908-.57H93v9.19h12.816zM92.89 41.67H83V2.27h25.761c4.59 0 7.074.57 9.41 2A10.376 10.376 0 01123 13.09c0 4.68-2.435 8.16-6.884 10 3.918 1.38 5.12 3.58 5.21 9.73.19 4.91.481 6.34 1.674 8.87h-10.892c-.721-2.19-.862-3.1-.772-6.87 0-5.72-1.573-7.49-6.643-7.49H92.89v14.34zM169 41.67V2.27h36v8h-26.146v7.39h23.091v8h-23.091v8.11H205v8zM233.466 41.67h-9.862V10.24H210v-8h37v8h-13.574zM295 26.27c-2.757 11.2-10.242 16.83-22.79 16.83-14.224 0-23.21-8.06-23.21-20.75C249 9.35 258.27.9 272.446.9c6.789 0 12.116 1.81 16.334 5.67a17.216 17.216 0 015.66 9.43h-10.467c-1.962-5-5.797-7.44-11.605-7.44-7.77 0-13.146 5.58-13.146 13.59 0 7.83 5.337 13.26 12.96 13.26 6.18 0 9.878-2.81 12.115-9.15l10.703.01zM330.13 2.27v15.36h-20.28V2.27H300v39.4h9.87V25.6h20.28v16.07H340V2.27zM0 41.67V2.27h35v8H9.996v7.39h22.979v8H9.995v16zM129 41.67V2.27h35v8h-24.96v7.39h22.986v8H139.04v16z M169 41.67V2.27h36v8h-26.146v7.39h23.091v8h-23.091v8.11H205v8zM233.466 41.67h-9.862V10.24H210v-8h37v8h-13.574zM295 26.27c-2.757 11.2-10.242 16.83-22.79 16.83-14.224 0-23.21-8.06-23.21-20.75C249 9.35 258.27.9 272.446.9c6.789 0 12.116 1.81 16.334 5.67a17.216 17.216 0 015.66 9.43h-10.467c-1.962-5-5.797-7.44-11.605-7.44-7.77 0-13.146 5.58-13.146 13.59 0 7.83 5.337 13.26 12.96 13.26 6.18 0 9.878-2.81 12.115-9.15l10.703.01zM330.13 2.27v15.36h-20.28V2.27H300v39.4h9.87V25.6h20.28v16.07H340V2.27zM0 41.67V2.27h35v8H9.996v7.39h22.979v8H9.995v16zM129 41.67V2.27h35v8h-24.96v7.39h22.986v8H139.04v16z"})]})})});c.displayName="BaseFarfetchChinaLogo";let u=(0,s.Z)(c)`
    .chineseCharacters {
        display: none;
    }

    @media (${({theme:e})=>e.mediaQuery.sm}) {
        .chineseCharacters {
            display: inline;
        }
    }
`},32241:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(52903);let n=(0,r(2784).forwardRef)((e,t)=>(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 340.19 42.24",...e,ref:t,children:(0,i.tZ)("path",{d:"M56.74 18.14c-1.1-2.39-1.67-3.63-2.44-5.49-.71 1.86-.95 2.43-2.29 5.63l-2.62 6.44H59.7zM46.43 32.69l-3.68 8.12H32L50.72 1.38h9.07L78.5 40.81H67.91l-4-8.12zm58.85-14.22c2.19 0 3.1-.14 4-.62a4.68 4.68 0 002.34-4 4.72 4.72 0 00-2.34-4c-.86-.48-1.77-.58-4-.58H92.15v9.12zM92.15 40.81h-9.88V1.38H108c4.58 0 7.06.58 9.4 2a10.38 10.38 0 014.82 8.83c0 4.68-2.43 8.16-6.87 10 3.91 1.39 5.11 3.58 5.2 9.74.19 4.92.48 6.35 1.67 8.88h-10.88c-.72-2.2-.86-3.1-.76-6.88 0-5.72-1.58-7.49-6.64-7.49H92.15zm76.27 0V1.38h36.08v8h-26.2v7.4h23.15v8H178.3v8.12h26.2v8zm64.72 0h-9.88V9.35h-13.65v-8h37.13v8h-13.6zm62-15.42c-2.82 11.22-10.5 16.85-23.24 16.85-14.51 0-23.68-8.07-23.68-20.76 0-13 9.45-21.48 23.91-21.48 6.93 0 12.37 1.81 16.66 5.68a17.2 17.2 0 015.78 9.45h-10.65c-2-5-5.91-7.45-11.83-7.45-7.93 0-13.41 5.59-13.41 13.61 0 7.82 5.44 13.27 13.22 13.27 6.3 0 10.07-2.82 12.36-9.17zm35.18-24.01v15.37H310V1.38h-9.88v39.43H310V24.72h20.29v16.09h9.87V1.38zM0 40.81V1.38h34.6v8H9.88v7.4h22.67v8H9.88v16.03zm128.71 0V1.38h34.61v8h-24.73v7.4h22.72v8h-22.72v16.03z"})}));n.displayName="BaseFarfetchGlobalLogo";var o=r(52248);let a=(0,o.Z)(n)``;a.displayName="FarfetchGlobalLogo";let s=a},9741:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var i=r(52903),n=r(2784),o=r(8069),a=r(61599),s=r(52248);let l=`
outline: 0.1rem dashed;
outline: 0.1rem auto Highlight;
outline: 0.1rem auto -webkit-focus-ring-color;
outline-offset: -0.2rem;
`,c=(0,s.Z)(o.Yw)`
    @media (${({theme:e})=>e.mediaQuery.sm}) {
        padding-inline-end: var(--spacers-c16);
        padding-inline-start: var(--spacers-c16);
    }

    min-width: fit-content;
    padding-top: 1.8rem;
    padding-bottom: var(--spacers-c4);
    display: inline-block;
    border: none;
    outline: none;
    color: ${({selected:e})=>e?"var(--colors-navigation-primary-active-label)":"var(--colors-navigation-primary-enabled-label)"};
    cursor: pointer;
    padding-inline-end: var(--spacers-c8);
    padding-inline-start: var(--spacers-c8);
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &.focus-visible,
    &[data-focus-visible-added] {
        ${l}
    }

    &:focus-visible {
        ${l}
    }

    &:first-of-type {
        position: relative;
        padding-inline-start: 0;

        &.focus-visible,
        &[data-focus-visible-added] {
            outline: none;

            &::before {
                content: '';

                @media (${({theme:e})=>e.mediaQuery.sm}) {
                    left: calc(var(--spacers-c16) * -1);
                    width: calc(100% + var(--spacers-c16));
                }
                position: absolute;
                top: 0;
                left: calc(var(--spacers-c8) * -1);
                width: calc(100% + var(--spacers-c8));
                height: 100%;
                ${l}
            }
        }

        &:focus-visible {
            outline: none;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: calc(var(--spacers-c8) * -1);
                width: calc(100% + var(--spacers-c8));
                height: 100%;
                ${l}

                @media (${({theme:e})=>e.mediaQuery.sm}) {
                    left: calc(var(--spacers-c16) * -1);
                    width: calc(100% + var(--spacers-c16));
                }
            }
        }
    }

    &:hover {
        color: var(--colors-navigation-primary-hover-label);
    }
`,u=(0,a.Z)(c,"TabContainer");var d=r(74719),h=r(69795),p=r(65231),f=r(28519);let v=(0,n.forwardRef)(({children:e,index:t,onClick:r,onBlur:o,onFocus:a,as:s="button",...l},c)=>{let{selectedIndex:v,onSelectTab:g,setFocusedIndex:m}=(0,n.useContext)(d.Z),{descendantPosition:w,descendantRef:b}=(0,p.Z)(t),y=(0,f.Z)(b||null,c),A=t===v,E=()=>{g(t)},O=e=>{null==r||r(e),E()},_=e=>{null==o||o(e),m(-1)},L=e=>{null==a||a(e),m(w)};return"number"!=typeof t?null:(0,i.tZ)(h.Z,{index:t,children:(0,i.tZ)(u,{tabIndex:A?0:-1,ref:y,as:s,...l,onClick:O,onFocus:L,onBlur:_,selected:A,role:"tab",id:`tab-${t}`,"aria-controls":`tabpanel-${t}`,"aria-expanded":A,children:e})})});v.displayName="Tab";let g=(0,a.Z)(v,"Tab")},85816:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var i=r(52903),n=r(2784),o=r(29306),a=r(52248);let s=a.Z.span`
    position: absolute;
    bottom: 0;
    left: ${({left:e})=>e+"px"};
    width: ${({width:e})=>e+"px"};
    height: 0.2rem;
    z-index: 1;
    transition: left var(--motion-functional-duration-m), width var(--motion-functional-duration-m);
    background-color: var(--colors-navigation-primary-active-indicator);
`;var l=r(74719),c=r(75590);let u=()=>{let e=(0,c.a)(),{selectedIndex:t}=(0,n.useContext)(l.Z),{descendants:r}=(0,n.useContext)(o.Z),[a,u]=(0,n.useState)(0),[d,h]=(0,n.useState)(0),p=(0,n.useRef)(null),f=(0,n.useRef)(null),v=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(0,n.useCallback)(()=>{if(!f.current||!v.current)return;let t=f.current.offsetLeft,r=v.current.clientWidth,i=f.current.clientWidth||0,n=parseFloat(window.getComputedStyle(f.current).getPropertyValue("padding-inline-start"))||0,o=parseFloat(window.getComputedStyle(f.current).getPropertyValue("padding-inline-end"))||0,a=i-n-o,s=e.isRTL?r-t-o-a:t+n;u(a),h(s)},[e.isRTL,r]);return(0,n.useLayoutEffect)(()=>{if(g.current)return g.current=new ResizeObserver(e=>{e.some(({target:e})=>f.current===e)&&m()}),()=>{g.current&&(g.current.disconnect(),g.current=null)}},[m,t]),(0,n.useLayoutEffect)(()=>{var e,i;if(v.current=p.current.parentElement,r.length&&(f.current=null===(e=r.find(e=>e.index===t))||void 0===e?void 0:e.descendant,f.current))return null===(i=g.current)||void 0===i||i.observe(f.current),m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m),g.current&&g.current.unobserve(f.current)}},[m,t,r]),(0,i.tZ)(s,{ref:p,width:a,left:d})};var d=r(20042),h=r(61599);let p=(0,a.Z)("div",{shouldForwardProp:(0,d.p)("hasFade","as")})`
    position: relative;
    width: 100%;

    ::after {
        content: '';
        position: absolute;
        top: 4.29rem;
        left: 0;
        width: 100%;
        border-bottom: var(--borders-border-s) solid var(--colors-navigation-primary-enabled-stroke);
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        z-index: 1;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            var(--colors-general-ui-background)
        );
        pointer-events: none;
        transition: opacity var(--motion-functional-duration-m);
        ${({hasFade:e})=>e?"opacity: 1; transition-timing-function: var(--motion-functional-easing-decelerated);":"opacity: 0; transition-timing-function: var(--motion-functional-easing-accelerated);"}
    }
`,f=(0,h.Z)(p,"TabsListWrapper"),v=(0,a.Z)("div",{shouldForwardProp:(0,d.p)("hasScroll","as")})`
    position: relative;
    display: flex;

    ${({hasScroll:e})=>e?`
                overflow: scroll;

                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */

                /* Hide scrollbar for Chrome, Safari and Opera */
                &::-webkit-scrollbar {
                    display: none;
                }`:""}
`,g=(0,h.Z)(v,"TabListContainer");var m=r(63785);let w=8,b=44,y=.4,A=({setHasScroll:e,setHasFade:t,tabListRef:r})=>{let{descendants:i}=(0,n.useContext)(o.Z),a=(0,c.a)(),s=(0,n.useCallback)(r=>{let i=r.scrollWidth>r.clientWidth,n=r.scrollWidth-r.clientWidth-w,o=a.isRTL?r.scrollLeft>=-n:r.scrollLeft<n;e(i),t(i&&o)},[a.isRTL,e,t]);(0,n.useEffect)(()=>{let e=r.current;return s(e),e.addEventListener("scroll",()=>s(e)),window.addEventListener("resize",()=>s(e)),()=>{e.removeEventListener("scroll",()=>s(e)),window.removeEventListener("resize",()=>s(e))}},[s,r,i.length])};var E=r(8721);let O=({tabListRef:e,selectedIndex:t})=>{let r=(0,n.useRef)(null),i=(0,n.useRef)(null),a=(0,n.useRef)(null),{descendants:s}=(0,n.useContext)(o.Z),l=(0,n.useCallback)((e,t)=>{let r=e.parentElement,i=t.offsetLeft,n=t.offsetLeft+t.offsetWidth,o=n+b>r.clientWidth+e.scrollLeft,a=i-b<e.scrollLeft;if(o){let t=n-r.clientWidth+b;(0,E.NY)(e,t,y)}else if(a){let t=i-b;(0,E.NY)(e,t,y)}},[]);(0,n.useEffect)(()=>(r.current=new ResizeObserver(e=>{e.some(({target:e})=>i.current===e)&&l(a.current,i.current)}),()=>{r.current&&(r.current.disconnect(),r.current=null)}),[l,t]),(0,n.useEffect)(()=>{var n,o;if(a.current=e.current,s.length&&(i.current=null===(n=s.find(e=>e.index===t))||void 0===n?void 0:n.descendant,i.current))return l(a.current,i.current),null===(o=r.current)||void 0===o||o.observe(i.current),()=>{r.current&&r.current.unobserve(i.current)}},[t,l,e,s])};var _=r(28519);let L=(0,n.forwardRef)(({children:e,sliderComponent:t=u,wrapperComponent:r=f,...o},a)=>{let{isRTL:s}=(0,c.a)(),{hasFade:d,setHasFade:h,setHasScroll:p,selectedIndex:v,hasScroll:w,focusedIndex:b=-1}=(0,n.useContext)(l.Z),{handleKeyDown:y}=(0,m.Z)({isRTL:s,focusedIndex:b}),E=(0,n.useRef)(),L=(0,_.Z)(a,E);return A({setHasFade:h,setHasScroll:p,tabListRef:E}),O({tabListRef:E,selectedIndex:v}),(0,i.tZ)(r,{hasFade:d,children:(0,i.BX)(g,{hasScroll:w,...o,ref:L,onKeyDown:y,role:"tablist",children:[e,(0,i.tZ)(t,{})]})})});L.displayName="TabList";let S=(0,h.Z)(L,"TabList")},70075:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var i=r(52903),n=r(2784),o=r(74719),a=r(69795),s=r(61599),l=r(52248);let c=l.Z.div`
    opacity: 0;
    animation-name: ${({isSelected:e})=>e?"fadeIn":"unset"};
    animation-fill-mode: forwards;
    animation-duration: ${({isSelected:e})=>e?"var(--motion-functional-duration-l)":"unset"};
    animation-delay: ${({isSelected:e})=>e?"var(--motion-functional-duration-s)":"unset"};
    animation-timing-function: ${({isSelected:e})=>e?"var(--motion-emotional-easing-decelerated);":"unset"};

    @keyframes fadeIn {
        0% {
            display: none;
            opacity: 0;
        }

        1% {
            display: block;
        }

        100% {
            display: block;
            opacity: 1;
        }
    }
`,u=(0,s.Z)(c,"TabPanelContainer"),d=(0,n.forwardRef)(({children:e,index:t,forceRender:r=!1,...s},l)=>{let{selectedIndex:c,renderAll:d}=(0,n.useContext)(o.Z),h=t===c,p=(0,n.useRef)(!1),f=!!p.current&&!h;(0,n.useEffect)(()=>{p.current=!0},[]);let[v,g]=(0,n.useState)(h);return((0,n.useEffect)(()=>{h&&g(!0)},[h]),"number"!=typeof t)?null:(0,i.tZ)(a.Z,{index:t,children:(0,i.tZ)(u,{tabIndex:h?0:-1,ref:l,hidden:f,...s,isSelected:h,role:"tabpanel",id:`tabpanel-${t}`,"aria-labelledby":`tab-${t}`,children:v||d||r?e:null})})});d.displayName="TabPanel";let h=(0,s.Z)(d,"TabPanel")},20545:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(61599),n=r(52248);let o=n.Z.div`
    margin-top: var(--spacers-l24);
`,a=(0,i.Z)(o,"TabPanels")},10251:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(52903),n=r(2784),o=r(90841),a=r(74719);let s=({children:e,index:t,onChange:r,renderAll:s=!1})=>{let[l,c]=(0,n.useState)(-1),[u,d]=(0,n.useState)(!1),[h,p]=(0,n.useState)(!1),f=e=>{e!==t&&(null==r||r(e))};return(0,i.tZ)(o.Z,{children:(0,i.tZ)(a.Z.Provider,{value:{focusedIndex:l,onSelectTab:f,selectedIndex:t,setFocusedIndex:c,hasFade:u,setHasFade:d,hasScroll:h,setHasScroll:p,renderAll:s},children:e})})};s.displayName="TabsProvider";let l=s;var c=r(61599),u=r(52248);let d=u.Z.div``,h=(0,c.Z)(d,"TabsContainer"),p=(0,n.forwardRef)(({children:e,index:t,onChange:r,renderAll:n,containerComponent:o=h,...a},s)=>(0,i.tZ)(l,{index:t,onChange:r,renderAll:n,children:(0,i.tZ)(o,{ref:s,...a,children:e})}));p.displayName="TabsControlled";let f=p},26683:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=r(2784).createContext({index:-1})},69795:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(52903),n=r(2784),o=r(26683);let a=({index:e,children:t})=>{let r=(0,n.useMemo)(()=>({index:e}),[e]);return(0,i.tZ)(o.Z.Provider,{value:r,children:t})}},74719:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=(0,r(2784).createContext)({hasFade:!1,setHasFade:()=>null,hasScroll:!1,setHasScroll:()=>null,getItemIndex:()=>null,focusedIndex:-1,onSelectTab:()=>null,selectedIndex:0,setFocusedIndex:()=>null,renderAll:!1})},52894:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(61599),n=r(52248);let o=n.Z.div`
    width: 12.4rem;
    height: 1.6rem;
    display: grid;
    align-items: center;
    grid-column: 2;

    @media (${({theme:e})=>e.mediaQuery.md}) {
        width: 20.1rem;
        height: 2.6rem;
    }
`,a=(0,i.Z)(o,"TopBarBrandArea")},2809:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(61599),n=r(52248);let o=n.Z.div`
    display: flex;
    align-items: center;
`,a=(0,i.Z)(o,"TopBarContentArea")},41191:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(27772);let n=`
    background-color: var(--colors-navigation-primary-active-surface);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: var(--spacers-c16);
    width: 100%;

    ${(0,i.Z)("TopBarBrandArea")} + ${(0,i.Z)("TopBarContentArea")} {
        display: flex;
        justify-content: flex-end;
    }
`},29306:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let i=(0,r(2784).createContext)({descendants:[],registerDescendant:()=>{},unregisterDescendant:()=>{}})},90841:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(52903),n=r(29306),o=r(2784);let a=({children:e})=>{let[t,r]=(0,o.useState)([]),a=o.useCallback(({element:e,index:t})=>{e&&r(r=>{var i;if(r.length){let i=r.findIndex(e=>e.index===t);if(-1!==i)return[...r.slice(0,i),{...r[i],descendant:e},...r.slice(i+1,r.length)]}let n={descendant:e,index:t};if(t<(null===(i=r[r.length-1])||void 0===i?void 0:i.index)){let e=r.findIndex(e=>e.index>t);return[...r.slice(0,e),n,...r.slice(e,r.length)]}return[...r,n]})},[r]),s=(0,o.useCallback)(({index:e})=>{r(t=>t.filter(t=>t.index!==e))},[r]),l=(0,o.useMemo)(()=>({descendants:t,registerDescendant:a,unregisterDescendant:s}),[t,a,s]);return(0,i.tZ)(n.Z.Provider,{value:l,children:e})};a.displayName="DescendantProvider";let s=a},65231:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(29306),n=r(2784);let o=e=>{let[t,r]=(0,n.useState)();return[t,(0,n.useCallback)(t=>{e.current=t,r(t)},[])]},a=e=>{let[t,r]=o((0,n.useRef)(null)),{descendants:a,registerDescendant:s,unregisterDescendant:l}=(0,n.useContext)(i.Z),c=a.findIndex(t=>t.index===e);return(0,n.useEffect)(()=>(null==s||s({element:t,index:e}),()=>null==l?void 0:l({index:e})),[e,t]),{descendantPosition:c,descendantRef:r,descendants:a}}},63785:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(29306),n=r(2784);let o=({isRTL:e,focusedIndex:t})=>{let{descendants:r}=(0,n.useContext)(i.Z);return{handleKeyDown:(0,n.useCallback)(i=>{if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(i.key))return;let n=r.findIndex((e,r)=>r===t);if(!r.length||1===r.length)return;let o=()=>r[0],a=()=>r[r.length-1],s=()=>t===r.length-1?o():r[n+1],l=()=>0===t?a():r[n-1],c=({descendant:e})=>{e.focus()};switch(i.key){case"ArrowDown":i.preventDefault(),c(s());break;case"ArrowUp":i.preventDefault(),c(l());break;case"ArrowLeft":i.preventDefault(),c(e?s():l());break;case"ArrowRight":i.preventDefault(),c(e?l():s());break;case"PageUp":case"Home":i.preventDefault(),c(o());break;case"PageDown":case"End":i.preventDefault(),c(a())}},[t,e,r])}}},8721:(e,t,r)=>{"use strict";r.d(t,{NY:()=>o,jt:()=>n,to:()=>i});let i=e=>e<.5?2*e*e:-1+(4-2*e)*e,n=(e,t=1)=>{let r=1e3*t,i=0,n=0,o=0,a=t=>{0===i?i=t:o=t-i,"function"==typeof e.start&&i===t?(e.start(),window.requestAnimationFrame(a)):o<r?("function"==typeof e.progress&&(n=o/r,e.progress(n)),window.requestAnimationFrame(a)):"function"==typeof e.done&&e.done()};return window.requestAnimationFrame(a)},o=(e,t,r,o,a)=>{let s=a?e.scrollTop:e.scrollLeft,l=t-s;n({progress:t=>{let r=s+i(t)*l;a?e.scroll(0,r):e.scroll(r,0)},done:()=>{a?e.scroll(0,s+l):e.scroll(s+l,0),"function"==typeof o&&o()}},r)}},45234:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});let i=0,n=()=>`unid-${++i}`},26527:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(52903);let n=(e,t)=>e&&("string"==typeof e?(0,i.tZ)(t,{children:e}):e)},91965:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];(root.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),ARRAY_BUFFER&&(root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(r){return new Sha256(t,!0).update(r)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<OUTPUT_TYPES.length;++r){var i=OUTPUT_TYPES[r];t[i]=createOutputMethod(i,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(r,i){return new HmacSha256(r,t,!0).update(i)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var i=OUTPUT_TYPES[r];t[i]=createHmacOutputMethod(i,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,r){var i,n=typeof e;if("string"===n){var o,a=[],s=e.length,l=0;for(i=0;i<s;++i)(o=e.charCodeAt(i))<128?a[l++]=o:(o<2048?a[l++]=192|o>>6:(o<55296||o>=57344?a[l++]=224|o>>12:(o=65536+((1023&o)<<10|1023&e.charCodeAt(++i)),a[l++]=240|o>>18,a[l++]=128|o>>12&63),a[l++]=128|o>>6&63),a[l++]=128|63&o);e=a}else if("object"===n){if(null===e)throw Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw Error(ERROR)}else throw Error(ERROR);e.length>64&&(e=new Sha256(t,!0).update(e).array());var c=[],u=[];for(i=0;i<64;++i){var d=e[i]||0;c[i]=92^d,u[i]=54^d}Sha256.call(this,t,r),this.update(u),this.oKeyPad=c,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"===r){if(null===e)throw Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw Error(ERROR)}else throw Error(ERROR);t=!0}for(var i,n,o=0,a=e.length,s=this.blocks;o<a;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(n=this.start;o<a&&n<64;++o)s[n>>2]|=e[o]<<SHIFT[3&n++];else for(n=this.start;o<a&&n<64;++o)(i=e.charCodeAt(o))<128?s[n>>2]|=i<<SHIFT[3&n++]:(i<2048?s[n>>2]|=(192|i>>6)<<SHIFT[3&n++]:(i<55296||i>=57344?s[n>>2]|=(224|i>>12)<<SHIFT[3&n++]:(i=65536+((1023&i)<<10|1023&e.charCodeAt(++o)),s[n>>2]|=(240|i>>18)<<SHIFT[3&n++],s[n>>2]|=(128|i>>12&63)<<SHIFT[3&n++]),s[n>>2]|=(128|i>>6&63)<<SHIFT[3&n++]),s[n>>2]|=(128|63&i)<<SHIFT[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.block=s[16],this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,r,i,n,o,a,s,l,c,u,d=this.h0,h=this.h1,p=this.h2,f=this.h3,v=this.h4,g=this.h5,m=this.h6,w=this.h7,b=this.blocks;for(e=16;e<64;++e)t=((n=b[e-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,r=((n=b[e-2])>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,b[e]=b[e-16]+t+b[e-7]+r<<0;for(e=0,u=h&p;e<64;e+=4)this.first?(this.is224?(s=300032,w=(n=b[0]-1413257819)-150054599<<0,f=n+24177077<<0):(s=704751109,w=(n=b[0]-210244248)-1521486534<<0,f=n+143694565<<0),this.first=!1):(t=(d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),r=(v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7),i=(s=d&h)^d&p^u,n=w+r+(a=v&g^~v&m)+K[e]+b[e],o=t+i,w=f+n<<0,f=n+o<<0),t=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7),i=(l=f&d)^f&h^s,n=m+r+(a=w&v^~w&g)+K[e+1]+b[e+1],o=t+i,m=p+n<<0,t=((p=n+o<<0)>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),r=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7),i=(c=p&f)^p&d^l,n=g+r+(a=m&w^~m&v)+K[e+2]+b[e+2],o=t+i,g=h+n<<0,t=((h=n+o<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),r=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7),i=(u=h&p)^h&f^c,n=v+r+(a=g&m^~g&w)+K[e+3]+b[e+3],o=t+i,v=d+n<<0,d=n+o<<0;this.h0=this.h0+d<<0,this.h1=this.h1+h<<0,this.h2=this.h2+p<<0,this.h3=this.h3+f<<0,this.h4=this.h4+v<<0,this.h5=this.h5+g<<0,this.h6=this.h6+m<<0,this.h7=this.h7+w<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,i=this.h3,n=this.h4,o=this.h5,a=this.h6,s=this.h7,l=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a];return this.is224||(l+=HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]),l},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,i=this.h3,n=this.h4,o=this.h5,a=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,i>>24&255,i>>16&255,i>>8&255,255&i,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,a>>24&255,a>>16&255,a>>8&255,255&a];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,255&s),l},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return exports}).call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},61147:(e,t,r)=>{"use strict";r.d(t,{I7:()=>o,Vo:()=>n,uu:()=>i});let i="guest",n="login",o="register"},95407:(e,t,r)=>{"use strict";r.d(t,{APPLE_ACCOUNT_LINKING_VIEW:()=>S,CHECKOUT_GUEST_REGISTRATION_LOGIN_TYPE:()=>b,CHECKOUT_LOGIN_MODAL_OTP_VIEW:()=>_,CHECKOUT_LOGIN_MODAL_VIEW:()=>O,CHECKOUT_MODAL_LOGIN_TYPE:()=>g,CHECKOUT_PAGE_LOGIN_TYPE:()=>w,EMAIL_CONFIRMATION_VIEW:()=>R,EMAIL_VALIDATION_ERROR_VIEW:()=>M,EMAIL_VALIDATION_RETRY_VIEW:()=>$,EMAIL_VALIDATION_VIEW:()=>D,FACEBOOK_ACCOUNT_LINKING_VIEW:()=>C,FORGOT_PASSWORD_CONFIRM_VIEW:()=>N,FORGOT_PASSWORD_VIEW:()=>P,GOOGLE_ACCOUNT_LINKING_VIEW:()=>Z,GOOGLE_ONE_TAP_ACCOUNT_LINKING_VIEW:()=>I,GUEST_TAB_NAME:()=>p.uu,LOGIN_TAB_NAME:()=>p.Vo,LoginProvider:()=>eN,LoginProviderWithInitialState:()=>eR,ONE_TIME_PASSWORD_VIEW:()=>j,REGISTER_TAB_NAME:()=>p.I7,RESET_PASSWORD_LINK_EXPIRED_VIEW:()=>V,RESET_PASSWORD_SUCCESS_VIEW:()=>x,RESET_PASSWORD_VIEW:()=>T,UNIVERSAL_LOGIN_MODAL_VIEW:()=>E,UNIVERSAL_MODAL_LOGIN_TYPE:()=>v,VERIFICATION_CODE_VIEW:()=>L,VIP_LOGIN_VIEW:()=>k,VIP_PAGE_LOGIN_TYPE:()=>y,isLoginOrRegisterHash:()=>eg,performanceMarks:()=>f,useLogin:()=>o});var i=r(2784);let n=(0,i.createContext)({setUserEmailInput:e=>{},isCheckout:!1,isLoginModalOpened:!1,isLoginBottomSheetOpened:!1,isLoginFallbackPage:!1,shouldOpenLoginOnWishlistCTA:!1,loginType:"na",defaultTab:"",trackingArea:"",closeLoginModal:()=>{},openLoginModal:(e,t)=>{},setOnCloseLoginModal:e=>{},openCheckoutLoginModal:e=>{},openWishlistLoginModal:e=>{},loginModalOptions:{onCloseLoginModal:()=>{},onLoginSuccess:async()=>{},onRegisterSuccess:async()=>{},onWechatAuthentication:async()=>{},skipFallbackToPage:!1,headerTitle:null,headerDescription:null,trackingArea:null},isVipBr:!1,isDebug:!1,view:{currentView:"",previousView:"",setView:e=>{},returnToPreviousView:()=>{},isAccountLinking:!1,isAccountLinkingConfirmation:!1,setIsAccountLinkingConfirmation:e=>{},isEmailLessForgotPassword:!1,setIsEmailLessForgotPassword:e=>{},isVipPage:!1},tab:{currentTab:"",setCurrentTab:e=>{}},bottomSheet:{shouldOpen:!1,shouldOpenOnAddToWishlist:!1,setShouldOpen:e=>{},open:e=>{}},user:{isLogged:!1,hasAccount:!1,isPasswordless:!1,emailRef:{current:""}},accountLinking:{email:"",token:""},setAccountLinking:e=>{},setUserHasAccount:e=>{},setIsPasswordless:e=>{},redirectResult:"",setRedirectResult:e=>{},setAdd2WishlistCooldown:()=>{},shouldSetAdd2WishListCooldown:!1,isCooldownPeriodOver:!1}),o=()=>(0,i.useContext)(n);var a=r(28165);let s="campaign",l="login.aspx",c="checkout/login.aspx",u="checkout/basket.aspx",d="from",h="confirmationpage";var p=r(61147);let f={NAME:"loginmodal",START:"loginmodal.start",LOADED:"loginmodal.loaded",END:"loginmodal.end",TIME_TO_LOAD:"TTLLM",TIME_TO_INTERACTIVE:"TTILM"},v="universal_modal",g="checkout_modal",m="universal_page",w="checkout_page",b="checkout_guest_registration_page",y="vip_page",A="na",E="universal-login-modal",O="checkout-login-modal",_="checkout-login-otp-modal",L="verification-code-modal",S="apple-account-linking",Z="google-account-linking",I="google-one-tap-account-linking",C="facebook-account-linking",k="vip-login",P="forgot-password",T="reset-password",V="reset-password-link-expired",x="reset-password-success",N="forgot-password-confirm",R="email-confirmation",D="email-validation",M="email-validation-error",$="email-validation-retry",j="one-time-password",H=[S,Z,C],z=[E,O,_,S,Z,I,C,L,P,N,T,V,x,k,R,D,M,$,j],B="UniversalLogin",W="CheckoutLogin",F="VipLogin",U="ForgotPassword",G="ResetPassword",Y="ResetPasswordLinkExpired",K="#register",J="should_open",X="show_bottom_sheet",q="_add2wl_lgn",Q=2592e6;function ee(e){return!!window.location.pathname.endsWith(e)}function et(e){let t=ee(l),r=e.has(s);return t&&r}function er(e){let t=ee(l),r=e.has(d)&&e.get(d)===h;return t&&r}function ei(){var e,t;return"undefined"==typeof window?null:(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.pathname.split("/")).includes("farfetch-partnership")?"ff_partnership":null}function en(e){return e===m||e===b||e===w||e===y}function eo(){var e,t;if(!ee(u))return!1;let r=new URLSearchParams(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.search);return r.has("clm")&&"open"===r.get("clm")}function ea(){var e,t;if("undefined"==typeof window)return A;let r=new URLSearchParams(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.search);return er(r)?b:!ee(l)||ee(c)||et(r)?ee(c)?w:et(r)?y:A:m}let es={[B]:E,[W]:O,FromCheckoutConfirmationPage:"from-checkout-confirmation-page",[F]:k,[U]:P,[G]:T,[Y]:V,EmailValidation:D,EmailValidationError:M},el={[B]:m,[W]:w,[F]:y,[U]:m,[G]:m,[Y]:m},ec=e=>null!==e&&"object"==typeof e,eu=e=>"function"==typeof e,ed=e=>"boolean"==typeof e,eh=e=>"string"==typeof e,ep=localStorage,ef=()=>{window.location.replace("#"),"function"==typeof window.history.replaceState&&history.replaceState({},"",window.location.href.slice(0,-1))},ev=["#login",K],eg=e=>ev.includes(e);function em(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function ew(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?em(Object(r),!0).forEach(function(t){eb(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):em(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eb(e,t,r){return(t=ey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ey(e){var t=eA(e,"string");return"symbol"==typeof t?t:String(t)}function eA(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}let eE={onCloseLoginModal:()=>{},onLoginSuccess:async()=>{},onRegisterSuccess:async()=>{},onBeforeRedirect:()=>"",onWechatAuthentication:async()=>{},skipFallbackToPage:!1,headerTitle:null,headerDescription:null,trackingArea:null},eO=()=>ew(ew({},eE),{},{trackingArea:ei()}),e_=e=>{let t=eO();if(!ec(e))return t;let{onCloseLoginModal:r,onLoginSuccess:i,onRegisterSuccess:n,onBeforeRedirect:o,onWechatAuthentication:a,skipFallbackToPage:s,headerTitle:l,headerDescription:c,trackingArea:u}=e;return ew(ew(ew(ew(ew(ew(ew(ew(ew(ew({},t),eu(r)&&{onCloseLoginModal:r}),eu(i)&&{onLoginSuccess:i}),eu(n)&&{onRegisterSuccess:n}),eu(o)&&{onBeforeRedirect:o}),eu(a)&&{onWechatAuthentication:a}),ed(s)&&{skipFallbackToPage:s}),eh(l)&&{headerTitle:l}),eh(c)&&{headerDescription:c}),eh(u)&&{trackingArea:u})};var eL=r(49203),eS=r(76699),eZ=r(52034),eI=r.n(eZ);function eC(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function ek(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eC(Object(r),!0).forEach(function(t){eP(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eC(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eP(e,t,r){return(t=eT(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function eT(e){var t=eV(e,"string");return"symbol"==typeof t?t:String(t)}function eV(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}let ex=[p.Vo,p.I7],eN=e=>{var t,r,o,s,l,c;let{initialState:u,features:d,children:h}=e,{t:m}=(0,eS.$)(),[b,A]=(0,i.useState)((null==u?void 0:null===(t=u.user)||void 0===t?void 0:t.isLogged)||null),_=null==u?void 0:null===(r=u.page)||void 0===r?void 0:r.loginPageType,[S,Z]=(0,i.useState)(!1),[I,C]=(0,i.useState)(!1),[k,P]=(0,i.useState)(p.Vo),[T,V]=(0,i.useState)({}),[x,N]=(0,i.useState)(_&&el[_]||ea()),[R,D]=(0,i.useState)(""),[M,$]=(0,i.useState)(!1),[j,B]=(0,i.useState)(!1),[W,F]=(0,i.useState)(x===w||x===g),U=(0,i.useRef)(""),[G,Y]=(0,i.useState)(_&&es[_]||(W?O:E)),[ee,et]=(0,i.useState)(""),[er,ei]=(0,i.useState)({email:"",token:""}),[ec,eu]=(0,i.useState)(!1),[ed,eh]=(0,i.useState)(!1),[ev,em]=(0,i.useState)(""),ew=(null==d?void 0:null===(o=d.wishlist)||void 0===o?void 0:null===(s=o.options)||void 0===s?void 0:s[J])==="true",eb=(null==d?void 0:null===(l=d.wishlist)||void 0===l?void 0:null===(c=l.options)||void 0===c?void 0:c[X])==="true",[ey,eA]=(0,i.useState)(Date.now()>parseInt((null==ep?void 0:ep.getItem(q))||"0")),[eE,eO]=(0,i.useState)(""),[eZ,eC]=(0,i.useState)(""),[eP,eT]=(0,i.useState)(!1),[eV,eN]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=x===w||x===g;if(F(e),e&&G!=O)et(G),Y(O);else if(!e&&G===O){let e=ee;et(O),Y(e)}},[x]),(0,i.useEffect)(()=>{ed&&0>H.indexOf(G)&&eh(!1)},[G,ed]);let eR=()=>G!==L,eD=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};eL.performanceService.mark(f.START),N(v),eR()&&Y(E),V(e_(t)),e&&-1!==ex.indexOf(e)||(e=p.Vo),P(e),Z(!0)},eM=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eL.performanceService.mark(f.START),N(g),eR()&&Y(O),V(e_(e)),P(p.Vo),Z(!0)},e$=()=>{var e;let t=(null===(e=window.universal_variable.user)||void 0===e?void 0:e.isLogged)||!1;A(t),!t&&eo()&&eM()},ej=()=>{eD(location.hash===K?p.I7:"",{trackingArea:"navigation_url",onCloseLoginModal:ef})},eH=()=>{var e,t;if((null===(e=window.location.href.match(/login.aspx/gi))||void 0===e?void 0:e.length)===1)return;let r=eg(location.hash);!(null!==(t=window.universal_variable.user)&&void 0!==t&&t.isLogged)&&r?ej():r&&ef()},ez=e=>{V(e_(ek(ek({},T),{},{onCloseLoginModal:e})))};(0,i.useEffect)(()=>{var e,t,r;if($("True"===eI().get("ckm-rms-vbr")),B((null===(e=eI().get("ff_debug"))||void 0===e?void 0:e.includes("slice-login"))||!1),window.addEventListener("hashchange",()=>{eH()}),null!==(t=window.universal_variable)&&void 0!==t&&t.user){e$(),eH();return}return"register"===new URLSearchParams(null===(r=window.location)||void 0===r?void 0:r.search).get("option")&&P(p.I7),document.addEventListener("universal_variable.user",()=>{e$(),eH()}),()=>{document.removeEventListener("universal_variable.user",e$),window.removeEventListener("hashchange",eH)}},[]);let eB=e=>{eO(e)},eW=(0,i.useMemo)(()=>({user:{isLogged:b,hasAccount:eP,isPasswordless:eV,emailRef:{current:eE}},setUserEmailInput:eB,setUserHasAccount:eT,setIsPasswordless:eN,isCheckout:W,loginType:x,isLoginModalOpened:S,isLoginBottomSheetOpened:I,defaultTab:k,trackingArea:R,isLoginFallbackPage:en(x),closeLoginModal:()=>{Z(!1)},openLoginModal:eD,setOnCloseLoginModal:ez,openCheckoutLoginModal:eM,openWishlistLoginModal:e=>{eD(p.Vo,{trackingArea:e,headerTitle:m("wbt_slice_login_to_add_to_wishlist","Sign in to save your wishlist"),skipFallbackToPage:!0})},loginModalOptions:T,isVipBr:M,isDebug:j,view:{currentView:G,previousView:ee,setView:e=>{let t=G,r=z.indexOf(e)>-1?e:W?O:E;et(t),Y(r)},returnToPreviousView:()=>{let e=ee;et(G),Y(e)},isAccountLinking:H.indexOf(G)>=0,isAccountLinkingConfirmation:ed,setIsAccountLinkingConfirmation:eh,isEmailLessForgotPassword:ec,setIsEmailLessForgotPassword:eu,isVipPage:y===x},tab:{currentTab:eZ,setCurrentTab:eC},bottomSheet:{shouldOpen:I,setShouldOpen:C,open:e=>{C(!0),D(e)},shouldOpenOnAddToWishlist:eb},accountLinking:er,setAccountLinking:ei,redirectResult:ev,setRedirectResult:em,shouldOpenLoginOnWishlistCTA:!b&&ew&&ey,setAdd2WishlistCooldown:()=>{let e=Date.now()+Q;null==ep||ep.setItem(q,e.toString()),eA(!1)},isCooldownPeriodOver:ey,shouldSetAdd2WishListCooldown:(null==T?void 0:T.trackingArea)==="atw_pdp_button"||(null==T?void 0:T.trackingArea)==="atw_plp_icon"}),[b,U,W,x,S,I,k,R,T,M,j,G,ee,eZ,eC,eP,ed,ec,er,ev,eb,ew,ey,eV,m]);return(0,a.tZ)(n.Provider,{value:eW},h)},eR=(0,r(23291).withInitialState)(eN,"slice-login");r(28310)},28310:()=>{},60113:(e,t,r)=>{"use strict";r.d(t,{wi:()=>S,e9:()=>I});var i=r(28165),n=r(2784);let o=(0,n.createContext)({advertising:{value:!1,updatedAt:new Date(0)},functional:{value:!1,updatedAt:new Date(0)},performance:{value:!1,updatedAt:new Date(0)},ccpa:{value:!1,updatedAt:new Date(0)},setAdvertising:()=>{},setFunctional:()=>{},setPerformance:()=>{},setCcpa:()=>{},setAll:()=>{},updatedAt:new Date(0)});var a=r(52034),s=r.n(a);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=h(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}let p="ffcp",f="_",v=".",g={advertising:"advertising",functional:"functional",performance:"performance",ccpa:"ccpa",all:"all",updated:"updated"},m={advertising:"a",functional:"f",performance:"p",ccpa:"c"},w={a:"advertising",f:"functional",p:"performance",c:"ccpa"},b=e=>Math.floor(+e/1e3),y=e=>new Date(1e3*e),A=e=>Object.keys(m).map(t=>{let r=e[t],i=m[t],n=+r.value,o=b(r.updatedAt);return`${i}${v}${n}${v}${o}`}).join(f),E=e=>{let t=e.indexOf(".");return t<0?"":e.substring(t).toLowerCase()},O=e=>{let t=Object.keys(m).reduce((t,r)=>c(c({},t),{},{[r]:{value:(null==e?void 0:e[r])||!1,updatedAt:new Date(0)}}),{updatedAt:new Date(0),updating:!1}),r=s().get(p);return r&&r.split(f).forEach(e=>{let[r,i,n]=e.split(v),o=w[r];if(!o)return;let a=!!+i,s=y(+n||0);t[o]={value:a,updatedAt:s},s>t.updatedAt&&(t.updatedAt=s)}),t},_=(e,t)=>{if(!g[t.type])return e;if(t.type===g.updated)return c(c({},e),{},{updating:!1});if(t.type===g.all){let r=new Date;return Object.keys(t.value).reduce((e,i)=>"boolean"!=typeof t.value[i]?e:c(c({},e),{},{[i]:{value:t.value[i],updatedAt:r}}),c(c({},e),{},{updating:!0}))}return c(c({},e),{},{[g[t.type]]:{value:t.value,updatedAt:new Date},updating:!0})};function L(e){return window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"consent_mode_updated",consentEvent:{consent:e}}),!0}let S=e=>{let{children:t,options:r}=e,[a,l]=(0,n.useReducer)(_,null==r?void 0:r.defaults,O);(0,n.useEffect)(()=>{if(!a.updating)return;let e=A(a),t=new Date;null!=r&&r.expires?t.setDate(t.getDate()+r.expires):t.setFullYear(t.getFullYear()+5),s().set(p,e,{expires:t,domain:E(window.location.hostname)||window.location.hostname}),L(a),l({type:g.updated})},[r,a]);let u=(0,n.useMemo)(()=>c(c({},a),{},{setAdvertising:e=>l({type:g.advertising,value:e}),setFunctional:e=>l({type:g.functional,value:e}),setPerformance:e=>l({type:g.performance,value:e}),setCcpa:e=>l({type:g.ccpa,value:e}),setAll:(e,t,r,i)=>l({type:g.all,value:{advertising:e,functional:t,performance:r,ccpa:i}})}),[a]);return(0,i.tZ)(o.Provider,{value:u},t)},Z=()=>(0,n.useContext)(o),I=()=>{let{advertising:e,functional:t,performance:r,setAdvertising:i,setFunctional:o,setPerformance:a,setAll:s}=Z();return(0,n.useMemo)(()=>({advertising:e,functional:t,performance:r,setAdvertising:i,setFunctional:o,setPerformance:a,setAll:(e,t,r)=>s(e,t,r),hasUpdatedConsent:!!(+e.updatedAt||+t.updatedAt||+r.updatedAt)}),[e,t,r,i,s,o,a])}},11803:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var i=r(28165),n=r(65536),o=r(2784);let a=(0,n.Vo)(()=>Promise.all([r.e(83627),r.e(86299)]).then(r.bind(r,49685)).then(e=>{let{GdprBanner:t}=e;return t}),{moduleId:"../../node_modules/@modules/gdpr-banner/src/components/GdprBanner/index.js"}),s=e=>{let{initialState:t}=e;return(0,i.tZ)(n.BY,{fallback:null},(0,i.tZ)(a,{initialState:t}))};var l=r(60113);let c="cookiePreferencesBannerStatusReady",u=e=>{let{initialState:t}=e,{hasUpdatedConsent:r}=(0,l.e9)(),n=(null==t?void 0:t.isCookieBannerEnabled)&&!r;return((0,o.useEffect)(()=>{if(null!=window.isCookiePreferencesBannerVisible)return;window.isCookiePreferencesBannerVisible=n;let e=new CustomEvent(c);document.dispatchEvent(e)},[n]),n)?(0,i.tZ)(s,{initialState:t}):null};var d=r(64713);let h=(e,t)=>{let[r,i]=(0,o.useState)(e);return(0,o.useEffect)(()=>{t&&!r&&d.Mb.get("/messaging-slice/data-privacy/cookies").then(e=>e.data).then(i).catch(()=>{})},[r,t]),r};var p=r(52034),f=r.n(p);let v="portal-box",g="privacy-settings",m=e=>{let{initialState:t}=e,[r,n]=(0,o.useState)(!1),a=h(null==t?void 0:t.gdpr,r);return((0,o.useEffect)(()=>{window.isGdprBannerLoaded=window.isGdprBannerLoaded||v,window.isGdprBannerLoaded===v&&"1"!==f().get(g)&&n(!0)},[]),r&&a)?(0,i.tZ)(l.wi,{options:a.cookiePreferences},(0,i.tZ)(u,{initialState:a})):null}}}]);