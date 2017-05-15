/**
 * Created by 嘉宁 on 2017/5/1.
 */

$(document).snowfall({
    image: "images/huaban2.png",
    flakeCount:20,
    minSize: 5,
    maxSize: 20
});




var $a=$(".buttons a");
var $s=$(".buttons span");
var cArr=["p1","p4","p3","p2"];
var index=0;

//上一张
function previmg(){
    cArr.unshift(cArr[3]);
    cArr.pop();
    //i是元素的索引，从0开始
    //e为当前处理的元素
    //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
    $(".c_pic li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index--;
    if (index<0) {
        index=3;
    }
    show();
}

//下一张
function nextimg(){
    cArr.push(cArr[0]);
    cArr.shift();
    $(".c_pic li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    index++;
    if (index>3) {
        index=0;
    }
    show();
}

//通过底下按钮点击切换
$a.each(function(){
    $(this).click(function(){
        var myindex=$(this).index();
        var b=myindex-index;
        if(b==0){
            return;
        }
        else if(b>0) {
            /*
             * splice(0,b)的意思是从索引0开始,取出数量为b的数组
             * 因为每次点击之后数组都被改变了,所以当前显示的这个照片的索引才是0
             * 所以取出从索引0到b的数组,就是从原本的这个照片到需要点击的照片的数组
             * 这时候原本的数组也将这部分数组进行移除了
             * 再把移除的数组添加的原本的数组的后面
             */
            var newarr=cArr.splice(0,b);
            cArr=$.merge(cArr,newarr);
            $(".c_pic li").each(function(i,e){
                $(e).removeClass().addClass(cArr[i]);
            })
            index=myindex;
            show();
        }
        else if(b<0){
            /*
             * 因为b<0,所以取数组的时候是倒序来取的,也就是说我们可以先把数组的顺序颠倒一下
             * 而b现在是负值,所以取出索引0到-b即为需要取出的数组
             * 也就是从原本的照片到需要点击的照片的数组
             * 然后将原本的数组跟取出的数组进行拼接
             * 再次倒序,使原本的倒序变为正序
             */
            cArr.reverse();
            var oldarr=cArr.splice(0,-b)
            cArr=$.merge(cArr,oldarr);
            cArr.reverse();
            $(".c_pic li").each(function(i,e){
                $(e).removeClass().addClass(cArr[i]);
            })
            index=myindex;
            show();
        }
    })
})

//改变底下按钮的背景色
function show(){
    $($s).eq(index).addClass("blue").parent().siblings().children().removeClass("blue");
}

//点击class为p2的元素触发上一张照片的函数
$(document).on("click",".p2",function(){
    previmg();
    return false;//返回一个false值，让a标签不跳转
});

//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".p4",function(){
    nextimg();
    return false;
});

//			鼠标移入box时清除定时器
$(".box").mouseover(function(){
    clearInterval(timer);
})

//			鼠标移出box时开始定时器
$(".box").mouseleave(function(){
    timer=setInterval(nextimg,4000);
})

//			进入页面自动开始定时器
timer=setInterval(nextimg,4000);

$(".r_register").mouseover(function(){
    $(".liu_1").css({
        "webkitAnimationPlayState":"running",
        "opacity":"1"
    });
}).mouseout(function(){
    $(".liu_1").css({
        "webkitAnimationPlayState":"paused",
        "opacity":"0.5"

    });
});

$(".r_find").mouseover(function(){
    $(".liu_2").css({
        "webkitAnimationPlayState":"running",
        "opacity":"1"
    });
}).mouseout(function(){
    $(".liu_2").css({
        "webkitAnimationPlayState":"paused",
        "opacity":"0.5"
    });
});
$(".r_register").on("click",function () {
    $(".register").fadeIn(500);
    $('.register .username').val("");
    $('.register .password').val("");
    $('.register .question').val("");
    $('.register .answer').val("");
    $('.register .name').val("");
})
$(".register .close").on("click",function () {
    $(".register").fadeOut(500);
})
$(".r_find").on("click",function () {
    $(".findpassword").fadeIn(500);
    $('.findpassword .username').val("");
    $('.findpassword .question').val("");
    $('.findpassword .answer').val("");
})
$(".findpassword .close").on("click",function () {
    $(".findpassword").fadeOut(500);
})

//登陆
$('.sure').click(function () {
    $.post('http://localhost:82/login',{
        username:$(".username").val(),
        password:$(".password").val()
    }).done(function (data){
		if(data=='LoginSuccess'){
			window.location.href="Main_city.html";
		}else{
			alert("密码错误，登录失败！");
		}
    })
})

//注册
$('.submit').click(function () {
	$(".register").hide();
	$(".re_mes").show();
    $.post('http://localhost:82/register',{
        username:$('.register .username').val(),
        password:$('.register .password').val(),
        question:$('.register .question').val(),
        answer:$('.register .answer').val(),
        name:$('.register .name').val()
    }).done(function (data){
            if(data=='RegisterSuccess'){
                var x = $('<div style="width:600px;margin: 150px 360px;font-family:楷体;font-size: 40px;color: #e56352;">恭喜你，注册成功！！！<div class=close>×</div></div>');
                var bu = $('<div class="close">×</div>')
                $(".re_mes").html(x);
                $(".re_mes").append(bu);
            }
            else if(data=="RegisterFailure"){
                var x = $('<div style="width:600px;margin: 150px 360px;font-family:楷体;font-size: 40px;color: #421c17;">注册失败.....<div class=close>×</div></div>');
                var bu = $('<div class="close">×</div>')
                $(".re_mes").html(x);
                $(".re_mes").append(bu);
            }
            $('.register .close').css({
                "position": "absolute",
                "top": "0",
                "right": "0",
                "height": "40px",
                "width": "40px",
                "font-size": "30px",
                "text-align": "center",
                "line-height": "40px",
                "cursor": "pointer"
            })
            $('.re_mes .close').css({
            	"position": "absolute",
            	"top": "0",
            	"right": "0",
            	"height": "40px",
            	"width": "40px",
            	"font-size": "30px",
            	"text-align": "center",
            	"line-height": "40px",
            	"cursor": "pointer"
            })
            $(".close").on("click",function () {
                $(".re_mes").fadeOut(500);
            })
    })
})

//找回密码
$('.find').click(function () {
	$(".findpassword").hide();
	$(".re_mes").show();
    $.post('http://localhost:82/findpassword',{
        username:$('.findpassword .username').val(),
        question:$('.findpassword .question').val(),
        answer:$('.findpassword .answer').val(),
    }).done(function (data){
        console.log(data);
        if(data=="账户名或密保错误"){
            var x = $('<div style="width:600px;margin: 150px 360px;font-family:楷体;font-size: 40px;color: #e56352;">用户名或密保错误<div class=close>×</div></div>');
            var bu = $('<div class="close">×</div>')
            $(".re_mes").html(x);
            $(".re_mes").append(bu);
        }
        else{
            var x = $('<div style="width:600px;margin: 150px 360px;font-family:楷体;font-size: 40px;color: #421c17;">'+data+'<div class=close>×</div></div>');
            var bu = $('<div class="close">×</div>')
            $(".re_mes").html(x);
            $(".re_mes").append(bu);
        }
        $('.findpassword .close').css({
            "position": "absolute",
            "top": "0",
            "right": "0",
            "height": "40px",
            "width": "40px",
            "font-size": "30px",
            "text-align": "center",
            "line-height": "40px",
            "cursor": "pointer"
        })
        $('.re_mes .close').css({
            	"position": "absolute",
            	"top": "0",
            	"right": "0",
            	"height": "40px",
            	"width": "40px",
            	"font-size": "30px",
            	"text-align": "center",
            	"line-height": "40px",
            	"cursor": "pointer"
            })
         $(".close").on("click",function () {
            $(".re_mes").fadeOut(500);
        })
        $(".findpassword .close").on("click",function () {
            $(".findpassword").fadeOut(500);
        })
    })
})
