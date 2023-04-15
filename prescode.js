var currentSlideId;
var minSlideId;
var maxSlideId;

function loadslides() {    
    currentSlideId = 1;
    minSlideId = 1;
    maxSlideId = Number(document.getElementById("3").id);
}

function startPresentation() {
    document.getElementById(currentSlideId.toString()).style.display = "block";
    document.addEventListener("keydown", keyPressed, false);  
}

function keyPressed(e) {
    var keyCode = e.keyCode;
    if (keyCode == 37) { // 37 ArrowLeft
        lastSlide();
    } else if (keyCode == 39) { // 39 ArrowRight
        nextSlide();
    }
}

function nextSlide() {
    if (currentSlideId == maxSlideId) {
        document.getElementById(currentSlideId.toString()).style.animation = "shadeaway 4s linear";
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = -1;
        document.getElementById(currentSlideId.toString()).style.display = "block";
    } else if (currentSlideId == -1) {
        () => null;
    } else {
        document.getElementById(currentSlideId.toString()).style.animation = "shadeaway 2s linear";
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = currentSlideId + 1;
        document.getElementById(currentSlideId.toString()).style.animation="shadenow 2s linear";
        document.getElementById(currentSlideId.toString()).style.display = "block";
    }
}

function lastSlide() {
    if (currentSlideId == 1) {
        () => null;
    } else if (currentSlideId == -1) {
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = maxSlideId;
        document.getElementById(maxSlideId.toString()).style.display = "block";
    } else {
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = currentSlideId - 1;
        document.getElementById(currentSlideId.toString()).style.display = "block";
    }
}