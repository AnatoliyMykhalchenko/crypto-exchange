const onLoad = () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.header-mobile__menu');
	const currencyList = document.querySelector('.currency-list');
	const toggleList = document.querySelector('.right');
	const enterSumm = document.querySelector('input')
	const getSumm = document.querySelector('.left > div');
	const comission = document.querySelector('.comission > b');
	const selectedCurrency = document.querySelector('.right');
	let selectedSpan = document.querySelector('.right > span').innerHTML.slice(length - 3);
	

	const currencyListItems = [
		{
			src: './images/card.png',
			text: 'Visa/Mastercard UAH',
		},
		{
			src: './images/bitcoin.png',
			text: 'Bitcoin BTC',
		},
		{
			src: './images/etherium.png',
			text: 'Etherium ETH',
		}
	];

	currencyListItems.forEach((item) => {
		const li = document.createElement('li');
		const image = document.createElement('img');
		const text = document.createElement('span');
		image.src = item.src;
		text.innerHTML = item.text;
		li.append(image)
		li.append(text)
		currencyList.append(li);
	})

	currencyList.style.display = 'block';
	menu.style.display = 'flex';

	burger.addEventListener('click', () => {

		burger.classList.toggle('show-menu')
		menu.classList.toggle('show');

	})

	toggleList.addEventListener('click', () => {
		currencyList.classList.toggle('show')
	})

	enterSumm.addEventListener('input', (e) => {

		const enterSumm = +e.target.value;
		const comissionSumm = Math.round(enterSumm * 0.023);

		comission.innerHTML = `${comissionSumm} ${selectedSpan}`;
		getSumm.innerHTML = enterSumm - comissionSumm;

		if (!enterSumm) {
			comission.innerHTML = '';
		}

	});

	currencyList.addEventListener('click', (e) => {

		const ourCurrency = Array.from(selectedCurrency.children);
		let currency = Array.from(e.target.parentElement.children);
		if(e.target.tagName === 'LI') {

			currency = Array.from(e.target.children);

			ourCurrency[0].src = currency[0].src;
			ourCurrency[1].innerHTML = currency[1].innerHTML;
			
		}
		
			ourCurrency[0].src = currency[0].src;
			ourCurrency[1].innerHTML = currency[1].innerHTML;

			currencyList.classList.remove('show');

			selectedSpan = ourCurrency[1].innerHTML.slice(length - 3);
		
	})

}

document.addEventListener('DOMContentLoaded', onLoad);