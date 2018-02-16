
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
};

carre1.onmouseout = function() {
	carre1.style.backgroundColor = "#111";
};

/////////////////////////////////////////////////////////////////BLOC CARRE2

carre2.onclick = function() {

	cacher();

	var competences = document.getElementById('competences');
	competences.style.display = "block";
};

carre2.onmouseover = function() {
	carre2.style.backgroundColor = "#7F7F7F";
};

carre2.onmouseout = function() {
	carre2.style.backgroundColor = "#111";
};

/////////////////////////////////////////////////////////////////BLOC CARRE3

carre3.onclick = function() {

	cacher();

	var formations = document.getElementById('formations');
	formations.style.display = "block";
};

carre3.onmouseover = function() {
	carre3.style.backgroundColor = "#7F7F7F";
};

carre3.onmouseout = function() {
	carre3.style.backgroundColor = "#111";
};

/////////////////////////////////////////////////////////////////BLOC CARRE4

carre4.onclick = function() {

	cacher();

	var contacter = document.getElementById('contacter');
	contacter.style.display = "block";
};

carre4.onmouseover = function() {
	carre4.style.backgroundColor = "#7F7F7F";
};

carre4.onmouseout = function() {
	carre4.style.backgroundColor = "#111";
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

/////////////////////////////////////////////////////////////////CANVAS
/*
var c = document.getElementById("frise-ch");
var ctx = c.getContext("2d");

//Mât
ctx.beginPath();
ctx.strokeStyle = "red"; // Définition de la couleur de contour
//bas 2
ctx.moveTo(250,10);
ctx.lineTo(250,490);
ctx.lineWidth = 2;

ctx.stroke();*/


/////////////////////////////////////////////////////////////////BLOCS bio
/*
var biopics = document.getElementById('toto');

biopics.onclick = function() {
	alert('gogo');
};*/
/*
function showstuff(selectedElementClass) {

    var elementClasses = [
        "Picoas",
        "Benfica",
        "Felgueiras",
        "Maia"
    ];

    for (var i = 0; i < elementClasses.length; i++) {
        var elements = document.getElementsByClassName(elementClasses[i]);

        for (var j = 0; j < elements.length; j++) {
            var element = elements[j];
            element.style.display = (element.className === selectedElementClass)? "block" : "none";
        }
    }
}*/
//.querySelector('')
//.querySelectorAll('td')
var pics = document.querySelectorAll('#bio table td');

for (var i = 0; i < pics.length; i++) {

	pics[i].onmouseover = function() {
		//alert(div.innerHTML);

		var div = this.querySelector('div');
		var img = this.querySelector('img');

		//img.classList.add("animated","flipOutX");
		img.classList.add("hidden");
		div.classList.remove("hidden");

		//div.classList.add("animated","flipInX");
		/*
		window.setTimeout(function(){
        img.classList.remove("animated","flipOutX");
				div.classList.remove("animated","flipInX");
    }, 1000);*/

	};
	pics[i].onmouseout = function() {

		var div = this.querySelector('div');
		var img = this.querySelector('img');
		div.classList.add("hidden");
		img.classList.remove("hidden");

	};
}

function flipIn(object) {
	object.classList.remove("hidden");
	object.classList.add("animated","flipInX");
}

function flipOut(object) {
	object.classList.add("animated","flipInX");
	object.classList.add("hidden");
}


/*
for (var i = 0; i < toto.length; i++) {
	toto[i].onmouseover = function() {
		var that = this;
		this.classList.add("animated","flipInX");
		tata[i].classList.remove("hiden");
		window.setTimeout(function(){
        that.classList.remove("animated","flipInX");
    }, 1000);
	};

	biopics[i].onmouseout = function() {
		this.classList.remove("animated");
		//this.classList.remove("flipInY");
	};
}

for (var i = 0; i < biopics.length; i++) {
	biopics[i].onmouseover = function() {
		var that = this;
		this.classList.add("animated","flipInX");
		window.setTimeout(function(){
        that.classList.remove("animated","flipInX");
    }, 1000);
	};
}*/
