"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[754],{3832:function(e,t,r){r.d(t,{e:function(){return d}});var n=r(2285),a=r(8447),i=r(3919),s=r(8778),o=(0,i.Z)("header",{target:"e1jeara82"})((function(e){var t=e.theme,r=e.underline;return(0,s.iv)(r&&(0,s.iv)("border-bottom:1px solid ",t.colors.PRIMARY.ACCENT_4,";"),";")}),";"),l=(0,i.Z)("div",{target:"e1jeara81"})(""),u=(0,i.Z)("a",{target:"e1jeara80"})("display:flex;justify-content:space-between;align-items:center;border:none!important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",(function(e){var t=e.theme;return(0,s.iv)("color:",t.colors.PRIMARY.ACCENT_6,"!important;&:hover{background:",t.colors.PRIMARY.ACCENT_2,"!important;color:",t.colors.PRIMARY.FOREGROUND,"!important;}&>span:first-of-type{max-width:85%;}&>span:last-of-type{max-width:15%;white-space:nowrap;}&:last-of-type{color:",t.colors.PRIMARY.ACCENT_3,";}")}),";"),c=r(2322),d=function(e){var t=e.title,r=e.list,i=e.underline,s=void 0!==i&&i;return(0,c.jsxs)(n.W2,{children:[(0,c.jsx)(o,{underline:s,children:(0,c.jsx)(n.xv,{as:"h3",size:32,weight:800,children:t})}),(0,c.jsx)(n.LZ,{y:1}),(0,c.jsx)(l,{children:r.map((function(e){return(0,c.jsxs)(u,{onClick:function(){return t=e.slug,void(0,a.navigate)(t);var t},children:[(0,c.jsx)(n.xv,{as:"span",size:16,weight:600,children:e.name}),(0,c.jsx)(n.xv,{as:"span",size:14,weight:300,children:e.date})]},e.slug)}))})]})}},4563:function(e,t,r){r.r(t);var n=r(3919),a=r(2285),i=r(2784),s=r(3832),o=r(4213),l=r(5290),u=r(2322);var c=(0,n.Z)("section",{target:"e1qby5tb0"})({name:"167j9n6",styles:"margin:0 auto;width:100%;max-width:900px;padding:2rem"});t.default=function(e){var t=e.data.allMarkdownRemark.nodes,r=(0,i.useState)(""),n=r[0],d=r[1],m=(0,i.useMemo)((function(){return(0,l.IQ)(t).sort((function(e,t){var r=(0,l.ZU)(e.frontmatter.date);return(0,l.ZU)(t.frontmatter.date).getTime()-r.getTime()}))}),[t]),h=(0,i.useMemo)((function(){return m.map((function(e){var t=e.fields.slug,r=e.frontmatter,n=r.date,a=r.title,i=(0,l.hK)(n),s=i[1],o=i[2];return{time:(0,l.ZU)(n).getTime(),date:Number(s)+"월 "+Number(o)+"일",name:a,slug:t}}))}),[m]),f=(0,i.useMemo)((function(){var e=m.reduce((function(e,t){var r=t.fields.slug,n=t.frontmatter,a=n.date,i=n.title,s=(0,l.hK)(a),o=s[0],u=s[1],c=s[2];return e[o]||(e[o]=[]),e[o].push({name:i,date:Number(u)+"월 "+Number(c)+"일",slug:r}),e}),{}),t=Object.values(e);return Object.keys(e).map((function(e,r){return{year:e,posts:t[r]}})).sort((function(e,t){return Number(t.year)-Number(e.year)}))}),[t]),p=(0,i.useMemo)((function(){return h.filter((function(e){return e.name.toLocaleUpperCase().includes(n.toLocaleUpperCase())}))}),[h,n]),x=0!==n.length;return(0,u.jsxs)(a.W2,{children:[(0,u.jsx)(o.p,{name:"글 목록"}),(0,u.jsxs)(c,{children:[(0,u.jsxs)(a.W2,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(a.Mj,{value:n,onChange:d,size:"large",placeholder:"검색할 텍스트를 입력하세요."})}),(0,u.jsx)(a.LZ,{y:2})]}),x?0===p.length?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.xv,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,u.jsx)(a.xv,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,u.jsx)(s.e,{underline:!0,title:"검색결과",list:p}):f.map((function(e){return(0,u.jsxs)(a.W2,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(s.e,{title:e.year,list:e.posts,underline:!0})}),(0,u.jsx)(a.LZ,{y:2})]},e.year)}))]})]})}}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-1ff6a41539a3b7a0f927.js.map