import {
  fadingTea,
  listenToAnimation,
  toggleDropDown,
  toggleModalDisplay,
} from './animation';

const enterexitButton = document.querySelector('.in-and-out');
const cupOfTeaIMG = document.querySelector('.in-and-out > img');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');
const menuButton = document.querySelector('#menu-button');
const toggleColorMode = document.querySelector('#toggle-color-mode');

export function initClickEvents() {
  // exercise 1
  enterexitButton.addEventListener('click', () => {
    console.log(cupOfTeaIMG.classList.toggle('translateDown'));
  });

  // exercise 2
  openModalButton.addEventListener('click', toggleModalDisplay);
  closeModalButton.addEventListener('click', toggleModalDisplay);

  // exercise 3
  menuButton.addEventListener('click', toggleDropDown);

  // dark and light mode toggle exercise
  toggleColorMode.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
}

export function initAnimationEvents() {
  const img = document.querySelector('.animate-backnforth');

  img.addEventListener('animationstart', listenToAnimation);
  img.addEventListener('animationend', listenToAnimation);
  img.addEventListener('animationiteration', listenToAnimation);

  document.addEventListener('keydown', fadingTea);
}
