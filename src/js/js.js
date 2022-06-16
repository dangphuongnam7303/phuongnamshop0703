var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];
var numberCount = document.querySelector('#number');
var index =0;

function Slide(title, background) {
  this.title = title;
  this.background = background;
  this.id = "slide" + slideIndex;
  slideIndex++;
  slideArray.push(this);
}

var back1 = new Slide(
  "WELCOME TO MY BLOG",
  "./src/img/blog/back1.jpg",
);

var back2 = new Slide(
  "Hi 👋, I'm Phuong Nam",
  "./src/img/blog/back2.jpg",
);

var back3 = new Slide(
  "Let's see my profile",
  "./src/img/blog/back3.jpg",
);


function buildSlider() {
  var myHTML;

  for (var i = 0; i < slideArray.length; i++) {
    myHTML +=
      "<div id='" +
      slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" +
      slideArray[i].background +
      ");'>" +
      "<div class='slideOverlay'>" +
      "<h1>" +
      slideArray[i].title +
      "</h1>" +
      "</div>" +
      "</div>";
  }

  document.getElementById("mySlider").innerHTML = myHTML;

  document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();
function prevSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    nextSlideIndex = currentSlideIndex - 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInLeft");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutRight");

  currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
  var nextSlideIndex;
  if (currentSlideIndex === slideArray.length - 1) {
    nextSlideIndex = 0;
  } else {
    nextSlideIndex = currentSlideIndex + 1;
  }

  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  document
    .getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInRight");
  document
    .getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutLeft");

  currentSlideIndex = nextSlideIndex;

}

function play() {
  setInterval(function(){
    nextSlide();
  },3000);
}
play();

