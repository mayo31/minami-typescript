"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var SiteHeader_1 = require("./SiteHeader");
var ArticleArea_1 = require("./ArticleArea");
var SiteFooter_1 = require("./SiteFooter");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        return (React.createElement("main", null, 
            React.createElement(ArticleArea_1.default, null)
        ));
    };
    return Main;
}(React.Component));
var Body = (function (_super) {
    __extends(Body, _super);
    function Body() {
        _super.apply(this, arguments);
    }
    Body.prototype.render = function () {
        return (React.createElement("div", {id: "container"}, 
            React.createElement(SiteHeader_1.default, null), 
            React.createElement(Main, null), 
            React.createElement(SiteFooter_1.default, null)));
    };
    return Body;
}(React.Component));
ReactDOM.render(React.createElement(Body, null), document.getElementById('body'));
//# sourceMappingURL=Index.js.map