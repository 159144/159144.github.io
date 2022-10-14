let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'img/mg1.png') {
		myImage.setAttribute('src', 'img/mg2.png');
	} else {
		myImage.setAttribute('src', 'img/mg1.png');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('请输入你的名字。');
	localStorage.setItem('name', myName);
	myHeading.textContent = '该网站 酷毙了，' + myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '该网站 酷毙了，' + storedName;
}
myButton.onclick = function() {
	setUserName();
}

function setUserName() {
	let myName = prompt('请输入你的名字。');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = '该网站 酷毙了，' + myName;
	}
}
