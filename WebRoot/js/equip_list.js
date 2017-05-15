/**
 * Created by 嘉宁 on 2017/5/6.
 */

//列出当前角色已拥有的装备
$(document).ready(function(){
    $.post('http://localhost:82/equipment',{

    }).done(function (data){
        data.forEach(function (value, index, array) {
            var x=$('<div class="c_fangju"></div>');
            var li = value.id+10;
            if(value.id==1||value.id==3){
                var img = $('<img src="images/'+value.id+'.jpg" id="'+li+'" class="c_fangju'+value.id+'" width="47px" height="107px"/>');
                x.append(img);
                $('.package').append(x);
            }else{
                var img = $('<img src="images/'+value.id+'.jpg" id="'+li+'" class="c_fangju'+value.id+'" width="47px" height="80px"/>');
                x.append(img);
                $('.package').append(x);
            }
        });
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
                })
            })
        })
    })
})
