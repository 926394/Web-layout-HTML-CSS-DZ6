const main1Menu = Clothing_store.querySelector('.main1Menu'); 
// меню сайта
const iconMenu = Clothing_store.querySelector('.iconMenu'); 
// иконка меню сайта
const iconXmenu = Clothing_store.querySelector('.iconXmenu'); 
// иконка меню крестик

function toggleMenu() {
  main1Menu.classList.toggle('hidden');
}
// функция скрывает или показывает меню сайта

iconMenu.addEventListener('click',toggleMenu);
// по клику на иконку срабатывает функция
iconXmenu.addEventListener('click',toggleMenu);