"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var TagCheckList = (function (_super) {
    __extends(TagCheckList, _super);
    function TagCheckList() {
        _super.apply(this, arguments);
    }
    TagCheckList.prototype.render = function () {
        return (React.createElement("li", null, 
            React.createElement("input", {type: "checkbox", name: "tag-check", id: this.props.tagName}), 
            React.createElement("label", {htmlFor: this.props.tagName}, this.props.tagName)));
    };
    return TagCheckList;
}(React.Component));
var TagCheckArea = (function (_super) {
    __extends(TagCheckArea, _super);
    function TagCheckArea() {
        _super.apply(this, arguments);
    }
    TagCheckArea.prototype.render = function () {
        var tagCheckNodes = this.props.data.map(function (tagCheck) {
            return (React.createElement(TagCheckList, {key: tagCheck.id, tagName: tagCheck.name}));
        });
        return (React.createElement("ul", {id: "tag-check", className: "check-list paragraph"}, tagCheckNodes));
    };
    return TagCheckArea;
}(React.Component));
var NewTag = (function (_super) {
    __extends(NewTag, _super);
    function NewTag() {
        _super.apply(this, arguments);
    }
    NewTag.prototype.render = function () {
        return (React.createElement("li", null, 
            React.createElement("input", {type: "checkbox", name: "tag-check", id: this.props.tagName, "data-tag": this.props.tagName, defaultChecked: "checked"}), 
            React.createElement("label", {htmlFor: this.props.tagName}, this.props.tagName)));
    };
    return NewTag;
}(React.Component));
var TagInputList = (function (_super) {
    __extends(TagInputList, _super);
    function TagInputList() {
        _super.call(this);
        this.state = { tagData: [] };
    }
    TagInputList.prototype.render = function () {
        var TagNodes = this.props.tagData.map(function (tag, index) {
            return (React.createElement(NewTag, {tagName: tag.tagName, key: index}));
        });
        return (React.createElement("ul", {id: "tag-input-list", className: "check-list"}, TagNodes));
    };
    return TagInputList;
}(React.Component));
var TagForm = (function (_super) {
    __extends(TagForm, _super);
    function TagForm() {
        _super.call(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
    }
    TagForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        tagName = $('#tag-input').val().trim();
        tagName = tagName.replace(/\s+/g, "");
        already = document.getElementById(tagName);
        if (!tagName) {
            return;
        }
        else if (already) {
            $(already).prop('checked', true);
        }
        else {
            this.props.addTag(tagName);
        }
        $('#tag-input').val('');
    };
    TagForm.prototype.handleEnterSubmit = function (e) {
        e.stopPropagation();
        tagName = $('#tag-input').val().trim();
        already = document.getElementById(tagName);
        if (e.which === 13 && tagName !== '') {
            tagName = tagName.replace(/\s+/g, "");
            if (!tagName) {
                return;
            }
            else if (already) {
                $(already).prop('checked', true);
            }
            else {
                this.props.addTag(tagName);
            }
            $('#tag-input').val('');
            e.preventDefault();
        }
        else if (e.which === 13) {
            e.preventDefault();
        }
    };
    TagForm.prototype.render = function () {
        return (React.createElement("div", {id: "tag-input-area", className: "box"}, 
            React.createElement(TagInputList, {tagData: this.props.tagData}), 
            React.createElement("input", {type: "text", id: "tag-input", placeholder: "タグ", onKeyDown: this.handleEnterSubmit}), 
            React.createElement("button", {onClick: this.handleSubmit}, "追加"), 
            React.createElement(TagCheckArea, {data: this.props.data})));
    };
    return TagForm;
}(React.Component));
var URLForm = (function (_super) {
    __extends(URLForm, _super);
    function URLForm() {
        _super.call(this);
        this.state = { tagData: [] };
        this.handleAddTag = this.handleAddTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    URLForm.prototype.handleAddTag = function (tagName) {
        var data = this.state.tagData;
        data.push({ tagName: tagName });
        this.setState({ tagData: data });
    };
    URLForm.prototype.handleSubmit = function (e) {
        var t = this;
        $('#spinner').css('display', 'block');
        e.preventDefault();
        inputURL = $('#url-input').val();
        if (inputURL === '') {
            $('#spinner').css('display', 'none');
            alert('URLを入力してください');
            return false;
        }
        tagArr = [];
        $.each($('[name="tag-check"]'), function () {
            if ($(this).is(':checked')) {
                tagArr.push($(this).attr('id'));
            }
        });
        $.ajax({
            url: './api/article',
            type: 'POST',
            data: { "url": inputURL, "tag": tagArr },
            timeout: 10000,
        })
            .done(function () {
            $('#spinner').css('display', 'none');
            $('#url-input').val('');
            $('[name="tag-check"]').prop('checked', false);
            t.setState({ tagData: [] });
            apiURL = 'post';
            tagBool = true;
        })
            .fail(function (xhr, status, err) {
            $('#spinner').css('display', 'none');
            alert(err);
        });
    };
    URLForm.prototype.render = function () {
        return (React.createElement("form", {id: "form-url-input"}, 
            React.createElement("input", {type: "url", placeholder: "URL", id: "url-input"}), 
            React.createElement("input", {type: "submit", id: "url-submit", className: "button01", onClick: this.handleSubmit}), 
            React.createElement(TagForm, {addTag: this.handleAddTag, tagData: this.state.tagData, data: this.props.data})));
    };
    return URLForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = URLForm;
//# sourceMappingURL=URLForm.js.map