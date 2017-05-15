/**
 * Created by 嘉宁 on 2017/5/1.
 */

$(".picture_filed .left .button .button_1").on("click",function () {
    $(".task").fadeIn(500);
});
$(".t_close").on("click",function () {
    $(".task").fadeOut(500);
})
var i=0;
$(".map .button_1").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".first").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_1").css({
        "border":"2px solid blue"
    });
    window.location.href="Main_city.html?backurl="+window.location.href;
});
$(".map .button_2").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".second").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_2").css({
        "border":"2px solid blue"
    });
    i=2;
});
$(".map .button_3").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".third").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_3").css({
        "border":"2px solid blue"
    });
    i=3;
});
$(".map .button_4").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".fourth").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_4").css({
        "border":"2px solid blue"
    });
    i=4;
});
$(".map .button_5").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".fifth").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_5").css({
        "border":"2px solid blue"
    });
    i=5;
});
$(".map .button_6").on("click",function () {
    $(".con").css({
        "display":"none"
    });
    $(".sixed").css({
        "display":"block"
    });
    $(".map .button").css({
        "border":"none"
    });
    $(".map .button_6").css({
        "border":"2px solid blue"
    });
    i=6;
});
$(".map .button").click(function() {
    $(".monster").html("");
    $.post('http://localhost:82/field',{

    }).done(function (data) {
        data.forEach(function (value, index, array) {
            if (value.id == 1 && i==2) {
                var y = $('<div class="monster' + value.id + '" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">' + value.name + ' ' + 'lv.' + value.rank + '</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="' + value.id + '"/>')
                y.append(img, a);
                a.append(b, c);
                c.append(img2);
                $(".monster").append(y);
            }
            else if (value.id == 9 && i==3) {
                var y = $('<div class="monster' + value.id + '" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">' + value.name + ' ' + 'lv.' + value.rank + '</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="' + value.id + '"/>')
                y.append(img, a);
                a.append(b, c);
                c.append(img2);
                $(".monster").append(y);
            }
            else if (value.id == 10 && i==4) {
                var y = $('<div class="monster' + value.id + '" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">' + value.name + ' ' + 'lv.' + value.rank + '</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="' + value.id + '"/>')
                y.append(img, a);
                a.append(b, c);
                c.append(img2);
                $(".monster").append(y);
            }
            else if (value.id == 11 && i==5) {
                var y = $('<div class="monster' + value.id + '" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">' + value.name + ' ' + 'lv.' + value.rank + '</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="' + value.id + '"/>')
                y.append(img, a);
                a.append(b, c);
                c.append(img2);
                $(".monster").append(y);
            }
            else if (value.id == 12 && i==6) {
                var y = $('<div class="monster' + value.id + '" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">' + value.name + ' ' + 'lv.' + value.rank + '</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="' + value.id + '"/>')
                y.append(img, a);
                a.append(b, c);
                c.append(img2);
                $(".monster").append(y);
            }
        });
        $(".hit_monster").click(function () {
            var v_id = $(this).attr('id');
            console.log(v_id);
            $.post('http://localhost:82/fieldFight', {
                monsterId:v_id
            }).done(function (data) {
                var x = $('<div class="mes"></div>');
                $("#" + v_id).parent().parent().parent().addClass("selected").siblings().removeClass("selected");
                x.append("你向" + $(".selected .m_name").html() + "发起挑战，" + data[data.length - 1]);
                $(".fight_mes").prepend(x);
                $.post('http://localhost:82/task',{
                    list:"accepted"
                }).done(function (data){
                    console .log(data);
                    $(".t_text").html("");
                    $(".t_name").html("");
                    data.forEach(function (value, index, array) {
                        var num = index+1;
                        var sp = $('<span style="font-size:16px;font-weight: bold;margin: 3px 0 3px 0" >【'+value.name+'】</span>');
                        var li = $('<li>'+num+'.'+value.describe+'</li>');
                        var ul = $('<ul class="list"></ul>');
                        $(".t_text").append(ul);
                        $(".t_name").append(sp);
                        $(".list").append(li);
                    })
                })
            })
        })
    })
});




