function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "inline-flex";
    changePosition();
  }


function changeBg(color){
    document.body.style.background = color;
 
}

function changeTx(color){
    document.getElementById("dropbtn2").style.color = color;
    document.getElementById("dropbtn1").style.color = color;
    document.getElementById("textClr1").style.color = color;
    document.getElementById("textClr2").style.color = color;
    document.getElementById("textClr3").style.color = color;
    document.getElementById("textClr4").style.color = color;
    document.getElementById("bgClr1").style.color = color;
    document.getElementById("bgClr2").style.color = color;
    document.getElementById("bgClr3").style.color = color;
    document.getElementById("bgClr4").style.color = color;
    document.getElementById("imgtext").style.color = color;
}

function changePosition() {

    document.getElementById("pictureGallery").className = "pics2";
    changePosition2();
}
  
  function changePosition2() {
    document.getElementById("img1").className = "gallery2";
    document.getElementById("img2").className = "gallery2";
    document.getElementById("img3").className = "gallery2";
    document.getElementById("img4").className = "gallery2";
    document.getElementById("img5").className = "gallery2";

}