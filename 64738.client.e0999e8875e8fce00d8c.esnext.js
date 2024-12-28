"use strict";(self.webpackChunk_portal_app_portal_cr=self.webpackChunk_portal_app_portal_cr||[]).push([[64738],{43323:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(52903),i=t(61599),l=t(52248);let n=l.Z.div`
    visibility: hidden;
    pointer-events: none;

    & > * {
        pointer-events: visible;

        &:first-of-type {
            ${({activeItem:e})=>e<=0?`
                    visibility: hidden;
                `:""}
        }

        &:last-of-type {
            ${({activeItem:e,itemsLength:r,itemsToShow:t})=>e+Math.floor(t)>=r?`
                    visibility: hidden;
                `:""}
        }
    }
`,s=(0,i.Z)(n,"ActionsContainer");var o=t(41400),c=t(2784);let d=(0,c.forwardRef)(({children:e,...r},t)=>{let{activeItem:i,itemsLength:l,itemsToShow:n}=(0,c.useContext)(o.Z);return(0,a.tZ)(s,{ref:t,...r,activeItem:i,itemsLength:l,itemsToShow:n,children:e})});d.displayName="CarouselActionContainer";let u=(0,i.Z)(d,"CarouselActionContainer")},15052:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(52903),i=t(95476),l=t(33879),n=t(2784),s=t(61599),o=t(47054),c=t(75590);let d=(0,n.forwardRef)(({flow:e,onClick:r,...t},n)=>{let{isRTL:s}=(0,c.a)(),{handleArrowClick:d}=(0,o.Z)(e);return(0,a.tZ)(l.HX,{ref:n,onClick:e=>{e.preventDefault(),e.stopPropagation(),d(),r&&r(e)},...t,children:(0,a.tZ)(i.Z,{id:s?"prev"===e?"chevronRightSmall":"chevronLeftSmall":"prev"===e?"chevronLeftSmall":"chevronRightSmall"})})});d.displayName="CarouselArrowSmall";let u=(0,s.Z)(d,"CarouselArrowSmall")},85590:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(61599),i=t(52248);let l=i.Z.div`
    width: calc(100% / var(--itemsToShow));
    display: inline-block;
    flex: 0 0 auto;
    scroll-snap-align: ${({snapTo:e})=>e};
    scroll-snap-stop: always;

    &:focus,
    &:focus-visible,
    &.focus-visible {
        outline-offset: -0.2rem;
    }
`,n=(0,a.Z)(l,"CarouselSlide")},82904:(e,r,t)=>{t.d(r,{Z:()=>f});var a=t(20042),i=t(61599),l=t(22619),n=t(27772),s=t(59772);let o=()=>`
&:hover {
    ${(0,n.Z)("CarouselActionContainer")} {
        @media (hover: hover) and (pointer: fine) {
            visibility: visible;
        }
    }
}`,c=(e,r)=>e?`width: calc(100% + var(--spacers-c6) * 2);
        margin-inline-start: calc(-1 * var(--spacers-c6));
        margin-inline-end: calc(-1 * var(--spacers-c6));
        ${(0,n.Z)("SnapSliderWrapper")} {
            width: calc(100vw - var(--carouselScrollbarWidth));
            position: relative;
            margin-inline-end: var(--carouselMargin);
            margin-inline-start: calc(var(--carouselMargin));
        }
        @media (${r.mediaQuery.sm}){
            width: calc(100% + var(--spacers-c8) * 2);
            margin-inline-start: calc(-1 * var(--spacers-c8));
            margin-inline-end: calc(-1 * var(--spacers-c8));
            ${(0,n.Z)("CarouselSlide")} { 
                padding: var(--spacers-c4) var(--spacers-c8);
            }
        }

        @media (${r.mediaQuery.md}) {
            ${(0,n.Z)("CarouselSlide")} {
                &:first-of-type {
                    margin-inline-start: 0;
                }
                &:last-of-type {
                    margin-inline-end: 0;
                }
            }
        }

        @media (${r.mediaQuery.lg}) {
            ${(0,n.Z)("CarouselSlide")} {
                padding: var(--spacers-c4) ${l.AC};
                
            }
            ${(0,n.Z)("CarouselActionContainer")} {
                ${(0,n.Z)("CarouselArrowSmall")} {
                    &:first-of-type {
                        margin-inline-start: calc(var(--spacers-c8) + var(--spacers-c12));
                    }
    
                    &:last-of-type {
                        margin-inline-end: calc(var(--spacers-c8) + var(--spacers-c12));
                    }
                }
            }
        }
        `:`
        ${(0,n.Z)("SnapSliderWrapper")} {
            &::before,
            &::after {
                content: none;
            }
        }
        @media (${r.mediaQuery.sm}){
            ${(0,n.Z)("CarouselSlide")} { 
                padding: var(--spacers-c4) ${l.J7};
                &:first-of-type {
                    margin-inline-start: ${l.Dv};
                }
                &:last-of-type {
                    margin-inline-end: ${l.Dv};
                }
            }
        }
        @media (${r.mediaQuery.md}) {
            width: calc(100% + var(--spacers-c8) * 2);
            margin-inline-start: calc(-1 * var(--spacers-c8));
            margin-inline-end: calc(-1 * var(--spacers-c8));

            ${(0,n.Z)("CarouselSlide")} {
                &:first-of-type {
                    margin-inline-start: 0;
                }
                &:last-of-type {
                    margin-inline-end: 0;
                }
            }
        }

        @media (${r.mediaQuery.lg}) {
            width: calc(100% + var(--spacers-c12) * 2);
            margin-inline-start: calc(-1 * var(--spacers-c12));
            margin-inline-end: calc(-1 * var(--spacers-c12));
            ${(0,n.Z)("CarouselSlide")} {
                padding: var(--spacers-c4) ${l.AC};
            }
            ${(0,n.Z)("CarouselActionContainer")} {
                ${(0,n.Z)("CarouselArrowSmall")} {
                    &:first-of-type {
                        margin-inline-start: calc(var(--spacers-c8) + var(--spacers-c12));
                    }
    
                    &:last-of-type {
                        margin-inline-end: calc(var(--spacers-c8) + var(--spacers-c12));
                    }
                }
            }
        }`,d=(e,r)=>`
    ${(0,s.Z)(r)}
    ${o()}
    ${(0,n.Z)("CarouselSlide")} {
        padding: var(--spacers-c4) var(--spacers-c6);
    }
    
    ${(0,n.Z)("CarouselActionContainer")} {
        position: absolute;
        top: calc(((100% - var(--carouselPaginationHeight)) / 2) - 2.2rem);
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        ${(0,n.Z)("CarouselArrowSmall")} {
            &:first-of-type {
                margin-inline-start: calc(var(--spacers-c8) * 2);
            }

            &:last-of-type {
                margin-inline-end: calc(var(--spacers-c8) * 2);
            }
        }
    }
    ${c(e,r)}
`;var u=t(52248);let p=(0,u.Z)("div",{shouldForwardProp:(0,a.p)("bleed","isRtl")})`
    ${({bleed:e,theme:r})=>d(e,r)}
`,f=(0,i.Z)(p,"CarouselStandardWrapper")},43200:(e,r,t)=>{t.d(r,{Z:()=>v});var a=t(52903),i=t(85590),l=t(22619),n=t(1776),s=t(8721),o=t(28165),c=t(41400),d=t(2784);let u=()=>(0,d.useContext)(c.Z);var p=t(75590),f=t(28519);let m=(0,d.forwardRef)(({children:e,isAligned:r=!1,slideContainer:t=i.Z,snapTo:c="center",transitionDuration:m=.3,...v},h)=>{let{activeItem:y,containerRef:g,goTo:Z,itemsLength:S,itemsToShow:w,setItemsLength:C,variant:$}=u(),{isRTL:b}=(0,p.a)(),x=(0,d.useRef)(null),[M,E]=(0,d.useState)(null),[A,N]=(0,d.useState)(null),_=(0,d.useRef)(!1),k=(0,d.useRef)(0),I=(0,f.Z)(h,g),[L,P]=(0,d.useState)(!0),[W,R]=(0,d.useState)(!1),T=S<=Math.floor(w),D=(0,d.useCallback)(e=>{let r=g.current;if(!r||!r.parentElement)return;let t=r.offsetWidth<=r.parentElement.offsetWidth?100:100*r.parentElement.offsetWidth/r.offsetWidth;return T?t/Math.floor(w):e},[T,w]),O=(0,d.useCallback)(()=>{let e=g.current;if(!e||!e.parentElement)return;let t=r?(e.parentElement.offsetWidth+k.current)/w/e.offsetWidth*100:100/w,a=(100-100*e.parentElement.offsetWidth/e.offsetWidth)/2;E(D(t)),r&&N(a)},[D,r,w]),j=(0,d.useCallback)(()=>{let e=g.current;if(!e)return null;L||P(!0);let r=M/100*e.offsetWidth;e.style.scrollSnapType="none";let t=r*y,a=w-Math.floor(w),i=b?-1:1,l=Math.floor(w)%2==0,n=((l?1-a:a)*r-k.current)/2,o=0;"center"===c?(o=i*(t+(l?n:-n)),b&&o>=-n?o=0:!b&&o<=n&&(o=0)):o=i*t;let d=_.current?m:0;(0,s.NY)(e,o,d,()=>{x.current||(_.current=!0,e.scrollLeft=o),x.current=y})},[y,L,b,w,M,c,m]),Q=function(e,r,t){let a;return function(){let i=this,l=arguments,n=t&&!a;clearTimeout(a),a=setTimeout(function(){a="",t||e.apply(i,l)},r),n&&e.apply(i,l)}}(()=>{if(!g.current)return null;let{scrollLeft:e,offsetWidth:r}=g.current,t=Math.round(Math.round((Math.abs(e/(M/100*r)*100/100)+Number.EPSILON)*10)/10);if(x.current===t)return null;x.current=t,Z(t)},50,!1);return(0,d.useEffect)(()=>{C(d.Children.count(e))},[e,C]),(0,d.useLayoutEffect)(()=>{let e=g.current;if(!e||!e.parentElement)return;let r=-1*parseFloat(window.getComputedStyle(e)["margin-inline-start"]),t=-1*parseFloat(window.getComputedStyle(e.parentElement)["margin-inline-start"]);k.current=$==l.X6?r-t:0,O()},[O,$]),(0,d.useLayoutEffect)(()=>{let e=g.current,r=new ResizeObserver(r=>{window.requestAnimationFrame(()=>{Array.isArray(r)&&r.length&&r.some(({target:r})=>e===r)&&O()})});return e&&r.observe(e),()=>{r.disconnect()}},[O,r,w]),(0,d.useLayoutEffect)(()=>{x.current!==y&&j()},[y,j]),(0,a.tZ)(n.Z,{ref:I,onScroll:()=>{let e=g.current,{scrollLeft:r}=e;return x.current!==y?null:r>0&&!W?(R(!0),null):void(L&&P(!1),e&&!L&&(e.style.scrollSnapType="x mandatory"),Q())},...v,disableSlider:T,inset:A,isAligned:r,children:d.Children.map(e,(e,r)=>(0,a.tZ)(t,{tabIndex:"0",css:o.iv`
                            width: ${M}%;
                        `,snapTo:c,"data-active":y===r,children:e},r))})});m.displayName="SnapSlider";let v=m},1776:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(61599),i=t(52248);let l=i.Z.div`
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    display: flex;
    flex-flow: row nowrap;

    /* Hide scrollbar on Firefox */
    scrollbar-width: none;

    /* Hide scrollbar on IE */
    -ms-overflow-style: none;

    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch; /* For safari */

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    &::after,
    &::before {
        content: '';
        width: ${({inset:e,isAligned:r})=>r?`${e}%`:"0"};
        height: auto;
        display: inline-block;
        flex: 0 0 auto;
    }
    ${({theme:e,disableSlider:r})=>r?`@media (${e.mediaQuery.md}) {
            overflow-x: hidden;
        }`:""}
`;l.displayName="SnapSliderWrapper";let n=(0,a.Z)(l,"SnapSliderWrapper")},52235:(e,r,t)=>{t.d(r,{Z:()=>h});var a=t(52903),i=t(3211),l=t(41400),n=t(2784);let s=({children:e,itemsToShow:r=1,itemsToScroll:t=1,onAfterChange:i,startItem:s=0,variant:o})=>{let[c,d]=(0,n.useState)(s),[u,p]=(0,n.useState)(!1),[f,m]=(0,n.useState)(0),[v,h]=(0,n.useState)(""),y=(0,n.useRef)(null);(0,n.useEffect)(()=>{d(s)},[s]);let g=(e,r)=>{let t=f-1;return 0===e&&t===r&&"next"===v?"next":0===r&&e===t&&"prev"===v?"prev":r<e?"next":"prev"},Z=(e,r={})=>{if(e===c)return null;d(e),i&&i({index:e,dir:g(e,c),...r})},S=(e,t={})=>{let a="number"!=typeof e||r>f||e<0||e>f-1;if(u||a)return null;Z(e,t)};return(0,a.tZ)(l.Z.Provider,{value:{activeItem:c,isMovementBlocked:u,itemsToShow:r,itemsLength:f,itemsToScroll:t,variant:o,containerRef:y,setItemsLength:m,setIsMovementBlocked:p,goTo:S,goNext:(e={})=>{let r=c+t;r>f-1&&(r=0),h("next"),S(r,e)},goPrev:(e={})=>{let r=c-t;r<0&&0===c&&(r=f-t),r<0&&0!==c&&(r=0),h("next"),S(r,e)}},children:e})};s.displayName="CarouselProvider";var o=t(22619),c=t(82904),d=t(27772);function u(e,r){let t;let a={},i=Object.keys(r).find(e=>void 0!==r[e])||0;return Object.keys(e).map(e=>{void 0!==r[e]?(a[e]=r[e],t=r[e]):a[e]=void 0!==t?t:r[i]}),a}var p=t(75359),f=t(75590),m=t(28519);let v=(0,n.forwardRef)(({itemsToShow:e=o.Dm,scrollCue:r=o.XD.MEDIUM,bleed:t,className:l,wrapper:v=c.Z,carouselContainer:h=i.Z,startItem:y,itemsToScroll:g,onAfterChange:Z,variant:S,...w},C)=>{let{is:$}=(0,p.Z)(),{isRTL:b}=(0,f.a)(),[x,M]=(0,n.useState)(0),E=(0,n.useRef)(null),A=(0,m.Z)(E,C),N=(0,n.useRef)("object"==typeof e?u($,e):e),_=(0,n.useRef)("object"==typeof r?u($,r):r),k=(0,n.useRef)("object"==typeof t?u($,t):t),I=(0,n.useMemo)(()=>Object.keys($).find(e=>$[e]),[$])||0,L=(0,n.useMemo)(()=>"object"!=typeof k.current?k.current:k.current[I],[I]);return(0,n.useEffect)(()=>{"object"==typeof N.current?"object"==typeof _.current?M(N.current[I]+_.current[I]):M(N.current[I]+_.current):"object"==typeof _.current?M(N.current+_.current[I]):M(N.current+_.current)},[I]),(0,n.useLayoutEffect)(()=>{let e=E.current,r=window.innerWidth-document.body.clientWidth;e.style.setProperty("--carouselMargin","calc(50% - (50vw - (var(--carouselScrollbarWidth) / 2)))");let t=100*parseFloat(window.getComputedStyle(e.firstChild)["margin-inline-end"])/document.body.clientWidth;e.style.setProperty("--carouselStartingPosition",`calc(${t}vw * -1)`),e.style.setProperty("--carouselScrollbarWidth",`${r}px`);let a=e.querySelector((0,d.Z)("PaginationContainer"))?e.querySelector((0,d.Z)("PaginationContainer")).offsetHeight:0;e.style.setProperty("--carouselPaginationHeight",`${a}px`)}),(0,a.tZ)(s,{itemsToShow:x,itemsToScroll:g,startItem:y,onAfterChange:Z,variant:S,children:(0,a.tZ)(h,{ref:A,className:l,children:(0,a.tZ)(v,{bleed:L,isRtl:b,...w})})})});v.displayName="BaseCarousel";let h=v},3211:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(27772),i=t(61599),l=t(52248);let n=l.Z.div`
    width: 100%;
    display: contents;

    ${(0,a.Z)("SkipButton")} {
        z-index: 2;
        margin-top: var(--spacers-c8);
        margin-inline-start: var(--spacers-c8);
    }
`,s=(0,i.Z)(n,"CarouselContainer")},80190:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(52235),i=t(82904),l=t(3211),n=t(22619),s=t(61599),o=t(9793),c=t(52248);let d=(0,c.Z)(a.Z)`
    @media (${({theme:e})=>e.mediaQuery.md}) {
        overflow: hidden;
        display: block;
    }
    ${({theme:e,itemsToShow:r,scrollCue:t})=>(0,o.Z)(e.mediaQuery,r,t)}
`;d.defaultProps={wrapper:i.Z,carouselContainer:l.Z,itemsToShow:n.eq,scrollCue:n.E_,bleed:n.TA,variant:n.X6};let u=(0,s.Z)(d,n.X6)},22619:(e,r,t)=>{t.d(r,{AC:()=>m,C5:()=>h,Dm:()=>i,Dv:()=>y,E_:()=>n,I8:()=>c,J7:()=>v,M5:()=>d,PE:()=>p,TA:()=>s,X6:()=>f,XD:()=>a,c2:()=>u,eq:()=>l,zV:()=>o});let a={MEDIUM:.5,SMALL:.25,NONE:0},i={_initial:1,xs:1,sm:2,md:3,lg:4,xl:5},l={_initial:1,xs:1,sm:3,md:4,lg:4,xl:4},n={_initial:a.MEDIUM,xs:a.MEDIUM,sm:a.MEDIUM,md:a.MEDIUM,lg:a.MEDIUM,xl:a.MEDIUM},s={_initial:!0,xs:!0,sm:!0,md:!1,lg:!1,xl:!1};a.NONE,a.NONE;let o={_initial:a.SMALL,xs:a.SMALL,sm:a.SMALL,md:a.NONE,lg:a.NONE,xl:a.NONE},c={_initial:!0,xs:!0,sm:!0,md:!1,lg:!1,xl:!1},d={_initial:!1,xs:!1,sm:!1,md:!0,lg:!0,xl:!0},u={_initial:1,xs:1,sm:2,md:1,lg:1,xl:1},p="CarouselImmersive",f="CarouselStandard",m="var(--spacers-c12)",v="var(--spacers-c8)",h=`calc(-1 * ${m})`,y=`calc(-1 * ${v})`},41400:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(2784);let i=(0,a.createContext)({goNext:()=>null,goPrev:()=>null,goTo:()=>null,setItemsLength:()=>null,setIsMovementBlocked:()=>null,activeItem:0,isMovementBlocked:!1,itemsToShow:1,itemsLength:0,itemsToScroll:1,containerRef:(0,a.createRef)(),variant:void 0})},47054:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(41400),i=t(2784);let l=["prev","next"],n=e=>{let{activeItem:r,itemsLength:t,itemsToShow:n,goNext:s,goPrev:o}=(0,i.useContext)(a.Z);return{handleArrowClick:()=>{e&&l.indexOf(e)>-1&&("next"===e?s():o())},isFirstItem:0===r,isLastItem:r+Math.floor(n)>=t}}},9793:(e,r,t)=>{t.d(r,{Z:()=>a});let a=(e,r,t)=>{let a=r._initial||r,i=t._initial||t,l=`--itemsToShow: ${a+i};`;if(r._initial)for(let n in e)r[n]!==a&&void 0!==r[n]&&(void 0!==t[n]&&(i=t[n]),l+=`@media(${e[n]}){--itemsToShow: ${r[n]+i};}`,a=r[n]);else if(t._initial)for(let r in e)t[r]!==a&&void 0!==t[r]&&(l+=`@media(${e[r]}){--itemsToShow: ${a+t[r]};}`,i=t[r]);return l}},59772:(e,r,t)=>{t.d(r,{Z:()=>i});var a=t(27772);let i=e=>`
    position: relative;
    width: 100%;
    overflow: initial;
    touch-action: manipulation;

    ${(0,a.Z)("CarouselPagination")} {
        margin: calc(var(--spacers-c16) + var(--spacers-c4)) auto 0;
        width: calc(100% - (var(--carouselStartingPosition) * 2));

        @media (${e.mediaQuery.sm}) {
            width: 50%;
        }
    }
`}}]);