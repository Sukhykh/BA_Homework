window.addEventListener('DOMContentLoaded', () => {
	let form = document.getElementById('searchForm');
	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			findFilms(undefined, event.target);
		});
	}

	document
		.querySelector('#searchPagination')
		.addEventListener('click', (event) => {
			if (event.target.nodeName !== 'li') {
				return;
			}
			console.log(event);
			console.log(event.target);
			console.log(event.target.innerHTML);
			console.log(event.target.innerText);
		});
});

function findFilms(page = 1, form) {
	let titleField = form.querySelector('input[name=title]'),
		typeField = form.querySelector('select[name=type]');
	if (titleField.value.length === 0) {
		return;
	}
	axios({
		url: form.action,
		method: form.method,
		params: {
			s: titleField.value,
			type: typeField.value,
			page: page,
		},
		responseType: 'json',
	})
		.then((res) => {
			let resBlock = document.getElementById('searchRes');
			if (!resBlock) {
				return;
			}
			resBlock.innerHTML = '';
			if (res.data.Error) {
				resBlock.innerHTML = res.data.Error;
			} else if (res.data.Search && res.data.totalResults) {
				for (let i = 0; i < res.data.Search.length; i++) {
					resBlock.append(createFilmItem(res.data.Search[i]));
				}

				addListenerToDetailsBtn(resBlock);
				createPagination(res.data.totalResults);
				addListenerToPaginationItem(page);
			}
		})
		.catch(() => {
			let resBlock = document.getElementById('searchRes');
			if (!resBlock) {
				return;
			}
			resBlock.innerHTML = 'Error!';
		});
}

function createFilmItem(item) {
	let el = document.createElement('div'),
		elTitle = document.createElement('h4'),
		elYear = document.createElement('div'),
		elButton = document.createElement('span');

	el.classList.add('film-item');
	elTitle.classList.add('film-item__title');
	elYear.classList.add('film-item__year');
	elButton.classList.add('film-item__btn');

	elTitle.innerHTML = 'Title: ' + item.Title;
	elYear.innerHTML = 'Year: ' + item.Year ?? '-';
	elButton.innerHTML = 'Details';

	el.setAttribute('data-id', `${item.imdbID}`);

	el.append(elTitle);
	el.append(elYear);
	el.append(elButton);

	return el;
}

function createPagination(amount) {
	let ul = document.getElementById('searchPagination');
	if (!ul) {
		return;
	}
	ul.innerHTML = '';
	for (let i = 0; i < amount / 10; i++) {
		let el = document.createElement('li');
		el.classList.add('main__movie-pagination-point');
		el.innerHTML = i + 1;
		ul.append(el);
	}
}

function addListenerToPaginationItem(pageNumber) {
	let ulItem = document.querySelectorAll('#searchPagination li'),
		form = document.getElementById('searchForm');
	if (ulItem.length === 0) {
		return;
	}
	ulItem[pageNumber - 1].classList.add('action');

	ulItem.forEach((item) => {
		item.addEventListener('click', (event) => {
			if (item.classList.contains('action')) {
				return;
			}
			console.log(item);
			console.log(item.innerHTML);
			console.log(item.innerText);
			findFilms(event.target.innerText, form);
		});
	});
}

function addListenerToDetailsBtn(block) {
	let detailsBtns = document.querySelectorAll('.film-item__btn');
	if (detailsBtns.length === 0) {
		return;
	}
	detailsBtns.forEach((btn) =>
		btn.addEventListener('click', showFilmDetails)
	);
}

function showFilmDetails(event) {
	let selectedMovie = event.target.closest('.film-item');
	console.log(selectedMovie.getAttribute('data-id'));

	axios({
		url: 'http://www.omdbapi.com/?apikey=79bad6da&',
		method: 'GET',
		params: {
			i: selectedMovie.getAttribute('data-id'),
		},
		responseType: 'json',
	})
		.then((res) => {
			console.log(res.data);
			let resBlock = document.getElementById('fullInfo');
			if (!resBlock) {
				return;
			}
			resBlock.innerHTML = '';
			if (res.data.Error) {
				resBlock.innerHTML = res.data.Error;
			} else if (res.data) {
				resBlock.append(createFilmData(res.data));
			}
		})
		.catch(() => {
			let resBlock = document.getElementById('fullInfo');
			if (!resBlock) {
				return;
			}
			resBlock.innerHTML = 'Error!';
		});
}

function createFilmData(item) {
	let el = document.createElement('div'),
		elTitle = document.createElement('h4'),
		elCountry = document.createElement('div'),
		elLanguage = document.createElement('div'),
		elGenre = document.createElement('div'),
		elPeople = document.createElement('div'),
		elDirector = document.createElement('div'),
		elWriter = document.createElement('div'),
		elActors = document.createElement('div'),
		elPlotWrapper = document.createElement('div'),
		elPlotTitle = document.createElement('h5'),
		elPlot = document.createElement('p');

	el.classList.add('full-info__wrapper');
	elTitle.classList.add('full-info__title');
	elCountry.classList.add('full-info__country');
	elLanguage.classList.add('full-info__language');
	elGenre.classList.add('full-info__genre');
	elPeople.classList.add('full-info__people-wrapper');
	elDirector.classList.add('full-info__people');
	elWriter.classList.add('full-info__people');
	elActors.classList.add('full-info__people');
	elPlotWrapper.classList.add('full-info__descr-wrapper');
	elPlotTitle.classList.add('full-info__descr-title');
	elPlot.classList.add('full-info__descr');

	elTitle.innerHTML = item.Title;
	elCountry.innerHTML = item.Country + ', ' + item.Year + ' year';
	elLanguage.innerHTML =
		'<span class="test-title">Language: </span>' + item.Language;
	elGenre.innerHTML =
		'<span class="test-title">Genre: </span>' +
		item.Genre +
		' (runtime ' +
		item.Runtime +
		')';
	elDirector.innerHTML =
		`<span class="test-title">Director: </span>` + item.Director;
	elWriter.innerHTML =
		`<span class="test-title">Writer: </span>` + item.Writer;
	elActors.innerHTML =
		'<span class="test-title">Actors: </span>' + item.Actors;
	elPlotTitle.innerHTML = 'Plot';
	elPlot.innerHTML = item.Plot;

	elPeople.append(elDirector);
	elPeople.append(elWriter);
	elPeople.append(elActors);

	elPlotWrapper.append(elPlotTitle);
	elPlotWrapper.append(elPlot);

	el.append(elTitle);
	el.append(elCountry);
	el.append(elPeople);
	el.append(elLanguage);
	el.append(elGenre);
	el.append(elPlotWrapper);

	return el;
}
