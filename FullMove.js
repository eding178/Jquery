$("document").ready(function() {

    $("#reset-btn").click(function() {
        setCookie("twins", 0, 1000)
        setCookie("tloses", 0, 1000)
        $("#loses").text(0)
        $("#wins").text(0)
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
        var ProbTrackedMove = 7 //0 to 10 probabilidad de que cada step no sea random
        var signe1 = "+="
        var signe2 = "-="
        var fantasmaDebil = $("#star").attr("style").split("display:")[1] == " none;"
        arrStar = $("#star").attr("style").split("top:")[1].split("left:");
        var topStar = arrStar[0].split("px")[0]
        var leftStar = arrStar[1].split("px")[0]

        if (fantasmaDebil) {
            ProbTrackedMove += 1
            signe1 = "-="
            signe2 = "+="
            if (randomIntFromInterval(1, 100) < 5) {
                topStar = randomIntFromInterval(10, 450)
                leftStar = randomIntFromInterval(10, 450)
                $("#star").animate({
                    top: topStar + "px",
                    left: leftStar + "px"
                })
                $("#star").show()
            }
        } else { $(".fantasma").attr("src", "media/fantasma.gif") }

        //miro la meva posicio
        MyArr = $("#showroom").attr('style').split("top:")[1].split("left:")
        var myTop = MyArr[0].split("px")[0]
        var myLeft = MyArr[1].split("px")[0]

        //miro la seva posicio
        jQuery('.showroomOther').each(function() {
            var currentElement = $(this);

            var currentElementAttr = currentElement.attr('style').split("top:")[1].split("left:")
            var hisTop = currentElementAttr[0].split("px")[0]
            var hisLeft = currentElementAttr[1].split("px")[0]
            console.log(myTop + " " + myLeft)
            console.log(hisTop + " " + hisLeft)

            var rndProb = randomIntFromInterval(1, 10)
            if (rndProb <= ProbTrackedMove) {
                if (Math.abs(myLeft - hisLeft) < Math.abs(myTop - hisTop)) {
                    if (Number(myTop) < Number(hisTop)) {
                        currentElement.animate({
                            top: signe2 + pxMove + "px"
                        }, "fast");
                    } else if (Number(myTop) > Number(hisTop)) {
                        currentElement.animate({
                            top: signe1 + pxMove + "px"
                        }, "fast");
                    }
                } else if (Math.abs(myLeft - hisLeft) > Math.abs(myTop - hisTop)) {
                    if (Number(myLeft) < Number(hisLeft)) {
                        currentElement.animate({
                            left: signe2 + pxMove + "px"
                        }, "fast");
                    } else if (Number(myLeft) > Number(hisLeft)) {
                        currentElement.animate({
                            left: signe1 + pxMove + "px"
                        }, "fast");
                    }
                }
            }
            //Random move
            else {
                var rnd = randomIntFromInterval(37, 40)
                if (rnd == 37) {
                    currentElement.animate({
                        left: signe2 + pxMove + "px"
                    }, "fast");
                } else if (rnd == 38) {
                    currentElement.animate({
                        top: signe2 + pxMove + "px"
                    }, "fast");
                } else if (rnd == 39) {
                    currentElement.animate({
                        left: signe1 + pxMove + "px"
                    }, "fast");
                } else if (rnd == 40) {
                    currentElement.animate({
                        top: signe1 + pxMove + "px"
                    }, "fast");
                }
            }

            // IF PICk Star

            if (leftStar == null) {
                leftStar = 400;
                topStar = 400;
            }
            if (Math.abs(Number(myLeft) - leftStar) <= 25 && Math.abs(Number(myTop) - topStar) <= 20) {
                $(".fantasma").attr("src", "media/fantasma_debil.gif")
                $("#star").hide()
            }

            // IF DIE OR WIN
            if (Math.abs(Number(myLeft) - Number(hisLeft)) <= 25 && Math.abs(Number(myTop) - Number(hisTop)) <= 20) {

                if (fantasmaDebil) {
                    //win
                    totalWin = Number(getCookie("twins")) + 1
                    setCookie("twins", totalWin, 1000)
                    $("#wins").text(totalWin)

                    $("#game").append("<div class=\"showroomOther\" style=\"position:absolute;border-radius:30%;top:" + randomIntFromInterval(50, 600) + "px;left:" + randomIntFromInterval(50, 700) + "px;\"><img class=\"fantasma\" style=\"height:50px;width:50px;\" src=\"media/fantasma.gif\"</div>")
                } else {
                    //lose
                    $("#showroom").animate({
                        top: "400px",
                        left: "20px"
                    }, "fast");
                    totalLose = Number(getCookie("tloses")) + 1
                    setCookie("tloses", totalLose, 1000)
                    $("#loses").text(totalLose)

                }
                //rate
                rate = Number(getCookie("twins")) / Number(getCookie("tloses"))
                $("#rate").text(rate)

                currentElement.animate({
                    top: "400px",
                    left: "400px"
                }, "fast");


                $(".fantasma").attr("src", "media/fantasma.gif")
            }
        })
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