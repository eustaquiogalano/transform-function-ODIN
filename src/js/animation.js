export function listenToAnimation(event) {
  const sp = document.createElement('span');

  switch (event.type) {
    case 'animationstart':
      sp.textContent = 'start ';
      break;
    case 'animationend':
      sp.textContent = 'end ';
      break;
    case 'animationiteration':
      sp.textContent = 'new ';
      break;
  }

  document.querySelector('.output').appendChild(sp);
}

export function fadingTea() {
  const teaImg = document.querySelector('.fade-in-out img');
  teaImg.classList.toggle('fade-in');
}

export function toggleModalDisplay() {
  document.querySelector('.modal').classList.toggle('show');
}
