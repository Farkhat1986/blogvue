"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Main = _interopRequireDefault(require("@/pages/Main"));

var _UserPage = _interopRequireDefault(require("@/pages/UserPage"));

var _About = _interopRequireDefault(require("@/pages/About"));

var _PostIdPage = _interopRequireDefault(require("@/pages/PostIdPage"));

var _vueRouter = require("vue-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Main["default"]
}, {
  path: '/users',
  component: _UserPage["default"]
}, {
  path: '/about',
  component: _About["default"]
}, {
  path: '/posts/:id',
  component: _PostIdPage["default"]
}];
var router = (0, _vueRouter.createRouter)({
  routes: routes,
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL)
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
