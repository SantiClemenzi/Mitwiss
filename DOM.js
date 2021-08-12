//Menu responsive 
function hambur() {
	var menu = document.getElementById('menu_flotante');
	if (menu.style.display == 'none') {
		menu.style.display = 'flex';
	} else {
		menu.style.display = 'none';
	}
}
//Titulo invisible en los turnos
function show0(titulo) {
	var text1 = document.getElementById(titulo);
	text1.style.display = 'block';
}
function hidden0(titulo) {
	var text2 = document.getElementById(titulo);
	text2.style.display = 'none';
}