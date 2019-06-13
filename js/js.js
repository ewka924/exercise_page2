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

function count(){
	const items = document.querySelectorAll('.item'),
    animationTime = 3000;
    const counter = document.querySelector('.counter');
    let counterPosition = counter.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;


    if(counterPosition < screenPosition){
    items.forEach((el) =>{
     	let counterNumber = el.dataset.count;
     	let c = 0; //licznik
     	let interval = setInterval(()=>{
     		if(c > counterNumber){
     			clearInterval(interval);
     		}else{
     			el.innerHTML = c;
     			c++;
     		}
     	}, (animationTime/counterNumber));
     });
}
}

window.addEventListener('scroll', count);





// element's position
//.getBoundingClientRect().top 
