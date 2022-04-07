let dragonScroll = document.getElementById("bestDeals");
function left(){
    bestDeals.scrollLeft -= 1300;
}
function right(){
    bestDeals.scrollLeft +=1300;
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