var log = function() {
    console.log.apply(console, arguments)
}
var play = function(offset) {
    var activeIndex = $('.gua-slide-images').data('active')
    var numberOfImgs = $('.gua-slide-images').data('imgs')
    var i = (activeIndex + numberOfImgs + offset) % numberOfImgs
    $('.gua-slide-images').data('active', i)
    //
    $('.gua-slide-active').fadeOut()
    $('.gua-slide-active').removeClass('gua-slide-active')
    //
    var active = $($('.gua-slide-img')[i])
    active.addClass('gua-slide-active')
    // log(active,'btn')

    active.fadeIn()
    // 改变指示器
    $('.gua-slide-i').removeClass('gua-slide-i-active')
    var activeIndicator = $($('.gua-slide-i')[i])
    activeIndicator.addClass('gua-slide-i-active')
}
var playPrev = function() {
    play(-1)
}
var playNext = function() {
    play(1)
}
log('btn click start')
$('.gua-slide-button').on('click', function(event){
    var button = $(event.target)
    log('button','click')

    if (button.hasClass('gua-slide-button-left')) {
        playPrev()
    } else {
        playNext()
    }
})
log('btn click end')
var mouseChange = function(index) {
    $('.gua-slide-active').fadeOut()
    $('.gua-slide-active').removeClass('gua-slide-active')
    //
    var active = $($('.gua-slide-img')[index])
    active.addClass('gua-slide-active')
    active.fadeIn()
}
//鼠标移入缩略图进入大图
$('.gua-slide-indicators').on('mouseenter', '.gua-small-img', function(event) {
    var id = $(this).data('index')
    $('.gua-slide-images').data('active', id)
    mouseChange(id)
})
//自动轮播
var auto = function() {
                at = setInterval(function(){
                            playNext()
                        },3000)
            }
auto()
//鼠标移入图片停止轮播,移除开始轮播
var stopSlide = function(){
    $('.gua-slide-img').on('mouseenter', function() {
        // log('mouseenter 执行了')
        clearInterval(at)
        $('.gua-slide-button').removeClass('btnNone')
    })
    $('.gua-slide-img').on('mouseleave', function() {
        // log('auto 执行了')
        auto()
        $('.gua-slide-button').addClass('btnNone')

    })
}
stopSlide()
