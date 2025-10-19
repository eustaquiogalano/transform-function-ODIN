const enterexitButton = document.querySelector('.in-and-out');
const cupOfTeaIMG = document.querySelector('.in-and-out > img');

export function initClickEvents() {
  enterexitButton.addEventListener('click', () => {
    console.log(cupOfTeaIMG.classList.toggle('translateDown'));
  });
}
