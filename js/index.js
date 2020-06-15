$("#nestudios").change(
    function()
    {
        
        if($("#nestudios option:selected").text() == "Bachillerato")
            $("#plantel").html("<option>Bachillerato 1</option><option>Bachillerato 2</option><option>Bachillerato 3</option><option>Bachllerato 4</option><option>Bachillerato 16</option>");
        else
            if($("#nestudios option:selected").text() == "Licenciatura")
                $("#plantel").html("<option>Facultad de Telemática</option><option>FIME</option><option>Facultad de Administración y C.</option><option>Facultad de Derecho</option><option>Facultad de Psicología</option>");
    });

    