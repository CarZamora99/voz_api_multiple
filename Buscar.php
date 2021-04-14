<?php include "src/header.html"; ?>
<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Bot Voz</title>
   <!-- Font Awesome -->
   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet"/>
   <!-- Google Fonts -->
   <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
   <!-- MDB -->
   <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css" rel="stylesheet" />
   <link rel="stylesheet" href="style.css">
   <script src="main.js" defer></script>
   </head>
<body style="background-color:black;">

   
<div class="container-img">
      <img class="AI" src="img/frmloop.gif" width="30%" height="30%">
    </div>


   <div class="container">
   <form action="https:/" method="get" target="_blank" id="search-form">
        <div class="form-group">
        <input class="form-control form-control-lg" name="q" type="text" placeholder="Preguntame.." autocomplete="off" autofocus>
<!--         <button type="button"><i class="fas fa-microphone"></i></button> -->      
</div>
</form>
      <p class="info" style="color: white">Comandos de Voz:  "Opción múltiple",  "Ayuda del sitio",  "Salir del sitio", "Búsqueda + Clave"</p>
    </div>
 
 

</body>
</html>
<?php include "src/footer.html"; ?>