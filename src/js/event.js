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
}

export function initAnimationEvents() {
  const img = document.querySelector('.animate-backnforth');

  img.addEventListener('animationstart', listenToAnimation);
  img.addEventListener('animationend', listenToAnimation);
  img.addEventListener('animationiteration', listenToAnimation);

  document.addEventListener('keydown', fadingTea);
}
