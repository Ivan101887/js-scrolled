const elemMain = document.querySelector('#Main');
const avalHeight = window.innerHeight;
const elemCourse = elemMain.querySelectorAll('.course');
const arrAllY = [];
const arrAllel = [];
let index = 0;
setArrs();
window.addEventListener('scroll', handleAnimation);

function setArrs() {
  elemCourse.forEach((e, i) => {
    arrAllY.push(e.querySelector('.course__title').offsetTop);
    arrAllY.push(e.querySelector('.course__imgContainer').offsetTop);
    arrAllY.push(e.querySelector('.course__descWrap').offsetTop);
    arrAllel[i * 3] = e.querySelector('.course__title');
    arrAllel[i * 3 + 1] = e.querySelector('.course__imgContainer');
    arrAllel[i * 3 + 2] = e.querySelector('.course__descWrap');
  })
  arrAllY.sort(function (a, b) { return a - b });
}

function handleAnimation(e) {
  if (arrAllY[index] - window.scrollY <= (avalHeight * 1 / 2)) {
    showCourse(arrAllel[index])
    index += 1;
  } 
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