"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[10555],{646920:(e,t,o)=>{var n;o.r(t),o.d(t,{default:()=>a});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:n,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:n,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:n,storageKey:null}],type:"Pin",abstractKey:null};r.hash="cabaa35ed7d59dee006897bf3ef32e3d";let a=r},216931:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepAuthDesktopPinRep_pin",selections:[{args:null,kind:"FragmentSpread",name:"PinRepWithImpressions_pin"}],type:"Pin",abstractKey:null};n.hash="000e24070b5df05da76d803775cb37e6";let r=n},515280:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let n={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRepDefaultPinRep_pin",selections:[{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"PinRep_pin"}],type:"Pin",abstractKey:null};n.hash="51f44b91a29d43c6d06785fcb846b61b";let r=n},84267:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepVariant_pin",selections:[{args:null,kind:"FragmentSpread",name:"UnifiedPinRepAuthDesktopPinRep_pin"}],type:"Pin",abstractKey:null};n.hash="7982b415980bdf92f7b9338cb5f6c539";let r=n},878069:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});let n={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRep_pin",selections:[{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"UnifiedPinRepDefaultPinRep_pin"}],type:"Pin",abstractKey:null};n.hash="630f94c5c1fff86bdd3cb70e987c1fee";let r=n},640498:(e,t,o)=>{o.d(t,{LG:()=>n,UO:()=>r,ZB:()=>a,ZP:()=>i});let n=100,r=10,a=28,i={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},785220:(e,t,o)=>{function n(e,t,o){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!a(e[n],t[n],o+1))return!1;return!0}function r(e,t,o){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!(n in t)||!a(e[n],t[n],o+1))return!1;return!0}function a(e,t,o){if(o>=1e3)return!1;if(e===t)return!0;if(null==e||null==t||"object"!=typeof e&&"object"!=typeof t)return e!=e&&t!=t;let a=Object.prototype.toString.call(e);if(a!==Object.prototype.toString.call(t))return!1;switch(a){case"[object Array]":return n(e,t,o);case"[object Set]":return n(Array.from(e).sort(),Array.from(t).sort(),o);case"[object Object]":case"[object Arguments]":return r(e,t,o);case"[object Map]":return r(Object.fromEntries(e),Object.fromEntries(t),o);case"[object RegExp]":return e+""==t+"";case"[object Error]":return e.name===t.name&&e.message===t.message;default:return!1}}function i(e,t){return a(e,t,0)}o.d(t,{ZP:()=>i,qP:()=>n})},602185:(e,t,o)=>{o.d(t,{Z:()=>n});let n=o(986782).Z},526990:(e,t,o)=>{o.d(t,{$S:()=>n,V$:()=>r,_4:()=>i,iY:()=>l,mR:()=>a});let n="REFRESH_ALL_EXPERIENCES_MULTI",r="UPDATE_EXPERIENCE_MULTI",a="FETCH_EXPERIENCES",i="REFRESH_ALL_EXPERIENCES",l="UPDATE_EXPERIENCE"},936437:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(967232),r=o(144326),a=o(240760);function i(){let e=(0,r.ZP)();return function(t,o){let r=new Date(t).getTime(),i=Date.now()-r,l=Math.floor(i/n.FS),s=Math.floor(i/n.UK),d=Math.floor(i/n.F4),u=Math.floor(i/n.VL),c=Math.floor(i/n.N9),_=Math.floor(i/n.N1),p=e.ngettext('{{ minutes }} minute ago', '{{ minutes }} minutes ago', l, ' - ', ' -- '),f=e.ngettext('{{ hours }} hour ago', '{{ hours }} hours ago', s, ' - ', ' -- '),y=e.ngettext('{{ days }} day ago', '{{ days }} days ago', d, ' - ', ' -- '),m=e.ngettext('{{ weeks }} week ago', '{{ weeks }} weeks ago', u, ' - ', ' -- '),b=e.ngettext('{{ months }} month ago', '{{ months }} months ago', c, 'useGetHumanizedTimeSince.monthsString', 'months since last update'),h=e.ngettext('{{ years }} year ago', '{{ years }} years ago', _, ' - ', ' -- '),g=e.ngettext('{{ minutes }}m', '{{ minutes }}m', l, 'minutes ago abbreviated', 'minutes ago abbreviated'),v=e.ngettext('{{ hours }}h', '{{ hours }}h', s, 'hours ago abbreviated', 'hours ago abbreviated'),E=e.ngettext('{{ days }}d', '{{ days }}d', d, 'days ago abbreviated', 'days ago abbreviated'),A=e.ngettext('{{ weeks }}w', '{{ weeks }}w', u, 'weeks ago abbreviated', 'weeks ago abbreviated'),w=e.ngettext('{{ months }}mo', '{{ months }}mo', c, 'months ago abbreviated', 'months ago abbreviated'),P=e.ngettext('{{ years }}y', '{{ years }}y', _, 'years ago abbreviated', 'years ago abbreviated');return _>0?(0,a.nk)(o?P:h,{years:_}).join(""):c>0?(0,a.nk)(o?w:b,{months:c}).join(""):u>0?(0,a.nk)(o?A:m,{weeks:u}).join(""):d>0?(0,a.nk)(o?E:y,{days:d}).join(""):s>0?(0,a.nk)(o?v:f,{hours:s}).join(""):l>0?(0,a.nk)(o?g:p,{minutes:l}).join(""):e._('Just now', ' - ', ' -- ')}}},590338:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(144326),r=o(207630);let a=(e,t)=>{let o=t||0,n=10**o,r=+(o?e*n:e).toFixed(8),a=Math.floor(r),i=r-a,l=i>.49999999&&i<.50000001?a%2==0?a:a+1:Math.round(r);return o?l/n:l},i=({maximumFractionDigits:e,minimumFractionDigits:t,style:o,currency:n})=>{let r={maximumFractionDigits:e,minimumFractionDigits:t};return o?{...r,style:o,..."currency"===o?{currency:n,currencyDisplay:"symbol"}:{}}:r},l=e=>{try{0..toLocaleString([e])}catch(e){return!1}return!0},s=(e,t)=>{if(t){let{minimumFractionDigits:o,maximumFractionDigits:n}=new Intl.NumberFormat(e,{style:"currency",currency:t}).resolvedOptions();if(void 0!==o&&void 0!==n)return{minimumFractionDigits:o,maximumFractionDigits:n}}return{minimumFractionDigits:2,maximumFractionDigits:2}};function d(){let e=(0,n.ZP)();return(t,o,n)=>{let d=0,u=0,c=n&&n.style||void 0,_=n&&n.shortform||!1,p=n&&n.uplimit||void 0,f=n&&n.currency||void 0,y=!!p&&o>=p,m=p&&y?p:o;if("currency"===c){let{minimumFractionDigits:e,maximumFractionDigits:o}=s(t,f);d=void 0===n||void 0===n.maximum_fraction_digits?o:n.maximum_fraction_digits,u=void 0===n||void 0===n.minimum_fraction_digits?e:n.minimum_fraction_digits}else d=void 0===n||void 0===n.maximum_fraction_digits?0:n.maximum_fraction_digits,u=void 0===n||void 0===n.minimum_fraction_digits?0:n.minimum_fraction_digits;if(_&&m>999&&(d=void 0===n||void 0===n.shortform_maximum_fraction_digits?2:n.shortform_maximum_fraction_digits,u=0),d<u)return String(m);let b=m,h="",g=[{"100M":{value:1e8,localeKey:e._('億', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.')}},{"10k":{value:1e4,localeKey:e._('万', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.')}}],v=[{b:{value:1e9,localeKey:e._('B', 'Abbreviation for one billion.', 'Abbreviation for one billion.')}},{m:{value:1e6,localeKey:e._('M', 'Abbreviation for one million.', 'Abbreviation for one million.')}},{k:{value:1e3,localeKey:e._('k', 'Abbreviation for one thousand.', 'Abbreviation for one thousand.')}}],E=/^zh|ja|ko/.test(t);if(_&&m>999){let e=E?g:v;for(let t=0;t<e.length;t+=1){let o=Object.keys(e[t])[0],n=e[t][o].value;if(m>=n){b=a(m/n*Math.pow(10,d))/Math.pow(10,d),h=e[t][o].localeKey;break}}}if(null==b)return"";let A=b.toLocaleString([l(t)&&"ar-SA"!==t?t:"en-US"],i({maximumFractionDigits:d,minimumFractionDigits:u,currency:f,style:c}));return h&&h.length>0?(0,r.Z)(e._('{{formattedNumber}}{{numberSuffix}}', 'i18n.usePrettyNumberFormat.prettyNumberFormat', 'String used to concatenate formatted number and localized number suffix'),{formattedNumber:A,numberSuffix:h})+(y?"+":""):A+(y?"+":"")}}},647757:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},903572:(e,t,o)=>{o.d(t,{Z:()=>function e(t,o=!1){return r=>{if(!(0,n.Z)(r))return o&&Array.isArray(r)?r.map(e(t,o)):r;let a={};return Object.keys(r).forEach(i=>{let l=t(r[i],i);(0,n.Z)(r[i])||o&&Array.isArray(r[i])?a[l]=e(t,o)(r[i]):a[l]=r[i]}),a}}});var n=o(647757)},135296:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(903572);function r(e,t=!1){let o=(t,o)=>e(o);return e=>(0,n.Z)(o,t)(e)}},983272:(e,t,o)=>{function n(e,t,o){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,{Z:()=>i});let r=new class{constructor(){n(this,"onResumeListeners",[]),n(this,"onPauseListeners",[]),n(this,"inExp",!1),n(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},a=e=>{if(e.isHidden){let{reason:t}=e;r.windowInFocus=!1,r.onPauseListeners.forEach(e=>e(t))}else r.windowInFocus=!0,r.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>a({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>a({isHidden:!1})),window.addEventListener("blur",()=>a({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>a({isHidden:!1})),window.addEventListener("pagehide",()=>a({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>a(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>a(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let i=r},693625:(e,t,o)=>{o.d(t,{Z:()=>n});function n(){let e=800,t=400;return"undefined"!=typeof window&&(e=window.innerHeight,t=window.innerWidth),{windowHeight:e,windowWidth:t}}},957486:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(667294),r=o(545007),a=o(809833),i=o(604759);function l(e){let{name:t,optionsKey:o}=e,l=t===a.fY,s=(0,i.bC)(),d=s?.get(t,o);if(d)throw d;let u=e=>e[t]?.[o],c=(0,r.v9)(({resources:e})=>u(e)?.nextBookmark),_=(0,r.v9)(({resources:e})=>u(e)?.data),p=(0,r.v9)(({resources:e})=>u(e)?.auxData),f=(0,r.v9)(({resources:e})=>u(e)?.error),y=(0,n.useRef)({auxData:void 0,data:void 0,error:void 0,isAtEnd:!1,nextBookmark:void 0});if(l)return y.current;let m={auxData:p,data:_,error:f,isAtEnd:c===a.qx,nextBookmark:c};return(m.auxData!==y.current.auxData||m.data!==y.current.data||m.error!==y.current.error||m.isAtEnd!==y.current.isAtEnd||m.nextBookmark!==y.current.nextBookmark)&&(y.current=m),y.current}},931397:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(809833),r=o(174044);function a(e){let{enabledRouteRefresh:t,headers:o,name:a,noCache:i,options:l,schema:s}=e??{name:n.fY,options:null},d=!e,{fetchResource:u,ref:c}=(0,r.Z)({enabledRouteRefresh:t,headers:o,name:a,noCache:i,options:l,schema:s},d,!1);return d||u(),c}},750077:(e,t,o)=>{o.d(t,{Z:()=>n});let n=o(950443).Z},978993:(e,t,o)=>{o.d(t,{L_:()=>r,Nh:()=>a,qn:()=>n});let n=(e,t)=>{if("undefined"==typeof window)return t;try{return window.sessionStorage.getItem(e)}catch(e){return window.console.error("Cannot access sessionStorage."),t}},r=e=>{if("undefined"!=typeof window)try{window.sessionStorage.removeItem(e)}catch(e){window.console.error("Cannot access sessionStorage.")}},a=(e,t)=>{if("undefined"!=typeof window)try{window.sessionStorage.setItem(e,t)}catch(e){window.console.error("Cannot access sessionStorage.")}}},415384:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(184309);let r=/\{\{\s*(\w+)\s*\}\}/g,a=(e,t)=>(0,n.Z)(r,e,t)},744823:(e,t,o)=>{o.d(t,{Z:()=>n});let n=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},184309:(e,t,o)=>{o.d(t,{Z:()=>n});let n=(e,t,o)=>t?t.replace(e,(e,t)=>o&&Object.prototype.hasOwnProperty.call(o,t)?o[t]:""):""},207630:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(415384),r=o(744823);let a=(e,t)=>{let o={};return Object.keys(t).forEach(e=>{o[e]=t[e]?(0,r.Z)(t[e].toString()):""}),(0,n.Z)(e,o)}},296209:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}},603667:(e,t,o)=>{o.d(t,{$:()=>n,Z:()=>a});let{Provider:n,useMaybeHook:r}=(0,o(498490).Z)("TimeSpentManagerContext"),a=r},335452:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(730212),r=o(993400),a=o(383399);function i(){let e=(0,n.B)(),t=(0,a.Z)(),o=t.isAuth?t.country:e.country;if(void 0===e||void 0===e.locale)return!1;let i=e.locale.substring(0,2);return!!r.Z[i]?.includes(o)}},830017:(e,t,o)=>{o.d(t,{g:()=>_,I:()=>c});var n=o(667294),r=o(498490),a=o(983272),i=o(605388);let l={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},s=(e=l,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:o}=t,{pinId:n,isPromoted:r,currentTime:a}=o,{videosAutoplaying:l}=e,{currentlyPlayingOrganicVideoId:s,promotedVideosAutoplaying:d,organicVideosAutoplaying:u}=l,c=(0,i.Z)(d),_=(0,i.Z)(u);return!r&&s?e:(r?c[n]={pinId:n,currentTime:a,paused:!1}:_[n]={pinId:n,currentTime:a,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:r?s:n,promotedVideosAutoplaying:c,organicVideosAutoplaying:_}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:o}=t,{pinId:n,isPromoted:r,currentTime:a}=o,{videosAutoplaying:l}=e,{promotedVideosAutoplaying:s,organicVideosAutoplaying:d}=l,u=(0,i.Z)(s),c=(0,i.Z)(d);return r?u[n]={...u[n],paused:!0,currentTime:a}:c[n]={...c[n],paused:!0,currentTime:a},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:u,organicVideosAutoplaying:c}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var d=o(785893);let{Provider:u,useHook:c}=(0,r.Z)("AppUI");function _({children:e}){let[t,o]=(0,n.useReducer)(s,l),r=(0,n.useCallback)(e=>o({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),i=(0,n.useCallback)(e=>o({type:"SET_APP_FOCUS_STATE",payload:e}),[]),c=(0,n.useCallback)(e=>o({type:"SET_CURRENT_VIDEO",payload:e}),[]),_=(0,n.useCallback)(e=>o({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),p=(0,n.useCallback)(e=>o({type:"SET_IS_AUTOPLAY",payload:e}),[]),f=(0,n.useCallback)(e=>o({type:"SET_VIEWPORT_SIZE",payload:e}),[]),y=(0,n.useCallback)(e=>o({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),m=(0,n.useMemo)(()=>({pauseAutoplay:r,setCurrentVideo:c,setFooterPlusButtonVisible:_,setIsAutoplay:p,setViewportSize:f,toggleTypeaheadOverlay:y,setAppFocusState:i,appUI:t}),[r,c,_,p,f,y,i,t]);return(0,n.useEffect)(()=>{a.Z.onSessionResume(()=>{i(!0)}).onSessionPause(()=>{i(!1)})},[i]),(0,d.jsx)(u,{value:m,children:e})}},533191:(e,t,o)=>{o.d(t,{Z:()=>P}),o(167912);var n,r=o(883119),a=o(488792),i=o(47848),l=o(144326),s=o(297728),d=o(728593),u=o(1006),c=o(154785),_=o(901450),p=o(410150),f=o(969119),y=o(383399),m=o(578406),b=o(934648),h=o(424583),g=o(310368),v=o(55463),E=o(785893);let A=({children:e,pulsar:t,testId:o})=>t.show?(0,E.jsx)(r.xu,{"data-test-id":o,position:"relative",children:(0,E.jsxs)(r.iP,{onTap:t.onClick,tapStyle:"none",children:[(0,E.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,E.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,E.jsx)(r.o3,{})})]})}):(0,E.jsx)(r.xu,{"data-test-id":o,children:e}),w=void 0!==n?n:n=o(646920);function P({auxData:e,disabled:t,disableLog:o,followEventType:n,id:P,inline:S,invertColors:k,isFollowed:O,isIdeaPin:R,isLegoEnabled:T,isSecondaryButton:x,isUserFollowButton:D,isUserMe:j,onFollow:I,onUnfollow:Z,pinKey:F,shouldUseLegoColors:L,showPulsar:C,size:z,textType:B="FollowFollowing",unfollowEventType:U,viewParameter:N,viewType:M,clientTrackingParams:H}){let V;let K=(0,l.ZP)(),G=(0,p.HG)(),{showToast:X}=(0,_.F9)(),Y=(0,c.Z)(),W=(0,a.Z)(),Q=(0,d.Z)(),{checkExperiment:$}=(0,s.F)(),J=(0,b.Z)(),q=(0,y.Z)(),ee=q&&q.isAuth,{unauthFollowUserId:et,setUnauthFollowUserId:eo}=(0,v.f)(),en=(0,h.mN)()(P),er=en&&{imageMediumUrl:en.image_medium_url,username:en.username},ea=(0,i.Z)(w,F),ei=ea?.linkDomain,el=ea?.nativeCreator,es=ea?.originPinner,ed=ea?.pinner;V=el||(ei?ei.officialUser:es||ed);let eu=er??V;(0,f.Z)(()=>{!G&&ee&&et&&P&&et===P&&I(P)});let ec=J({fn:()=>{ee?O?(Z(P),o||W({event_type:U,view_type:M,view_parameter:N,object_id_str:P,aux_data:e,clientTrackingParams:H})):(I(P),D&&X(({hideToast:e})=>{let t=eu?.username?`/${eu.username}/`:"";return(0,E.jsx)(g.Z,{handleHide:e,href:t,imageUrl:eu?.imageMediumUrl||"",text:(0,E.jsx)(r.xv,{lineClamp:4,children:K._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow')}),userId:P})}),o||W({event_type:n,view_type:M,view_parameter:N,object_id_str:P,aux_data:e,clientTrackingParams:H})):((0,u.NC)(O?"press_profile_unfollow":"press_profile_follow"),Y({action:"click",item:O?"unfollow-button":"follow-button"}),Q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:R?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:G&&$("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&$("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||eo(P??""),(0,u.NC)("clickthrough"))},modalHeader:(0,m.N4)({i18n:K,toFollow:!O})}),e_=!O&&!!C,ep=()=>{if(j)return K._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===B)return O?K._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):K._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');let e="FollowUnfollow"===B?K._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):K._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return O?e:K._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,E.jsx)(A,{pulsar:e_?{show:!0,onClick:ec}:{show:!1},testId:j||O?"board-unfollow-button":"board-follow-button",children:(0,E.jsx)(r.zx,{accessibilityLabel:ep(),color:L||"AddRemove"===B||!T&&x||k?"gray":"red",disabled:j||t,fullWidth:S,onClick:e_?void 0:({event:t})=>{t.preventDefault(),t.stopPropagation(),o||W({event_type:101,component:13672,element:11951,object_id_str:P,view_type:M,view_parameter:N,aux_data:e,clientTrackingParams:H}),ec()},selected:O||!1,size:z,text:ep()})})}},732988:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(883119),r=o(785893);function a({text:e}){return(0,r.jsx)(n.xu,{display:"visuallyHidden",children:(0,r.jsx)(n.X6,{accessibilityLevel:1,children:e})})}},24472:(e,t,o)=>{o.d(t,{C5:()=>r,Do:()=>a,ef:()=>n});let n=0,r=new Set(["/","/today"]),a="localNavTabCarousel"},410287:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(883119),r=o(785893);function a({children:e,onMouseEnter:t,onMouseLeave:o,onTouch:a,rounding:i,fullWidth:l=!1,pressState:s="none",accessibilityLabel:d,role:u,dataTestId:c}){let _=(Array.isArray(s)?s:[s]).includes("compress");return(0,r.jsx)(n.iP,{accessibilityLabel:d,dataTestId:c,fullWidth:l,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:o&&(({event:e})=>o(e)),onTap:a&&(({event:e})=>a(e)),role:u,rounding:i,tapStyle:_?"compress":"none",children:e})}},682661:(e,t,o)=>{o.d(t,{BK:()=>f,Tw:()=>y,ZP:()=>w,rX:()=>P}),o(167912);var n,r,a,i,l=o(47848),s=o(297728),d=o(410150),u=o(383399),c=o(66560),_=o(179735),p=o(785893);let f=(0,_.Z)(()=>Promise.all([o.e(97270),o.e(94109),o.e(63954),o.e(61873),o.e(2984)]).then(o.bind(o,279985)),void 0,"AuthDesktopPinRep"),y=(0,_.Z)(()=>Promise.all([o.e(97270),o.e(39921)]).then(o.bind(o,868300)),void 0,"DefaultPinRep"),m=void 0!==n?n:n=o(878069),b=void 0!==r?r:r=o(84267),h=void 0!==a?a:a=o(216931),g=e=>{let{pinKey:t,...o}=e,n=(0,l.Z)(h,t);return(0,p.jsx)(f,{...o,pinKey:n})},v=e=>{let{pinId:t,pin:o,...n}=e,r=(0,c.S6)(),a=(t?r(t):null)||o,i=a?.tracking_params;return(0,p.jsx)(f,{...n,pinKey:{type:"deprecated",data:a},trackingParams:i})},E=void 0!==i?i:i=o(515280),A=e=>{let{pinKey:t,...o}=e,n=(0,l.Z)(E,e.pinKey);return(0,p.jsx)(y,{...o,duploQueryRef:n})};function w(e){let t=(0,d.HG)(),o=(0,u.Z)(),n=o&&o.isAuth&&t,r=(0,l.Z)(m,e.duploQueryRef),{checkExperiment:a}=(0,s.F)();if(!(!n||e.duploQueryRef||a("web_auth_desktop_default_pin_rep").anyEnabled)){let{disableAppUpsell:t,duploDedupeVisualAnnotations:o,duploDisablePinCardPadding:n,duploFeedItemProps:r,duploIsSquarePin:a,duploLazyLoadImage:i,duploOneTapSave:l,duploPinCardDetailsMargin:s,duploPriorityFetchImage:d,duploQueryRef:u,duploShouldAddNiiSearchParamToImageUrls:c,duploShouldAllowProductPriceIndicator:_,duploConversationPin:f,topLevelTrafficSource:y,topLevelTrafficSourceDepth:m,trafficSource:b,...h}=e;return(0,p.jsx)(v,{...h})}let{imageOnlyOption:i,pin:c,pinImageCrop:_,resolution:f,saveButtonOptions:y,duploQueryRef:b,...h}=e;return(0,p.jsx)(A,{...h,pinKey:r})}function P(e){let t=(0,d.HG)(),o=(0,u.Z)(),n=o&&o.isAuth&&t,r=(0,l.Z)(m,e.duploQueryRef),a=(0,l.Z)(b,e.pinKey),{checkExperiment:i}=(0,s.F)();if(!(!n||e.duploQueryRef||i("web_auth_desktop_default_pin_rep").anyEnabled)&&null!=a&&null!=e.pinKey){let{disableAppUpsell:t,duploDedupeVisualAnnotations:o,duploDisablePinCardPadding:n,duploFeedItemProps:r,duploIsSquarePin:i,duploLazyLoadImage:l,duploOneTapSave:s,duploPinCardDetailsMargin:d,duploPriorityFetchImage:u,duploQueryRef:c,duploShouldAddNiiSearchParamToImageUrls:_,duploShouldAllowProductPriceIndicator:f,duploConversationPin:y,topLevelTrafficSource:m,topLevelTrafficSourceDepth:b,trafficSource:h,pinKey:v,...E}=e,{pin:A,pinId:w,...P}=E;return(0,p.jsx)(g,{...P,pinKey:a})}let{imageOnlyOption:c,pin:_,pinImageCrop:f,resolution:y,saveButtonOptions:h,duploQueryRef:v,...E}=e;return(0,p.jsx)(A,{...E,pinKey:r})}},845873:(e,t,o)=>{o.d(t,{bn:()=>l,fJ:()=>d,gC:()=>s});var n=o(545007),r=o(498490),a=o(785893);let{Provider:i,useHook:l}=(0,r.Z)("Boards");function s(){let e=l();return t=>e[t]}function d({children:e}){let t=(0,n.v9)(({boards:e})=>e,n.wU);return(0,a.jsx)(i,{value:t,children:e})}},55463:(e,t,o)=>{o.d(t,{f:()=>l,w:()=>s});var n=o(667294),r=o(498490),a=o(785893);let{Provider:i,useHook:l}=(0,r.Z)("Session");function s({children:e}){let[t,o]=(0,n.useState)(void 0),r=(0,n.useCallback)(()=>o(void 0),[]),l=(0,n.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:o,removeUnauthFollowUserId:r}),[t,r]);return(0,a.jsx)(i,{value:l,children:e})}},100981:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(297728);function r(){return(0,n.F)().checkExperiment("web_homefeed_suspense_resource").anyEnabled}},599911:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e,t,o,r=!1,a){return{privacy_filter:t?"secret":"public",sort:o||"last_pinned_to",field_set_key:"profile_grid_item",username:e,isRetrievalHub:r,filter_types:a}}},35486:(e,t,o)=>{o.d(t,{Z:()=>n});let n=(e,t)=>`${e}:${t||""}`},831355:(e,t,o)=>{o.d(t,{O:()=>l,Q:()=>s});var n=o(338623),r=o(35486),a=o(701842);let i=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],l={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:o,username:n,privacyFilter:r="all",filterAllPins:a=!1,filterShoppingList:i=!1,includeArchived:l=!0},s)=>({privacy_filter:r,sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:n,page_size:25,group_by:o?"mix_public_private":"visibility",include_archived:l,redux_normalize_feed:!0,filter_all_pins:a,filter_shopping_list:i,...s?{orbac_subject_id:s}:Object.freeze({})})},s=e=>i.reduce((t,o)=>{let i=[(0,a.N8)("profileBoards",(0,r.Z)(e,o))];return[!0,!1].forEach(t=>{[!0,!1].forEach(r=>{i.push((0,n.jB)(l.name,l.options({username:e,boardOrder:o,mixPublicSecret:t,filterStories:r})))})}),t.concat(i)},[])},119437:(e,t,o)=>{o.d(t,{Br:()=>u,Cr:()=>b,K8:()=>f,L1:()=>k,YQ:()=>S,ZP:()=>h,aX:()=>g,eo:()=>_,md:()=>c,oG:()=>p,oL:()=>v,of:()=>y,xQ:()=>m,xR:()=>P,yT:()=>d});var n=o(252071),r=o(640498),a=o(468808),i=o(338623),l=o(599911),s=o(831355);function d(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function u(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function c(e,t){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:t}}}function _({viewingUserId:e,viewingUsername:t,boardId:o,boardPinCount:n}){return{type:"BOARD_DELETE",payload:{viewingUserId:e,viewingUsername:t,boardId:o,boardPinCount:n}}}let p=(e,t)=>o=>o((0,a.U)("BoardResource",{options:{board_id:e,field_set_key:t}}));function f(e){return t=>{e&&(0,s.Q)(e).forEach(e=>{t(e)})}}let y=e=>({type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}),m=e=>p(e,"pin_count"),b=(e,t)=>({type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:t}}),h=e=>({type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}});function g(e,t,o){let a={name:e,privacy:r.ZP.BoardPrivacy.PUBLIC,username:t,...o?{orbac_subject_id:o}:Object.freeze({})};return e=>n.Z.create("BoardResource",a).callCreate().then(o=>{let n=o.resource_response.data;return e(t&&(0,i.jB)("BoardsResource",(0,l.Z)(t,!1))),n})}function v(e={},t,o){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:o}}let E=(e,t)=>({type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:t}}),A=(e,t,o)=>({type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:t,viewingUser:o}}),w=(e,t,o,n)=>({type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:t,status:o,collaboratingUsers:n}}),P=(e,t,o)=>async r=>{r(E(e,t));let a=await n.Z.create("BoardInviteResource",{board_id:e,invited_user_id:t}).callDelete();return a.resource_response.error||o({event_type:29,object_id_str:e}),a},S=(e,t,o,r,a,i)=>async l=>{l(A(e,r?.id??"",o));try{(await n.Z.create("accepted"===t?"BoardCollaboratorResource":"BoardInviteResource",{board_id:e,field_set_key:"boardEdit",invited_user_id:r?.id??"",...i?{orbac_subject_id:i}:{}}).callDelete()).resource_response.error||a({event_type:"accepted"===t?25:29,object_id_str:e})}catch(n){l(w(e,o,t,[r]))}},k=(e,t,o,r)=>a=>{let i=n.Z.create("BoardResource",{board_id:o}).callDelete();return a(_({viewingUserId:e,viewingUsername:t,boardId:o,boardPinCount:r})),i}},701842:(e,t,o)=>{function n(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function r(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}o.d(t,{EX:()=>i,N8:()=>r,Qv:()=>a,_f:()=>n,vX:()=>l});let a=(e,t,o=Object.freeze({}))=>({type:"APPEND_FEED_ITEMS",payload:{id:e,options:o,items:t}});function i(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function l(e){return{type:"FEED_ITEMS_ADDED",payload:e}}},310368:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(883119),r=o(476198),a=o(144326),i=o(961754),l=o(410150),s=o(785893);function d({ideaPinImages:e}){let t=e.map((e,t)=>(0,s.jsx)(n.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:t}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,s.jsx)(n.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},t));return(0,s.jsx)(n.kC,{justifyContent:"center",children:(0,s.jsx)(n.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:t})})}function u({handleHide:e,text:t,userId:o,href:u,imageUrl:c}){let _=(0,a.ZP)(),p=(0,l.HG)(),f=(0,i.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:o}}),y=Array.isArray(t)?t.join(" "):t;if(0===(f.data||[]).length)return(0,s.jsx)(r.ZP,{duration:5e3,href:u,onHide:e,text:y,thumbnail:c?{image:(0,s.jsx)(n.Ee,{alt:_._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:c})}:void 0});let m=(f.data||[]).slice(0,3).map(e=>e.images?.[p?"236x":"170x"]),b=(0,s.jsx)(d,{ideaPinImages:m});return(0,s.jsx)(r.ZP,{_dangerouslySetThumbnail:b,duration:5e3,href:u,onHide:e,text:y})}},599141:(e,t,o)=>{function n(e,t){return t?`${e}?${new URLSearchParams(t).toString()}`:e}function r(e){return n("/admin/",e)}function a(e){return n("/admin/oauth/logout/",e)}function i(e){return n("/today/",e)}o.d(t,{HF:()=>r,Kn:()=>a,tG:()=>i})},204942:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(383997);function r(e,t,o){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},601413:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(204942);function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(t){(0,n.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}},383997:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(671002);function r(e){var t=function(e,t){if("object"!=(0,n.Z)(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=(0,n.Z)(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,n.Z)(t)?t:t+""}},671002:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/10555-6607d9adcfb52cbd.mjs.map