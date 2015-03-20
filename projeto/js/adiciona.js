function adiciona(event){
	//debugger;
	// impede comportamento padrão
	event.preventDefault(); 

	var valorNome = document.querySelector("#campo-nome").value;
	var valorPeso = document.querySelector("#campo-peso").value;
	var valorAltura = document.querySelector("#campo-altura").value;

	var adicionaPaciente = "<tr class='paciente'> " +
						"<td class='info-nome'>" + valorNome + "</td>" +
						"<td class='info-peso'>" + valorPeso + "</td>" +
						"<td class='info-altura'>" + valorAltura + "</td>" +
						"<td class='info-imc'></td>" +
					"</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML += adicionaPaciente;

	document.querySelector("#campo-nome").value = "";
	document.querySelector("#campo-peso").value = "";
	document.querySelector("#campo-altura").value = "";

}