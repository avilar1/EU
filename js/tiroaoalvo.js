

const tela = document.querySelector('#tiroaoalvo');

    const pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var raio = 10;
    var xA;
    var yA;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }
    function limpaTela() {
        pincel.clearRect(0, 0, 600, 400);
    }

    function desenhaA(x, y) {

        desenhaCirculo(x,y, raio + 20, 'red'); // maior círculo
        desenhaCirculo(x,y, raio + 10, 'white');
        desenhaCirculo(x,y, raio, 'red'); // menor circulo
    }

    function sorteP(maximo){

        return Math.floor(Math.random() * maximo);
    }

    function atualizaT(){
        limpaTela();
        xA = sorteP(600);
        yA = sorteP(400);
        desenhaA(xA, yA);
    }

setInterval(atualizaT, 1000);

tela.onclick = function dispara(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        console.log (x + ',' + y)
        console.log (xA + ',' + yA)
       if (x < (xA+raio)
            && x > (xA-raio)
                && y < (yA+raio)
                    && y > (yA-raio))
       {
            alert("acertou");
       }
        /*else {
            alert("errou");
       }*/
        
    }