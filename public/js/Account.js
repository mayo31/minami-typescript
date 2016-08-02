"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Account = (function (_super) {
    __extends(Account, _super);
    function Account() {
        _super.apply(this, arguments);
    }
    Account.prototype.render = function () {
        return (React.createElement("form", {id: "account-config"}, 
            React.createElement("h2", null, "アカウント情報"), 
            React.createElement("input", {type: "text", id: "account-name", placeholder: "ユーザー名"}), 
            React.createElement("input", {type: "email", placeholder: "メールアドレス"}), 
            React.createElement("input", {type: "email", placeholder: "メールアドレス（確認）"}), 
            React.createElement("input", {type: "password", placeholder: "現在のパスワード"}), 
            React.createElement("input", {type: "password", placeholder: "新しいパスワード"}), 
            React.createElement("input", {type: "password", placeholder: "新しいパスワード（確認）"}), 
            React.createElement("input", {type: "submit", className: "button01", defaultValue: "アカウント情報を変更"}), 
            React.createElement("a", {href: "/logout", className: "button02"}, "ログアウト")));
    };
    return Account;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
//# sourceMappingURL=Account.js.map