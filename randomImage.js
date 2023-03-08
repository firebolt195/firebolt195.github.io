window.onload = getPicture;
var memes = new Array("memes/404image.png","memes/weird.jpg","memes/hr.png");

function getPicture() {
    var ran = Math.floor(Math.random() * memes.length);
    document.getElementById("myPicture").src = memes[ran];
}
