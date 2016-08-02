"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Comment = (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        _super.apply(this, arguments);
    }
    Comment.prototype.render = function () {
        var authorImage = {
            backgroundImage: "url(" + this.props.authorImage + ")"
        };
        return (React.createElement("li", null, 
            React.createElement("span", {"data-account": this.props.author, style: authorImage}), 
            React.createElement("span", null, 
                React.createElement("span", null, 
                    this.props.author, 
                    React.createElement("time", null, this.props.date)), 
                this.props.comment)));
    };
    return Comment;
}(React.Component));
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        _super.apply(this, arguments);
    }
    CommentList.prototype.render = function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (React.createElement(Comment, {author: comment.author, authorImage: comment.authorImage, date: comment.date, comment: comment.comment, key: comment.id}));
        });
        return (React.createElement("ul", {className: "comment-list"}, commentNodes));
    };
    return CommentList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentList;
//# sourceMappingURL=Comment.js.map