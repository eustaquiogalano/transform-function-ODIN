import { listenToAnimation } from './animation';

const enterexitButton = document.querySelector('.in-and-out');
const cupOfTeaIMG = document.querySelector('.in-and-out > img');

export function initClickEvents() {
  enterexitButton.addEventListener('click', () => {
    console.log(cupOfTeaIMG.classList.toggle('translateDown'));
  });
}

export function initAnimationEvents() {
  const img = document.querySelector('.animate-backnforth');

  img.addEventListener('animationstart', listenToAnimation);
  img.addEventListener('animationend', listenToAnimation);
  img.addEventListener('animationiteration', listenToAnimation);
}
