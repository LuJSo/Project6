

var playerX = 250;
var playerY = 250;
var foodEaten = 0;
var timeStart = Date.now()



document.addEventListener("keydown", function(e) {
if(e.keyCode == 37 || e.keyCode == 65){
    playerX -=10;
 document.getElementById("player").setAttribute("x", playerX)
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    playerX +=10;
 document.getElementById("player").setAttribute("x", playerX)
  }
  if(e.keyCode == 40 || e.keyCode == 83){
    playerY +=10;
 document.getElementById("player").setAttribute("y", playerY)
  }
  else if(e.keyCode == 38|| e.keyCode == 87){
   playerY -=10;
 document.getElementById("player").setAttribute("y", playerY)
}


  foodY = Number(document.getElementById("Food1").getAttribute("y"))
  foodX = Number(document.getElementById("Food1").getAttribute("x"))

  foodY = Number(document.getElementById("Food2").getAttribute("y"))
  foodX = Number(document.getElementById("Food2").getAttribute("x"))

  if (playerX > foodX && playerX < foodX + 50 && playerY > foodY && playerY < foodY + 50) {
      console.log("Food relocated")
      document.getElementById("Food1").setAttribute("x",NumGen(75, 390));
            document.getElementById("Food1").setAttribute("y",NumGen(75, 160));
  }

  if (playerX > foodX && playerX < foodX + 50 && playerY > foodY && playerY < foodY + 50) {
      console.log("Food relocated")
      document.getElementById("Food2").setAttribute("x",NumGen(75, 390));
            document.getElementById("Food2").setAttribute("y",NumGen(75, 160));
  }

  function NumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

if(playerX > foodX && playerX < foodX + 50 && playerY > foodY && playerY < foodY + 50) {
    foodEaten=foodEaten+1
  document.getElementById("score").textContent = foodEaten;
}


if(foodEaten == 5) {
    document.getElementById("canvas").pauseAnimations()
    var timeStop = Date.now()
    var duration = Math.round((timeStop - timeStart)/1000)+" seconds"
}


  })
