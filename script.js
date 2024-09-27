const mainBurMenu = document.querySelector(".mainBurMenu");
// меню сайта
const iconMenu = document.querySelector(".iconMenu");
// иконка меню сайта
const iconXmenu = document.querySelector(".iconXmenu");
// иконка меню крестик

function hiddenMenu() {
  mainBurMenu.classList.toggle("hidden");
}
// функция скрывает или показывает меню сайта

iconMenu.addEventListener("click", hiddenMenu);
// по клику на иконку срабатывает функция
iconXmenu.addEventListener("click", hiddenMenu);

// ПОДКЛЮЧАЕМ ДАННЫЕ из data.js
const dataPro = JSON.parse(dataProducts);
const dataBase = document.querySelector(".section3PositionCard");

dataPro.forEach(data => {
  

// Основной див <div class="card"></div>
const divCard = document.createElement("div");
divCard.classList.add("card");
// Вложенный див <div class="list__img">
const divList__imgJs = document.createElement("div");
divList__imgJs.classList.add("list__img");

const img3_1 = document.createElement("img");
img3_1.src = data.url;
img3_1.alt = "logoSection3.1";
// Вложенный див <div class="magik__butt">

const divMagik__buttJs = document.createElement("div");
divMagik__buttJs.classList.add("magik__butt");
//Вложенная в див кнопка magik
const buttonCard__butt = document.createElement("button");
buttonCard__butt.classList.add("card__butt");
buttonCard__butt.textContent = 'Add to Cart';
// Вложенный Фон кнопки
const imgButBackground = document.createElement("img");
imgButBackground.src = data.src;
imgButBackground.alt = "basket";
// Див cardBloсk
const divCardBloсk = document.createElement("div");
divCardBloсk.classList.add("cardBloсk");
// Див cardBloсk Заголовок h1
const titleCardHead = document.createElement("h1");
titleCardHead.textContent = data.name;
// Див cardBloсk Параграф p
const parCardP = document.createElement("p");
parCardP.textContent = data.description;
// Див cardBloсk Заголовок h2 price;
const parCardPrice = document.createElement("h2");
parCardPrice.textContent = ` $${data.price}.00`;

dataBase.appendChild(divCard);
divCard.appendChild(divList__imgJs);
divList__imgJs.appendChild(img3_1);
divMagik__buttJs.appendChild(buttonCard__butt);
divList__imgJs.appendChild(divMagik__buttJs);
buttonCard__butt.appendChild(imgButBackground);
divCard.appendChild(divCardBloсk);
divCardBloсk.appendChild(titleCardHead);
divCardBloсk.appendChild(parCardP);
divCardBloсk.appendChild(parCardPrice);
});