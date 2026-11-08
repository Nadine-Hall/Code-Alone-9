// Name: Nadine Hall
// Description: Simple social media post generator

//live username preview
function updateUsername(){
    let usernameInput = document.getElementById("username").value;
    let profileName = document.querySelector(".profile-name");

    if (usernameInput === ""){
        profileName.innerText = "User Name";
    }else{
        profileName.innerText = usernameInput;
    }
}

//live post text preview
function updatePostText(){
    let postTextInput = document.getElementById("postText").value;
    let postTextPreview = document.querySelector(".post-text");

    if (postTextInput === ""){
        postTextPreview.innerText = "Your post will show here...";
    }else{
        postTextPreview.innerText = postTextInput;
    }
    
}

// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    return URL.createObjectURL(image);
}

//image upload and preview
function updateImage(){
    let imageUrl = getImageFromUpload();
    let previewImage = document.getElementById("previewImage");

    previewImage.setAttribute("src", imageUrl);
}

//Image style selection
function updateImageStyle(){
    let selectedStyle = document.getElementById("imageStyle").value
    let previewImage = document.getElementById("previewImage");
    //retain the base class along with the style class
    previewImage.setAttribute("class", "post-image " + selectedStyle);
}



