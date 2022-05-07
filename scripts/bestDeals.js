let dragonScroll = document.getElementById("bestDeals");

function left(){
    bestDeals.scrollLeft -= 500;
}
function right(){
    bestDeals.scrollLeft +=500;
}

function changeImage(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="block";
}
function revertImage(){
    document.getElementById("img2").style.display="none";
    document.getElementById("img1").style.display="block";

}
function changeImage1(){
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="block";
}
function revertImage1(){
    document.getElementById("img4").style.display="none";
    document.getElementById("img3").style.display="block";
}
function changeImage2(){
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="block";
}
function revertImage2(){
    document.getElementById("img6").style.display="none";
    document.getElementById("img5").style.display="block";
}
