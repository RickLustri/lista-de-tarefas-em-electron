
// Função para atualizar os segundos
function atualizacaoClock() {
    var now = new Date();
    var horas = now.getHours();
    var minutos = now.getMinutes();
    var segundos = now.getSeconds();

    // Adicionando zero à esquerda se necessário
    horas = horas < 10? '0' + horas : horas;
    minutos = minutos < 10? '0' + minutos : minutos;
    segundos = segundos < 10? '0' + segundos : segundos;

    // Atualizando o elemento HTML
    var display = document.getElementById('hora');
    display.innerHTML = `${horas}:${minutos}:${segundos}`;
  }
  // Chama a função updateClock a cada segundo
  setInterval(atualizacaoClock, 1000);
