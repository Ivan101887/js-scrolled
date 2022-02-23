const elemMain = document.querySelector('#Main');
const elemTitle = elemMain.querySelectorAll('.course__title');
const elemDescWrap = elemMain.querySelectorAll('.course__descWrap');
const elemImgContainer = elemMain.querySelectorAll('.course__imgContainer');
const avalHeight = window.innerHeight;
window.addEventListener('scroll', selection);

function handleAnimation(e) {
  let currentPosY = e.getBoundingClientRect().top;
  if (currentPosY <= (avalHeight * 1 / 2)) {
    showCourse(e);
  } else {
    hideCourse(e);
  }
}
function selection() {
  elemTitle.forEach(handleAnimation);
  elemImgContainer.forEach(handleAnimation);
  elemDescWrap.forEach(handleAnimation);
}

function showCourse(item) {
  item.classList.remove('js-fade-out');
  if (item.classList.contains('course__title')) {
    item.classList.add('js-fade-bottom');
  }
  else if (item.classList.contains('course__imgContainer')) {
    item.classList.add('js-fade-right');
  } else {
    item.classList.add('js-fade-left');
  }
}
function hideCourse(item) {
  if (item.classList.contains('js-fade-bottom')) {
    item.classList.add('js-fade-out');
    item.classList.remove('js-fade-bottom');
  }
  else if (item.classList.contains('js-fade-right')) {
    item.classList.add('js-fade-out');
    item.classList.remove('js-fade-right');
  }
  else if (item.classList.contains('js-fade-left')) {
    item.classList.add('js-fade-out');
    item.classList.remove('js-fade-left');
  }
}