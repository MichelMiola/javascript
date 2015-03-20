function montaPaciente(pacienteTr){
	var nome = pacienteTr.getElementsByClassName("info-nome")[0].innerHTML;
	var altura = pacienteTr.getElementsByClassName("info-altura")[0].innerHTML;
	var peso = pacienteTr.getElementsByClassName("info-peso")[0].innerHTML;

	var paciente = {
						"nome" : nome,
						"peso" : peso, 
						"altura": altura,
						pegaIMC: function() {
									return peso / (altura * altura);	
								} 
					};
	return paciente;
}