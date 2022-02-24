const elemMain = document.querySelector('#Main');
const elemTitle = elemMain.querySelectorAll('.course__title');
const elemDescWrap = elemMain.querySelectorAll('.course__descWrap');
const elemImgContainer = elemMain.querySelectorAll('.course__imgContainer');
const avalHeight = window.innerHeight;
const arrAllY = [];
const arrAllel = [];
let index = 0;
window.addEventListener('scroll', handleAnimation);
setArrs()
function setArrs() {
  elemTitle.forEach((e, i) => {
    arrAllY.push(e.offsetTop);
    arrAllel[i * 3] = elemTitle[i];
  });
  elemDescWrap.forEach((e, i) => {
    arrAllY.push(e.offsetTop);
    arrAllel[i * 3 + 1] = elemImgContainer[i];
  });
  elemImgContainer.forEach((e, i) => {
    arrAllY.push(e.offsetTop);
    arrAllel[i * 3 + 2] = elemDescWrap[i];
  });
  arrAllY.sort(function (a, b) { return a - b });
}

function handleAnimation(e) {
  if (arrAllY[index] - window.scrollY <= (avalHeight * 1 / 2)) {
    showCourse(arrAllel[index])
    index += 1;
  } else {
    hideCourse(arrAllel[index])
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