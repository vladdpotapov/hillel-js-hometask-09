function slideNext() {
    image.src = imagesArray[currentImage];
    currentImage++;
    image.src = imagesArray[currentImage];  
    if ((currentImage + 1) >= (imagesArray.length)) {
        buttonNext.disabled = true;
        buttonPrev.disabled = false;
    }
}

function slidePrev() {
    image.src = imagesArray[currentImage];
    currentImage--;
    image.src = imagesArray[currentImage];  
    if (currentImage === 0) {
        buttonPrev.disabled = true;
        buttonNext.disabled = false;
    }
}

function arrayLengthCheck() {
    if (imagesArray.length === 1) {
        buttonNext.disabled = true;
        buttonPrev.disabled = true;
    }
}
