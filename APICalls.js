var urlBase = "http://localhost:57000/Empleados/";
$("document").ready(function() {
    ///////////
    //GET BY ID
    ///////////
    $(".btn-get").click(function() {
        $("#loader").fadeIn();
        $.ajax({
            url: urlBase + "DetailsAPI/" + $("#in-text-get").val(),
            type: 'GET',
            dataType: "jsonp",
            jsonpCallback: 'Method',
            beforeSend: function(xhr) {
                $("#loader").fadeIn();
            },
            success: function(data, textStatus) {
                $("#loader").fadeOut();

                $("#empleado").html(
                    "<ul>" +
                    "<li>ID: " + data.empleado.Id + "</li>" +
                    "<li>NOMBRE: " + data.empleado.Nombre + "</li>" +
                    "<li>EDAD: " + data.empleado.Edad + "</li>" +
                    "<li>ANTIGUEDAD: " + data.empleado.Antiguedad + "</li>" +
                    "<li>CATEGORIA: " + data.empleado.Categoria + "</li>" +
                    "</ul>"
                )
            },
            error(xhr, status, error) {
                $("#loader").fadeOut();
                alert("something went wrong.\n\nError: " + error + "\nStatus: " + status + "\nXHR: " + xhr);
            }
        });
    });

    ///////////
    //GET ALL
    ///////////
    $(".btn-get-all").click(function() {
        getAllMethod()
    });

    ///////////
    //UPDATE BY ID
    ///////////
    $(".btn-update").click(function() {
        $("#loader").fadeIn()
        $.ajax({
            url: urlBase + "EditAPI/" + $("#Id-edit").val(),
            type: 'GET',
            data: {
                Id: $("#Id-edit").val(),
                Nombre: $("#Nombre-edit").val(),
                Edad: $("#Edad-edit").val(),
                Antiguedad: $("#Antiguedad-edit").val(),
                Categoria: $("#Categoria-edit").val()
            },
            dataType: "jsonp",
            jsonpCallback: 'Method',
            cors: true,
            contentType: false,
            secure: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Access-Control-Allow-Origin': '*',
                "accept": "application/json",
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(""));
            },
            success: function(data, textStatus) {
                $("#loader").fadeOut();
            },
            error(xhr, status, error) {
                //alert("something went wrong.\n\nError: "+error+"\nStatus: "+status+"\nXHR: "+xhr);
                $("#loader").fadeOut();

            }
        });
    });

    //////////////
    //DELETE BY ID
    //////////////
    $(document).on('click', '.btn-del', function(event) {
        $("#loader").fadeIn();
        var Id = $(this).attr('id');
        $.ajax({
            url: urlBase + "DeleteAPI/" + Id,
            type: 'GET',
            dataType: "jsonp",
            jsonpCallback: 'Method',
            success: function(data, textStatus) {
                getAllMethod();
                $("#loader").fadeOut();
            },
            error(xhr, status, error) {
                $("#loader").fadeOut();
                alert("something went wrong.\n\nError: " + error + "\nStatus: " + status + "\nXHR: " + xhr);
            }
        });
    });


    function getAllMethod() {
        $("#loader").fadeIn();
        $.ajax({
            url: urlBase + "allAPI/",
            type: 'GET',
            dataType: "jsonp",
            jsonpCallback: 'Method',
            success: function(data, textStatus) {
                $("#loader").fadeOut();
                $("#empleado").html("")
                data.empleado.forEach(function(valor, indice, array) {
                    $("#empleado").append(
                        "<ul>" +
                        "<li><button id=\"" + valor.Id + "\"> Borrar Empleado " + valor.Id + "</button></li>" +
                        "<li>ID: " + valor.Id + "</li>" +
                        "<li>NOMBRE: " + valor.Nombre + "</li>" +
                        "<li>EDAD: " + valor.Edad + "</li>" +
                        "<li>ANTIGUEDAD: " + valor.Antiguedad + "</li>" +
                        "<li>CATEGORIA: " + valor.Categoria + "</li>" +
                        "</ul>"
                    )
                })
                $("ul li button").addClass("btn-del")
            },
            error(xhr, status, error) {
                $("#loader").fadeOut();
                alert("¡Vaya! Algo fue mal :(  \n\nError: " + error + "\nStatus: " + status + "\nXHR: " + xhr);
            }
        });

    }

    function EmpleadoToJSON(Id, Nombre, Edad, Antiguedad, Categoria) {
        return "{\"Empleado\": {\"Id\": \"" + Id + "\",\"Nombre\": \"" + Nombre + "\",\"Edad\": \"" + Edad + "\",\"Antiguedad\": \"" + Antiguedad + "\",\"Categoria\": \"" + Categoria + "\"}}";
    }

    //CALLBACK
    Method = function(data) {
        successResponse(data);
    }
    successResponse = function(data) {
        //functionality goes here;
    }
})