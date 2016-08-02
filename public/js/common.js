var inputURL = '';
var inputEmail = '';
var inputPassword = '';
var inputRemember = '';
var deleteURL = '';
var tagArr = [];
var apiURL = './api/article';
var tmpURL = apiURL;
var articleBool = false;
var tagBool = false;
var loggedin = $('[name="user_id"]').attr('value');
var tagName = '';
var already;
var supportTouch = 'ontouchend' in document;
var eTouchStart = supportTouch ? 'touchstart' : 'mousedown';
var eTouchMove = supportTouch ? 'touchmove' : 'mousemove';
var eTouchEnd = supportTouch ? 'touchend' : 'mouseup';
$(function () {
    $('body').on(eTouchStart, 'article', function (e) {
        if ($(this).is(':not(.overlay)')) {
            e.preventDefault();
            $(this).addClass('hover');
        }
    });
    $('body').on(eTouchEnd, 'article', function (e) {
        if ($(this).is(':not(.overlay)')) {
            e.preventDefault();
            $(this).removeClass('hover');
            $(this).addClass('overlay');
            $('#menu00').prop('checked', true);
            $('#overlay').addClass('article');
            $('#overlay').css('display', 'block');
            $('#overlay-close').css('display', 'block');
            $('body').css('overflow', 'hidden');
        }
    });
    $('#overlay-close').on(eTouchStart, function (e) {
        e.preventDefault();
        $('.overlay').removeClass('overlay');
        $('#overlay').removeClass('article');
        $('#overlay').css('display', 'none');
        $('#overlay-close').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
    $('.register-toggle').on(eTouchEnd, function () {
        if ($(this).parent('div').hasClass('login')) {
            $(this).parent('div').removeClass('login');
            $(this).parent('div').addClass('signup');
            $(this).html('ログインフォームに戻る');
        }
        else {
            $(this).parent('div').removeClass('signup');
            $(this).parent('div').addClass('login');
            $(this).html('新規アカウント登録');
        }
    });
    $('#overlay').on(eTouchStart, function (e) {
        if ($(this).is(':not(.overlay)')) {
            e.preventDefault();
        }
    });
    $('#overlay').on(eTouchEnd, function (e) {
        if ($(this).is(':not(.overlay)')) {
            e.preventDefault();
            $('.overlay').removeClass('overlay');
            $('#overlay').removeClass('article');
            $('#overlay').css('display', 'none');
            $('#overlay-close').css('display', 'none');
            $('body').css('overflow', 'auto');
        }
    });
});
//# sourceMappingURL=common.js.map