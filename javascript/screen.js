//Image screen
let sliderImage = document.querySelectorAll('.slide'),
arrowLeft=document.querySelectorAll('#arrow-left'),
arrowRight=document.querySelectorAll('#arrow-right'),
current = 0;

//clear all images
function reset()
{
	for(let i=0; i<sliderImage ; i++ )
	{
		sliderImage[i].style.display = 'none' ;
	}
}
//init slider
function startSlide()
{
	reset();
	sliderImage[0].style.display= 'block' ;
}

//show prev

startSlide();

