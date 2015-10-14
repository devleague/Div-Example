
var area;

var color = 'red';

function createpic () {
	document.getElementById(color).innerHTML = "";
	area = Math.round(Math.random()*5);
	if (area === 0) {
		color = 'red';
	};
	if (area === 1) {
		color = 'orange';
	};
	if (area === 2) {
		color = 'yellow';
	};
	if (area === 3) {
		color = 'green';
	};
	if (area === 4) {
		color = 'blue';
	};
	if (area === 5) {
		color = 'violet';
	};
	document.getElementById(color).innerHTML = "<img src='link.gif'>";
};