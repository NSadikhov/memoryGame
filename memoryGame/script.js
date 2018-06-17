let clickCount = 0;
function $(select){
  return document.querySelector(select);
}
let checkArray = [];
let completeArray = [];
function eventFunc(flexName) {
  if (
    flexName.style.background != "lightgreen" &&
    flexName.style.background != "red"
  ) {
    checkArray.push(flexName);
    clickCount++;
    flexName.style.transform = "rotateY(180deg)";
    setTimeout(function() {
      flexName.children[0].style.display = "block";
      flexName.style.background = "red";
      if (clickCount == 2) {
        if (checkArray[0].children[0].src == checkArray[1].children[0].src) {
          checkArray[0].style.background = "lightgreen";
          checkArray[1].style.background = "lightgreen";
          completeArray.push(checkArray[0],checkArray[1]);
          setTimeout(function(){
            if(completeArray.length==16){
              alert("Congratulations...");
              document.location.reload();
            }
          },500);
          checkArray.splice(0, 2);
          clickCount = 0;
        } else {
          setTimeout(function() {
            checkArray[0].style.transform = "rotateY(0deg)";
            checkArray[1].style.transform = "rotateY(0deg)";
            checkArray[0].children[0].style.display = "none";
            checkArray[1].children[0].style.display = "none";
            checkArray[0].style.background = "skyblue";
            checkArray[1].style.background = "skyblue";
            checkArray.splice(0, 2);
            clickCount = 0;
          }, 500);
        }
      }
    }, 300);
  }
}

$(".flex:first-child").addEventListener("click", function(){
  eventFunc($(".flex:first-child"));
});
$(".flex:nth-child(2)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(2)"));
});
$(".flex:nth-child(3)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(3)"));
});
$(".flex:nth-child(4)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(4)"));
});
$(".flex:nth-child(5)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(5)"));
});
$(".flex:nth-child(6)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(6)"));
});
$(".flex:nth-child(7)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(7)"));
});
$(".flex:nth-child(8)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(8)"));
});
$(".flex:nth-child(9)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(9)"));
});
$(".flex:nth-child(10)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(10)"));
});
$(".flex:nth-child(11)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(11)"));
});
$(".flex:nth-child(12)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(12)"));
});
$(".flex:nth-child(13)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(13)"));
});
$(".flex:nth-child(14)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(14)"));
});
$(".flex:nth-child(15)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(15)"));
});
$(".flex:nth-child(16)").addEventListener("click", function() {
  eventFunc($(".flex:nth-child(16)"));
});

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let arrayImg = ["images/bag.png","images/beach.png","images/businessman.png","images/car.png","images/cinema.png","images/diamond.png","images/drop.png","images/home.png"];
var numbOne = null;
var numbSecond = null;

for (let i = 1; i < 9; i++) {
  let count = i;
  numbOne = Math.floor(Math.random() * array.length + 1);
  let randFrist = array[numbOne - 1];
  array.splice(numbOne - 1, 1);
  console.log(numbOne);
  numbSecond = Math.floor(Math.random() * array.length + 1);
  let randSecond = array[numbSecond - 1];
  array.splice(numbSecond - 1, 1);
  console.log(numbSecond);
  console.log(array);
  let m = document.querySelector(".flex:nth-child(" + randFrist + ")");
  let n = document.querySelector(".flex:nth-child(" + randSecond + ")");
  count--;
  m.children[0].src = arrayImg[count];
  n.children[0].src = arrayImg[count];
}