'use strict';

// modal windows

let firstBtnOpen = document.getElementById('firstBtn'),
	secondBtnOpen = document.getElementById('secondBtn'),
	firstModal = document.getElementById('first'),
	secondModal = document.getElementById('second'),
	closeBtnFirst = document.getElementById('closeBtnFirst'),
	closeBtnSecond = document.getElementById('closeBtnSecond');

closeBtnFirst.addEventListener('click', () => {
	if (closeBtnFirst) {
		firstModal.classList.add('none');
	}
});
closeBtnSecond.addEventListener('click', () => {
	if (closeBtnSecond) {
		secondModal.classList.add('none');
	}
});

firstBtnOpen.addEventListener('click', () => {
	if (firstBtnOpen) {
		firstModal.classList.remove('none');
	}
});
secondBtnOpen.addEventListener('click', () => {
	if (secondBtnOpen) {
		secondModal.classList.remove('none');
	}
});

// user

class User {
	constructor(nameValue, roleValue) {
		this.name = nameValue;
		this.role = roleValue;
	}

	get name() {
		return this._name;
	}

	get role() {
		return this._role;
	}

	set name(nameValue) {
		this._name = nameValue;
	}

	set role(roleValue) {
		this._role = roleValue;
	}

	getUser() {
		let table = document.querySelector('.first__user-body');

		let userRow = document.createElement('tr');
		let userNameRow = document.createElement('th');
		let userRoleRow = document.createElement('th');

		userNameRow.innerHTML = this.name;
		userRoleRow.innerHTML = this.role;

		userRow.append(userNameRow);
		userRow.append(userRoleRow);
		table.append(userRow);
	}
}

class Admin extends User {
	constructor(...args) {
		super(...args);
	}

	getAdmin() {
		let adminBtnWrapper = document.querySelectorAll('th');
		console.log(adminBtnWrapper);
		adminBtnWrapper.forEach((element) => {
			if (element.innerHTML === 'admin') {
				element.innerHTML = `admin<span class="first__admin-btn">Change role</span>`;
				this.switchRole(element);
			}
		});
	}

	switchRole(el) {
		let adminBtn = document.querySelectorAll('.first__admin-btn');
		console.log(adminBtn);
		adminBtn.forEach((element) => {
			element.addEventListener('click', (event) => {
				if (this.role === 'admin') {
					this.role = 'user';
					console.log(this.role);
					el.innerHTML = `user <span class="first__admin-btn">Change role</span>`;
				}
			});
		});
	}
}

let userData = [];

let alert = document.querySelector('.first__user-alert');

let userUser = document.querySelector('.first__user-role-user');
let userAdmin = document.querySelector('.first__user-role-admin');

userUser.addEventListener('click', (event) => {
	userUser.classList.toggle('first__user-role-user--select');
	userAdmin.classList.remove('first__user-role-admin--select');
});

userAdmin.addEventListener('click', (event) => {
	userAdmin.classList.toggle('first__user-role-admin--select');
	userUser.classList.remove('first__user-role-user--select');
});

let userCreateBtn = document.querySelector('.first__user-btn');
userCreateBtn.addEventListener('click', (event) => {
	let userName = document.querySelector('.first__area-name').value;
	if (userName === '') {
		alert.innerHTML = "Ім'я користувача не введено!";
		event.stopImmediatePropagation();
	} else {
		let userRole = '';
		if (userUser.classList.length == userAdmin.classList.length) {
			alert.innerHTML = 'Роль користувача не обрано!';
		} else {
			userUser.classList.length > userAdmin.classList.length
				? createUser(userName, 'user')
				: createAdmin(userName, 'admin');
		}
	}
	console.log(userData);
});

function createUser(name, role) {
	let newUser = new User(name, role);
	newUser.getUser();
	userData.push(newUser);
}

function createAdmin(name, role) {
	let newUser = new Admin(name, role);
	newUser.getUser();
	newUser.getAdmin();
	userData.push(newUser);
}

//timezone

let clockBar = document.querySelector('.second__results');

class Clock {
	constructor(timeValue, dateValue, sityValue) {
		this.time = timeValue;
		this.date = dateValue;
		this.sity = sityValue;
	}

	get time() {
		return this._time;
	}

	get date() {
		return this._date;
	}

	get sity() {
		return this._sity;
	}

	set time(timeValue) {
		this._time = timeValue;
	}

	set date(dateValue) {
		this._date = dateValue;
	}

	set sity(sityValue) {
		this._sity = sityValue;
	}

	get showTime() {
		return `${this.date} ${this.time}`;
	}

	set showTime(value) {
		this.showTime = `${this.date} ${this.time}`;
	}

	setClock() {
		let worldClockArea = document.createElement('div');
		let worldClock = document.createElement('div');
		let worldTime = document.createElement('div');
		let worldDate = document.createElement('div');
		let worldSity = document.createElement('div');
		let btnBar = document.createElement('div');
		let btnTime = document.createElement('div');
		let btnDate = document.createElement('div');
		let btnRem = document.createElement('div');

		worldTime.innerHTML = this.time;
		worldDate.innerHTML = this.date;
		worldSity.innerHTML = this.sity;
		btnTime.innerHTML = 'time';
		btnDate.innerHTML = 'date';
		btnRem.innerHTML = 'remove';

		worldClockArea.classList.add('second__clock-area');
		worldClock.classList.add('second__clock');
		worldTime.classList.add('second__clock-time');
		worldDate.classList.add('second__clock-date');
		worldSity.classList.add('second__clock-sity');
		btnBar.classList.add('second__clockBtnBar');
		btnTime.classList.add('second__clockBtnTime');
		btnDate.classList.add('second__clockBtnDate');
		btnRem.classList.add('second__clockBtnRemove');

		worldClock.append(worldSity);
		worldClock.append(worldDate);
		worldClock.append(worldTime);
		worldClockArea.append(worldClock);
		btnBar.append(btnTime);
		btnBar.append(btnDate);
		btnBar.append(btnRem);
		worldClockArea.append(btnBar);
		clockBar.append(worldClockArea);

		btnTime.addEventListener('click', (event) => {
			this.getCurrentDate(btnTime);
		});

		btnDate.addEventListener('click', (event) => {
			this.getCurrentDateTime(btnDate);
		});

		btnRem.addEventListener('click', (event) => {
			this.deleteClock(btnRem);
		});
	}

	getCurrentDate(element) {
		let changeData = element.parentElement.parentElement.querySelector(
			'.second__clock-date'
		);
		changeData.innerHTML = ' ';
	}

	getCurrentDateTime(element) {
		let changeData = element.parentElement.parentElement.querySelector(
			'.second__clock-date'
		);
		changeData.innerHTML = this.date;
	}

	deleteClock(element) {
		let changeData = element.parentElement.parentElement;
		console.log(changeData);
		changeData.innerHTML = '';
		changeData.classList.add('none');
	}
}

let addClockBtn = document.querySelector('.second__location-btn');
addClockBtn.addEventListener('click', (event) => {
	let locationName = document.querySelector('.second__area').value;
	if (locationName !== '') {
		document.querySelector('.second__errors').innerHTML = '';
		axios({
			url: `https://timezone.abstractapi.com/v1/current_time`,
			method: 'GET',
			params: {
				api_key: 'd441ef5f83e34df9b2352247879a4c62',
				location: locationName,
			},
			responseType: 'json',
		})
			.then((res) => {
				let timeInfo = res.data.datetime.split(' ');
				let sityInfo = res.data.timezone_location.split('/');
				let oneMoreClock = new Clock(
					timeInfo[1],
					timeInfo[0],
					sityInfo[1]
				);
				oneMoreClock.setClock();
			})
			.catch(() => {});
	} else {
		document.querySelector('.second__errors').innerHTML =
			'Локація не зазначена!';
	}
});
