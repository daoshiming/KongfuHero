/**
 * Created by 嘉宁 on 2017/5/1.
 * 副本
 */

$(".picture_fuben .left .button .button_1").on("click",function () {
    $(".task").fadeIn(500);
});
$(".t_close").on("click",function () {
    $(".task").fadeOut(500);
});
var vvv_id = 0,cengshu;
$(document).ready(function(){
    $.post('http://localhost:82/ladder',{

    }).done(function (data){
        var date = data;
        $.post('http://localhost:82/enterLadder',{
            ladderId:1
        }).done(function (data){
        $('.map .button').click(function(){
            $(".monster").html("");
            $(".scene_des").html("");
            var vv_id = $(this).attr('id')-10;
            cengshu = vv_id+1;
                $.post('http://localhost:82/floorNum',{

                }).done(function (data) {
                    vvv_id = data;
                });
                $(".scene_des").html(date[0].describe);
                $(".cengshu").html(cengshu);
                var y = $('<div class="monster'+vv_id+'" style="font-size: 12px;height: 32px;width: 168px;margin-top: 20px;"></div>');
                var a = $('<div class="m_mes" style="float: left;margin-left: 5px;"></div>');
                var b = $('<div class="m_name" style="height: 19px;">'+data[vv_id].name+' '+'lv.'+data[vv_id].rank+'</div>');
                var c = $('<a href="#" style="height: 16px;width: 16px;"></a>');
                var img = $('<img src="images/野猪.jpg" width="35px" height="35px" style="float: left"/>');
                var img2 = $('<img src="images/icon-fight.gif" style="width: 16px; height: 16px;" class="hit_monster" id="'+vv_id+'"/>')
                y.append(img,a);
                a.append(b,c);
                c.append(img2);
                $(".monster").html(y);
                $(".hit_monster").click(function(){
                    var v_id = $(this).attr('id');
                    v_id = parseInt(v_id)+1;
                    if(v_id != vvv_id){
                        alert("你还没有挑战成功第"+vvv_id+"层，请挑战成功后在挑战下一层！")
                    }
                    else {
                        $.post('http://localhost:82/floorFight', {}).done(function (data) {
                            var x = $('<div class="mes"></div>');
                            $("#" + v_id).parent().parent().parent().addClass("selected").siblings().removeClass("selected");
                            x.append("你向" + $(".m_name").html() + "发起挑战，" + data[data.length - 1]);
                            $(".fight_mes").prepend(x);
                        })
                    }
                })
            })
        });
    })
});

