"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var URLForm_1 = require("./URLForm");
var Login_1 = require("./Login");
var Account_1 = require("./Account");
var Tag_1 = require("./Tag");
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        _super.apply(this, arguments);
    }
    Navigation.prototype.render = function () {
        var _this = this;
        var accountImage = {
            backgroundImage: "url(/images/account/" + loggedin + ".png)"
        };
        return (React.createElement("nav", {id: "menu"}, 
            React.createElement("input", {type: "radio", name: "menu", id: "menu00", defaultChecked: "checked"}), 
            React.createElement("label", {htmlFor: "menu00", className: "overlay-close"}, "×"), 
            React.createElement("input", {type: "radio", name: "menu", id: "menu01"}), 
            React.createElement("label", {htmlFor: "menu01"}, 
                React.createElement("svg", {viewBox: "0 0 31 37"}, 
                    React.createElement("path", {d: "M26.5,36.5h-22c-2.2,0-4-1.8-4-4v-28c0-2.2,1.8-4,4-4h22c2.2,0,4,1.8,4,4v28C30.5,34.7,28.7,36.5,26.5,36.5z M27.5,18.5v-12c0-1.1-0.9-2-2-2h-20c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h20C26.6,20.5,27.5,19.6,27.5,18.5z M4.475,26.291h22 M4.475,31.291h22"})
                )
            ), 
            (function () {
                if (loggedin) {
                    return React.createElement(URLForm_1.default, {data: _this.props.data});
                }
                else {
                    return React.createElement(Login_1.default, {id: 'form-login02', text: '記事を追加するにはログインしてください。', rememberID: 'form-login-remember01'});
                }
            })(), 
            React.createElement("input", {type: "radio", name: "menu", id: "menu02"}), 
            React.createElement("label", {htmlFor: "menu02"}, 
                React.createElement("svg", {viewBox: "0 0 42.387 43.79"}, 
                    React.createElement("path", {d: "M30.5,15.5c0,8.284-6.716,15-15,15s-15-6.716-15-15s6.716-15,15-15S30.5,7.216,30.5,15.5z M15.5,5.5c-5.523,0-10,4.477-10,10s4.477,10,10,10s10-4.477,10-10S21.023,5.5,15.5,5.5z M37.966,39.972l-7.221-9.585c-0.993-1.318-2.883-1.584-4.201-0.591l0,0c-1.318,0.993-1.584,2.883-0.591,4.201l7.221,9.585c0.993,1.318,2.883,1.584,4.201,0.591l0,0C38.693,43.18,38.959,41.29,37.966,39.972z"})
                )
            ), 
            React.createElement(Tag_1.default, {data: this.props.data}), 
            React.createElement("input", {type: "radio", name: "menu", id: "menu03"}), 
            (function () {
                if (loggedin) {
                    return React.createElement("label", {htmlFor: "menu03", style: accountImage});
                }
                else {
                    return React.createElement("label", {htmlFor: "menu03"}, 
                        React.createElement("svg", {version: "1.1", x: "0px", y: "0px", viewBox: "0 0 27 32.5"}, 
                            React.createElement("path", {d: "M13.5,0.5c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S18.471,0.5,13.5,0.5z M26.5,32c0-6-7.477-10-13-10s-13,4-13,10H26.5z"})
                        )
                    );
                }
            })(), 
            (function () {
                if (loggedin) {
                    return React.createElement(Account_1.default, null);
                }
                else {
                    return React.createElement(Login_1.default, {id: 'form-login02', text: 'ログイン', rememberID: 'form-login-remember02'});
                }
            })()));
    };
    return Navigation;
}(React.Component));
var SiteHeader = (function (_super) {
    __extends(SiteHeader, _super);
    function SiteHeader() {
        _super.call(this);
        this.state = { data: [] };
        this.loadTagFromServer = this.loadTagFromServer.bind(this);
        this.fetchTag = this.fetchTag.bind(this);
    }
    SiteHeader.prototype.handleHome = function () {
        if (apiURL !== './api/article') {
            $('#spinner').css('display', 'block');
            apiURL = './api/article';
            tagBool = true;
        }
    };
    SiteHeader.prototype.fetchTag = function () {
        if (tagBool === true) {
            this.loadTagFromServer();
        }
    };
    SiteHeader.prototype.loadTagFromServer = function () {
        var t = this;
        $.ajax({
            url: './api/tag',
            dataType: 'json',
            cache: false,
        }).done(function (data) {
            t.setState({ data: data });
        }).fail(function (xhr, status, err) {
            console.error('./api/tag', status, err.toString());
        });
        tagBool = false;
    };
    SiteHeader.prototype.componentDidMount = function () {
        this.loadTagFromServer();
        setInterval(this.fetchTag, 2000);
    };
    SiteHeader.prototype.render = function () {
        return (React.createElement("header", {id: "common-header", className: "wrap"}, 
            React.createElement("h1", null, 
                React.createElement("svg", {viewBox: "0 0 202 51.722", onClick: this.handleHome}, 
                    React.createElement("g", null, 
                        React.createElement("path", {d: "M0.5,50.916V26.446h1.835v6.117c1.835-3.259,4.588-5.4,8.258-6.423c2.853-0.812,5.3-0.507,7.341,0.918c2.036,1.429,3.465,3.365,4.282,5.811c1.63-3.465,4.076-5.706,7.341-6.729c3.059-0.812,5.912-0.306,8.564,1.529c2.648,1.835,3.976,4.387,3.976,7.647v15.599h-1.835V35.317c0-2.447-1.023-4.483-3.059-6.117c-2.041-1.63-4.182-2.141-6.423-1.529c-3.264,0.817-5.506,2.858-6.729,6.117c-0.817,2.041-1.329,3.876-1.529,5.506v11.623h-1.835V35.011c0-2.241-1.023-4.177-3.059-5.811c-1.835-1.424-3.976-1.935-6.423-1.529c-3.264,0.817-5.711,2.753-7.341,5.811c-1.023,2.041-1.529,4.081-1.529,6.117v11.317H0.5z"}), 
                        React.createElement("path", {d: "M50.185,50.916V26.446h1.835v24.469H50.185z"}), 
                        React.createElement("path", {d: "M63.239,50.916V26.446h1.835v6.117c2.853-3.259,6.423-5.4,10.705-6.423c4.483-1.018,8.564-0.507,12.235,1.529c3.259,1.835,4.894,4.488,4.894,7.953v15.293h-1.835V35.622c0-2.853-1.329-4.994-3.976-6.423c-3.876-2.036-7.852-2.447-11.929-1.223c-4.488,1.429-7.852,3.976-10.094,7.647v15.293H63.239z"}), 
                        React.createElement("path", {d: "M127.435,49.998V32.87c-2.041,5.1-4.488,9.076-7.341,11.929c-4.282,4.282-8.364,6.423-12.235,6.423c-2.041,0-3.876-0.812-5.506-2.447c-1.835-1.835-2.753-3.976-2.753-6.423c0-3.465,1.63-6.829,4.894-10.094c4.688-4.688,10.194-7.035,16.517-7.035c3.465,0,6.218,0.306,8.258,0.918v23.858H127.435zM127.129,27.364c-1.429-0.201-3.47-0.306-6.117-0.306c-5.711,0-10.81,2.246-15.293,6.729c-2.653,2.653-3.976,5.405-3.976,8.258c0,2.041,0.612,3.67,1.835,4.894c1.424,1.429,2.853,2.141,4.282,2.141c3.465,0,7.035-1.835,10.705-5.506C122.235,39.905,125.088,34.504,127.129,27.364z"}), 
                        React.createElement("path", {d: "M137.222,50.916V26.446h1.835v6.117c1.835-3.259,4.588-5.4,8.258-6.423c2.853-0.812,5.3-0.507,7.341,0.918c2.036,1.429,3.465,3.365,4.282,5.811c1.63-3.465,4.076-5.706,7.341-6.729c3.059-0.812,5.912-0.306,8.564,1.529c2.648,1.835,3.976,4.387,3.976,7.647v15.599h-1.835V35.317c0-2.447-1.023-4.483-3.059-6.117c-2.041-1.63-4.182-2.141-6.423-1.529c-3.264,0.817-5.506,2.858-6.729,6.117c-0.817,2.041-1.329,3.876-1.529,5.506v11.623h-1.835V35.011c0-2.241-1.023-4.177-3.059-5.811c-1.835-1.424-3.976-1.935-6.423-1.529c-3.264,0.817-5.711,2.753-7.341,5.811c-1.023,2.041-1.529,4.081-1.529,6.117v11.317H137.222z"}), 
                        React.createElement("path", {d: "M186.907,50.916V26.446h1.835v24.469H186.907z"}), 
                        React.createElement("circle", {cx: "50.944", cy: "14.028", r: "12.528"}), 
                        React.createElement("circle", {cx: "187.972", cy: "14.028", r: "12.528"}))
                )
            ), 
            React.createElement(Navigation, {data: this.state.data})));
    };
    return SiteHeader;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SiteHeader;
//# sourceMappingURL=SiteHeader.js.map