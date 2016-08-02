"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
    }
    Tag.prototype.handleAjax = function () {
        apiURL = './api/article?tag=' + this.props.id;
        $('.overlay').removeClass('overlay');
        $('#overlay').css('display', 'none');
        $('#overlay-close').css('display', 'none');
        $('#spinner').css('display', 'block');
    };
    Tag.prototype.render = function () {
        return (React.createElement("li", null, 
            React.createElement("a", {onClick: this.handleAjax.bind(this)}, this.props.tag)
        ));
    };
    return Tag;
}(React.Component));
var TagList = (function (_super) {
    __extends(TagList, _super);
    function TagList() {
        _super.apply(this, arguments);
    }
    TagList.prototype.render = function () {
        var tagNodes = this.props.data.map(function (tag) {
            return (React.createElement(Tag, {tag: tag.name, id: tag.id, key: tag.id}));
        });
        return (React.createElement("ul", {className: "tag-list"}, tagNodes));
    };
    return TagList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TagList;
//# sourceMappingURL=Tag.js.map