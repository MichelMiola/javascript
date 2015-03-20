function percorreArray(arrayTr, comportamento){

	for (var i = 0; i < arrayTr.length; i++) {
		comportamento(arrayTr[i]);
	}

}