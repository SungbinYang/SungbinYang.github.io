(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[161,753],{1589:function(t,e,i){var r=i(9859),n=i(1601),o=i(6733),a=i(7079),s=i(95)("toStringTag"),l=r.Object,c="Arguments"==a(function(){return arguments}());t.exports=n?a:function(t){var e,i,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(i){}}(e=l(t),s))?i:c?a(e):"Object"==(r=a(e))&&o(e.callee)?"Arguments":r}},17:function(t,e,i){var r=i(5968),n=i(2991),o=Math.floor,a=r("".charAt),s=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,r,u,m){var p=i+t.length,g=r.length,h=d;return void 0!==u&&(u=n(u),h=c),s(m,h,(function(n,s){var c;switch(a(s,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,i);case"'":return l(e,p);case"<":c=u[l(s,1,-1)];break;default:var d=+s;if(0===d)return n;if(d>g){var m=o(d/10);return 0===m?n:m<=g?void 0===r[m-1]?a(s,1):r[m-1]+a(s,1):n}c=r[d-1]}return void 0===c?"":c}))}},8311:function(t,e,i){var r=i(5052),n=i(7079),o=i(95)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},895:function(t,e,i){"use strict";var r=i(1176);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1601:function(t,e,i){var r={};r[i(95)("toStringTag")]="z",t.exports="[object z]"===String(r)},3326:function(t,e,i){var r=i(9859),n=i(1589),o=r.String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},1639:function(t,e,i){"use strict";var r=i(3103),n=i(9859),o=i(266),a=i(5968),s=i(8885),l=i(6733),c=i(8311),d=i(3326),u=i(5300),m=i(895),p=i(17),g=i(95),h=i(4231),f=g("replace"),b=RegExp.prototype,x=n.TypeError,v=a(m),w=a("".indexOf),y=a("".replace),k=a("".slice),R=Math.max,j=function(t,e,i){return i>t.length?-1:""===e?i:w(t,e,i)};r({target:"String",proto:!0},{replaceAll:function(t,e){var i,r,n,a,m,g,S,T,I,A=s(this),H=0,C=0,M="";if(null!=t){if((i=c(t))&&(r=d(s("flags"in b?t.flags:v(t))),!~w(r,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(n=u(t,f))return o(n,t,A,e);if(h&&i)return y(d(A),t,e)}for(a=d(A),m=d(t),(g=l(e))||(e=d(e)),S=m.length,T=R(1,S),H=j(a,m,0);-1!==H;)I=g?d(e(m,H,a)):p(m,a,H,[],void 0,e),M+=k(a,C,H)+I,C=H+S,H=j(a,m,H+T);return C<a.length&&(M+=k(a,C)),M}})},5704:function(t,e,i){i(1639)},2177:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var r=JSON.parse('{"author":"Sungbin","title":"Blog","titleTemplate":"%s · Sungbin","placeholder":"/profile.png","siteUrl":"https://sungbin.kr","description":"양성빈의 블로그","twitterUserName":"","github":"SungbinYang","secondary":"https://yang-sungbin.tistory.com"}'),n=JSON.parse('{"config":{"name":"양성빈","role":"Software Engineer","bio":["웹 백엔드에 관심이 많은 <string>웹 프론트 소프트웨어 엔지니어</string>","트리짓소프트웨어 개발팀","이러닝 템플릿 <string>웹 프론트 부분 개선</string>","사내 직원들을 위한 백오피스및 다양한 툴 개발"],"github":"https://github.com/SungbinYang","email":"yangseongbin3763@gmail.com"},"careers":{"title":"경력","list":[{"name":"트리짓소프트웨어","position":"Software Engineer / Pro","department":"개발팀","startDate":"2023.02","endDate":null,"descriptions":["국가기관 이러닝 컨텐츠 개발 및 컨텐츠에 들어가는 인터렉티브 게임, 요소 개발","기존 코드 템플릿을 객체지향적 및 ES6 표준으로 리팩토링","기존의 복잡한 자막 데이터 생성 과정을 간소화하는 유틸리티를 개발하여 작업 효율을 크게 향상","[백오피스] 기존 php로 이루어진 코드관리용 게시판을 java+spring boot + thymeleaf로 마이그레이션","[백오피스] 사내 회의실 예약 시스템 구축 및 성능 개선","[백오피스] 사내 백오피스 프로젝트를 공통 적용가능한 통합인증모듈 개발"],"projects":[{"name":"프로","descriptions":["사내 백오피스 통합인증 시스템 개발"],"startDate":"2024.01","endDate":"2024.02","which":[{"title":"JWT 및 Redis 기반의 통합 인증 시스템 구축"},{"title":"회의실 예약 시스템에서 사용 중인 JWT 기반 access token 확장"},{"title":"사내 PC의 IP를 키값으로 사용하여 access token을 Redis에 저장"},{"title":"타 프로젝트 root 도메인 접속 시, Redis에서 해당 IP를 확인하여 access token을 로컬 스토리지에 저장"},{"title":"IP가 없으면 로그인 페이지로 리다이렉트"}],"techStacks":["Java8","Spring Boot 2.x","Redis","Spring Security"]},{"name":"프로","descriptions":["사내 회의실 예약 시스템 구축"],"startDate":"2023.02","endDate":null,"which":[{"title":"웹 프론트 및 서버 단 아키텍쳐 설계 및 개발"},{"title":"비즈니스 로직 단위로 단위 테스트 작성"},{"title":"낙관적 락을 적용하여 성능 문제 최소화"},{"title":"비밀번호 수정 관련 인증 메일 발송 성능 개선: 비동기 로직을 이용하여 기존 메일 발송 4.x초에서 4.xms로 성능개선"},{"title":"전체 예약 조회 쿼리 최적화: 기존 예약 조회 관련 쿼리를 fet join을 통하여 하나의 쿼리로 변경 기존 조회 성능의 30% 개선"},{"title":"실시간 데이터 갱신 문제 해결: SSE(Server-Sent Events) 방식 도입으로 실시간 예약 표기"},{"title":"직원 요구사항에 따라 시스템 리팩토링 및 유지보수"}],"techStacks":["Java 8","Spring Boot 2.7.10","JPA","Spring Security","MariaDB","Spring REST DOCS","Spring Haeteoas","JUnit5","Gradle"]},{"name":"주임","startDate":"2022.02","endDate":"2022.03","descriptions":["사내 자막 파일 자동화 도구 개발"],"which":[{"title":"스크립트를 자동으로 자막 파일로 변환하는 웹 툴 제작"}],"techStacks":["Javascript"]},{"name":"주임","startDate":"2022.02","endDate":"2022.08","descriptions":["프로젝트 템플릿 개선"],"which":[{"title":"반복된 코드를 하나의 파일에 모아 모듈화"},{"title":"디자인팀과 협의하여 이미지 용량 축소 및 webp 확장자로 변경"},{"title":"리팩토링 후 렌더링 속도 약 50% 개선 (5.x초에서 2.x초로 감소)"}],"techStacks":["HTML5","CSS","Javascript","JQuery"]},{"name":"사원","startDate":"2021.03","endDate":"2021.05","descriptions":["사내 코드 관리 시스템 구축"],"which":[{"title":"웹 프론트, 서버 전반적인 아키텍쳐 설계 및 개발"}]},{"name":"사원","startDate":"2020.11","endDate":null,"descriptions":["국가기관 이러닝 컨텐츠 개발"],"which":[{"title":"각 국가기관별 1년 단위 프로젝트 총괄 개발 담당"},{"title":"매년 다양한 기관별 프로젝트 수행 경험 다수"},{"title":"여러 국가기관을 대상으로 이러닝 콘텐츠 개발 및 배포"},{"title":"인터렉티브 게임 개발"}],"techStacks":["Java 8","Spring Boot","Spring Security","JPA","MariaDB","Thymeleaf"]}]}]},"skills":{"title":"기술","list":[{"title":"Java","descriptions":[{"title":"Java를 이용한 SpringBoot 프로젝트 개발에 익숙합니다.","subTitle":[""]},{"title":"문법을 잘 활용하며, 가독성 향상을 위해 노력합니다.","subTitle":[""]}]},{"title":"SpringBoot","descriptions":[{"title":"웹 애플리케이션 서버를 설계할 수 있습니다.","subTitle":["PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]}]},{"title":"HTML/CSS","descriptions":[{"title":"Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.","subTitle":["HTML이 길어질 수록 Semantic Markup이 중요해집니다. 그러므로, 초기에 작성할 때 부터 고려를 많이하는 편입니다."]},{"title":"CSS를 짤 때 최대한 간단하고, 개발자 친화적으로 짤 수 있게 노력합니다.","subTitle":["복잡한 문법을 style에서 담으려고 하지 않습니다. style은 이해하기 쉬울수록 최고라고 생각하기 때문입니다. CSS를 개발할 때 tag들을 각 요소별로 구분하여 쉽게 알아볼 수 있도록 코딩합니다."]},{"title":"여러 브라우저를 지원할 수 있습니다.","subTitle":["Chrome, Safari, Firefox등 여러 브라우저들을 지원하는 앱을 만들 수 있습니다."]},{"title":"여러 기기에 대응할 수 있습니다.","subTitle":["다양한 사용자가 사용하는 기기에 대해 반응형 및 웹 접근성을 지원하는 앱을 만들 수 있습니다."]}]},{"title":"TypeScript","descriptions":[{"title":"TypeScript를 이용한 React 코딩에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 적절한 타입을 사용합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속 등을 통한 클래스 타입에도 강점을 지닙니다."]},{"title":"Generic에 익숙합니다.","subTitle":["Generic과 더불어 다양한 문법들 ex) Overloading, Tuple 등을 이용한 코딩을 할 수 있습니다."]}]},{"title":"JavaScript","descriptions":[{"title":"ES2015 이후의 JavaScript 문법에 익숙합니다.","subTitle":["JavaScript ES2015 이상의 문법을 수월하게 작성하거나 읽을 수 있습니다."]},{"title":"Vanilla JavaScript를 통해 DOM을 다루는데 익숙합니다.","subTitle":[]},{"title":"Reduce, Map과 같은 고차함수를 적극적으로 사용합니다.","subTitle":[]},{"title":"비동기 작업을 하는데 익숙합니다. (promise, async await)","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow, gitlab flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"/posts","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다."]},{"title":"축구 시청 및 운동","url":null,"descriptions":["좋아하는 축구 시청으로 통하여 스트레스를 풀고 동네 동호회에 가입하여 축구활동을 즐겨합니다."]}]},"opensources":{"description":"오픈소스 기여","list":[{"title":"[spring-projects/spring-framework] PR #33612","url":"https://github.com/spring-projects/spring-framework/pull/33612"}]},"activities":{"description":"활동","list":[{"title":"2024.02 ~ 2024.03 인프런 워밍업 클럽 0기 참여자로 활동","url":null},{"title":"2024.04 ~ 2024.05 인프런 워밍업 클럽 1기 서포터로 활동","url":null}]}}');function o(){return{profile:r,resume:n}}},8727:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return P}});var r=i(2784),n=i(2285),o=i(3919),a=i(8778),s=(0,o.Z)("div",{target:"e1x2ajq20"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",(function(t){return t.theme.colors.PRIMARY.ACCENT_2}),";&>p{margin-bottom:1.5rem;font-size:1.8rem;",(function(t){var e=t.theme;return(0,a.iv)("color:",e.colors.PRIMARY.FOREGROUND,";")}),";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"),l=i(2322),c=function(){var t=(0,r.useRef)(null),e=(0,r.useState)({status:"pending"}),i=e[0],o=e[1];return(0,n.b6)((function(){var e,i,r;if(!((null!==(e=null===(i=t.current)||void 0===i?void 0:i.children)&&void 0!==e?e:[]).length>0)){var n=document.createElement("script");n.onload=function(){o({status:"success"})},n.onerror=function(){o({status:"failure"})},n.async=!0,n.src="https://giscus.app/client.js",n.setAttribute("data-repo","SungbinYang/SungbinYang.github.io"),n.setAttribute("data-repo-id","R_kgDOMfhYDg"),n.setAttribute("data-category","Comments"),n.setAttribute("data-category-id","DIC_kwDOMfhYDs4ChjlR"),n.setAttribute("data-mapping","pathname"),n.setAttribute("data-strict","0"),n.setAttribute("data-reactions-enabled","1"),n.setAttribute("data-emit-metadata","0"),n.setAttribute("data-input-position","top"),n.setAttribute("data-theme","light_high_contrast"),n.setAttribute("data-lang","ko"),n.setAttribute("data-loading","lazy"),n.setAttribute("crossorigin","anonymous"),null===(r=t.current)||void 0===r||r.appendChild(n)}})),(0,l.jsxs)(s,{children:["success"!==i.status&&(0,l.jsx)(n.$j,{size:50}),(0,l.jsx)("div",{ref:t})]})},d=(i(5704),i(4541));var u=(0,o.Z)("section",{target:"e17f2jor1"})({name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}),m=(0,o.Z)(u,{target:"e17f2jor0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",(function(t){var e=t.theme;return(0,a.iv)("p>img{width:100%;}p{color:",e.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;margin:0 0 2rem;}center{color:",e.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0 0 2rem;}p+center,iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",e.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",e.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",e.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",e.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:2rem;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",e.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'이미지를 표시할 수 없어요. :(';}blockquote{background:",e.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",e.colors.HIGHLIGHT.PINK,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}")}),";"),p=function(t){var e=(0,d.useLocation)(),i=(0,r.useRef)(null),n=(0,r.useMemo)((function(){return t.html.replaceAll("<pre",'<div class="markdown-wrapper"><pre').replaceAll("</pre>","</pre></div>")}),[]);return(0,r.useEffect)((function(){var t,r;Array.from(null!==(t=null===(r=i.current)||void 0===r?void 0:r.getElementsByTagName("*"))&&void 0!==t?t:[]).filter((function(t){var e,i;return Number(null!==(e=null===(i=t.tagName)||void 0===i?void 0:i[1])&&void 0!==e?e:"999")<6})).forEach((function(t){if(!(t.getElementsByTagName("a").length>0)){var e=t.innerHTML.replaceAll(" ","-");t.innerHTML='\n          <a href="#'+e+'" aria-label="'+e+' permalink">\n            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" \n            stroke=\'currentColor\'\n            stroke-width=\'1\'\n            stroke-linecap=\'round\'\n            stroke-linejoin=\'round\'\n            fill=\'none\'\n            shape-rendering=\'geometricPrecision\'>\n              <path\n                fill-rule="evenodd" \n                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">\n              </path>\n            </svg>\n          </a>\n          '+t.innerHTML+"\n        ",t.id=e}})),window.onload=function(){setTimeout((function(){var t,i,r=decodeURIComponent(e.hash).substring(1);r&&window.scrollTo(0,null!==(t=null===(i=document.getElementById(r))||void 0===i?void 0:i.getBoundingClientRect().bottom)&&void 0!==t?t:0)}))}}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(m,{ref:i,dangerouslySetInnerHTML:{__html:n}})})},g=i(8447),h=i(5290);var f=(0,o.Z)("header",{target:"ebd5ed87"})({name:"1azakc",styles:"text-align:center"}),b=(0,o.Z)("div",{target:"ebd5ed86"})({name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}),x=(0,o.Z)("div",{target:"ebd5ed85"})({name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}),v=(0,o.Z)("div",{target:"ebd5ed84"})({name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}),w=(0,o.Z)("div",{target:"ebd5ed83"})({name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}),y=(0,o.Z)("button",{target:"ebd5ed82"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",(function(t){var e=t.theme;return(0,a.iv)("background:",e.colors.PRIMARY.FOREGROUND,";color:",e.colors.PRIMARY.BACKGROUND,";")}),";"),k=(0,o.Z)("div",{target:"ebd5ed81"})({name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}),R=(0,o.Z)("div",{target:"ebd5ed80"})({name:"1d3w5wq",styles:"width:100%"}),j=function(t){var e=t.title,i=t.tags,r=t.date,o=t.author,a=t.timeToRead,s=t.children,c=(0,h.hK)(r),u=c[0],m=c[1],p=c[2],j=(0,d.useLocation)(),S=(0,n.e1)(),T=u+"년 "+Number(m)+"월 "+Number(p)+"일";return(0,l.jsx)(f,{children:(0,l.jsxs)(b,{children:[(0,l.jsxs)(k,{children:[(0,l.jsx)(n.xv,{as:"h1",size:40,weight:800,children:e}),(0,l.jsx)(n.LZ,{y:1}),i&&(0,l.jsx)(n.W2,{row:!0,wrap:"wrap",gap:.5,children:i.map((function(t){return(0,l.jsxs)(n.Ct,{size:"large",children:["#",t]},t)}))}),(0,l.jsx)(n.LZ,{y:1}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(v,{children:[(0,l.jsxs)(n.xv,{size:16,as:"span",children:["Written by ",(0,l.jsx)(g.Link,{to:"/",children:o})]}),(0,l.jsx)(n.LZ,{y:.25}),(0,l.jsxs)(n.xv,{size:14,as:"span",children:[T," · ",a," min read"]})]}),(0,l.jsxs)(w,{children:[(0,l.jsx)(n.u,{text:"페이스북 공유",position:"top",children:(0,l.jsx)(y,{onClick:function(){S.error("페이스북 공유 기능은 개발중입니다.")},children:(0,l.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,l.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),(0,l.jsx)(n.u,{text:"링크 복사",position:"top",children:(0,l.jsx)(y,{onClick:function(){(0,n.JG)(decodeURIComponent(j.href)),S.success("링크를 복사했습니다.")},children:(0,l.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,l.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),(0,l.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})]})]})]}),(0,l.jsx)(n.LZ,{y:1}),(0,l.jsx)(R,{children:s})]})})},S=i(4213);var T=(0,o.Z)("ol",{target:"e1k9d3a01"})({name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}),I=(0,o.Z)("li",{target:"e1k9d3a00"})((function(t){var e=t.theme,i=t.timeToRead;return(0,a.iv)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.PINK,";}&::after{content:'- ",i,"분';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",e.colors.HIGHLIGHT.PINK,";font-weight:600;text-decoration:none;color:",e.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",e.colors.HIGHLIGHT.PINK,";border-top:2px solid ",e.colors.HIGHLIGHT.PINK,";color:",e.colors.PRIMARY.BACKGROUND,";}}")}),";"),A=function(t){var e=t.name,i=t.posts;return(0,l.jsx)(n.UO,{title:e,card:!0,size:"medium",subtitle:"시리즈의 글 ("+i.length+"개)",children:(0,l.jsx)(n.W2,{children:(0,l.jsx)(T,{children:i.map((function(t){return(0,l.jsx)(I,{timeToRead:t.timeToRead,children:(0,l.jsx)("span",{onClick:function(){return e=t.slug,void(0,g.navigate)(e);var e},children:t.name})},t.name)}))})})})},H=i(2177);var C=(0,o.Z)("div",{target:"etanzsa0"})({name:"1aem3cm",styles:"max-width:900px;width:100%;margin:0 auto;box-sizing:border-box;padding:0"}),M=function(t){var e=t.slotId,i="undefined"==typeof window?null:window.location.pathname;return(0,r.useEffect)((function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[i]),(0,l.jsx)(C,{children:(0,l.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-8854437638395695","data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})},i)},P=function(t){var e=(0,H.Z)().profile,i=t.data.allMarkdownRemark,n=i.nodes,o=i.group,a=t.data.markdownRemark,s=a.timeToRead,d=a.html,u=t.data.markdownRemark.frontmatter,m=u.title,g=u.date,h=u.image,f=u.tags,b=u.series,x=(0,r.useCallback)((function(){return n.filter((function(t){return t.frontmatter.series})).filter((function(t){return t.frontmatter.series===b})).map((function(t){return{name:t.frontmatter.title,timeToRead:t.timeToRead,slug:t.fields.slug}}))}),[t.data]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(S.p,{name:m,image:null==h?void 0:h.publicURL,isPost:!0}),(0,l.jsx)(j,{title:m,date:g,image:null==h?void 0:h.publicURL,tags:f,timeToRead:s,author:e.author,children:b&&o&&(0,l.jsx)(A,{name:b,posts:x()})}),(0,l.jsx)(p,{html:d}),(0,l.jsx)(M,{slotId:"5104795204"}),(0,l.jsx)("section",{id:"comments"}),(0,l.jsx)(c,{})]})}}}]);
//# sourceMappingURL=component---src-template-post-tsx-fe7dbf2b245f0c119a61.js.map