
function getData() {
    var imageURL = document.getElementById('imageURL').value;
    var topText = document.getElementById('topText').value;
    var bottomText = document.getElementById('bottomText').value;
    alert(message)
}

function addImage(imageURL) {
    var img = new Image();
    img.src = imageURL
    img_home.appendChild(img);
}