/**
 * Created by 嘉宁 on 2017/5/1.
 */

$("#gender_1").on("click",function(){
    $("#select_boy").css({
        "background":"url('images/gender-select-highlight.gif')center center no-repeat"
    })
    $("#select_girl").css({
        "background":"url('images/gender-select.gif')center center no-repeat"
    })
});
$("#gender_2").on("click",function(){
    $("#select_girl").css({
        "background":"url('images/gender-select-highlight.gif')center center no-repeat"
    })
    $("#select_boy").css({
        "background":"url('images/gender-select.gif')center center no-repeat"
    })
});




