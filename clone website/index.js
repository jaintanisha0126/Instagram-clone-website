
// -----------------------index page carousel--------------------------



let arr = ["img2.png", "img3.png", "img4.png"];

let i=0;

function slides2() {
document.getElementById("img").src = arr[i];

if (i < arr.length - 1)i++;
else i = 0;
}
setInterval(slides2, 1000);



// -----------------------index page carousel--------------------------



// --------------------------------login signup-------------------------------------------

