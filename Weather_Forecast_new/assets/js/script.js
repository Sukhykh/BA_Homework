window.addEventListener('DOMContentLoaded', () => {
	let sity = document.querySelectorAll('.sity');
	console.log(sity);
	sity.forEach((item) => {
		if (item.innerHTML.length > 0) {
			let fatherLI = item.closest('li');
			if (getCookie(item.innerHTML)) {
				fatherLI.querySelector('.temp').innerHTML = `${getCookie(
					item.innerHTML
				)} °C`;
			} else {
				getGeo(item.innerHTML, fatherLI);
				//deleteCookie(item.innerHTML);
				//fatherLI.querySelector('.temp').innerHTML = `${test} °C`;
			}
		}
	});
});

function getGeo(sity, father) {
	axios({
		url: 'https://api.openweathermap.org/geo/1.0/direct?',
		method: 'GET',
		params: {
			q: sity,
			appid: '402abc8409fe5a0e656e837d6fe02f95',
		},
		responseType: 'json',
	}).then((res) => {
		//console.log(res);
		let latGet = res.data[0].lat;
		let lonGet = res.data[0].lon;
		//console.log(latGet);
		//console.log(lonGet);
		getWeather(latGet, lonGet, sity, father);
		//console.log(resTemp);
	});
}

function getWeather(lat, lon, sity, father) {
	let tempGet;
	axios({
		url: 'https://api.openweathermap.org/data/2.5/weather?',
		method: 'GET',
		params: {
			lat: lat,
			lon: lon,
			units: 'metric',
			appid: '402abc8409fe5a0e656e837d6fe02f95',
		},
		responseType: 'json',
	}).then((res) => {
		//console.log(res);
		//console.log(res.data.main.temp);
		tempGet = res.data.main.temp;
		console.log(tempGet);
		setCookie(sity, tempGet, 2);
		father.querySelector('.temp').innerHTML = `${tempGet} °C`;
	});
}

function deleteCookie(name) {
	setCookie(name, '', 0);
}

function setCookie(name, value, hours) {
	let expires = '';
	if (hours) {
		let date = new Date();
		date.setTime(date.getTime() + hours * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	} else {
		expires = `; expires=Thu, 01 Jan 1900 00:00:01 GTM`;
	}
	document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
	let cookieValue = document.cookie.split(';');
	for (let i = 0; i < cookieValue.length; i++) {
		let cookieValueItem = cookieValue[i];
		while (cookieValueItem.charAt(0) === ' ') {
			cookieValueItem = cookieValueItem.substring(
				1,
				cookieValueItem.length
			);
		}
		let splittedValue = cookieValueItem.split('=');
		if (splittedValue[0] === name) {
			return splittedValue[1];
		}
	}
}
