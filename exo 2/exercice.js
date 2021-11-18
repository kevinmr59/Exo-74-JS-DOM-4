let catPic = document.getElementById("cat-pic");
let onCatClick = function(e) {
    var stashePic = document.getElementById("mustache-pic");
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    stashePic.style.top = mouseY.toString()+ 'px';
    stashePic.style.left = (mouseX - 50).toString()+ 'px';
    console.log(onCatClick)
}
catPic.addEventListener("click", onCatClick);









