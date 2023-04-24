var dataInicial = new Date("2022-06-25T17:00:00");
    
    function atualizarContagemProgressiva() {
      var dataAtual = new Date();
      var diferenca = dataAtual.getTime() - dataInicial.getTime();
      
      var umAnoEmMS = 31536000000;
      var umMesEmMS = 2592000000;
      var umDiaEmMS = 86400000;
      var umaHoraEmMS = 3600000;
      var umMinutoEmMS = 60000;
      var umSegundoEmMS = 1000;
      
      var anos = Math.floor(diferenca / umAnoEmMS);
      diferenca = diferenca % umAnoEmMS;
      var meses = Math.floor(diferenca / umMesEmMS);
      diferenca = diferenca % umMesEmMS;
      var dias = Math.floor(diferenca / umDiaEmMS);
      diferenca = diferenca % umDiaEmMS;
      var horas = Math.floor(diferenca / umaHoraEmMS);
      diferenca = diferenca % umaHoraEmMS;
      var minutos = Math.floor(diferenca / umMinutoEmMS);
      diferenca = diferenca % umMinutoEmMS;
      var segundos = Math.floor(diferenca / umSegundoEmMS);
      
      document.getElementById("anos").innerHTML = anos + " anos";
      document.getElementById("meses").innerHTML = meses + " meses";
      document.getElementById("dias").innerHTML = dias + " dias";
      document.getElementById("horas").innerHTML = horas + " horas";
      document.getElementById("minutos").innerHTML = minutos + " minutos";
      document.getElementById("segundos").innerHTML = segundos + " segundos";
    }
    
    setInterval(atualizarContagemProgressiva, 1000);