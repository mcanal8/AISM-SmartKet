var index = 0;
var llista = []
function canviarPagina(currentPage, newPage){
	var x = document.getElementById(currentPage);
	var y = document.getElementById(newPage);
    if (x.style.display === "none"){
		x.style.display = "block";
		y.style.display = "none";
    } else {
		x.style.display = "none";
		y.style.display = "block";
    }
}

$("#login").click(function(){
	
	Username =  $("#usuari").val();
	password =  $("#contrasenya").val();

	// Login provisonal, solo accepta dos cuentas.
	if((Username == "estudiant" && password == "estudiant")||(Username == "vegano" && password == "vegano")){
		canviarPagina("login_i_register","pagina_principal");
		$('.tap-target').tapTarget('open');
	}else{
		if(Username == "" || password == ""){
			alert("ERROR. Falten camps per omplir!");
		}else{
			alert("ERROR. Usuari no registrat");
		}
	}
});


$("#novaLlista").click(function(){
	canviarPagina("pagina_principal","pagina_llista");
});

$("#mainMenu").click(function(){
	canviarPagina("pagina_principal","pagina_menus");
});

function addItem(){
	var li = document.createElement("LI");
	// var check = document.createElement("INPUT");
	// var label = document.createElement("LABEL");
	li.setAttribute('class','collection-item');  
	// check.setAttribute('type', 'checkbox');
	// check.setAttribute('class', 'filled-in right');
	// check.setAttribute('id', 'filled-in-box');
	// label.setAttribute('for', 'filled-in-box');
	var input = document.getElementById("add");
	llista.push(input.value);
	li.innerHTML = input.value;
	input.value = "";

	document.getElementById("elements").appendChild(li);
	// document.getElementById("elements").appendChild(check);
	// document.getElementById("elements").appendChild(label);
}


function storeList(){

	llista.unshift(document.forms['nomLlista'].elements['nomLlista'].value);

	//console.log(llistaProv);
	localStorage.setItem(index, JSON.stringify(llista));
	index++;
	llista = [];

	document.getElementById("nomLlista").reset();
	$("#elements").empty();

	
}

function actualitzaLlistes(){

	$("#Llistes").html("");

	for(i = 0; i < index; i++){
	var arrayLlistes = JSON.parse(localStorage.getItem(i));
	

	console.log(arrayLlistes[0]);


	var textHtml = "<button class = 'waves-effect waves-light btn' id =" + i + ">" + arrayLlistes[0] + "</button>";
	//var textHtml = arrayLlistes[0];

	$("#Llistes").append(textHtml);
	}

}

$("#crearLlista").click(function(){
	storeList();
	canviarPagina("pagina_llista","pagina_principal");
	actualitzaLlistes();
});

$("#eliminarLlista").click(function(){
	confirmacio();
});


function confirmacio() {
    var txt;
    var r = confirm("Estàs segur de que vols eliminar completament aquesta llista?");
    if (r == true) {
        txt = "Has apretat Sí";
    } else {
        txt = "Has apretat No";
    }
    //document.getElementById("demo").innerHTML = txt;
}



$(".button-collapse").sideNav();
