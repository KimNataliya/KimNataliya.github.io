window.addEventListener('click', function(event){
	//���������, ��� ���� ��� �������� �� ������ "�������� � �������"
	if(event.target.hasAttribute('data-cart')){
		console.log('click on Cart button');
		//������� �������� � �������, ������ ������� ��� �������� ���� 
		const card = event.target.closest('.cart');
		//������� ������ � ����� ������ � ���������� �� � ������ ������ 
		const productInfo = {		

		    imgSrc: card.querySelector('.imge').getAttribute('src'),
		    title: card.querySelector('.item-title').innerText,
		    pricec: card.querySelector('.price').innerText,
		};
		
		console.log(productInfo);
	}
})