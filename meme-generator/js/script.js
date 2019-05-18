// Function to create the Div to contain the meme
function createMemeDiv(imageURL, topText, bottomText){

    // Create the DIV
    var imgDiv = document.createElement('div'); 

    // Assign an id
    imgDiv.id = "meme"; // assign ID

    // Add child meme div to parent div
    meme_container.appendChild(imgDiv);  
        
    // Grab image from URL
    var img = document.createElement('img');
    img.src = imageURL;
    
    // Add image to meme DIV
    imgDiv.appendChild(img); 
    
    // Add text
    var topTextBox = document.createElement('div');
    topTextBox.id = "top-center";
    topTextBox.innerHTML = topText;
    imgDiv.appendChild(topTextBox); 

    // Add bottom text
    var bottomTextBox = document.createElement('div');
    bottomTextBox.id = "bottom-center";
    bottomTextBox.innerHTML = bottomText;
    imgDiv.appendChild(bottomTextBox);     

    // Assign onclick action to remove element
    imgDiv.onclick = function(e){
        this.parentNode.removeChild(this);
    }
}

function addMeme(){
    // Get user inputed data
    var imageURL = document.getElementById('imageURL').value;
    var topText = document.getElementById('topText').value;
    var bottomText = document.getElementById('bottomText').value;

    // Call function to create Meme
    createMemeDiv(imageURL, topText, bottomText);

    // Reset form
    document.forms['memeInput'].reset();
}  