// Déclaration constante du tableau contenant les slides
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Declaration de constantes  
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector(".dots");
const banner = document.getElementById ('#banner');
const bannerImage = document.querySelector('#banner > img')
const bannerTagLine = document.querySelector('#banner > p');

//Declaration de la variable slideIndex à 0
let slideIndex = 0;

//Fonction pour executer la slide precedente
prevSlide = () => {
	if (slideIndex == 0) {
		slideIndex = slides.length -1;
	} else {
	    slideIndex -=1;//decremente de 1
    }
};

//Fonction pour executer la slide suivante
nextSlide = () => {
	if (slideIndex == slides.length -1) {
		slideIndex = 0;
	} else {
	    slideIndex += 1;//incremente de 1
    }
};

//event listener clic gauche
arrowLeft.addEventListener('click', prevSlide);

//event listener clic droit
arrowRight.addEventListener('click', nextSlide);

//bullet points
//Boucle for affichant un nombre de points en fonction du nombre elements du tableau
for (let i = 0; i < slides.length; i++) {
	const dot= document.createElement('div'); //Cree nouvel élément div
	dot.classList.add('dot');
	dotsContainer.appendChild(dot); //On rattache dotsChildren('div') a son parent dotsContainer("dots")
	if (i == 0) { // Selectionne le premier bullet point
	dotsContainer.children[i].classList.add('dot_selected');
	}
}

// Change le bullet point actif/selectionne  
function dotSelected() {
    const dot = document.getElementsByClassName('dot');
    for (let i = 0; i < dot.length; i++) {
        if  (i == slideIndex){
		    dot[i].classList.add('dot_selected');
        }
		else {
            dot[i].classList.remove('dot_selected');
		}
    }
}

