function calcCartPrice(){
	const cartItems =  document.querySelectorAll('.cart-item');
	
	const totalPriceEl =  document.querySelector('.total-price');
	
	let totalPrice = 0;
	
	cartItems.forEach(function (item){

		
		const priceE1 = item.querySelector('.prices');
		const currentPrice = parseInt(priceE1.innerText);
		
		totalPrice += currentPrice;
	});
	
	totalPriceEl.innerText = totalPrice;

}
