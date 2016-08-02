"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Tag_1 = require("./Tag");
var Comment_1 = require("./Comment");
var ArticleDelete = (function (_super) {
    __extends(ArticleDelete, _super);
    function ArticleDelete() {
        _super.call(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    ArticleDelete.prototype.handleDelete = function () {
        $('#spinner').css('display', 'block');
        var t = this;
        deleteURL = './api/article/' + this.props.articleID;
        $.ajax({
            type: 'delete',
            url: deleteURL,
            cache: false,
        }).done(function () {
            $('.overlay').removeClass('overlay');
            tmpURL = '';
            $('#overlay').css('display', 'none');
            $('#overlay-close').css('display', 'none');
        }).fail(function (xhr, status, err) {
            console.error(deleteURL, status, err.toString());
            $('.overlay').removeClass('overlay');
            $('#spinner').css('display', 'none');
            $('#overlay').css('display', 'none');
            $('#overlay-close').css('display', 'none');
        });
    };
    ArticleDelete.prototype.render = function () {
        return (React.createElement("button", {className: "button02", onClick: this.handleDelete}, "この記事を削除する"));
    };
    return ArticleDelete;
}(React.Component));
var CommentInput = (function (_super) {
    __extends(CommentInput, _super);
    function CommentInput() {
        _super.call(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    CommentInput.prototype.handleCommentSubmit = function () {
        $('#spinner').css('display', 'block');
        var articleID = this.props.articleID;
        var comment = $('#comment-textarea').val();
        $.ajax({
            url: '/api/comment',
            type: 'POST',
            data: { "article_id": articleID, "user_id": loggedin, "comment": comment },
            timeout: 10000,
        }).done(function () {
            articleBool = true;
        }).fail(function (xhr, status, err) {
            console.error('/api/comment', status, err.toString());
        });
        $('#comment-textarea').val('');
    };
    CommentInput.prototype.render = function () {
        return (React.createElement("form", {className: "comment-input", id: 'comment-input' + this.props.articleID}, 
            React.createElement("textarea", {placeholder: "コメント", id: "comment-textarea"}), 
            React.createElement("button", {type: "button", className: "button01", onClick: this.handleCommentSubmit}, "コメントを送信")));
    };
    return CommentInput;
}(React.Component));
var ArticleList = (function (_super) {
    __extends(ArticleList, _super);
    function ArticleList() {
        _super.apply(this, arguments);
    }
    ArticleList.prototype.render = function () {
        var _this = this;
        var articleImage = {
            backgroundImage: "url(" + this.props.articleImage + ")"
        };
        var accountImage = {
            backgroundImage: "url(" + this.props.userIcon + ")"
        };
        return (React.createElement("li", null, 
            React.createElement("article", null, 
                React.createElement("p", {className: "author"}, 
                    React.createElement("span", {"data-account": this.props.userName, style: accountImage}), 
                    React.createElement("span", null, this.props.userName)), 
                React.createElement("a", {href: this.props.articleUrl, target: "_blank", style: articleImage}, 
                    React.createElement("h2", null, this.props.articleTitle), 
                    React.createElement("p", null, this.props.articleDescription)), 
                React.createElement(Tag_1.default, {data: this.props.articleTag}), 
                React.createElement("h3", null, "コメント"), 
                React.createElement(Comment_1.default, {data: this.props.articleComment}), 
                (function () {
                    if (loggedin) {
                        return React.createElement(CommentInput, {articleID: _this.props.articleID, ref: ""});
                    }
                })(), 
                (function () {
                    if (loggedin === _this.props.userId) {
                        return React.createElement(ArticleDelete, {articleID: _this.props.articleID});
                    }
                })())
        ));
    };
    return ArticleList;
}(React.Component));
var ArticleArea = (function (_super) {
    __extends(ArticleArea, _super);
    function ArticleArea() {
        _super.call(this);
        this.state = { data: [] };
        this.loadArticleFromServer = this.loadArticleFromServer.bind(this);
        this.fetchURL = this.fetchURL.bind(this);
    }
    ArticleArea.prototype.fetchURL = function () {
        if (apiURL === 'post') {
            apiURL = './api/article';
            tmpURL = apiURL;
            this.loadArticleFromServer();
        }
        else if (apiURL !== tmpURL) {
            tmpURL = apiURL;
            this.loadArticleFromServer();
        }
        else if (articleBool === true) {
            this.loadArticleFromServer();
        }
    };
    ArticleArea.prototype.loadArticleFromServer = function () {
        var t = this;
        $.ajax({
            url: apiURL,
            dataType: 'json',
            cache: false,
        }).done(function (data) {
            t.setState({ data: data });
            $('#spinner').css('display', 'none');
            $('#menu00').prop('checked', true);
        }).fail(function (xhr, status, err) {
            console.error(apiURL, status, err.toString());
            $('#spinner').css('display', 'none');
        });
        articleBool = false;
    };
    ArticleArea.prototype.componentDidMount = function () {
        this.loadArticleFromServer();
        setInterval(this.fetchURL, 1000);
    };
    ArticleArea.prototype.render = function () {
        var articleNodes = this.state.data.map(function (article) {
            return (React.createElement(ArticleList, {userId: article.userId, userName: article.userName, userIcon: article.userIcon, articleID: article.articleID, articleTitle: article.articleTitle, articleUrl: article.articleUrl, articleDescription: article.articleDescription, articleImage: article.articleImage, articleTag: article.tagData, articleComment: article.commentData, key: article.articleID}));
        });
        return (React.createElement("ul", {id: "article-list", className: "wrap"}, articleNodes));
    };
    return ArticleArea;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleArea;
//# sourceMappingURL=ArticleArea.js.map