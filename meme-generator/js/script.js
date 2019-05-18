// Function to generate IDs for divs that contain memes ie. meme1, meme2, etc.
function getDivID(){
    var count = 0;
    return function incrementCount(){
        ++count;
        var memeDivID = "meme" + count;
        return memeDivID
    }
}

// "Initialize" the function to create IDs for meme divs
count = getDivID();

// Function to create the Div to contain the meme
function createMemeDiv(imageURL, topText, bottomText){
    // Create the DIV
    var imgDiv = document.createElement('div'); 
    // Generate & assign the ID
    var imgDivID = count(); // generate div ID
    imgDiv.id = imgDivID; // assign ID
    // Add child meme div to parent div
    img_home.appendChild(imgDiv);  
        
    // Grab image from URL
    var img = document.createElement('img');
    img.src = imageURL;
    // Add image to meme DIV
    document.getElementById(imgDivID).appendChild(img); 
    
    // Add text
    var topTextBox = document.createElement('div');
    topTextBox.id = "top-center";
    topTextBox.innerHTML = topText;
    document.getElementById(imgDivID).appendChild(topTextBox); 

    // Add bottom text
    var bottomTextBox = document.createElement('div');
    bottomTextBox.id = "bottom-center";
    bottomTextBox.innerHTML = bottomText;
    document.getElementById(imgDivID).appendChild(bottomTextBox);     
}

function addMeme(){
    // Get user inputed data
    var imageURL = document.getElementById('imageURL').value;
    var topText = document.getElementById('topText').value;
    var bottomText = document.getElementById('bottomText').value;

    // Call function to create Meme
    createMemeDiv(imageURL, topText, bottomText);
}  