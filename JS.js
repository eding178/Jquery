$("document").ready(function() {

    $("#loader").hide()

    $("table").css({ "background-color": "red" })

    $("#btn-hide").click(function() { $("table").hide() })
    $("#btn-show").click(function() { $("table").show() })

    $("p.a").mouseenter(function() {
        $("p.a").slideUp()
    })

    $("p.a").mouseleave(function() {
        $("p.a").slideDown()
    })
    $("p.pAlert").click(function() {
        alert($("p.pAlert").val())
    })

    $("#more").click(function() {
        $("p.pAlert").append(" more text here ")
    })

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    $("#time-now").append(hoy.toDateString())

    ///////////
    //problema logic piramide d'*
    ///////////
    $("#btn-piramide").click(function() {
            var rows = $("#piramide-input").val()
            for (var j = 0; j < rows; j++) {
                if (j % 2 == 0)
                    $("#piramide").append("<br/>");
                for (var k = 0; k < (rows - j) - 2; k++) {
                    $("#piramide").append("-")
                }
                for (var i = 0; i <= j; i++) {
                    if (j % 2 == 0)
                        $("#piramide").append("*");
                }
            }
        })
        ////////////////
        //Fantasma Path tracker
        ///////////////

    $(function() {
        setInterval(oneSecondFunction, 280);
    });

    function oneSecondFunction() {
        console.log("---------Begin move----------")

        var pxMove = 15 //px per step
        var ProbTrackedMove = 10 //0 to 10 probabilidad de que cada step no sea random
        var signe1 = "+="
        var signe2 = "-="
        var fantasmaDebil = $("#star").attr("style").split("display:")[1] == " none;"
        var miliSecFD = 5000

        if (fantasmaDebil) {
            signe1 = "-="
            signe2 = "+="
            if (randomIntFromInterval(1, 100) < 5) {
                $("#star").show()
            }
        } else { $("#fantasma").attr("src", "media/fantasma.gif") }

        //miro la meva posicio
        MyArr = $("#showroom").attr('style').split("top:")[1].split("left:")
        var myTop = MyArr[0].split("px")[0]
        var myLeft = MyArr[1].split("px")[0]

        //miro la seva posicio
        var arrOther = $("#showroomOther").attr('style').split("top:")[1].split("left:")
        var hisTop = arrOther[0].split("px")[0]
        var hisLeft = arrOther[1].split("px")[0]
        console.log(myTop + " " + myLeft)
        console.log(hisTop + " " + hisLeft)

        var rndProb = randomIntFromInterval(1, 10)
        if (rndProb <= ProbTrackedMove) {
            if (Math.abs(myLeft - hisLeft) < Math.abs(myTop - hisTop)) {
                if (Number(myTop) < Number(hisTop)) {
                    $("#showroomOther").animate({
                        top: signe2 + pxMove + "px"
                    }, "fast");
                } else if (Number(myTop) > Number(hisTop)) {
                    $("#showroomOther").animate({
                        top: signe1 + pxMove + "px"
                    }, "fast");
                }
            } else if (Math.abs(myLeft - hisLeft) > Math.abs(myTop - hisTop)) {
                if (Number(myLeft) < Number(hisLeft)) {
                    $("#showroomOther").animate({
                        left: signe2 + pxMove + "px"
                    }, "fast");
                } else if (Number(myLeft) > Number(hisLeft)) {
                    $("#showroomOther").animate({
                        left: signe1 + pxMove + "px"
                    }, "fast");
                }
            }
        }
        //Random move
        else {
            var rnd = randomIntFromInterval(37, 40)
            if (rnd == 37) {
                $("#showroomOther").animate({
                    left: signe2 + pxMove + "px"
                }, "fast");
            } else if (rnd == 38) {
                $("#showroomOther").animate({
                    top: signe2 + pxMove + "px"
                }, "fast");
            } else if (rnd == 39) {
                $("#showroomOther").animate({
                    left: signe1 + pxMove + "px"
                }, "fast");
            } else if (rnd == 40) {
                $("#showroomOther").animate({
                    top: signe1 + pxMove + "px"
                }, "fast");
            }
        }

        // IF PICk Star
        if (Math.abs(Number(myLeft) - 400) <= 25 && Math.abs(Number(myTop) - 400) <= 20) {
            $("#fantasma").attr("src", "media/fantasma_debil.gif")
            $("#star").hide()

        }

        // IF DIE
        if (Math.abs(Number(myLeft) - Number(hisLeft)) <= 25 && Math.abs(Number(myTop) - Number(hisTop)) <= 20) {
            console.log("die")
            $("#showroomOther").animate({
                top: "400px",
                left: "400px"
            }, "fast");
            $("#showroom").animate({
                top: "400px",
                left: "20px"
            }, "fast");
            $("#star").show()
            $("#fantasma").attr("src", "media/fantasma.gif")
            var countFD = 200
        }
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    ///////////
    //DIV on move
    ///////////

    $(window).bind('keydown', function(e) {
        if (e.keyCode == 37) {
            $("#showroom").animate({
                left: "-=20px"
            }, "fast");
        } else if (e.keyCode == 38) {
            $("#showroom").animate({
                top: "-=20px"
            }, "fast");
        } else if (e.keyCode == 39) {
            $("#showroom").animate({
                left: "+=20px"
            }, "fast");
        } else if (e.keyCode == 40) {
            $("#showroom").animate({
                top: "+=20px"
            }, "fast");
        }
    });
})