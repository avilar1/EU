
	function sorteio(){
		return Math.round(Math.random() * 10);
	}

	function sorteiaN (quant){
		var Nsegredos = [];
		var NS = 1;

		while (NS <= quant){
				var NA = sorteio();
				var aco = false;
				
				if (NA !== 0){
					for (var p = 0; p < Nsegredos.length; p++){
						if (Nsegredos[p] == NA){
							aco = true;
							break;
						}
					}
						if(aco == false){
							Nsegredos.push(NA);
							NS++;
						}
					
				}
		}
		return Nsegredos;
	}
		var segredos = sorteiaN(3);
		//segredos.push(sorteia())
		console.log(segredos);

	function mostra(alfa)
	{
		alert(alfa);
	}
	
	var form = document.getElementById('formulario');
	var chute = document.getElementById('texto');
	
	form.addEventListener('submit', function(e) {	
			var achou = false;
			//var n = Math.round(Math.random() * 10);

			for (var posicao = 0; posicao < segredos.length; posicao ++){

				//console.log(n);
				
				if (chute.value == segredos[posicao])
					{
						mostra("acertou a posição " + (posicao+1));
						achou = true;
						break;
					}
				if (achou == false);
					{
							if (chute.value < segredos[posicao])
							{
							mostra ("não era a opção " + (posicao+1) + " pois ela é maior")
							
							}
							else
							{
							mostra ("não era a opção " + (posicao+1) + " pois ela é menor")
							}					
					}		
		}
	chute.value = "";
	chute.focus();
	e.preventDefault();
	})

	//chute.focus();
