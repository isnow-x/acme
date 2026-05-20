const questions = document.querySelectorAll(".qnalist details");

/*
  let c = a.getAttribute('title')
  a.setAttribute(b,c)  a에서b 속성의 값을 c로 변경

  대상.removeAttribute(속성명)

  questions을 클릭하면 할일
    클릭한 그 요소의 부모 찾고
    부모의 형제 자매 찾고
    클릭한 그 요소가 아닌 형제자매들에서 open 속성을 제거

*/
questions.forEach(q => {
  q.addEventListener("click", () => {
    let parent = q.parentElement.parentElement;
    let siblings = [...parent.children];
    siblings.forEach(sibling => {
      if (parent !== sibling) {
        sibling.querySelector("details").removeAttribute("open");
      }
    });
  });
});
