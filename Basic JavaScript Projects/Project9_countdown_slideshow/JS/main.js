//Creates a timer with an input for seconds
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds <= 0) {
            alert ("Time's Up");
        }
    }
    tick();
}

//Calls slide function on delay so it can load class names
var slideNumber = 0;
setTimeout(showSlides, 3000);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  console.log(slides.length)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log(slides[i].style.display)
  }
  slideNumber++;
  if (slideNumber > slides.length) {slideNumber = 1}
  slides[slideNumber-1].style.display = "block";
  setTimeout(showSlides, 3000);
}