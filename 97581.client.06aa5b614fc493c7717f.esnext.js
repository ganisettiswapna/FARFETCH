"use strict";(self.webpackChunk_portal_app_portal_cr=self.webpackChunk_portal_app_portal_cr||[]).push([[97581],{59601:(r,e,o)=>{o.d(e,{Z:()=>w});var l=o(27772),a=o(61599),t=o(52903),n=o(61349),i=o(2386),d=o(2784),s=o(46524),u=o(82700),c=o(31461),v=o(7896),p=o(79067),f=o(33342),m=d.forwardRef(function(r,e){return d.createElement(p.Z,(0,v.Z)({sideCar:f.Z,ref:e},r))}),b=p.Z.propTypes||{};b.sideCar,(0,c.Z)(b,["sideCar"]),m.propTypes={};let h=(0,d.forwardRef)(({children:r,labelComponent:e,as:o="div","aria-describedby":l,"aria-labelledby":a,disablePortal:c=!1,useTetherLayer:v=!0,isNative:p,hiddenInput:f,onBlur:b,...h},y)=>{let g=(0,d.useRef)(null),w=(0,d.useMemo)(()=>[{name:"sameWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn({state:r}){r.styles.popper.width=`${r.rects.reference.width}px`},effect({state:r}){let e=r.elements.reference;r.elements.popper.style.width=`${e.offsetWidth}px`}},{name:"preventOverflow",enabled:!1},{name:"flip",enabled:!1},{name:"resizeOnRotate",enabled:!0,phase:"write",fn:()=>{},effect({instance:r}){window.addEventListener("resize",function(){r.update()})}},{name:"computeStyles",options:{gpuAcceleration:!1}}],[]),{defaultOnBlur:Z,onBlur:k,isOpen:x,ref:D,openStart:E,setDropdownOptions:A}=(0,s.x)();(0,d.useEffect)(()=>{var e;(0,d.isValidElement)(r)&&(p||A(null===(e=null==r?void 0:r.props)||void 0===e?void 0:e.children))},[r,A,p]);let C=e||u.Z;return(0,t.tZ)(o,{onBlur:r=>{var e,o;r.currentTarget.contains(r.relatedTarget)||(null===(o=null===(e=null==D?void 0:D.current)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.contains(r.relatedTarget))||(k&&k(r),Z&&Z(),b&&b(r))},"data-open":x,...h,ref:y,children:v&&!p?(0,t.tZ)(n.Z,{content:(0,t.tZ)(m,{autoFocus:!1,returnFocus:!0,shards:[g],children:r}),placement:i.Q.bottom,popperOptions:{modifiers:w},disablePortal:c,children:(0,t.BX)("div",{ref:g,children:[(0,t.tZ)(C,{"aria-labelledby":a||null,"aria-describedby":l||null,"data-openstart":E}),f]})}):(0,t.BX)(t.HY,{children:[(0,t.tZ)(C,{"aria-labelledby":a||null,"aria-describedby":l||null,"data-openstart":E}),r,f]})})});h.displayName="BaseDropdown";var y=o(52248);let g=(0,y.Z)(h)`
    position: relative;
    width: 100%;
    height: 4.4rem;
    cursor: pointer;

    ${({readOnly:r})=>r?`
        cursor: none;
        pointer-events: none;

        ${(0,l.Z)("DropdownArrowIcon")} {
            fill: var(--colors-forms-primary-default-readonly-icon);
        }

        ${(0,l.Z)("DropdownLabel")}, ${(0,l.Z)("Placeholder")} {
            color: var(--colors-forms-primary-default-readonly-label);
            background-color: var(--colors-forms-primary-default-readonly-surface);
        }

    `:""}

    ${({disabled:r})=>r?`
        cursor: none;
        pointer-events: none;

        ${(0,l.Z)("DropdownLabel")}, ${(0,l.Z)("Placeholder")} {
            color: var(--colors-forms-primary-default-disabled-label);
            background-color: var(--colors-forms-primary-default-disabled-surface);
        }
    `:""}
`,w=(0,a.Z)(g,"Dropdown")},82700:(r,e,o)=>{o.d(e,{Z:()=>Z});var l=o(61599),a=o(27772);let t=`
    box-sizing: border-box;
    width: 100%;
    height: 4.4rem;
    overflow: hidden;
    padding-right: var(--spacers-c12);
    padding-left: var(--spacers-c16);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
    grid-gap: var(--spacers-c6);

    border: var(--borders-border-s) solid var(--colors-forms-primary-default-enabled-stroke);
    border-radius: var(--borders-corner-m);
    color: var(--colors-forms-primary-default-enabled-label);
    cursor: pointer;
    background-color: var(--colors-forms-primary-default-enabled-surface);

    &[data-openstart='true'] {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    &[data-readonly='true'] {
        border-color: var(--colors-forms-primary-default-readonly-stroke);
    }

    &[data-disabled='true'] {
        border-color: var(--colors-forms-primary-default-disabled-stroke);
    }

    &[data-error='true'],
    &[data-error='true']:hover {
        border-color: var(--colors-forms-primary-error-enabled-stroke);
    }

    & ${(0,a.Z)("DropdownArrowIcon")} {
        flex: none;
        place-self: center end;
    }

    &:hover {
        color: var(--colors-forms-primary-default-hover-label);
        background-color: var(--colors-forms-primary-default-hover-surface);
    }

    &[data-isfocus='true'] {
        outline: 0.1rem dashed;
        outline: 0.1rem auto Highlight;
        outline: 0.1rem auto -webkit-focus-ring-color;
        color: var(--colors-forms-primary-default-focus-label);
    }
`,n=`
    &[data-native='true'] {
        border: var(--borders-border-s) solid var(--colors-forms-primary-default-enabled-stroke);

        &[aria-disabled='true'] {
            border: var(--borders-border-s) solid
                var(--colors-forms-primary-default-disabled-stroke);
        }

        &[data-readonly='true'] {
            border: var(--borders-border-s) solid
                var(--colors-forms-primary-default-readonly-stroke);
        }

        &[aria-invalid='true'] {
            border: var(--borders-border-s) solid var(--colors-forms-primary-error-enabled-stroke);
        }
    }
`;var i=o(52903),d=o(72097),s=o(95476),u=o(2784),c=o(46524);let v=(0,u.forwardRef)(({...r},e)=>{let{isOpen:o}=(0,c.x)();return(0,i.tZ)(s.Z,{...r,id:"chevronDownSmall","data-open":o,ref:e})});v.displayName="BaseDropdownArrowIcon";var p=o(52248);let f=(0,p.Z)(v)`
    transition: transform var(--motion-functional-duration-l)
        var(--motion-functional-easing-decelerated);

    &[data-open='true'] {
        transform: rotate(180deg);
    }
`,m=(0,l.Z)(f,"DropdownArrowIcon");var b=o(40689),h=o(584),y=o(28519);let g=(0,u.forwardRef)(({as:r="div",labelWrapper:e=d.Z,append:o,prepend:l,arrowIcon:a=m,onClick:t,children:n,...s},v)=>{let{currentOption:p,placeholder:f,isOpen:g,onLabelClick:w,error:Z,disabled:k,readOnly:x,setOpenByKeyboard:D,required:E,triggerRef:A,isNative:C,ref:R,setIsLayerVisible:$}=(0,c.x)(),{activate:S,deactivate:B,anchorRef:O,isVisible:H}=(0,h.Z)(),T=(0,y.Z)(null!=v?v:null,null!=A?A:null,null!=O?O:null);return(0,u.useEffect)(()=>{g?(S(),H&&(setTimeout(()=>{var r;null===(r=null==R?void 0:R.current)||void 0===r||r.focus()},0),$(!0))):(!C&&H&&B(),H||$(!1))},[S,B,R,C,g,H,$]),(0,i.BX)(r,{"aria-expanded":!!g,tabIndex:C?"-1":"0","aria-haspopup":"listbox","aria-required":E,"aria-disabled":k||x,"aria-invalid":Z,"data-disabled":k,"data-error":Z,"data-readonly":x,"data-native":C,"aria-readonly":x,role:"combobox",onClick:r=>{0!==r.detail&&D(!1),k||x||(w&&w(),t&&t(r),S())},onKeyDown:r=>{r.stopPropagation();let e=!k&&!x;e&&("ArrowDown"===r.key||"ArrowUp"===r.key||"Enter"===r.key||" "===r.key)&&D(!0),e&&(" "===r.key||"Enter"===r.key)&&w&&w(),e&&("ArrowDown"===r.key||"ArrowUp"===r.key)&&!g&&w&&w()},ref:T,...s,children:[n?(0,i.tZ)(e,{children:n}):p?(0,i.BX)(i.HY,{children:[null==p?void 0:p.prepend,(0,i.tZ)(e,{children:(null==p?void 0:p.text)||(null==p?void 0:p.value)}),null==p?void 0:p.append]}):(0,i.tZ)(e,{isPlaceholderActive:!0,children:(0,i.tZ)(b.Z,{children:f})}),(0,i.tZ)(a,{})]})});g.displayName="BaseDropdownLabel";let w=(0,p.Z)(g)`
    ${t}
    ${n}
`,Z=(0,l.Z)(w,"DropdownLabel")},72097:(r,e,o)=>{o.d(e,{Z:()=>d});var l=o(20042),a=o(61599);let t=r=>`
        overflow: hidden;
        display: block;
        flex: 1;
        flex-grow: 1;
        align-items: center;
        color: ${r?"var(--colors-forms-primary-default-enabled-placeholder)":""};
        text-overflow: ellipsis;
        text-align: left;
        white-space: nowrap;
    `;var n=o(52248);let i=(0,n.Z)("div",{shouldForwardProp:(0,l.p)("isPlaceholderActive")})`
    ${({isPlaceholderActive:r})=>t(r)}
`,d=(0,a.Z)(i,"DropdownLabelWrapper")},94805:(r,e,o)=>{o.d(e,{Z:()=>f});var l=o(52903),a=o(2784),t=o(16457),n=o(61599);let i=`
    display: flex;
    flex: 1;
    flex-grow: 1;
    align-items: center;
    text-align: left;
`,d=`
    position: relative;
    min-height: 4.4rem;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
    grid-gap: var(--spacers-c6);
    color: var(--colors-forms-primary-default-enabled-label);
    transition: background var(--motion-functional-duration-m)
            var(--motion-functional-easing-decelerated),
        opacity var(--motion-functional-duration-m) var(--motion-functional-easing-decelerated);
    background-color: var(--colors-forms-primary-default-enabled-surface);
    padding-inline-start: var(--spacers-c16);
    padding-inline-end: var(--spacers-c16);
    padding-block-start: var(--spacers-c10);
    padding-block-end: var(--spacers-c10);

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: var(--colors-forms-primary-hover-label);
            background-color: var(--colors-content-primary-hover-surface);
        }
    }

    &:active {
        color: var(--colors-forms-primary-pressed-label);
        background-color: var(--colors-content-primary-pressed-surface);
    }

    &[data-hover='true'] {
        color: var(--colors-forms-primary-focus-label);
    }

    &:not([aria-selected='false']) {
        background: var(--colors-content-primary-selected-surface);
        color: var(--colors-forms-primary-default-selected-label);
    }

    &[data-hover='true']::after {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        width: calc(100% - var(--spacers-c4));
        height: calc(100% - var(--spacers-c4));
        margin: 0 auto;
        outline: 0.1rem dashed;
        outline: 0.1rem auto Highlight;
        outline: 0.1rem auto -webkit-focus-ring-color;
    }

    @media not all and (min-resolution: 0.001dpcm) {
        &[data-hover='true']::after {
            width: calc(100% - var(--spacers-c24));
            height: calc(100% - var(--spacers-c6));
        }
    }
`;var s=o(52248);let u=s.Z.div`
    ${i}
`,c=(0,n.Z)(u,"DropdownOptionWrapper"),v=(0,a.forwardRef)(({children:r,onClick:e,value:o,append:n,prepend:i,selectedText:d,wrapperComponent:s=c,as:u="li",id:v=o,...p},f)=>{let{onChange:m,isNative:b,currentOption:h}=(0,a.useContext)(t.Z),y=(0,a.useCallback)(r=>{m&&m({...r,value:o}),e&&e({...r,value:o})},[m,e,o]);return(0,l.tZ)(u,{id:v,...(null==h?void 0:h.value)!==o?{"aria-selected":"false"}:{},role:"option",onClick:y,value:o,ref:f,...p,children:b?d||r:(0,l.BX)(l.HY,{children:[i,(0,l.tZ)(s,{children:r}),n]})})}),p=(0,s.Z)(v)`
    ${d}
`,f=(0,n.Z)(p,"DropdownOption")},75781:(r,e,o)=>{o.d(e,{Z:()=>g});var l=o(61599),a=o(40834),t=o(52903),n=o(2784),i=o(46524),d=o(39789);let s=({listElements:r,windowAvailableHeight:e,defaultMaxHeight:o})=>{let l=o,a=0,t=!1;for(let o=0;o<r.length;o++){if(e<l){if(t=!0,e<l-u(r[o-1])/2){l-=u(r[o-1])+u(r[o-2])/2;break}l-=u(r[o-1])/2;break}if(6===a){l+=u(r[o])/2,t=!0;break}l+=r[o].clientHeight,"option"===r[o].getAttribute("role")&&a++}return{maxHeight:l,hasScroll:t}},u=r=>{var e;return null!==(e=null==r?void 0:r.clientHeight)&&void 0!==e?e:0},c=({children:r,wrapperRef:e,dropdownListRef:o,hasPrepend:l,isOpen:a,triggerRef:t})=>{let[i,d]=(0,n.useState)(!1),[u,c]=(0,n.useState)(0);return(0,n.useEffect)(()=>{var r,n,i,u,v,p;let f=Array.from(null!==(n=null===(r=null==e?void 0:e.current)||void 0===r?void 0:r.children)&&void 0!==n?n:[]),m=Array.from(null!==(u=null===(i=null==o?void 0:o.current)||void 0===i?void 0:i.children)&&void 0!==u?u:[]),b=Array.from(f.filter(r=>"listbox"!==r.getAttribute("role"))).reduce((r,e)=>{var o;return null!==(o=r+e.clientHeight)&&void 0!==o?o:0},0),{maxHeight:h,hasScroll:y}=s({listElements:m,windowAvailableHeight:document.documentElement.scrollHeight-(null!==(p=null===(v=null==t?void 0:t.current)||void 0===v?void 0:v.getBoundingClientRect().bottom)&&void 0!==p?p:0)-window.scrollY,defaultMaxHeight:l?b:b+6});d(y),a?c(h):c(0)},[r,a,t,e,o,l]),{hasScroll:i,wrapperMaxHeight:u}};var v=o(28519);let p={attributes:!1,childList:!0,subtree:!1},f=(0,n.forwardRef)(({as:r="ul",children:e,wrapperComponent:o=d.Z,prepend:l,append:a,onClick:s,onKeyDown:u,...f},m)=>{let b=(0,n.useRef)(),{handleKeyDown:h,toggleDropdownOpen:y,currentId:g,disabled:w,error:Z,readOnly:k,isOpen:x,ref:D,optionsElements:E,isLayerVisible:A,triggerRef:C}=(0,i.x)(),R=(0,v.Z)(b,null!=D?D:null,null!=m?m:null),$=(0,n.useRef)(),S=(0,n.useRef)(),B=(0,n.useRef)(null),O="li[role=option]",H=null!=x&&x;(0,n.useEffect)(()=>{let r=null==D?void 0:D.current;if(r)return E.current=Array.from(r.querySelectorAll(O)),S.current=new MutationObserver(()=>{E.current=Array.from(r.querySelectorAll(O))}),S.current.observe(r,p),()=>{var r;null===(r=null==S?void 0:S.current)||void 0===r||r.disconnect()}},[D,E,O]),(0,n.useLayoutEffect)(()=>{var r,e,o,l,a;if(A){let o=null===(r=b.current)||void 0===r?void 0:r.querySelectorAll('[aria-selected="true"]')[0];o&&(null===(e=b.current)||void 0===e||e.scrollTo(0,o.offsetTop-o.clientHeight))}let t=(null===(a=null===(l=null===(o=$.current)||void 0===o?void 0:o.parentElement)||void 0===l?void 0:l.dataset)||void 0===a?void 0:a.component)==="PopperContainer"?$.current.parentElement:null;t&&(A?(void 0!==B.current&&clearTimeout(B.current),t.style.zIndex="1"):(void 0!==B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{t.style.zIndex="initial"},200)))},[A]);let{hasScroll:T,wrapperMaxHeight:P}=c({children:e,wrapperRef:$,dropdownListRef:b,hasPrepend:!!l,isOpen:H,triggerRef:C});return(0,t.BX)(o,{"data-open":H,maxHeight:P,hasScroll:T,ref:$,"data-disabled":w,"data-error":Z,"data-readonly":k,children:[l,(0,t.tZ)(r,{ref:R,"aria-activedescendant":g,tabIndex:"-1",role:"listbox",onClick:r=>{y&&y(),s&&s(r)},onKeyDown:r=>{r.stopPropagation(),h(r),u&&u(r)},...f,children:e}),a]})});f.displayName="BaseDropdownOptions";let m=({children:r,prepend:e,append:o})=>(0,t.BX)(t.HY,{children:[e,r,o]});m.displayName="DropdownNativeOptions";let b=(0,n.forwardRef)(({children:r,...e},o)=>{let{isNative:l}=(0,i.x)();return l?(0,t.tZ)(m,{children:r}):(0,t.tZ)(f,{...e,ref:o,children:r})});b.displayName="BaseDropdownOptionsEntry";var h=o(52248);let y=(0,h.Z)(b)`
    ${a.K}
`,g=(0,l.Z)(y,"DropdownOptions")},39789:(r,e,o)=>{o.d(e,{Z:()=>p});var l=o(20042),a=o(61599),t=o(40834),n=o(52903),i=o(2784),d=o(46524),s=o(584);let u=(0,i.forwardRef)(({children:r,as:e="div",...o},l)=>{let{unmount:a}=(0,s.Z)(),{isOpen:t,handleOnOpenStart:u}=(0,d.x)();return(0,i.useEffect)(()=>{t&&u(!0)},[u,t]),(0,n.tZ)(e,{...o,onTransitionEnd:()=>{t||(a(),u(!1))},ref:l,children:r})});u.displayName="BaseDropdownOptionsWrapper";var c=o(52248);let v=(0,c.Z)(u,{shouldForwardProp:(0,l.p)("maxHeight","hasScroll")})`
    ${({maxHeight:r,hasScroll:e})=>(0,t.e)(r,e)}
`,p=(0,a.Z)(v,"DropdownOptionsWrapper")},40689:(r,e,o)=>{o.d(e,{Z:()=>n});var l=o(61599),a=o(52248);let t=a.Z.span`
    color: var(--colors-forms-primary-default-enabled-placeholder);
`,n=(0,l.Z)(t,"DropdownPlaceholder")},16457:(r,e,o)=>{o.d(e,{Z:()=>l});let l=(0,o(2784).createContext)({toggleDropdownOpen:()=>null,defaultOnBlur:()=>null,onLabelClick:()=>null,onChange:()=>null,onBlur:()=>null,setSelectedValue:()=>null})},46524:(r,e,o)=>{o.d(e,{x:()=>t});var l=o(2784),a=o(16457);let t=()=>(0,l.useContext)(a.Z)},61628:(r,e,o)=>{o.d(e,{f:()=>a});var l=o(2784);let a=(r,e,o,a)=>{let[t,n]=(0,l.useState)(0),[i,d]=(0,l.useState)(null),[s,u]=(0,l.useState)(null),[c,v]=(0,l.useState)(e),[p,f]=(0,l.useState)(!1),m=(0,l.useRef)(null),b=(0,l.useRef)(null),h=(0,l.useRef)(null),y=(0,l.useRef)(""),g=(0,l.useRef)(),[w,Z]=(0,l.useState)(!1),k=(0,l.useCallback)(()=>{let r=l.Children.toArray(i).filter(r=>{if((0,l.isValidElement)(r))return"value"in r.props});return l.Children.map(r,r=>{if(!(0,l.isValidElement)(r))return null;let{append:e,prepend:o,children:a,value:t,selectedText:n,id:i}=null==r?void 0:r.props;return{append:e,prepend:o,value:t,id:i||t,text:n||a}})},[i]),x=(0,l.useMemo)(()=>i?k():[],[k,i]),D=(0,l.useMemo)(()=>x?x.find(e=>e.value===r):r&&{value:r,id:null},[r,x]),E=(0,l.useCallback)(r=>{var e;null===(e=null==r?void 0:r.parentElement)||void 0===e||e.scrollTo(0,r.offsetTop-r.clientHeight)},[]),A=(0,l.useCallback)((r,e)=>{r?(e.setAttribute("data-hover",!0),E(e),u(e.id)):e.setAttribute("data-hover",!1)},[E]),C=(0,l.useCallback)(r=>{var e,l,i,d,s,u,c,v,p;let f=x.length,h=t-1<0?f-1:t-1,w=t+1>=f?0:t+1,Z=null===(e=x[h])||void 0===e?void 0:e.id,k=null===(l=x[w])||void 0===l?void 0:l.id;if("Escape"===r.key&&(r.preventDefault(),o&&o(),a&&a()),"Enter"===r.key||" "===r.key){if(r.currentTarget===document.activeElement){D&&(null===(i=null==m?void 0:m.current)||void 0===i||i.forEach(r=>{A((null==r?void 0:r.id)===D.id,r)}));let r=null===(d=null==m?void 0:m.current)||void 0===d?void 0:d[t];null==r||r.click()}}else if("ArrowUp"===r.key)null===(s=null==b?void 0:b.current)||void 0===s||s.focus(),null===(u=null==m?void 0:m.current)||void 0===u||u.forEach((r,e)=>{A(x[e].id===Z,r)}),r.preventDefault(),n(h);else if("ArrowDown"===r.key)null===(c=null==b?void 0:b.current)||void 0===c||c.focus(),null===(v=null==m?void 0:m.current)||void 0===v||v.forEach((r,e)=>{A(x[e].id===k,r)}),r.preventDefault(),n(w);else{y.current=y.current.concat(r.key);let e=x.filter(r=>{var e,o;return(null===(e=r.text)||void 0===e?void 0:e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().indexOf(null===(o=null==y?void 0:y.current)||void 0===o?void 0:o.toUpperCase()))===0});void 0!==g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{y.current=""},1e3),null===(p=null==m?void 0:m.current)||void 0===p||p.forEach((r,o)=>{var l,a;A(x[o].id===(null===(l=e[0])||void 0===l?void 0:l.id),r),x[o].id===(null===(a=e[0])||void 0===a?void 0:a.id)&&n(o)})}},[x,t,o,a,D,A]);return(0,l.useEffect)(()=>{var r;e&&p&&(null===(r=m.current)||void 0===r||r.forEach((r,e)=>{w?D?r.id===D.id&&(A(!0,r),n(e)):0===e&&(A(!0,r),n(e)):(A(!1,r),D&&(null==r?void 0:r.id)===(null==D?void 0:D.id)&&n(e))}))},[e,D,A,w,p]),(0,l.useEffect)(()=>{D&&u(null==D?void 0:D.id)},[D,A]),{options:x,currentOption:D,handleKeyDown:C,ref:b,triggerRef:h,currentId:s,setFocusOnOption:A,setCurrentDescendant:n,setOpenByKeyboard:Z,optionsElements:m,setDropdownOptions:d,handleOnOpenStart:r=>{v(r)},openStart:c,setIsLayerVisible:f,isLayerVisible:p}}},40834:(r,e,o)=>{o.d(e,{K:()=>a,e:()=>l});let l=(r,e)=>`
    position: relative;
    width: 100%;
    max-height: ${r}px;
    overflow: hidden;
    margin-top: calc(-1 * var(--borders-border-s));
    display: flex;
    flex-direction: column;
    border-radius: 0 0 var(--borders-corner-m) var(--borders-corner-m);
    cursor: pointer;
    transition: max-height var(--motion-functional-duration-m)
        var(--motion-functional-easing-decelerated);
    background-color: var(--colors-forms-primary-default-enabled-surface);

    ::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: -0.5rem;
        left: 0;
        width: 100%;
        height: calc(100% + 0.5rem);
        border-width: 0 var(--borders-border-s) var(--borders-border-s);
        border-style: solid;
        border-color: var(--colors-forms-primary-default-enabled-stroke);
        opacity: 1;
        border-radius: 0 0 var(--borders-corner-m) var(--borders-corner-m);
        pointer-events: none;
        transition: border var(--motion-functional-duration-m)
            var(--motion-functional-easing-decelerated);
    }

    > :first-child:not(style) {
        padding-top: var(--spacers-c6);
    }

    > * {
        visibility: hidden;
        opacity: 0;
        transition: opacity var(--motion-functional-duration-m)
            var(--motion-functional-easing-decelerated);
    }

    &[data-open='true'] {
        > * {
            position: relative;
            visibility: visible;
            opacity: 1;
            transition: opacity var(--motion-functional-duration-m)
                var(--motion-functional-easing-decelerated);
        }

        ul {
            overflow: ${e?"auto":"hidden"};
        }
    }

    &[data-readonly='true']::after {
        border-color: var(--colors-forms-primary-default-readonly-stroke);
    }

    &[data-disabled='true']::after {
        border-color: var(--colors-forms-primary-default-disabled-stroke);
    }

    &[data-error='true']::after,
    &[data-error='true']:hover::after {
        border-color: var(--colors-forms-primary-error-enabled-stroke);
    }
`,a=`
    overflow-x: hidden;
    overflow-y: auto;

    &:focus.focus-visible,
    :focus-visible {
        outline: 0 dashed;
        outline: 0 auto Highlight;
        outline: 0 auto -webkit-focus-ring-color;
    }

    &.focus-visible:focus {
        outline: 0;
    }
`}}]);