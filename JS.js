$("document").ready(function() {

    $("#loader").hide()

    $("table").css({ "background-color": "#BBBBBB" })

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

})