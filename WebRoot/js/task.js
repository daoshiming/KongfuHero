/**
 * Created by 嘉宁 on 2017/5/11.
 */

$(document).ready(function(){
    $.post('http://localhost:82/task',{
        list:"accepted"
    }).done(function (data){
            data.forEach(function (value, index, array) {
                var num = index+1;
                var sp = $('<span style="font-size:16px;font-weight: bold;margin: 3px 0 3px 0" >【'+value.name+'】</span>');
                var li = $('<li>'+num+'.'+value.describe+'</li>');
                var ul = $('<ul class="list"></ul>');
                $(" .t_text").append(ul);
                $(" .t_name").append(sp);
                $(" .list").append(li);
            })
    })
});
$(document).ready(function(){
    $.post('http://localhost:82/task',{
        list:"finished"
    }).done(function (data){

    })
});
$(document).ready(function(){
    $.post('http://localhost:82/task',{
        list:"task"
    }).done(function (data){
    })
});
$('.canget').click(function(){
    $.post('http://localhost:82/task',{
        list:"unaccepted"
    }).done(function (data){
        console .log(data);
        $(".t_text").html("");
        $(".t_name").html("");
        data.forEach(function (value, index, array) {
            var num = index+1;
            var sp = $('<span style="font-size:16px;font-weight: bold;margin: 3px 0 3px 0" >【'+value.name+'】<a href="#" id="'+value.id+'" class="get" style="font-size:14px;">接受任务</a></span>');
            var li = $('<li>'+num+'.'+value.describe+'</li>');
            var ul = $('<ul class="list"></ul>');
            $(".task .t_text").append(ul);
            $(".task .t_name").append(sp);
            $(".task .list").append(li);
        })
        $('.get').click(function(){
            var v_id = $(this).attr('id');
            console.log(v_id);
            $.post('http://localhost:82/acceptTask',{
                taskId:v_id
            }).done(function (data){
                console .log(data);
                alert(data);
            })
        });
    })
});
$('.finished').click(function(){
    $.post('http://localhost:82/task',{
        list:"finished"
    }).done(function (data){
        console .log(data);
        $(".t_text").html("");
        $(".t_name").html("");
        data.forEach(function (value, index, array) {
            var num = index+1;
            var sp = $('<span style="font-size:16px;font-weight: bold;margin: 3px 0 3px 0" >【'+value.name+'】<a href="#" class="get" style="font-size:14px;">接受任务</a></span>');
            var li = $('<li>'+num+'.'+value.describe+'</li>');
            var ul = $('<ul class="list"></ul>');
            $(".task .t_text").append(ul);
            $(".task .t_name").append(sp);
            $(".task .list").append(li);
        })
    })
});
$('.doing').click(function(){
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
});
$('.doing').on('click',function () {
    $(".task").css({
        "background":"url('../images/task.png')no-repeat",
        "background-size": "100% 100%"
    })
})
$('.canget').on('click',function () {
    $(".task").css({
        "background":"url('../images/canget.png')no-repeat",
        "background-size": "100% 100%"
    })
})
$('.finished').on('click',function () {
    $(".task").css({
        "background":"url('../images/finished.png')no-repeat",
        "background-size": "100% 100%"
    })
})
