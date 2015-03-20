
window.onload = function () {
	var botao = document.getElementById("calcula-imcs");
	botao.addEventListener("click", calculaTodosImcs);
	var botaoAdiciona = document.querySelector("#adicionar-paciente");
	botaoAdiciona.addEventListener("click", adiciona);
}


function calculaTodosImcs(){
	var pacientesTr = document.getElementsByClassName("paciente");

	percorreArray(pacientesTr, function(pacienteTr){		
		var paciente = montaPaciente(pacienteTr);
		pacienteTr.getElementsByClassName("info-imc")[0].innerHTML = paciente.pegaIMC();	
	});	
}
