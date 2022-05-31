// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.row1');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.imge').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('[data-items-in-box]').innerText,
		};

		// Собранные данные подставим в шаблон для товара в корзине
		const cartItemHTML = `<div class="card cart-item flex-row flex-wrap bg-light mb-5 border-0" data-id="${productInfo.id}">
			                  <div class="p-2 border-0">
                              <img class="imge imgee" src="${productInfo.imgSrc}">
                              </div>
		               		  <div class="card-block px-2">
                              <div class="item-title card-text pr p-3" style="font-size: 2vw;"><a href="#">${productInfo.title}</a></div>
                              <p class="card-text pl-5" style="font-size: 1.5vw;"><span class="prices">${productInfo.price}р</span></p>
					          <div class="text-right">
					          <button data-action="close" type="button" class="btn" style="background-color:#7E5E5E; border-color: #7E5E5E; color:#ffffff; border-radius: 1px; font-size: 1vw;"> Удалить </button>
					          </div>
                              </div>
                              <div class="w-100"></div>  	
                              </div>`
							  
		
		// Отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		
		calcCartPrice();
	} 
	if (event.target.dataset.action === 'close'){
		event.target.closest('.cart-item').remove();
		calcCartPrice();
	    }
	
});


