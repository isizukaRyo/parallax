$.parallaxTiming({
    timingLinePercent: 10
});

$('.girl-image').parallaxFit({
    start: 0,
    end: 'lastScrollPosition',
    toStyle: {
        top: `${$('body').height() - 180}px`
    },
    easing: 'linear',
});
$('.rotate-item').parallaxFit({
    start: 0,
    end: 'lastScrollPosition',
    fromStyle: {
        transform: 'rotate(-20deg) rotateY(0deg)'
    },
    toStyle: {
        transform: 'rotate(-20deg) rotateY(2800deg)'
    },
    easing: 'linear',
});

$('.rotate-item02').parallaxFit({
    start: 0,
    end: 'lastScrollPosition',
    fromStyle: {
        transform: 'rotate(20deg) rotateY(0deg)'
    },
    toStyle: {
        transform: 'rotate(20deg) rotateY(-2500deg)'
    },
    easing: 'linear',
});
$(window).parallaxTiming({
    fixScrollPosition: 'lastScrollPosition',
    toggle: [
        function () {
            $('.girl-image').addClass("changed")
},
        function () {
            $('.girl-image').removeClass("changed")
        },
    ]
});


//特定の位置に来たらイベント起こす
//$(window).on('load', function () {
//    thisOffset = $('.girl-image').offset().top + $('.girl-image').outerHeight();
//});

//$(window).scroll(function () {
//    if ($(window).scrollTop() + $(window).height() > thisOffset) {
//        // 特定の要素を超えた
//        $('.girl-image').animate({
//            width: '100px',
//        })
//    } else {
//        // 特定の要素を超えていない
//    }
//});
