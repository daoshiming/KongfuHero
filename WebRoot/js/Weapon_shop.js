/**
 * Created by 嘉宁 on 2017/5/1.
 * 武器店
 */

$(".button_3").on("click",function () {
    $(".no").fadeIn(500);
});
$(".button_4").on("click",function () {
    $(".no").fadeIn(500);
});
$(".close").on("click",function () {
    $(".no").fadeOut(500);
})
$(".weapon_bg .left .button .button_1").on("click",function () {
    $(".task").fadeIn(500);
});
$(".t_close").on("click",function () {
    $(".task").fadeOut(500);
})

$(document).ready(function(){
    $.post('http://localhost:82/weaponShop',{
    }).done(function (data){
        data.forEach(function (value, index, array) {
            var x=document.createElement('div');
            x.className='wuqi'+value.id+' b_wuqi';
            x.id=value.id;
            var num=value.id;
            $('.e_list').append(x);
            if (value.id == 1) {
                var y = $('<div></div>');
                y.addClass('b'+value.id).addClass('wuqi_mes');
                y.append(value.describe);
                y.html(y.html()+"<br />");
                y.append("攻击力：" + value.attack);
                y.html(y.html()+"<br />");
                y.append("防御力：" + value.defense);
                y.html(y.html()+"<br />");
                y.append("佩戴等级：" + value.rank);
                y.html(y.html()+"<br />");
                y.append("价格：" + value.price);
                y.html(y.html()+"<br />");
                $('.right').append(y);
            }
            if (value.id == 3) {
                var y = $('<div></div>');
                y.addClass('b'+value.id).addClass('wuqi_mes');
                y.append(value.describe);
                y.html(y.html()+"<br />");
                y.append("攻击力：" + value.attack);
                y.html(y.html()+"<br />");
                y.append("防御力：" + value.defense);
                y.html(y.html()+"<br />");
                y.append("佩戴等级：" + value.rank);
                y.html(y.html()+"<br />");
                y.append("价格：" + value.price);
                y.html(y.html()+"<br />");
                $('.right').append(y);
            }
            $(".b1").css({
                "width":"150px",
                "position":"absolute",
                "top":"310px",
                "left":"300px",
                "display":"none",
                "text-align":"center",
                "background":"url('images/boy-left.gif')",
                "background-size":"99% 100%",
                "color":"##7f5644",
                "line-height":"25px",
                "word-break":"break-all",
                "padding-top":"15px",
                "padding-bottom":"20px"
            });
            $(".b3").css({
                "width":"150px",
                "position":"absolute",
                "top":"310px",
                "left":"355px",
                "display":"none",
                "text-align":"center",
                "background":"url('images/boy-left.gif')",
                "background-size":"99% 100%",
                "color":"##7f5644",
                "line-height":"25px",
                "word-break":"break-all",
                "padding-top":"15px",
                "padding-bottom":"20px"
            });

        });
        //买武器
        $('.b_wuqi').click(function(){
            var v_id = $(this).attr('id');
            var vv_id=0;
            vv_id = parseInt(v_id)+10;
            console.log(v_id);
            $.post('http://localhost:82/buyEquipment',{
                equipmentId: v_id
            }).done(function (data){    
                if(data=="购买成功"){
                    //成功购买武器后获取装备列表，显示最后一个
                    $.post('http://localhost:82/equipment',{

                    }).done(function (data){
                        var x=$('<div class="c_fangju"></div>');
                        var li = data[data.length-1].id+10;
                        if(data[data.length-1].id==1||data[data.length-1].id==3){
                            var img = $('<img src="images/'+data[data.length-1].id+'.jpg" id="'+li+'" class="c_fangju'+data[data.length-1].id+'" width="47px" height="107px"/>');
                            x.append(img);
                            $('.package').append(x);
                        }else {
                            var img = $('<img src="images/' + data[data.length-1].id + '.jpg" id="' + li + '" class="c_fangju' + data[data.length-1].id + '" width="47px" height="80px"/>');
                            x.append(img);
                            $('.package').append(x);
                        }
                        var a=0,b=0,c=0,d=0;
                        $(".c_fangju").on("click",function () {
                            $(".ifWear").fadeIn(500);
                            var v_id = $(this).children().attr('id');
                            if(a==1||a==3){
                                b=a;
                            }
                            else if(a==2||a==5){
                                c=a;
                            }
                            else if(a==4||a==6){
                                d=a;
                            }
                            a=v_id-10;
                            $(this).addClass("selected").siblings().removeClass("selected");
                        })
                        $(".ifWear .close").on("click",function () {
                            $(".ifWear").fadeOut(500);
                        })
                        $(".sell").on("click",function () {
                            $(".selected").html(" ");
                            $(".ifWear").fadeOut(500);
                        })

                        //穿装备
                        $('.wear').click(function(){

                            $.post('http://localhost:82/equipmentWear',{
                                equipmentId:a
                            }).done(function (data){
                                $(".ifWear").fadeOut(500);
                                if(a==1||a==3){
                                    if(b!=0){
                                        var r=b+10;
                                        var img1 = $('<img src="images/'+b+'.jpg" id="'+r+'" class="c_fangju'+b+'" width="47px" height="107px"/>');
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="107px"/>');
                                        $(".selected").html(img1);
                                        $('.wuqi').html(img2);
                                    }else if(b==0){
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="107px"/>');
                                        $(".selected").html(" ");
                                        $('.wuqi').html(img2);
                                    }
                                }
                                else if(a==2||a==5){
                                    if(c!=0){
                                        var r=c+10;
                                        var img1 = $('<img src="images/'+c+'.jpg" id="'+r+'" class="c_fangju'+c+'" width="47px" height="80px"/>');
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                        $(".selected").html(img1);
                                        $('.kuzi').html(img2);
                                    }else if(c==0){
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                        $(".selected").html("");
                                        $('.kuzi').html(img2);
                                    }
                                }
                                else if(a==4||a==6){
                                    if(d!=0){
                                        var r=d+10;
                                        var img1 = $('<img src="images/'+d+'.jpg" id="'+r+'" class="c_fangju'+d+'" width="47px" height="80px"/>');
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                        $(".selected").html(img1);
                                        $('.yifu').html(img2);
                                    }else if(d==0){
                                        var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                        $(".selected").html("");
                                        $('.yifu').html(img2);
                                    }
                                }
                                $.post('http://localhost:82/personInformation',{
                                }).done(function (data){
                                    $(".left .name").html(data.name);
                                    $(".left .lv").html(data.rank);
                                    $(" .experience").html(data.experience);
                                    $(" .life").html(data.life);
                                    $(".attack").html(data.attack);
                                    $(".defense").html(data.defense);
                                    $(".arena_rank").html(data.arenarank);
                                    $(".ranking span").html(data.arenarank);
                                    $(".money").html(data.money);
                                })
                            })
                        })
                    })
                }
                if(data=="购买失败，金币不足"){
                    alert("购买失败");
                }
                var a=0,b=0,c=0,d=0;
                $(".c_wuqi").on("click",function () {
                    $(".ifWear").fadeIn(500);
                    var v_id = $(this).children().attr('id');
                    if(a==1||a==3){
                        b=a;
                    }
                    else if(a==2||a==5){
                        c=a;
                    }
                    else if(a==4||a==6){
                        d=a;
                    }
                    a=v_id-10;
                    $(this).addClass("selected").siblings().removeClass("selected");
                })
                $(".ifWear .close").on("click",function () {
                    $(".ifWear").fadeOut(500);
                })
                $(".sell").on("click",function () {
                    $(".selected").html(" ");
                    $(".ifWear").fadeOut(500);
                })

                //穿装备
                $('.wear').click(function(){

                    $.post('http://localhost:82/equipmentWear',{
                        equipmentId:a
                    }).done(function (data){
                        $(".ifWear").fadeOut(500);
                        if(a==1||a==3){
                            //如果之前又穿上同类型的转杯
                            if(b!=0){
                                var r=b+10;
                                var img1 = $('<img src="images/'+b+'.jpg" id="'+r+'" class="c_fangju'+b+'" width="47px" height="107px"/>');
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="107px"/>');
                                $(".selected").html(img1);
                                $('.wuqi').html(img2);
                            }
                            //如果之前没有穿同类型的装备
                            else if(b==0){
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="107px"/>');
                                $(".selected").html(" ");
                                $('.wuqi').html(img2);
                            }
                        }
                        else if(a==2||a==5){
                            if(c!=0){
                                var r=c+10;
                                var img1 = $('<img src="images/'+c+'.jpg" id="'+r+'" class="c_fangju'+c+'" width="47px" height="80px"/>');
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                $(".selected").html(img1);
                                $('.kuzi').html(img2);
                            }else if(c==0){
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                $(".selected").html("");
                                $('.kuzi').html(img2);
                            }
                        }
                        else if(a==4||a==6){
                            if(d!=0){
                                var r=d+10;
                                var img1 = $('<img src="images/'+d+'.jpg" id="'+r+'" class="c_fangju'+d+'" width="47px" height="80px"/>');
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                $(".selected").html(img1);
                                $('.yifu').html(img2);
                            }else if(d==0){
                                var img2 = $('<img src="images/'+a+'.jpg" id="'+a+'" class="c_fangju'+a+'" width="47px" height="80px"/>');
                                $(".selected").html("");
                                $('.yifu').html(img2);
                            }
                        }

                        //穿上装备后在此发请求获取人物属性
                        $.post('http://localhost:82/personInformation',{
                        }).done(function (data){
                            $(".left .name").html(data.name);
                            $(".left .lv").html(data.rank);
                            $(" .experience").html(data.experience);
                            $(" .life").html(data.life);
                            $(".attack").html(data.attack);
                            $(".defense").html(data.defense);
                            $(".arena_rank").html(data.arenarank);
                            $(".ranking span").html(data.arenarank);
                        })
                    })
                })
            })
        });

        //当鼠标放在商店装备上面的时候，属性框自动浮现
        $(".wuqi1").on("mousemove",function () {
            $(".b1").css({
                "display":"block"
            });
            $(".b3").css({
                "display":"none"
            });
        });
        $(".wuqi3").on("mousemove",function () {
            $(".b3").css({
                "display":"block"
            });
            $(".b1").css({
                "display":"none"
            });
        });
        $(".b_wuqi").on("mouseleave",function () {
            $(".b1").css({
                "display":"none"
            })
            $(".b3").css({
                "display":"none"
            });
        });
    });
});
