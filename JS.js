

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
        if(j % 2 == 0)
        $("#piramide").append("<br/>");
        for(var k = 0; k < (rows-j)-2;k++){
            $("#piramide").append("-")
        }
        for (var i = 0; i <= j; i++) {
            if(j % 2 == 0)
            $("#piramide").append("*");
        }
    }
})
////////////////
//Fantasma Path tracker
///////////////

$(function(){
    setInterval(oneSecondFunction, 1000);
    });
    
    function oneSecondFunction() {
        console.log("---------Begin move----------")
        var pxMove = 30
        var rndProb = randomIntFromInterval(1, 10)

        //miro la meva posicio
        MyArr = $("#showroom").attr('style').split("top:")[1].split("left:")
        var mytop=MyArr[0].split("px")[0]
        var myLeft = MyArr[1].split("px")[0]
        //console.log("yo "+myLeft+" "+mytop)

        //miro la seva posicio
        var arrOther =   $("#showroomOther").attr('style').split("top:")[1].split("left:")
        var histop = arrOther[0].split("px")[0]
        var hisLeft = arrOther[1].split("px")[0]

        console.log("ell "+hisLeft+" "+histop)
        console.log("yo "+myLeft+" "+mytop)


    if(rndProb <= 10){//0 to 10 "noob to hard"
        console.log("NOT rnd move")

        if(Math.abs(myLeft - hisLeft) < Math.abs(mytop - histop)){
            if(Number(mytop) < Number(histop)){
                console.log("up")
                $("#showroomOther").animate({
                    top: "-=" + pxMove + "px"
                },"fast");
            }else if (Number(mytop) > Number(histop)){
                console.log("down")
                $("#showroomOther").animate({
                    top: "+=" + pxMove + "px"
                },"fast");
            }
        }else if(Math.abs(myLeft - hisLeft) > Math.abs(mytop - histop)){
            if(Number(myLeft) < Number(hisLeft)){
                console.log("left")
                $("#showroomOther").animate({
                    left: "-=" + pxMove + "px"
                },"fast");
            }else if(Number(myLeft) > Number(hisLeft)){
                console.log("right")
                $("#showroomOther").animate({
                    left: "+=" + pxMove + "px"
                },"fast");
            }
        }   
    }
    else{
        console.log("rnd move")
        console.log("ell "+hisLeft+" "+histop)
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
