$("document").ready(function(){

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
        alert($("p.pAlert").text)
    })

    $("#more").click(function(){
        $("p.pAlert").append(" more text here ")
    })

    /*
    try {
    $(".btn-get").click(function(){
        $.get("http://localhost:57000/Empleados/Details/9", function (data, status) {
                alert("Data: " + data + "\nStatus: " + status)
            });
      });
    } catch (error) {
    alert("something was wrong")
    }
    */

    
    $(".btn-get").click(function() { 
        $.ajax({ 
            url: "http://localhost:57000/Empleados/DetailsAPI/"+$("#in-text-get").val(),
            type: 'GET',
            dataType: "jsonp",
            //jsonp: 'myCallBackMethod',
            jsonpCallback: 'Method',
            cors: true ,
            contentType: false,//'application/json',
            secure: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Access-Control-Allow-Origin': '*',
                "accept": "application/json",
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
            },
            success: function (data, textStatus) { 
                    alert(" Object: id: " + data.empleado.Id+" name: "+data.empleado.Nombre+" Edad "+data.empleado.Edad+" Antiguedad: "+data.empleado.Antiguedad+" Categoria: "+data.empleado.Categoria);
            },
            error(xhr,status,error){
                alert("something went wrong.\n\nError: "+error+"\nStatus: "+status+"\nXHR: "+xhr);
            }
        });
    });
    Method = function(data) {
        successResponse(data);
    }
       
       successResponse = function(data) {
       //functionality goes here;
       }
})
