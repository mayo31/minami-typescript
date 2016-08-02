"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SignupForm = (function (_super) {
    __extends(SignupForm, _super);
    function SignupForm() {
        _super.apply(this, arguments);
    }
    SignupForm.prototype.render = function () {
        return (React.createElement("form", {id: "form-signup", action: "/register", method: "post"}, 
            React.createElement("h2", null, "新規アカウント登録"), 
            React.createElement("input", {type: "text", placeholder: "アカウント名", name: "name"}), 
            React.createElement("input", {type: "email", placeholder: "メールアドレス", name: "email"}), 
            React.createElement("input", {type: "password", placeholder: "パスワード", name: "password"}), 
            React.createElement("input", {type: "password", placeholder: "パスワード（確認用）", name: "password_confirmation"}), 
            React.createElement("input", {type: "submit", className: "button01", value: "新規アカウント登録"})));
    };
    return SignupForm;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignupForm;
//# sourceMappingURL=Signup.js.map