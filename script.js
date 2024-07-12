const mainBurMenu = document.querySelector('.mainBurMenu'); 
// меню сайта
const iconMenu = document.querySelector('.iconMenu'); 
// иконка меню сайта
const iconXmenu = document.querySelector('.iconXmenu'); 
// иконка меню крестик

function hiddenMenu() {
  mainBurMenu.classList.toggle('hidden');
}
// функция скрывает или показывает меню сайта

iconMenu.addEventListener('click',hiddenMenu);
// по клику на иконку срабатывает функция
iconXmenu.addEventListener('click',hiddenMenu);