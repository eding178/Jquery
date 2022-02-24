

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
                $("#loader").show();
            },
            success: function (data, textStatus) { 
                $("#empleado").html(
                "<ul>"+
                    "<li>ID: "+data.empleado.Id+"</li>"+
                    "<li>NOMBRE: "+data.empleado.Nombre+"</li>"+
                    "<li>EDAD: "+data.empleado.Edad+"</li>"+
                    "<li>ANTIGUEDAD: "+data.empleado.Antiguedad+"</li>"+
                    "<li>CATEGORIA: "+data.empleado.Categoria+"</li>"+
                "</ul>"+
                    "Id: " + data.empleado.Id+" \n Nombre: "+data.empleado.Nombre+"\nEdad "+data.empleado.Edad+"\nAntiguedad: "+data.empleado.Antiguedad+"\nCategoria: "+data.empleado.Categoria)
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
