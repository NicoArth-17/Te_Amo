<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="imagens/coracaoNJ.ico"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Te Amo!</title>
  </head>
  <body onload="iniciarMusica()">
    <main>
      <h1>Para registrar um pouco do tempo da nossa história...</h1>

      <div>
        <div id="anos" class="contador"></div>
        <div id="meses" class="contador"></div>
        <div id="dias" class="contador"></div>
        <div id="horas" class="contador"></div>
        <div id="minutos" class="contador"></div>
        <div id="segundos" class="contador"></div>
      </div>
    </main>

    <audio autoplay onload="iniciarMusica()">
      <source src="musica.mpeg" type="audio/mpeg" />
    </audio>

    <script>
      var dataInicial = new Date("2022-06-25T00:00:00");

      function atualizarContagemProgressiva() {
        //vai pegar a quantidade de dias passados
        const d1 = "2022-06-25";
        const d2 = new Date();
        const diffInMs = new Date(d2) - new Date(d1);
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        //Transforma em Meses, Horas, Minutos e segundos
        const dataAnos = diffInDays / 365;
        const dataMes = diffInDays / 30.417;
        const dataHoras = diffInDays * 24;
        const dataMinutos = diffInDays * 1440;
        const dataSegundos = diffInDays * 86400;

        //calcula o tempo em dias
        const diferencaDiasI = dataMes - Math.trunc(dataMes);
        const diferencaDias = diferencaDiasI * 30.417;
        //calcula o tempo em horas
        const diferencaHorasI = diferencaDias - Math.trunc(diferencaDias);
        const diferencaHoras = diferencaHorasI * 24;
        //calcula o tempo em minutos
        const diferencaMinutosI = diferencaHoras - Math.trunc(diferencaHoras);
        const diferencaMinutos = diferencaMinutosI * 60;
        //calcula o tempo em segundos
        const diferencaSegundosI =
          diferencaMinutos - Math.trunc(diferencaMinutos);
        const diferencaSegundos = diferencaSegundosI * 60;

        //transforma em numeros inteiros
        const anosPassados = Math.trunc(dataAnos);
        const mesesPassados = Math.trunc(dataMes);
        const diasPassados = Math.trunc(diferencaDias);
        const horasPassadas = Math.trunc(diferencaHoras);
        const minutosPassados = Math.trunc(diferencaMinutos);
        const segundosPassados = Math.trunc(diferencaSegundos);

        document.getElementById("anos").innerHTML = anosPassados + " anos";
        document.getElementById("meses").innerHTML = mesesPassados + " meses";
        document.getElementById("dias").innerHTML = diasPassados + " dias";
        document.getElementById("horas").innerHTML = horasPassadas + " horas";
        document.getElementById("minutos").innerHTML =
          minutosPassados + " minutos";
        document.getElementById("segundos").innerHTML =
          segundosPassados + " segundos";
      }
      setInterval(atualizarContagemProgressiva, 1000);

      function iniciarMusica() {
        var musica = document.getElementsByTagName("audio")[0];
        musica.play();
      }
    </script>
  </body>
</html>