"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App"));

var _UI = _interopRequireDefault(require("@/components/UI"));

var _router = _interopRequireDefault(require("@/router/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);

_UI["default"].forEach(function (component) {
  app.component(component.name, component);
});

app.use(_router["default"]).mount('#app');
//# sourceMappingURL=main.dev.js.map
