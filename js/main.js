//Объявление переменных
const score = document.querySelector(".score"),
  start = document.querySelector(".start"),
  gameArea = document.querySelector(".gameArea"),
  car = document.createElement("div");
car.classList.add("car"); //создаем машинку :)

//Массивы данных
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3,
};

//слушатели событий
start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

//функция старта игры
function startGame() {
  gameArea.appendChild(car);
  start.classList.add("hide");
  requestAnimationFrame(playGame);
  setting.start = true;
}

//функция
function playGame() {
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

//функция начало движения
function startRun(event) {
  event.preventDefault();
  console.log(event.key);
  keys[event.key] = true;
}

//функция конец движения
function stopRun(event) {
  event.preventDefault();
  console.log(event.key);
  keys[event.key] = false;
}
