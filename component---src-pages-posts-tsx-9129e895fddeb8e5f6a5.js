"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[212],{

/***/ 8110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1141);
/* harmony import */ var _vallista_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9124);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1855);
/* harmony import */ var _components_ListTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7844);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8621);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8528);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3159);

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}






const PostsPage = props => {
  const {
    data
  } = props;
  const {
    nodes
  } = data.allMarkdownRemark;
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const posts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .filteredByDraft */ .KF)(nodes).sort((a, b) => {
    const base = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDate */ .ay)(a.frontmatter.date);
    const target = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDate */ .ay)(b.frontmatter.date);
    return target.getTime() - base.getTime();
  }), [nodes]);
  const sortPosts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => posts.map(it => {
    const {
      slug
    } = it.fields;
    const {
      date,
      title: name
    } = it.frontmatter;
    const [, month, day] = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTime */ .WB)(date);
    const time = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .toDate */ .ay)(date);
    return {
      time: time.getTime(),
      date: `${Number(month)}월 ${Number(day)}일`,
      name,
      slug
    };
  }), [posts]);
  const views = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const remake = posts.reduce((acc, curr) => {
      const {
        slug
      } = curr.fields;
      const {
        date,
        title: name
      } = curr.frontmatter;
      const [year, month, day] = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTime */ .WB)(date);
      if (!acc[year]) acc[year] = [];
      acc[year].push({
        name,
        date: `${Number(month)}월 ${Number(day)}일`,
        slug
      });
      return acc;
    }, {});
    const values = Object.values(remake);
    return Object.keys(remake).map((it, idx) => ({
      year: it,
      posts: values[idx]
    })).sort((a, b) => Number(b.year) - Number(a.year));
  }, [nodes]);
  const filteredSearchPosts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => sortPosts.filter(it => it.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())), [sortPosts, search]);
  const hasSearchText = search.length !== 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__/* .Seo */ .G, {
      name: "\uAE00 \uBAA9\uB85D"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .SearchInput */ .DO, {
            value: search,
            onChange: setSearch,
            size: "large",
            placeholder: "\uAC80\uC0C9\uD560 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694."
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
          y: 2
        })]
      }), hasSearchText ? filteredSearchPosts.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          size: 20,
          weight: 600,
          children: "\uAC80\uC0C9\uB41C \uACB0\uACFC\uAC00 \uC5C6\uC5B4\uC694 :("
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          size: 20,
          weight: 600,
          children: "\uB2E4\uB978 \uACB0\uACFC\uB97C \uAC80\uC0C9\uD574\uBCF4\uC2DC\uACA0\uC5B4\uC694?"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ListTable__WEBPACK_IMPORTED_MODULE_3__/* .ListTable */ .V, {
        underline: true,
        title: "\uAC80\uC0C9\uACB0\uACFC",
        list: filteredSearchPosts
      }) : views.map(it => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .mc, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ListTable__WEBPACK_IMPORTED_MODULE_3__/* .ListTable */ .V, {
            title: it.year,
            list: it.posts,
            underline: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_vallista_design_system__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .hK, {
          y: 2
        })]
      }, it.year))]
    })]
  });
};
const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("section",  true ? {
  target: "ef8makw0"
} : 0)( true ? {
  name: "167j9n6",
  styles: "margin:0 auto;width:100%;max-width:900px;padding:2rem"
} : 0);
/* harmony default export */ __webpack_exports__["default"] = (PostsPage);
const pageQuery = "1384431657";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-posts-tsx-9129e895fddeb8e5f6a5.js.map