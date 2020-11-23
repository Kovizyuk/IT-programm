const menuOpen = () => {
	let menu = document.querySelector('.menu')
	let iconBtnUp = document.querySelector('.open-menu__up')
	let iconBtnDown = document.querySelector('.open-menu__down')
	menu.style.display = 'block'
	iconBtnUp.style.display = 'block'
	iconBtnDown.style.display = 'none'
}
const menuClose = () => {
	let menu = document.querySelector('.menu')
	let iconBtnUp = document.querySelector('.open-menu__up')
	let iconBtnDown = document.querySelector('.open-menu__down')
	menu.style.display = 'none'
	iconBtnUp.style.display = 'none'
	iconBtnDown.style.display = 'block'
}
// Плавный скролл наверх
const upScroll = () => {  
  let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);  
	if(top > 0) {  
	  	window.scrollBy(0,((top+100)/-10));  
	  	t = setTimeout('upScroll()',15);  
	} 	else clearTimeout(t);  
	return false;  
}
//Слайдер
$(document).ready(() => {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 300,
		easing: 'ease',
		draggable: false,
		infinite: true,
		// appendDots: $(''),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		centerMode: false,

	})
})