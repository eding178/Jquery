

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


    
    
})
