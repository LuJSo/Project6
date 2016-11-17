var CarnoX = Number(document.getElementById("Carno").getAttribute("x"));
var CarnoY = Number(document.getElementById("Carno").getAttribute("y"));
if(e.keyCode == 37 || e.keyCode == 65){
    CarnoX -=10;
 document.getElementById("Carno").setAttribute("x", CarnoX)

  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    CarnoX +=10;
 document.getElementById("Carno").setAttribute("x", CarnoX)


  }
  if(e.keyCode == 40 || e.keyCode == 83){
    CarnoY +=10;
 document.getElementById("Carno").setAttribute("y", CarnoY)


  }
  else if(e.keyCode == 38|| e.keyCode == 87){
   CarnoY -=10;
 document.getElementById("Carno").setAttribute("y", CarnoY)
  }
