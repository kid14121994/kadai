$(function () {
    $('#header_toggle').click(function () {
        //menu非表示処理/////
        if($('#line').hasClass('rotate')){
            $('#line').removeClass('rotate');
            $('.sp-nav').hide(1000);
        }else{//menu表示処理/////
            $('#line').addClass('rotate');
            $('.sp-nav').show(1000);
        }
    });
});