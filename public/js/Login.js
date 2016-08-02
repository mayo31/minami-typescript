"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Signup_1 = require("./Signup");
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
    }
    LoginForm.prototype.handleLogin = function (e) {
        e.preventDefault();
        $('#spinner').css('display', 'block');
        inputEmail = this.email.value;
        inputPassword = this.password.value;
        inputRemember = this.remember.checked.toString();
        if (inputPassword === '' || inputEmail === '') {
            $('#spinner').css('display', 'none');
        }
        else {
            $.ajax({
                url: './login',
                type: 'POST',
                data: { "email": inputEmail, "password": inputPassword, "remenber": inputRemember },
                timeout: 10000,
            })
                .done(function (data) {
                inputEmail = '';
                inputPassword = '';
                location.reload();
            })
                .fail(function (xhr, status, err) {
                $('#spinner').css('display', 'none');
                alert(err);
            });
        }
        ;
    };
    LoginForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {className: "login"}, 
            React.createElement("form", {id: this.props.id}, 
                React.createElement("p", null, this.props.text), 
                React.createElement("input", {type: "email", placeholder: "example@example.com", name: "email", ref: function (node) { return _this.email = node; }, required: true}), 
                React.createElement("input", {type: "password", placeholder: "password", name: "password", ref: function (node) { return _this.password = node; }, required: true}), 
                React.createElement("button", {type: "button", className: "button01", onClick: this.handleLogin.bind(this)}, "ログイン"), 
                React.createElement("div", {className: "checkbox-list"}, 
                    React.createElement("input", {type: "checkbox", id: this.props.rememberID, name: "remember", ref: function (node) { return _this.remember = node; }}), 
                    React.createElement("label", {htmlFor: this.props.rememberID}, "ログイン情報を保存"))), 
            React.createElement(Signup_1.default, null), 
            React.createElement("button", {type: "button", className: "button02 register-toggle"}, "新規アカウント登録")));
    };
    return LoginForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
//# sourceMappingURL=Login.js.map