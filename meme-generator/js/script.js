function addImage(imageURL) {
    var img = new Image();
    img.src = imageURL
    img_home.appendChild(img);
}

function getMeme(){
    // Get user inputted data
    var imageURL = document.getElementById('imageURL').value;
    var topText = document.getElementById('topText').value;
    var bottomText = document.getElementById('bottomText').value;
    
    // Call addImage function to post image
    addImage(imageURL);    
}

