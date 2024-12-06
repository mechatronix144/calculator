const screenInput = document.getElementById("display-value");
const inputKey = document.getElementById("btn");
const inputDel = document.getElementById("del");
const inputReset = document.getElementById("reset");
const inputEqual = document.getElementById("equal");
const inputOne = document.getElementById("btn1");
const inputTwo = document.getElementById("btn2");
const inputThree = document.getElementById("btn3");
const inputFour = document.getElementById("btn4");
const inputFive = document.getElementById("btn5");
const inputSix = document.getElementById("btn6");
const inputSeven = document.getElementById("btn7");
const inputEight = document.getElementById("btn8");
const inputNine = document.getElementById("btn9");
const inputTen = document.getElementById("btn10");
const inputEleven = document.getElementById("btn11");
const inputTwelfth = document.getElementById("btn12");
const inputOneThree = document.getElementById("btn13");
const inputOneFour = document.getElementById("btn14");
const inputOneFive = document.getElementById("btn15");

inputOne.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputOne.value}`;
});
inputTwo.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputTwo.value}`;
});
inputThree.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputThree.value}`;
});
inputFour.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputFour.value}`;
});
inputFive.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputFive.value}`;
});
inputSix.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputSix.value}`;
});
inputSeven.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputSeven.value}`;
});
inputEight.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputEight.value}`;
});
inputNine.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputNine.value}`;
});

inputTen.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputTen.value}`;
});

inputEleven.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputEleven.value}`;
});

inputTwelfth.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputTwelfth.value}`;
});

inputOneThree.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputOneThree.value}`;
});

inputOneFour.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputOneFour.value}`;
});

inputOneFive.addEventListener("click", function () {
  // let inputValue = inputOne.value;
  screenInput.textContent += `${inputOneFive.value}`;
});

inputReset.addEventListener("click", function () {
  let displayValue = "";
  screenInput.textContent = displayValue;
});
inputDel.addEventListener("click", function () {
  screenInput.innerText = screenInput.innerText.slice(0, -1);
});
inputEqual.addEventListener("click", function () {
  screenInput.innerText = eval(screenInput.innerText);
});
