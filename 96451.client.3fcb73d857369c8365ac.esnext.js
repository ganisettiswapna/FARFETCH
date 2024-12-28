"use strict";(self.webpackChunk_portal_app_portal_cr=self.webpackChunk_portal_app_portal_cr||[]).push([[96451],{54006:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(52903),n=r(2784),l=r(50485),i=r(61599),a=r(584);let d=(0,n.forwardRef)(({afterExit:e,onClose:t,children:r,...n},i)=>{let{isVisible:d,unmount:s,deactivate:u}=(0,a.Z)();return(0,o.tZ)(o.HY,{children:(0,o.tZ)(l.Z,{...n,isOpen:d,onClose:e=>{null==t||t(e),u()},afterExit:()=>{null==e||e(),s()},ref:i,children:r})})});d.displayName="BottomSheet";let s=(0,i.Z)(d,"BottomSheet")},84809:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(52903),n=r(2784),l=r(61599);let i=(0,n.forwardRef)(({as:e="button","aria-label":t="Close bottom sheet",...r},n)=>(0,o.tZ)(e,{...r,ref:n,"aria-label":t}));i.displayName="BottomSheetCloseButton";let a=(0,l.Z)(i,"BottomSheetCloseButton")},36472:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(71675),n=r(27772),l=r(61599);let i=e=>`
    content: '';
    border-bottom: var(--borders-border-s) solid var(--colors-modality-primary-enabled-stroke);
    transition-property: opacity;
    transition-duration: var(--motion-functional-duration-m);
    transition-timing-function: var(--motion-functional-easing-decelerated);
    opacity: ${e?"1":"0"};
`;var a=r(52248);let d=(0,a.Z)(o.E.div)`
    will-change: height;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 0;
    padding: 0 var(--spacers-c16) calc(env(safe-area-inset-bottom) + var(--spacers-c16))
        var(--spacers-c16);
    display: flex;
    flex-direction: column;
    border: var(--borders-border-s) solid var(--colors-modality-primary-enabled-stroke);
    border-bottom-width: 0;
    border-top-left-radius: var(--borders-corner-l);
    border-top-right-radius: var(--borders-corner-l);

    background-color: var(--colors-modality-primary-enabled-surface);

    &::before {
        content: '';
        position: absolute;
        top: var(--spacers-c8);
        left: 50%;
        width: 4.4rem;
        height: 0.4rem;
        transform: translateX(-50%);
        display: block;
        border-width: var(--borders-border-s);
        border-radius: var(--borders-corner-l);
        background-color: var(--colors-modality-primary-enabled-stroke);
    }

    ${(0,n.Z)("BottomSheetTitle")}::after {
        position: absolute;
        top: 100%;
        left: calc(-1 * var(--spacers-c16));
        width: calc(100% + var(--spacers-c16) * 2);
        z-index: 1;

        ${({hasScrolled:e})=>i(e)}
    }

    ${(0,n.Z)("BottomSheetFooter")}::before {
        position: absolute;
        bottom: 100%;
        left: calc(-1 * var(--spacers-c16));
        width: calc(100% + (2 * var(--spacers-c16)));
        ${i(!0)}
    }
`,s=(0,l.Z)(d,"BottomSheetContainer")},47622:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(52903),n=r(97513),l=r(2784),i=r(71675),a=r(28519);let d=(0,l.forwardRef)(({children:e,as:t=i.E.div,...r},d)=>{let{dragProps:s,sheetHeaderRef:u}=(0,l.useContext)(n.Z),c=(0,a.Z)(d,u);return(0,o.tZ)(t,{...s,ref:c,...r,children:e})});d.displayName="BaseBottomSheetHeader";var s=r(61599),u=r(52248);let c=(0,u.Z)(d)`
    --bar-touch-safe-area: 5rem;
    position: relative;
    margin-bottom: 0.1rem;
    padding-top: calc(var(--spacers-c12) + var(--spacers-c8));
    flex-shrink: 0;

    &::after {
        content: '';
        position: absolute;
        top: calc(var(--bar-touch-safe-area) / -2);
        left: 0;
        width: 100%;
        height: var(--bar-touch-safe-area);
    }
`,p=(0,s.Z)(c,"BottomSheetHeader")},22238:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(8069),n=r(61599),l=r(52248);let i=(0,l.Z)(o.X6)`
    padding-bottom: var(--spacers-c16);
`,a=(0,n.Z)(i,"BottomSheetTitle")},50523:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(27772),n=r(61599),l=r(52248);let i=l.Z.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 500;

    ${(0,o.Z)("BottomSheetCloseButton")} {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        margin: -0.1rem;
        padding: 0;
        clip-path: inset(50%);
        clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
    }
`,a=(0,n.Z)(i,"BottomSheetWrapper")},62883:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(71675),n=r(61599),l=r(52248);let i=(0,l.Z)(o.E.div)`
    position: absolute;
    bottom: 0;
    width: 100%;
    border-width: var(--borders-border-s);
    background: var(--colors-page-primary-enabled-surface);
    border-top-left-radius: var(--borders-corner-l);
    border-top-right-radius: var(--borders-corner-l);
`,a=(0,n.Z)(i,"Mask")},50485:(e,t,r)=>{r.d(t,{Z:()=>T});var o=r(52903),n=r(29407),l=r(50523),i=r(84809),a=r(62883),d=r(36472),s=r(97513),u=r(2784),c=r(46269),p=r(28519);let v=(0,u.forwardRef)(({children:e,backdropComponent:t=n.Z,wrapperComponent:r=l.Z,closeButtonComponent:v=i.Z,...h},f)=>{let{sheetRef:m,maskHeight:g,sheetY:b,sheetHeight:y,springConfig:Z,isOpen:w,handleClickOutside:C,onEntry:B,onExit:S,handleCloseButtonClick:k,afterExit:E,afterEntry:H,snapTo:R,hasScrolled:O,isReady:x}=(0,u.useContext)(s.Z),P=(0,p.Z)(m,f);return(0,u.useEffect)(()=>{x&&(w?(null==B||B(),R([b],[0],[{...Z,onComplete:()=>null==H?void 0:H()}])):(null==S||S(),R([b],[null==y?void 0:y.get()],[{...Z,onComplete:()=>null==E?void 0:E(),onStop:()=>null==E?void 0:E()}])))},[w,x]),(0,o.tZ)(r,{children:(0,o.BX)(c.Y,{enabled:w,onClickOutside:C,children:[(0,o.tZ)(t,{isOpen:w,onClick:C,sheetY:b,sheetHeight:y}),(0,o.tZ)(a.Z,{style:{height:g}}),(0,o.tZ)(v,{onClick:k}),(0,o.tZ)(d.Z,{role:"dialog",style:{y:b,height:y},ref:P,hasScrolled:O,...h,children:e})]})})});v.displayName="BaseBottomSheet";var h=r(92825),f=r(16294),m=r(61084);let g={fullyOpen:"95%",open:"70%"},b={type:"spring",stiffness:500,damping:30,mass:.5};var y=r(40582);let Z=(e,t,r,o)=>{var n;let l=t.current?t.current.offsetHeight+parseInt(getComputedStyle(t.current).marginTop)+parseInt(getComputedStyle(t.current).marginBottom):0,i=(null===(n=r.current)||void 0===n?void 0:n.offsetHeight)||0,a=e.current?parseInt(getComputedStyle(e.current).paddingBottom)+parseInt(getComputedStyle(e.current).paddingTop):0;return l+(o.current?o.current.offsetHeight+parseInt(getComputedStyle(o.current).marginTop)+parseInt(getComputedStyle(o.current).marginBottom):0)+i+a+y.s},w=(e,t)=>"number"==typeof e?e:parseInt(e)/100*t;var C=r(37451),B=r(2768);let S=(e=[g.open,g.fullyOpen],t,r,o,n,l,i,a=!0)=>{let[d,s]=(0,u.useState)([]),c=(0,C.Z)(i),p=(0,C.Z)(l),v=(0,u.useCallback)(()=>{if(!(0,B.Z)()&&c===i||(0,B.Z)()&&p<l&&l-p<90)return;let d=Z(t,r,o,n),u=w(g.fullyOpen,l),v=!(d>u)&&a?d:u,h=e.map(e=>{let t=w(e,l);return t>v?Math.round(v):Math.round(t)});1===h.length&&h.push(h[0]),s(()=>h)},[l,a,...e]);return(0,u.useLayoutEffect)(()=>{v()},[v]),{snapPoints:d,defineSnapPoints:v}},k=(e,t,r,o,n,l,i,a,d,s,c)=>{let[p,v]=(0,u.useState)(!1);return{handleCloseButtonClick:t=>{null==e||e({type:y.K.closeButton,event:t})},handleClickOutside:t=>{if(c)return null;null==e||e({type:y.K.clickOutside,event:t})},handleScroll:e=>{0===e.target.scrollTop?v(!1):v(!0)},handleDragEnd:(l,a)=>{s.current=!1;let u=i.current.getBoundingClientRect().height-a.offset.y,c=a.velocity.y>100||a.velocity.y>=0&&u<t[1];a.velocity.y>2e3||a.velocity.y>=0&&u<t[0]/2?(null==e||e({type:"drag"}),(null==d?void 0:d.current)&&(d.current.style.overflow="hidden")):t[0]===t[1]||c?((null==d?void 0:d.current)&&(d.current.style.overflow="hidden"),n([r,o],[0,t[0]])):(n([r,o],[0,t[1]]),(null==d?void 0:d.current)&&(d.current.style.overflow="auto"))},handleDrag:(e,n,d)=>{var u,c,p,v,h;let f=n.velocity.y<=0,m=i.current.getBoundingClientRect().height,g=m-r.get()-n.delta.y,b=g-t[0]/3<0&&n.velocity.y>0,y=g>=t[1],Z=o.get()>=t[1],w=g>=t[0]&&g<=t[1],C=(null===(u=null==a?void 0:a.current)||void 0===u?void 0:u.scrollTop)<=0,B=(null===(c=null==a?void 0:a.current)||void 0===c?void 0:c.scrollTop)>0,S=(null===(v=null===(p=null==a?void 0:a.current)||void 0===p?void 0:p.children[0])||void 0===v?void 0:v.clientHeight)>(null===(h=null==a?void 0:a.current)||void 0===h?void 0:h.clientHeight);if(s.current=!0,(!S||"content"!==d||!Z||!B&&(!C||!f))&&g<l&&g>0){if(w)o.set(m-n.delta.y);else{let e=r.get()+n.delta.y;(b||y)&&(e=r.get()+n.delta.y/2),r.set(e)}}},hasScrolled:p}},E=()=>{let e="undefined"!=typeof window&&void 0!==window.document,t={height:e?window.innerHeight:0,width:e?window.innerWidth:0},[r,o]=(0,u.useState)(t);return(0,u.useLayoutEffect)(()=>{let e=()=>{o({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),{windowHeight:r.height,windowWidth:r.width}},H={config:{attributes:!1,childList:!0,subtree:!0}},R=(e,t,r=H)=>{let[o,n]=(0,u.useState)();(0,u.useEffect)(()=>{n(new MutationObserver(t))},[t,r,n]),(0,u.useEffect)(()=>{if(!o||!e)return;let{config:t}=r;return o.observe(e,t),()=>{o&&o.disconnect()}},[o,e,r])},O=({children:e,isOpen:t,onEntry:r,onExit:n,afterEntry:l,afterExit:i,onClose:a,onSnap:d,snapPoints:c=[g.open,g.fullyOpen],limitSnapPointsByContentHeight:p=!0,disableCloseOnClickOutside:v=!1})=>{var y,Z;let w=(0,u.useRef)(null),B=(0,u.useRef)(null),H=(0,u.useRef)(),O=(0,u.useRef)(null),x=(0,u.useRef)(null),P=(0,u.useRef)(0),T=(0,u.useRef)(0),_=(0,u.useRef)(!1),[I,N]=(0,u.useState)(!1),{windowHeight:$,windowWidth:z}=E(),{snapPoints:L,defineSnapPoints:M}=S(c,w,H,x,O,$,z,p),D=(0,C.Z)(L[0]),W=(0,C.Z)(L[1]),K=(0,C.Z)(P.current),X=(0,C.Z)(t),Y=(0,h.c)(L[0]),j=(0,h.c)(L[0]),F=(0,f.H)([j,Y],([e,t])=>e-t-10);(0,u.useEffect)(()=>{let e=new ResizeObserver(()=>{var e,t;T.current=null!==(t=null===(e=O.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0,A()});O.current&&e.observe(O.current)},[T.current]);let q=(0,u.useCallback)((e=[],t=[],r=[])=>{let o={...b};e.map((e,n)=>{(0,m.j)(e,t[n],r[n]?r[n]:o)}),null==d||d()},[d]);(0,u.useEffect)(()=>{!I&&L[0]&&(Y.set(L[0]),j.set(L[0]),N(!0))},[L,I,Y,j]),(0,u.useEffect)(()=>{var e;if(D&&D!==L[0]){let r=(null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect().height)===D?L[0]:L[1];t&&q([j],[r],[{...b}])}},[D,W,j,q,L,t]);let A=(0,u.useCallback)(()=>{var e,t,r,o;let n=null!==(t=null===(e=null==O?void 0:O.current)||void 0===e?void 0:e.offsetHeight)&&void 0!==t?t:0,l=null!==(o=null===(r=null==H?void 0:H.current)||void 0===r?void 0:r.offsetHeight)&&void 0!==o?o:0;P.current=l+n,void 0!==K&&K!==P.current&&M()},[K,null===(y=H.current)||void 0===y?void 0:y.offsetHeight,null===(Z=O.current)||void 0===Z?void 0:Z.offsetHeight]);R(H.current,A);let{handleCloseButtonClick:G,handleClickOutside:J,handleScroll:Q,handleDragEnd:U,handleDrag:V,hasScrolled:ee}=k(a,L,Y,j,q,$,w,B,H,_,v);return(0,o.tZ)(s.Z.Provider,{value:{springConfig:b,prevIsOpen:X,isOpen:t,sheetY:Y,sheetHeight:j,maskHeight:F,windowHeight:$,snapPoints:L,dragProps:{drag:"y",onDrag:V,onDragEnd:U,dragConstraints:{top:0,bottom:0},dragMomentum:!1,dragElastic:0},snapTo:q,handleDrag:V,handleDragEnd:U,handleScroll:Q,handleClickOutside:J,handleCloseButtonClick:G,onEntry:r,onExit:n,afterExit:i,afterEntry:l,hasScrolled:ee,isReady:I,sheetRef:w,sheetContentRef:H,sheetHeaderRef:O,sheetFooterRef:x,sheetContentWrapperRef:B,isDragging:_},children:e})};O.displayName="BottomSheetProvider";let x=(0,u.memo)(O),P=(0,u.forwardRef)(({isOpen:e,onClose:t,onEntry:r,onExit:n,afterExit:l,afterEntry:i,onSnap:a,snapPoints:d,limitSnapPointsByContentHeight:s,disableCloseOnClickOutside:u,children:c,...p},h)=>(0,o.tZ)(x,{snapPoints:d,limitSnapPointsByContentHeight:s,onClose:t,onEntry:r,onExit:n,afterExit:l,afterEntry:i,onSnap:a,isOpen:e,disableCloseOnClickOutside:u,children:(0,o.tZ)(v,{ref:h,...p,children:c})}));P.displayName="BottomSheet";let T=(0,u.memo)(P)},40582:(e,t,r)=>{r.d(t,{K:()=>o,s:()=>n});let o={closeButton:"closeButton",clickOutside:"clickOutside",escape:"escape"},n=1},2768:(e,t,r)=>{r.d(t,{Z:()=>o});let o=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)},61084:(e,t,r)=>{r.d(t,{j:()=>i});var o=r(77713),n=r(14969),l=r(99936);function i(e,t,r){void 0===r&&(r={});var i=(0,n.i)(e)?e:(0,o.B)(e);return(0,l.b8)("",i,t,r),{stop:function(){return i.stop()}}}}}]);