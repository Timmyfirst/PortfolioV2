
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
	
	var entete = document.getElementById('entete');
	entete.style.display = "block";
	var icone = document.getElementById('icone');
	icone.style.backgroundColor = "#7F7F7F";

};

icone.onmouseout = function() {
	
	var element = document.getElementById('entete');
	element.style.display = "none";
	var icone = document.getElementById('icone');
	icone.style.backgroundColor = "#111";

};

icone.onclick = function() {
	
	cacher();
	

	var bio = document.getElementById('bio');

	bio.style.display = "block";
	
};

/////////////////////////////////////////////////////////////////BLOC ENTETE

entete.onmouseover = function() {
	
	var element = document.getElementById('entete');
	element.style.display = "block";

};

entete.onmouseout = function() {
	
	var element = document.getElementById('entete');
	element.style.display = "none";

};

/////////////////////////////////////////////////////////////////BLOC CARRE1

carre1.onclick = function() {

	cacher();

	var projets = document.getElementById('projets');
	projets.style.display = "block";
};

carre1.onmouseover = function() {
	carre1.style.backgroundColor = "#7F7F7F";
}

carre1.onmouseout = function() {
	carre1.style.backgroundColor = "#111";
}

/////////////////////////////////////////////////////////////////BLOC CARRE2

carre2.onclick = function() {

	cacher();

	var competences = document.getElementById('competences');
	competences.style.display = "block";
};

carre2.onmouseover = function() {
	carre2.style.backgroundColor = "#7F7F7F";
}

carre2.onmouseout = function() {
	carre2.style.backgroundColor = "#111";
}

/////////////////////////////////////////////////////////////////BLOC CARRE3

carre3.onclick = function() {

	cacher();

	var formations = document.getElementById('formations');
	formations.style.display = "block";
};

carre3.onmouseover = function() {
	carre3.style.backgroundColor = "#7F7F7F";
}

carre3.onmouseout = function() {
	carre3.style.backgroundColor = "#111";
}

/////////////////////////////////////////////////////////////////BLOC CARRE4

carre4.onclick = function() {
	
	cacher();

	var contacter = document.getElementById('contacter');
	contacter.style.display = "block";
};

carre4.onmouseover = function() {
	carre4.style.backgroundColor = "#7F7F7F";
}

carre4.onmouseout = function() {
	carre4.style.backgroundColor = "#111";
}

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
}

/////////////////////////////////////////////////////////////////CANVAS

var c = document.getElementById("frise-ch");
var ctx = c.getContext("2d");
  // Le reste du script ici...

// Voile du bateau
/*ctx.beginPath();      // Début du chemin
ctx.moveTo(150,80);   // Le tracé part du point 150,80
ctx.lineTo(300,230);  // Un segment est ajouté vers 300,230
ctx.lineTo(150,230);  // Un segment est ajouté vers 150,230
ctx.closePath();      // Fermeture du chemin
ctx.fillStyle = "lightblue"; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé

// Coque du bâteau
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(50,250);
ctx.lineTo(100,300);
ctx.lineTo(250,300);
ctx.lineTo(300,250);
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna"; // Définition de la couleur de contour
ctx.lineWidth = 5;         // Définition de la largeur de ligne
ctx.fill();            // Application du remplissage
ctx.stroke();          // Application du contour
*/

//Mât
ctx.beginPath();
ctx.strokeStyle = "red"; // Définition de la couleur de contour
//bas 2
ctx.moveTo(250,10);
ctx.lineTo(250,490);
ctx.lineWidth = 2;

ctx.stroke();  



/*function infos() {
	
	var element = document.getElementById('test');
	element.style.backgroundColor = "#ff0";
	//element.style.backgroudnColor = blue;
}*/