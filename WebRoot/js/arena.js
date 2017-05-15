/**
 * Created by 嘉宁 on 2017/5/1.
 * 竞技场
 */



$(".arena_bg .right .button .button_2").on("click",function () {
    $(".no").fadeIn(500);
});
$(".arena_bg .right .button .button_3").on("click",function () {
    $(".no").fadeIn(500);
});
$(".arena_bg .right .button .button_4").on("click",function () {
    $(".no").fadeIn(500);
});
$(".arena_bg .right .button .button_5").on("click",function () {
    $(".no").fadeIn(500);
});
$(".close").on("click",function () {
    $(".no").fadeOut(500);
})
$(".arena_bg .left .button .button_1").on("click",function () {
    $(".task").fadeIn(500);
});
$(".t_close").on("click",function () {
    $(".task").fadeOut(500);
})

$(document).ready(function(){
    $.post('http://localhost:82/arena',{

    }).done(function (data){
        data.forEach(function (value, index, array) {
            var li=$('<li></li>');
            var x=$('<div></div>');
            x.addClass('o_name');
            x.append(value.name);
            var y=$('<div></div>');
            y.addClass('o_ranking');
            y.append(value.arenarank);
            var z=$('<div></div>');
            z.addClass('o_lv');
            z.append(value.rank);
            var h=$('<a href="#" id="'+value.id+'"></a>');
            h.href='#';
            h.addClass('hit');
            h.append('发起挑战');
            $('.opponent ul').append(li);
            li.append(x);
            li.append(y);
            li.append(z);
            li.append(h);
        });
        var index = 1;
        $('.hit').click(function(){
            var v_id = $(this).attr('id');
            $.post('http://localhost:82/arenaAttack',{
                opponentId:v_id
            }).done(function (data){
                var x = $('<div class="mes'+index+' mes"></div>');
                $("#"+v_id).parent().addClass("selected").siblings().removeClass("selected");
                x.append("你向"+$(".selected .o_name").html()+"发起挑战，"+data[data.length-1]);
                $(".hit_mes").prepend(x);
                if(data[data.length-1]=='战斗胜利'){
                    window.location.href="arena.html";
                }
            })
        })
    })
})



