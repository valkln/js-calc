let operators = document.getElementsByClassName('operator');
let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
function operation(operationValue) {
	let number1 = Number(input1.value);
	let number2 = Number(input2.value);
	if (operationValue === "+") {
		var result = number1 + number2;
	} else if (operationValue === "-") {
		var result = number1 - number2;
	} else if (operationValue === "*") {
		var result = number1 * number2;
	} else if (operationValue === "/") {
		var result = number1 / number2;
	} else alert('error, operation is unknown')
	window.alert(result);
}
function onButtonClick(eventObject) {
	let clickedElement = eventObject.currentTarget;
	let operator = clickedElement.innerHTML;
	operation(operator);
}
for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', onButtonClick);
}