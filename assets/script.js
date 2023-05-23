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

//Déclaration de constantes  
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector(".dots");

//Déclaration de la variable slideIndex à 0
let slideIndex = 0;

//Fonction pour executer la slide precedente
prevSlide = () => {
	if (slideIndex == 0) {
		slideIndex = slides.length -1;
	
	} else {
	    slideIndex -=1;//décrémente de 1
    }
//();
};

//Fonction pour executer la slide suivante
nextSlide = () => {
	if (slideIndex == slides.length -1) {
		slideIndex = 0;
	
	} else {
	    slideIndex += 1;//incrémente de 1
    }
//();
};

//event listener clic gauche
arrowLeft.addEventListener('click', prevSlide);

//event listener clic droit
arrowRight.addEventListener('click', nextSlide);

//bullet points
//Boucle for affichant un nombre de points en fonction du nombre elements du tableau
for (let i = 0; i < slides.length; i++) {
	const dotsChildren= document.createElement('div'); //Crée nouvel élément div
	dotsChildren.classList.add('dot');
	dotsContainer.appendChild(dotsChildren); //On rattache dotsChildren('div') a son parent dotsContainer("dots")
}

