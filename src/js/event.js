import { fadingTea, listenToAnimation, toggleModalDisplay } from './animation';

const enterexitButton = document.querySelector('.in-and-out');
const cupOfTeaIMG = document.querySelector('.in-and-out > img');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');

export function initClickEvents() {
  enterexitButton.addEventListener('click', () => {
    console.log(cupOfTeaIMG.classList.toggle('translateDown'));
  });

  openModalButton.addEventListener('click', toggleModalDisplay);
  closeModalButton.addEventListener('click', toggleModalDisplay);
}

export function initAnimationEvents() {
  const img = document.querySelector('.animate-backnforth');

  img.addEventListener('animationstart', listenToAnimation);
  img.addEventListener('animationend', listenToAnimation);
  img.addEventListener('animationiteration', listenToAnimation);

  document.addEventListener('keydown', fadingTea);
}
