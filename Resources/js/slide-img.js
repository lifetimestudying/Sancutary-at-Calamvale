var index = 1;

function plusIndex_1(x) {
  index = index + 1;
  showImage_1(index);
}

showImage(1);

function showImage(n) {
  var i;
  var x = document.getElementsByClassName("slide");

  if(n > x.length) {
    index = 1
  }

  if(n < 1) {
    index = x.length
  }

  for(i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[index - 1].style.display = "block";
}

autoSlide();

function autoSlide() {
  var i;
  var x = document.getElementsByClassName("slide");

  for(i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  if(index > x.length) {
    index = 1
  }

  x[index-1].style.display = "block";
  index++;
  setTimeout(autoSlide, 5000);
}
