window.addEventListener('click', function(event){
	//Проверяем, что клик был совершен по кнопке "Добавить в корзину"
	if(event.target.hasAttribute('data-cart')){
		console.log('click on Cart button');
		//Находим карточку с товаром, внутри которой был совершен клик 
		const card = event.target.closest('.cart');
		//Сбираем данные с этого товара и записываем их в единый объект 
		const productInfo = {		

		    imgSrc: card.querySelector('.imge').getAttribute('src'),
		    title: card.querySelector('.item-title').innerText,
		    pricec: card.querySelector('.price').innerText,
		};
		
		console.log(productInfo);
	}
})