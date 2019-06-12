/* Slider */

let slider = document.querySelectorAll('.slider');
let leftDot = document.querySelector('.left-dot');
let rightDot = document.querySelector('.right-dot');
let counter = 0;

//Hide everythhing function
function reset(){
	for(let s of slider){
		if(s.classList.contains('slider-animation-start')){
			s.classList.remove('slider-animation-start');
		};
		s.style.opacity = '0';
		s.style.pointerEvents = "none";
	}
}

// Init slider
function init(){
	reset();
	slider[0].style.opacity="1";
	slider[0].classList.add('slider-animation-start');
	window.setInterval(function(){
		if(counter === 0){
		counter = slider.length; //2
		console.log(counter);
	}
	slideLeft();
}, 3000);
}

function slideLeft(){
	reset();
	slider[counter - 1].classList.add('slider-animation-start'); //slider[1]
	slider[counter - 1].style.opacity="1";
	slider[counter - 1].style.pointerEvents = "auto";
	counter--;
}

function slideRight(){
	reset();
	slider[counter + 1].classList.add('slider-animation-start');
	slider[counter + 1].style.opacity="1";
	slider[counter + 1].style.pointerEvents = "auto";

	counter++;
}

leftDot.addEventListener('click', function(e){
	e.preventDefault();
	if(counter === 0){
		counter = slider.length;
	}
	slideLeft();
});

rightDot.addEventListener('click', function(e){
	e.preventDefault();
	if(counter === slider.length - 1){
		counter = -1
	}
	slideRight();
});

init();




/* Counter */


let items = document.querySelectorAll('.item');
let incrementCounter = 0;
let interval;
function count(){
	for(let i of items){
		if(incrementCounter <= i.dataset.count){
			i.innerHTML = incrementCounter;
			incrementCounter ++;
		}else if(incrementCounter > i.dataset.count){
			clearInterval(iterval);
		}
	}
	iterval  = setInterval(count, 30);

}



/* Call function on scroll ivent*/


console.log(window);
document.addEventListener('scroll', function(e){
	console.log(window.pageYOffset);
	if(window.pageYOffset > 1200 && window.pageYOffset < 1600){
		count();
	}
});




