  $(document).ready(function () {
    var $pageHeaderTitle = $(".page-header__title");
    var $pageHeaderSubTitle = $(".page-header__subtitle");
    var $pageHeaderCTA = $(".page-header__cta");
    var $pageHeaderImg = $(".page-header__img");
    var $pageHeaderImgImg = $(".page-header__imgbutterfly");

    $(window).load(function(){
        window.setTimeout(function(){$pageHeaderTitle.removeClass('hide-animation').addClass('animated fade-in-up');}, 0);
        window.setTimeout(function(){$pageHeaderSubTitle.removeClass('hide-animation').addClass('animated fade-in-up');}, 400);
        window.setTimeout(function(){$pageHeaderCTA.removeClass('hide-animation').addClass('animated fade-in-up');}, 800);
        window.setTimeout(function(){$pageHeaderImg.removeClass('hide-animation').addClass('animated fade-in-up');}, 1200);
        window.setTimeout(function(){$pageHeaderImgImg.removeClass('hide-animation').addClass('animated flapper');}, 0);
    }); 
}); 