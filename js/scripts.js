
var icone = document.getElementById('icone');
var entete = document.getElementById('entete');
var carre1 = document.getElementById('carre1');
var carre2 = document.getElementById('carre2');
var carre3 = document.getElementById('carre3');
var carre4 = document.getElementById('carre4');

var carrehover = document.getElementsByClassName("carre");
var contentToResize = document.getElementsByClassName("contenu");


/////////////////////////////////////////////////////////////////BLOC ICONE

icone.onmouseover = function() {

	var icone = document.getElementById('icone');
	icone.style.borderRight = "solid 2px #29262A";

};

icone.onmouseout = function() {

	var icone = document.getElementById('icone');
	icone.style.borderRight = "initial";

};

icone.onclick = function() {

	cacher();

	var bio = document.getElementById('bio');

	bio.style.display = "block";

};

/////////////////////////////////////////////////////////////////BLOC CARRE1

carre1.onclick = function() {

	cacher();

	var projets = document.getElementById('projets');
	projets.style.display = "block";
};

carre1.onmouseover = function() {
	carre1.style.borderRight = "solid 2px #29262A";
};

carre1.onmouseout = function() {
	carre1.style.borderRight = "initial";
};

/////////////////////////////////////////////////////////////////BLOC CARRE2

carre2.onclick = function() {

	cacher();

	var competences = document.getElementById('competences');
	competences.style.display = "block";
};

carre2.onmouseover = function() {
	carre2.style.borderRight = "solid 2px #29262A";
};

carre2.onmouseout = function() {
	carre2.style.borderRight = "initial";
};

/////////////////////////////////////////////////////////////////BLOC CARRE3

carre3.onclick = function() {

	cacher();

	var formations = document.getElementById('formations');
	formations.style.display = "block";
};

carre3.onmouseover = function() {
	carre3.style.borderRight = "solid 2px #29262A";
};

carre3.onmouseout = function() {
	carre3.style.borderRight = "initial";
};

/////////////////////////////////////////////////////////////////BLOC CARRE4

carre4.onclick = function() {

	cacher();

	var contacter = document.getElementById('contacter');
	contacter.style.display = "block";
};

carre4.onmouseover = function() {
	carre4.style.borderRight = "solid 2px #29262A";
};

carre4.onmouseout = function() {
	carre4.style.borderRight = "initial";
};

/////////////////////////////////////////////////////////////////BLOC TEST

function cacher() {
	var bio = document.getElementById('bio');
	bio.style.display = "none";

	var projets = document.getElementById('projets');
	projets.style.display = "none";

	var competences = document.getElementById('competences');
	competences.style.display = "none";

	var formations = document.getElementById('formations');
	formations.style.display = "none";

	var contacter = document.getElementById('contacter');
	contacter.style.display = "none";
};


function flipIn(object) {
	object.classList.remove("hidden");
	object.classList.add("animated","flipInX");
}

function flipOut(object) {
	object.classList.add("animated","flipInX");
	object.classList.add("hidden");
}
