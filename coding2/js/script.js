$(function () {
    $('#headder_toggle').click(function () {
        //menu非表示処理/////
        if($('.line').hasClass('rotate')){
            $('.line').removeClass('rotate');
        }else{//menu表示処理/////
            $('.line').addClass('rotate');
        }
    });
});