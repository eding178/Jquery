

$("document").ready(function(){

    $("#loader").hide()

    $("table").css({"background-color":"red"})

    $("#btn-hide").click(function(){$("table").hide()})
    $("#btn-show").click(function(){$("table").show()})

    $("p.a").mouseenter(function(){
        $("p.a").slideUp()
    })

    $("p.a").mouseleave(function(){
        $("p.a").slideDown()
    })
    $("p.pAlert").click(function(){
        alert($("p.pAlert").val())
    })

    $("#more").click(function(){
        $("p.pAlert").append(" more text here ")
    })

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    $("#time-now").append(hoy.toDateString())

///////////
//problema logic piramide d'*
///////////
$("#btn-piramide").click(function(){
    var rows = $("#piramide-input").val()
    for (var j = 0; j < rows; j++) {
        $("#piramide").append("<br/>");
        for (var i = 0; i <= j; i++) {
            
            $("#piramide").append("*");
        }
    }
})


$(function(){
    setInterval(oneSecondFunction, 500);
    });
    
    function oneSecondFunction() {
        var pxMove = 20
        var rndProb = randomIntFromInterval(1, 10)

    if(rndProb <= 0){//max:9
        var topOleft = randomIntFromInterval(1, 2)

        //miro la meva posicio
        MyArr = $("#showroom").attr('style').split("top: ")[1].slice(0,-3).split(" ")
        var myLeft=MyArr[0].slice(0,-3)
        var mytop = MyArr[2]
        console.log(myLeft+" "+mytop)

        //miro la seva posicio
        //console.log($("#showroomOther").attr('style').split("top: ")[1].slice(0,-3).split(" "))
        var arrOther =  $("#showroomOther").attr('style').split("top:")[1].slice(0,-3).split("px;left:")
        var hisLeft=arrOther[0].slice(0,-3)
        var histop = arrOther[2]
        if(topOleft == 1){
            if(mytop<histop){
                $("#showroomOther").animate({
                    top: "-="+pxMove+"px"
                },"fast");
            }else{
                $("#showroomOther").animate({
                    top: "+="+pxMove+"px"
                },"fast");
            }
            if(myLeft<hisLeft){
                $("#showroomOther").animate({
                    left: "+="+pxMove+"px"
                },"fast");
            }else{
                $("#showroomOther").animate({
                    left: "-="+pxMove+"px"
                },"fast");
            }
        }

        
    }else{
        var rnd = randomIntFromInterval(37, 40)
        if (rnd == 37) {
            $("#showroomOther").animate({
                left: "-="+pxMove+"px"
            },"fast");
        } else if (rnd == 38) {
            $("#showroomOther").animate({
                top: "-="+pxMove+"px"
            },"fast");
        } else if (rnd == 39) {
            $("#showroomOther").animate({
                left: "+="+pxMove+"px"
            },"fast");
        } else if (rnd == 40) {
            $("#showroomOther").animate({
                top: "+="+pxMove+"px"
            },"fast");
        }
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
      
///////////
//DIV on move
///////////
    
    $(window).bind('keydown', function(e){
        if (e.keyCode == 37) {
            $("#showroom").animate({
                left: "-=20px"
            },"fast");
        } else if (e.keyCode == 38) {
            $("#showroom").animate({
                top: "-=20px"
            },"fast");
        } else if (e.keyCode == 39) {
            $("#showroom").animate({
                left: "+=20px"
            },"fast");
        } else if (e.keyCode == 40) {
            $("#showroom").animate({
                top: "+=20px"
            },"fast");
        }
        //console.log($("#showroom").attr('style'))
    });
})
