/**
 * Created by 嘉宁 on 2017/5/11.
 */
$(document).ready(function(){
    $.post('http://localhost:82/personInformation',{
       
    }).done(function (data){
    	console.log(data);
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

