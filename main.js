'use strict';

const canvas = document.getElementById('theCanvas');
const ctx = canvas.getContext('2d');
const cx = canvas.getBoundingClientRect().width;
const cy = canvas.getBoundingClientRect().height;
const reset = document.getElementById('reset');
const pullForce = document.getElementById('pullForce');
const max = 10;
const min = -10;

const pen = {
	x: Math.round(Math.random() * cx),
	y: Math.round(Math.random() * cy),
	spdX: Math.floor(Math.random() * (max - min + 1)) + min,
	spdY: Math.floor(Math.random() * (max - min + 1)) + min,
};

const origin = {
	x: cx / 2,
	y: cy / 2,
	pullForce: parseFloat(localStorage.getItem('@origin:gravity')),
};

ctx.strokeStyle = '#fff';
pullForce.value = origin.pullForce;

console.log('%cHello! =)', 'font-size: 40px; color: #fff');
console.table(pen);
console.table(origin);

const timer = setInterval(function() {

	ctx.lineTo(pen.x, pen.y);
	ctx.stroke();

	pen.spdX += (pen.x > origin.x) ? -origin.pullForce : +origin.pullForce;
	pen.spdY += (pen.y > origin.y) ? -origin.pullForce : +origin.pullForce;
	
	pen.x += pen.spdX;
	pen.y += pen.spdY;
}, 1);

reset.addEventListener('click', function() {
	ctx.clearRect(0, 0, cx, cy);
	window.localStorage.setItem('@origin:gravity', pullForce.value);
	window.location.reload();
});