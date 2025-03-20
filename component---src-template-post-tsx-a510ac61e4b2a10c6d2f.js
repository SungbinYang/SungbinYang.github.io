"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[194,247],{

/***/ 543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: function() { return /* binding */ useConfig; }
});

;// ./config/profile.json
var profile_namespaceObject = /*#__PURE__*/JSON.parse('{"author":"Sungbin","title":"Blog","titleTemplate":"%s · Sungbin","placeholder":"/profile.png","siteUrl":"https://sungbin.kr","description":"양성빈의 블로그","twitterUserName":"","github":"SungbinYang","secondary":"https://yang-sungbin.tistory.com"}');
;// ./config/resume.json
var resume_namespaceObject = /*#__PURE__*/JSON.parse('{"config":{"name":"양성빈","role":"Software Engineer","bio":["웹 백엔드에 관심이 많은 <string>웹 프론트 소프트웨어 엔지니어</string>","트리짓소프트웨어 개발팀","이러닝 템플릿 <string>웹 프론트 부분 개선</string>","사내 직원들을 위한 백오피스및 다양한 툴 개발"],"github":"https://github.com/SungbinYang","email":"yangseongbin3763@gmail.com"},"careers":{"title":"경력","list":[{"name":"트리짓소프트웨어","position":"Software Engineer / Pro","department":"개발팀","startDate":"2020.11","endDate":null,"descriptions":["국가기관 이러닝 컨텐츠 개발 및 컨텐츠에 들어가는 인터렉티브 게임, 요소 개발","기존 코드 템플릿을 객체지향적 및 ES6 표준으로 리팩토링","기존의 복잡한 자막 데이터 생성 과정을 간소화하는 유틸리티를 개발하여 작업 효율을 크게 향상","[백오피스] 기존 php로 이루어진 코드관리용 게시판을 java+spring boot + thymeleaf로 마이그레이션","[백오피스] 사내 회의실 예약 시스템 구축 및 성능 개선","[백오피스] 사내 백오피스 프로젝트를 공통 적용가능한 통합인증모듈 개발"],"projects":[{"name":"프로","descriptions":["사내 백오피스 통합인증 시스템 개발"],"startDate":"2024.01","endDate":"2024.02","which":[{"title":"JWT 및 Redis 기반의 통합 인증 시스템 구축"},{"title":"회의실 예약 시스템에서 사용 중인 JWT 기반 access token 확장"},{"title":"사내 PC의 IP를 키값으로 사용하여 access token을 Redis에 저장"},{"title":"타 프로젝트 root 도메인 접속 시, Redis에서 해당 IP를 확인하여 access token을 로컬 스토리지에 저장"},{"title":"IP가 없으면 로그인 페이지로 리다이렉트"}],"techStacks":["Java8","Spring Boot 2.x","Redis","Spring Security"]},{"name":"프로","descriptions":["사내 회의실 예약 시스템 구축"],"startDate":"2023.02","endDate":null,"which":[{"title":"웹 프론트 및 서버 단 아키텍쳐 설계 및 개발"},{"title":"비즈니스 로직 단위로 단위 테스트 작성"},{"title":"낙관적 락을 적용하여 성능 문제 최소화"},{"title":"비밀번호 수정 관련 인증 메일 발송 성능 개선: 비동기 로직을 이용하여 기존 메일 발송 4.x초에서 4.xms로 성능개선"},{"title":"전체 예약 조회 쿼리 최적화: 기존 예약 조회 관련 쿼리를 fet join을 통하여 하나의 쿼리로 변경 기존 조회 성능의 30% 개선"},{"title":"실시간 데이터 갱신 문제 해결: SSE(Server-Sent Events) 방식 도입으로 실시간 예약 표기"},{"title":"직원 요구사항에 따라 시스템 리팩토링 및 유지보수"}],"techStacks":["Java 8","Spring Boot 2.7.10","JPA","Spring Security","MariaDB","Spring REST DOCS","Spring Haeteoas","JUnit5","Gradle"]},{"name":"주임","startDate":"2022.02","endDate":"2022.03","descriptions":["사내 자막 파일 자동화 도구 개발"],"which":[{"title":"스크립트를 자동으로 자막 파일로 변환하는 웹 툴 제작"}],"techStacks":["Javascript"]},{"name":"주임","startDate":"2022.02","endDate":"2022.08","descriptions":["프로젝트 템플릿 개선"],"which":[{"title":"반복된 코드를 하나의 파일에 모아 모듈화"},{"title":"디자인팀과 협의하여 이미지 용량 축소 및 webp 확장자로 변경"},{"title":"리팩토링 후 렌더링 속도 약 50% 개선 (5.x초에서 2.x초로 감소)"}],"techStacks":["HTML5","CSS","Javascript","JQuery"]},{"name":"사원","startDate":"2021.03","endDate":"2021.05","descriptions":["사내 코드 관리 시스템 구축"],"which":[{"title":"웹 프론트, 서버 전반적인 아키텍쳐 설계 및 개발"}]},{"name":"사원","startDate":"2020.11","endDate":null,"descriptions":["국가기관 이러닝 컨텐츠 개발"],"which":[{"title":"각 국가기관별 1년 단위 프로젝트 총괄 개발 담당"},{"title":"매년 다양한 기관별 프로젝트 수행 경험 다수"},{"title":"여러 국가기관을 대상으로 이러닝 콘텐츠 개발 및 배포"},{"title":"인터렉티브 게임 개발"}],"techStacks":["Java 8","Spring Boot","Spring Security","JPA","MariaDB","Thymeleaf"]}]}]},"skills":{"title":"기술","list":[{"title":"Java","descriptions":[{"title":"Java를 이용한 SpringBoot 프로젝트 개발에 익숙합니다.","subTitle":[""]},{"title":"문법을 잘 활용하며, 가독성 향상을 위해 노력합니다.","subTitle":[""]}]},{"title":"SpringBoot","descriptions":[{"title":"웹 애플리케이션 서버를 설계할 수 있습니다.","subTitle":["PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]}]},{"title":"HTML/CSS","descriptions":[{"title":"Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.","subTitle":["HTML이 길어질 수록 Semantic Markup이 중요해집니다. 그러므로, 초기에 작성할 때 부터 고려를 많이하는 편입니다."]},{"title":"CSS를 짤 때 최대한 간단하고, 개발자 친화적으로 짤 수 있게 노력합니다.","subTitle":["복잡한 문법을 style에서 담으려고 하지 않습니다. style은 이해하기 쉬울수록 최고라고 생각하기 때문입니다. CSS를 개발할 때 tag들을 각 요소별로 구분하여 쉽게 알아볼 수 있도록 코딩합니다."]},{"title":"여러 브라우저를 지원할 수 있습니다.","subTitle":["Chrome, Safari, Firefox등 여러 브라우저들을 지원하는 앱을 만들 수 있습니다."]},{"title":"여러 기기에 대응할 수 있습니다.","subTitle":["다양한 사용자가 사용하는 기기에 대해 반응형 및 웹 접근성을 지원하는 앱을 만들 수 있습니다."]}]},{"title":"TypeScript","descriptions":[{"title":"TypeScript를 이용한 React 코딩에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 적절한 타입을 사용합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속 등을 통한 클래스 타입에도 강점을 지닙니다."]},{"title":"Generic에 익숙합니다.","subTitle":["Generic과 더불어 다양한 문법들 ex) Overloading, Tuple 등을 이용한 코딩을 할 수 있습니다."]}]},{"title":"JavaScript","descriptions":[{"title":"ES2015 이후의 JavaScript 문법에 익숙합니다.","subTitle":["JavaScript ES2015 이상의 문법을 수월하게 작성하거나 읽을 수 있습니다."]},{"title":"Vanilla JavaScript를 통해 DOM을 다루는데 익숙합니다.","subTitle":[]},{"title":"Reduce, Map과 같은 고차함수를 적극적으로 사용합니다.","subTitle":[]},{"title":"비동기 작업을 하는데 익숙합니다. (promise, async await)","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow, gitlab flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"/posts","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다."]},{"title":"축구 시청 및 운동","url":null,"descriptions":["좋아하는 축구 시청으로 통하여 스트레스를 풀고 동네 동호회에 가입하여 축구활동을 즐겨합니다."]}]},"opensources":{"description":"오픈소스 기여","list":[{"title":"[spring-projects/spring-framework] PR #33612","url":"https://github.com/spring-projects/spring-framework/pull/33612"},{"title":"[spring-projects/spring-framework] PR #33646","url":"https://github.com/spring-projects/spring-framework/pull/33646"}]},"activities":{"description":"활동","list":[{"title":"2024.02 ~ 2024.03 인프런 워밍업 클럽 0기 참여자로 활동","url":null},{"title":"2024.04 ~ 2024.05 인프런 워밍업 클럽 1기 서포터로 활동","url":null}]}}');
;// ./src/hooks/useConfig.ts
function useConfig(){return{profile:profile_namespaceObject,resume:resume_namespaceObject};}

/***/ }),

/***/ 1502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ post; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../packages/design-system/dist/index.js + 112 modules
var dist = __webpack_require__(9124);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.19_react@18.2.0__@types+react@18.3.19_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__(1141);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.19_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(4217);
;// ./src/components/Comment/Comment.style.tsx
const _Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e11mj3800"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",_ref=>{let{theme}=_ref;return theme.colors.PRIMARY.ACCENT_2;},";&>p{margin-bottom:1.5rem;font-size:1.8rem;",_ref2=>{let{theme}=_ref2;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:",theme.colors.PRIMARY.FOREGROUND,";"+( true?"":0), true?"":0);},";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"+( true?"":0));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// ./src/components/Comment/index.tsx
const Comment=()=>{const ref=(0,react.useRef)(null);const{0:state,1:setState}=(0,react.useState)({status:'pending'});(0,dist/* useMount */.JO)(()=>{var _ref$current$children,_ref$current,_ref$current2;const hasScript=(_ref$current$children=(_ref$current=ref.current)===null||_ref$current===void 0?void 0:_ref$current.children)!==null&&_ref$current$children!==void 0?_ref$current$children:[];if(hasScript.length>0)return;const scriptEl=document.createElement('script');scriptEl.onload=()=>{setState({status:'success'});};scriptEl.onerror=()=>{setState({status:'failure'});};scriptEl.async=true;scriptEl.src='https://giscus.app/client.js';scriptEl.setAttribute('data-repo','SungbinYang/SungbinYang.github.io');scriptEl.setAttribute('data-repo-id','R_kgDOMfhYDg');scriptEl.setAttribute('data-category','Comments');scriptEl.setAttribute('data-category-id','DIC_kwDOMfhYDs4ChjlR');scriptEl.setAttribute('data-mapping','pathname');scriptEl.setAttribute('data-strict','0');scriptEl.setAttribute('data-reactions-enabled','1');scriptEl.setAttribute('data-emit-metadata','0');scriptEl.setAttribute('data-input-position','top');scriptEl.setAttribute('data-theme','light_high_contrast');scriptEl.setAttribute('data-lang','ko');scriptEl.setAttribute('data-loading','lazy');scriptEl.setAttribute('crossorigin','anonymous');(_ref$current2=ref.current)===null||_ref$current2===void 0?void 0:_ref$current2.appendChild(scriptEl);});return/*#__PURE__*/(0,jsx_runtime.jsxs)(_Wrapper,{children:[state.status!=='success'&&/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spinner */.y$,{size:50}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref})]});};
;// ./src/components/Markdown/Markdown.style.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const Markdown_style_Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("section",{target:"e15iac6l1"})( true?{name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}:0);const _Contents=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(Markdown_style_Wrapper,{target:"e15iac6l0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",_ref=>{let{theme}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("p>img{width:100%;}p{color:",theme.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;margin:0 0 2rem;}center{color:",theme.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0 0 2rem;}p+center,iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",theme.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",theme.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",theme.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",theme.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:2rem;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",theme.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'\uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC5C6\uC5B4\uC694. :(';}blockquote{background:",theme.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",theme.colors.HIGHLIGHT.PINK,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}"+( true?"":0), true?"":0);},";"+( true?"":0));
;// ./src/components/Markdown/index.tsx
const Markdown=props=>{const{html:_html,hash}=props;const ref=(0,react.useRef)(null);const html=(0,react.useMemo)(()=>{const result=_html// pre 태그 (소스코드)에 추가하여 wrapping 하는 div를 추가한다.
// 해당 div는 스크롤 처리를 진행한다.
.replaceAll('<pre','<div class="markdown-wrapper"><pre').replaceAll('</pre>','</pre></div>');return result;},[]);(0,react.useEffect)(()=>{var _ref$current$getEleme,_ref$current;// heading 전부 체크해서 해시에 저장할 수 있는 버튼을 추가한다.
// 버튼을 클릭하면 이동되도록 구현.
Array.from((_ref$current$getEleme=(_ref$current=ref.current)===null||_ref$current===void 0?void 0:_ref$current.getElementsByTagName('*'))!==null&&_ref$current$getEleme!==void 0?_ref$current$getEleme:[]).filter(it=>{var _it$tagName$,_it$tagName;return Number((_it$tagName$=(_it$tagName=it.tagName)===null||_it$tagName===void 0?void 0:_it$tagName[1])!==null&&_it$tagName$!==void 0?_it$tagName$:'999')<6;}).forEach(it=>{if(it.getElementsByTagName('a').length>0)return;const name=it.innerHTML.replaceAll(' ','-');it.innerHTML=`
          <a href="#${name}" aria-label="${name} permalink">
            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" 
            stroke='currentColor'
            stroke-width='1'
            stroke-linecap='round'
            stroke-linejoin='round'
            fill='none'
            shape-rendering='geometricPrecision'>
              <path
                fill-rule="evenodd" 
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
              </path>
            </svg>
          </a>
          ${it.innerHTML}
        `;it.id=name;});// 페이지가 로드되고 나서 선택된 해딩으로 이동한다.
window.onload=()=>{setTimeout(()=>{const hashData=decodeURIComponent(hash).substring(1);if(hashData){var _document$getElementB,_document$getElementB2;window.scrollTo(0,(_document$getElementB=(_document$getElementB2=document.getElementById(hashData))===null||_document$getElementB2===void 0?void 0:_document$getElementB2.getBoundingClientRect().bottom)!==null&&_document$getElementB!==void 0?_document$getElementB:0);}});};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(_Contents,{ref:ref,dangerouslySetInnerHTML:{__html:html}});};
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 9 modules
var gatsby_browser_entry = __webpack_require__(1152);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(8528);
;// ./src/components/PostHeader/PostHeader.style.tsx
function PostHeader_style_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const _Header=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("header",{target:"e1sc6lj77"})( true?{name:"1azakc",styles:"text-align:center"}:0);const PostHeader_style_Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj76"})( true?{name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}:0);const _BottomBox=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj75"})( true?{name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}:0);const _TextContainer=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj74"})( true?{name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}:0);const _IconContainer=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj73"})( true?{name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}:0);const _Icon=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("button",{target:"e1sc6lj72"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",_ref=>{let{theme}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background:",theme.colors.PRIMARY.FOREGROUND,";color:",theme.colors.PRIMARY.BACKGROUND,";"+( true?"":0), true?"":0);},";"+( true?"":0));const _HeaderTitle=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj71"})( true?{name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}:0);const _ChildrenWrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj70"})( true?{name:"1d3w5wq",styles:"width:100%"}:0);
;// ./src/components/PostHeader/index.tsx
const PostHeader=props=>{const{title,tags,date,author,timeToRead,href,children}=props;const[year,month,day]=(0,utils/* getTime */.WB)(date);const toast=(0,dist/* useToasts */.Yf)();const dateToString=`${year}년 ${Number(month)}월 ${Number(day)}일`;return/*#__PURE__*/(0,jsx_runtime.jsx)(_Header,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(PostHeader_style_Wrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(_HeaderTitle,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY,{as:"h1",size:40,weight:800,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),tags&&/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Container */.mc,{row:true,wrap:"wrap",gap:0.5,children:tags.map(it=>/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Badge */.Ex,{size:"large",children:["#",it]},it))}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),/*#__PURE__*/(0,jsx_runtime.jsxs)(_BottomBox,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(_TextContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Text */.EY,{size:16,as:"span",children:["Written by ",/*#__PURE__*/(0,jsx_runtime.jsx)(gatsby_browser_entry.Link,{to:"/",children:author})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:0.25}),/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Text */.EY,{size:14,as:"span",children:[dateToString," \xB7 ",timeToRead," min read"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(_IconContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Tooltip */.m_,{text:"\uD398\uC774\uC2A4\uBD81 \uACF5\uC720",position:"top",children:/*#__PURE__*/(0,jsx_runtime.jsx)(_Icon,{onClick:facebookShare,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Tooltip */.m_,{text:"\uB9C1\uD06C \uBCF5\uC0AC",position:"top",children:/*#__PURE__*/(0,jsx_runtime.jsx)(_Icon,{onClick:linkCopy,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),/*#__PURE__*/(0,jsx_runtime.jsx)(_ChildrenWrapper,{children:children})]})});function facebookShare(){toast.error('페이스북 공유 기능은 개발중입니다.');}function linkCopy(){(0,dist/* copy */.C)(decodeURIComponent(href));toast.success('링크를 복사했습니다.');}};
// EXTERNAL MODULE: ./src/components/Seo/index.tsx + 1 modules
var Seo = __webpack_require__(8621);
;// ./src/components/Series/Series.style.tsx
function Series_style_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const _List=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("ol",{target:"e1oz9bci1"})( true?{name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}:0);const _Item=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("li",{target:"e1oz9bci0"})(_ref=>{let{theme,timeToRead}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}&::after{content:'- ",timeToRead,"\uBD84';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",theme.colors.HIGHLIGHT.PINK,";font-weight:600;text-decoration:none;color:",theme.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",theme.colors.HIGHLIGHT.PINK,";border-top:2px solid ",theme.colors.HIGHLIGHT.PINK,";color:",theme.colors.PRIMARY.BACKGROUND,";}}"+( true?"":0), true?"":0);},";"+( true?"":0));
;// ./src/components/Series/index.tsx
const Series=props=>{const{name,posts}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Collapse */.SD,{title:name,card:true,size:"medium",subtitle:`시리즈의 글 (${posts.length}개)`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Container */.mc,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(_List,{children:posts.map(it=>/*#__PURE__*/(0,jsx_runtime.jsx)(_Item,{timeToRead:it.timeToRead,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>moveToLocation(it.slug),children:it.name})},it.name))})})});function moveToLocation(slug){(0,gatsby_browser_entry.navigate)(slug);}};
// EXTERNAL MODULE: ./src/hooks/useConfig.ts + 2 modules
var useConfig = __webpack_require__(543);
;// ./src/components/Adsense/Adsense.style.tsx
function Adsense_style_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const Adsense_style_Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e15c1i4m0"})( true?{name:"1aem3cm",styles:"max-width:900px;width:100%;margin:0 auto;box-sizing:border-box;padding:0"}:0);
;// ./src/components/Adsense/index.tsx
const AdSense=_ref=>{let{slotId}=_ref;const currentPath=typeof window==='undefined'?null:window.location.pathname;(0,react.useEffect)(()=>{if(window){;(window.adsbygoogle=window.adsbygoogle||[]).push({});}},[currentPath]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Adsense_style_Wrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("ins",{className:"adsbygoogle",style:{display:'block'},"data-ad-client":"ca-pub-8854437638395695","data-ad-slot":slotId,"data-ad-format":"auto","data-full-width-responsive":"true"})},currentPath);};
;// ./src/template/post.tsx









const Post = props => {
  const {
    location,
    data
  } = props;
  const {
    profile
  } = (0,useConfig/* useConfig */.U)();
  const {
    allMarkdownRemark
  } = data;
  const {
    href,
    hash
  } = location;
  const {
    nodes,
    group: seriesGroup
  } = allMarkdownRemark;
  const {
    timeToRead,
    html
  } = data.markdownRemark;
  const {
    title,
    date,
    image,
    tags,
    series
  } = data.markdownRemark.frontmatter;
  const cachedFilterSeries = (0,react.useCallback)(getFilteredSeries, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Seo/* Seo */.G, {
      name: title,
      image: image === null || image === void 0 ? void 0 : image.publicURL,
      isPost: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PostHeader, {
      title: title,
      date: date,
      image: image === null || image === void 0 ? void 0 : image.publicURL,
      tags: tags,
      timeToRead: timeToRead,
      author: profile.author,
      href: href,
      children: series && seriesGroup && /*#__PURE__*/(0,jsx_runtime.jsx)(Series, {
        name: series,
        posts: cachedFilterSeries()
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Markdown, {
      html: html,
      hash: hash
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(AdSense, {
      slotId: "5104795204"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
      id: "comments"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment, {})]
  });
  function getFilteredSeries() {
    return nodes.filter(it => it.frontmatter.series).filter(it => it.frontmatter.series === series).map(it => ({
      name: it.frontmatter.title,
      timeToRead: it.timeToRead,
      slug: it.fields.slug
    }));
  }
};
/* harmony default export */ var post = (Post);
const pageQuery = "1061594122";

/***/ })

}]);
//# sourceMappingURL=component---src-template-post-tsx-a510ac61e4b2a10c6d2f.js.map