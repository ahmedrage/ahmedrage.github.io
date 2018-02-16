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

var menuItems = [`<a href = "personal.html"><div onmouseover = "blurImage(document.getElementById('img1'), true);" onmouseout = "blurImage(document.getElementById('img1'), false);" class = "SubAchieve" style = "float:right; background-color:#7496D2;color:#FFFFFF;"><img id = "img1" class= "Achieve" src = "images/MATDTScrn.png"style = "left:0;"> Personal<br>More </div></a>`,
`<a href = "extra.html"><div onmouseover = "blurImage(document.getElementById('img2'), true);" onmouseout = "blurImage(document.getElementById('img2'), false);" class = "SubAchieve" style = "float:right; background-color:#C7CEF6;color:#FFFFFF;"><img id = "img2" id = "img1" class= "Achieve" src = "images/Mistakes.jpg"style = "left:0;"> Extra-Curricular<br>More</div></a>`,
`<a href = "vocational.html"><div onmouseover = "blurImage(document.getElementById('img3'), true);" onmouseout = "blurImage(document.getElementById('img3'), false);" class = "SubAchieve" style = "float:left; background-color:#D8A49B;color:#000000;"><img id = "img3" class= "Achieve" src = "images/AieCert.JPG" style = "width:100%;left:0;">Vocational<br>More </div></a>`,
`<a href = "secondary.html"><div onmouseover = "blurImage(document.getElementById('img4'), true);" onmouseout = "blurImage(document.getElementById('img4'), false);" class = "SubAchieve" style = "float:left; background-color:#E6A2C5;color:#000000;"><img id = "img4" class= "Achieve" src = "images/IT2.jpg"style = "right:0; bottom: 1000px;">Secondary Education<br>More</div></a>`];

function printMenu (index) {
  for (i = 0; i < menuItems.length; i++) {
    if (i == index) {
      document.write(`<a href = "index.html"><div class = "SubAchieve" style = "float:left; background-color:#E6A2C5;color:#000000;">Home<br>More</div></a>`)
    } else {
      document.write(menuItems[i]);
    }
  }
}
