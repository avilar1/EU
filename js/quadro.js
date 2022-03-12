

const tela = document.querySelector('#quadro');

    const pincel = tela.getContext('2d');

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var desenha = false;
    var corAtual = 'blue';
    var xVermelho = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yQuadrados = 0;
    var tamanhoQuadrados = 50;


    function desenhaQuadrado(x, y, tamanho, cor) {

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();
    }

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();

    }
    // var xVermelho = 0;
    // var xVerde  = 50;
    // var xAzul = 100;
    // var yQuadrados = 0;
    // var tamanhoQuadrados = 50;

    function desenhaPaletaDeCores() {

        desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
        desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
        desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

    }

    function lidaComMovimentoDoMouse(evento) {

        var xC = evento.pageX - tela.offsetLeft;
        var yC = evento.pageY - tela.offsetTop;
        //console.log(xC, yC)
        
        if(desenha) {
            if ((xC <= ((xAzul + tamanhoQuadrados)+2.5)) && (yC <= (tamanhoQuadrados + 2.5))){
            }   
            else{desenhaCirculo(xC, yC, 5, corAtual);}
        }

    }

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }

     tela.onclick = function dispara (evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
       

            if((x < xVerde) && (y < tamanhoQuadrados)){ 
                corAtual = 'red';
            }else if((x > xVerde) && (x < xAzul) && (y < tamanhoQuadrados)){
                corAtual = 'green';
            }else if((x > xAzul) && (x < (xAzul + tamanhoQuadrados)) && (y < tamanhoQuadrados)){
                corAtual = 'blue';
            }
      
    }
    
    //var xC;
    //var yC;

    desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores


    tela.onmousemove = lidaComMovimentoDoMouse;

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;
