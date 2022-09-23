const faqContent = document.querySelectorAll(".faq-content");
const faqQuestion = document.querySelectorAll(".faq-question");
const faqBtn = document.querySelectorAll(".faq-toggle");
const faqAnswer = document.querySelectorAll(".faq-answer");

let faqContentLength = faqContent.length;

for (let x = 0; x < faqContentLength; x++) {
  faqContent[x].addEventListener("click", function () {
    if (faqAnswer[x].style.display === "none") {
      faqQuestion[x].classList.add("faq-question-selected");
      faqBtn[x].style.transform = "rotate(180deg)";
      faqAnswer[x].style.display = "block";
    } else {
      faqQuestion[x].classList.remove("faq-question-selected");
      faqBtn[x].style.transform = "none";
      faqAnswer[x].style.display = "none";
    }
  });
}
