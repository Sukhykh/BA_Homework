'use strict';

let playList = [
	{
		author: 'LED ZEPPELIN',
		song: 'STAIRWAY TO HEAVEN',
	},

	{
		author: 'QUEEN',
		song: 'BOHEMIAN RHAPSODY',
	},

	{
		author: 'LYNYRD SKYNYRD',
		song: 'FREE BIRD',
	},

	{
		author: 'DEEP PURPLE',
		song: 'SMOKE ON THE WATER',
	},

	{
		author: 'JIMI HENDRIX',
		song: 'ALL ALONG THE WATCHTOWER',
	},

	{
		author: 'AC/DC',
		song: 'BACK IN BLACK',
	},

	{
		author: 'QUEEN',
		song: 'WE WILL ROCK YOU',
	},

	{
		author: 'METALLICA',
		song: 'ENTER SANDMAN',
	},
];

let length = playList.length;
let list = document.querySelector('.modal__song-list');

for (let i = 0; i < length; i++) {
	let elementLi = document.createElement('li');
	elementLi.classList.add('modal__song-item');

	let elementAuthor = document.createElement('span');
	elementAuthor.classList.add('modal__author');
	elementAuthor.innerHTML = `${playList[i].author}`;
	console.log(elementAuthor);

	let elementSeparator = document.createElement('span');
	elementSeparator.classList.add('modal__separator');

	let elementSong = document.createElement('span');
	elementSong.classList.add('modal__song');
	elementSong.innerHTML = `${playList[i].song}`;
	console.log(elementSong);

	list.append(elementLi);

	elementLi.append(elementAuthor);
	elementLi.append(elementSeparator);
	elementLi.append(elementSong);
}

let red = document.querySelector('.light__red');
let yellow = document.querySelector('.light__yellow');
let green = document.querySelector('.light__green');

red.addEventListener('click', (event) => {
	if (red) {
		red.classList.add('light__red--checked');
		if (yellow) {
			yellow.classList.remove('light__yellow--checked');
		}
		if (green) {
			green.classList.remove('light__green--checked');
		}
	}
});

yellow.addEventListener('click', (event) => {
	if (yellow) {
		yellow.classList.add('light__yellow--checked');
		if (red) {
			red.classList.remove('light__red--checked');
		}
		if (green) {
			green.classList.remove('light__green--checked');
		}
	}
});

green.addEventListener('click', (event) => {
	if (green) {
		green.classList.add('light__green--checked');
		if (red) {
			red.classList.remove('light__red--checked');
		}
		if (yellow) {
			yellow.classList.remove('light__yellow--checked');
		}
	}
});

let anyLight = document.querySelector('.single-light');
let anyBtn = document.querySelector('.single-btn');

anyBtn.addEventListener('click', (event) => {
	if (anyBtn) {
		if (anyLight) {
			let swicher = +anyLight.dataset.counter;
			switch (swicher) {
				case 1:
					if (anyLight) {
						anyLight.classList.add('light__red--checked');
						anyLight.classList.remove('light__yellow--checked');
						anyLight.classList.remove('light__green--checked');
						break;
					}
				case 2:
					if (anyLight) {
						anyLight.classList.remove('light__red--checked');
						anyLight.classList.add('light__yellow--checked');
						anyLight.classList.remove('light__green--checked');
						break;
					}
				case 3:
					if (anyLight) {
						anyLight.classList.remove('light__red--checked');
						anyLight.classList.remove('light__yellow--checked');
						anyLight.classList.add('light__green--checked');
						break;
					}
			}
			anyLight.dataset.counter++;
			if (anyLight.dataset.counter > 3) {
				anyLight.dataset.counter = 1;
			}
		}
	}
});

let open = document.querySelector('.homework__btn');
let close = document.querySelector('.modal__btn');
let modal = document.getElementById('modal');

open.addEventListener('click', (event) => {
	if (open) {
		modal.classList.toggle('none');
	}
});

close.addEventListener('click', (event) => {
	if (close) {
		modal.classList.toggle('none');
	}
});
