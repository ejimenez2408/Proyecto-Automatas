function validar(){
	var nombre, codigo, fecha, direccion, fijo, celular, correo, tabla, filaactual, nuevafila, celda1, celda2, celda3, celda4, celda5, celda6, celda7;

	const regex = {
		nameRegex : /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
		codeRegex : /^[1-9]{8}$/,
		dateRegex : /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
		addresRegex : /[,#-\/\s\!\@\$.....]/gi,
		phoneRegex : /^\d{7,7}$/,
		mobileRegex : /^[3][0-9]{9,9}$/,
		emailRegex : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	}

	nombre = document.getElementById("nombre").value;
	if(regex.nameRegex.test(nombre) == true) {
		alert("Nombre Valido")
	}else{
		alert("Nombre Invalido")
		nombre = ""
	}
	codigo = document.getElementById("codigo").value;
	if(regex.codeRegex.test(codigo) == true){
		alert("Codigo Valido")
	}else{
		alert("Codigo Invalido, No Debe Empezar en Cero Y Debe Tener Solamente 8 Digitos")
		codigo = ''
	}
	fecha = document.getElementById("fecha").value;
	if(regex.dateRegex.test(fecha) == true) {
		alert("Fecha Valida")
	}else{
		alert("Fecha Invalida, Formato dd/mm/aaaa")
		fecha = ""
	}
	direccion = document.getElementById("direccion").value;
	fijo = document.getElementById("fijo").value;
	if (regex.phoneRegex.test(fijo) == true){
		alert("Numero Fijo Valido")
	}else{
		alert("Numero Fijo Invalido, Solo Debe Contener 7 Digitos")
		fijo = ""
	}
	celular = document.getElementById("celular").value;
	if(regex.mobileRegex.test(celular) == true) {
		alert("Numero Celular Valido")
	}else{
		alert("Numero Celular Invalido, Debe Empezar Por 3 y Contener 10 Digitos")
		celular = ""
	}
	correo = document.getElementById("correo").value;
	if(regex.emailRegex.test(correo) == true) {
		alert("Correo Valido")
	}else{
		alert("Correo Invalido")
		correo = ""
	}
	if(nombre == "" || codigo == "" || fecha == "" || direccion == "" || fijo == "" || celular == "" || correo == ""){
		alert("Uno O Mas Campos Estan En Blanco O Tiene Datos Invalidos")
	}else{
		alert("Datos Validos")
		tabla = document.getElementById("tb");
		filaactual = document.getElementById("tb").rows.length;
		nuevafila = tabla.insertRow(filaactual);
		celda1 = nuevafila.insertCell(0);
		celda2 = nuevafila.insertCell(1);
		celda3 = nuevafila.insertCell(2);
		celda4 = nuevafila.insertCell(3);
		celda5 = nuevafila.insertCell(4);
		celda6 = nuevafila.insertCell(5);
		celda7 = nuevafila.insertCell(6);

		celda1.innerHTML = nombre;
		celda2.innerHTML = codigo;
		celda3.innerHTML = fecha;
		celda4.innerHTML = direccion;
		celda5.innerHTML = fijo;
		celda6.innerHTML = celular;
		celda7.innerHTML = correo;

		document.getElementById("nombre").value = "";
		document.getElementById("codigo").value = "";
		document.getElementById("fecha").value="";
		document.getElementById("direccion").value = "";
		document.getElementById("fijo").value = "";
		document.getElementById("celular").value = "";
		document.getElementById("correo").value = "";
	}
}
function exportar_excel() {
	$('#tb').tableExport({type:'csv'});
}
function exportar_txt() {
	$('#tb').tableExport({type:'txt'});
}
function exportar_json() {
	$('#tb').tableExport({type:'json'});
}
function exportar_xml() {
	$('#tb').tableExport({type:'xml'});
}


