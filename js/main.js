/* 
window에 스크롤이 생기면 할일
  그 스크롤양이 0보다 크면 body에 active 추가
  0이면 active 제거
*/
// const body = document.body;
const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const slideWrapper = document.querySelector(".slidewrapper"),
  slideContainer = slideWrapper.querySelector(".slidecontainer"),
  slides = slideContainer.querySelectorAll("li"),
  slideCount = slides.length,
  prevBtn = slideWrapper.querySelector(".prev"),
  nextBtn = slideWrapper.querySelector(".next");
let currentIdx = 0;

/* slideContainer 너비 지정 */
slideContainer.style.width = `${slideCount * 100}%`;

/* 
슬라이드 이동 함수 
moveSlide 함수 생성, 
이 함수는 숫자 num이 들어오면 
num 번호에 해당하는 슬라이드 보이도록 이동
transform:translateX(33.3333%)
*/
function moveSlide(num) {
  slideContainer.style.transform = `translateX(${-(num / slideCount) * 100}%)`;
  currentIdx = num;
}

//버튼으로 이동하기
/*
다음 버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (마지막이면 첫번째 슬라이드로 이동)
  moveSlide(nextIdx) 실행

이전버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (첫번째 슬라이드면 마지막 슬라이드로 이동)
  moveSlide(nextIdx) 실행  
*/
nextBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  moveSlide(nextIdx);
});
prevBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
  moveSlide(nextIdx);
});
