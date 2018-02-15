var Images = [
  ["MurderAtTheDinnerTable.jpg", "Murder At The Dinner Table", "A game about murderin people, jk not really you catch killers"],
  ["OutOfTheDarkness.jpg", "Out Of The Darkness", "My artsy game, but it actually means nothing"],
  ["WhiteCollar.png", "White Collar", "Ha, it's actually a doom clone, imagine that!"],
  ["ValkyrieShift.PNG", "Valyrie Shift", "The one game I've made that's fun to play"],
  ["TheThick.jpg", "The Thick", "A stupid minesweeper clone that rlly isn't worth its salt"],
  ["Rampage.jpg", "Rampage", "This ones a bit .. umm violent?"]
];
var i = 0;

function nextPhoto (Change) {
  if (Change < 0 && i <= 0) {
    i = Images.length - 1;
  } else if (i >= Images.length -1 && Change > 0) {
    i = 0;
  } else {
    i += Change;
  }
  document.getElementById('Slide').src='images/' + Images[i][0];
  document.getElementById('slideName').innerHTML= Images[i][1];
  document.getElementById('slideDesc').innerHTML= Images[i][2];
  document.getElementById('Slide').style = "height:40vh;";
}

function blurImage (image, blur) {
if (blur){
  image.classList.add("Achieves");
} else {
  image.classList.remove("Achieves");
}
}


AOS.init({
  easing: 'ease-in-out-sine'
});
