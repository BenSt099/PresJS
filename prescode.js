var currentSlideId;
var minSlideId;
var maxSlideId;
var slideswidth;
var slidesheight;

function loadslides() {
    currentSlideId = 1;
    minSlideId = 1;
    maxSlideId = Number(document.getElementById("3").id);
    setSlidesSize(50, 300);
    enableKeyListener();
}

function setSlidesSize(w, h) {
    slideswidth = w;
    slidesheight = h;
    for (id = 1; id <= maxSlideId; id++) {
        document.getElementById(id).style.width = slideswidth + "%";
        document.getElementById(id).style.height = slidesheight + "px";
    }
}

function darkMode() {
    document.body.style.backgroundColor = "rgb(57, 57, 57)";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
}

function increaseSize() {
    for (id = 1; id <= maxSlideId; id++) {
        slidesheight += 40;
        slideswidth += 10;
        setSlidesSize(slideswidth, slidesheight);
    }
}

function decreaseSize() {
    for (id = 1; id <= maxSlideId; id++) {
        slidesheight -= 40;
        slideswidth -= 10;
        setSlidesSize(slideswidth, slidesheight);
    }
}

function enableKeyListener() {
    document.addEventListener("keydown", keyPressed, false);
}

function disableKeyListener() {
    document.removeEventListener("keydown", keyPressed);
}

function startPresentation() {
    document.getElementById(currentSlideId.toString()).style.display = "block";
}

function keyPressed(e) {
    var keyCode = e.which;
    if (keyCode == 37) { // 37 ArrowLeft
        lastSlide();
    } else if (keyCode == 39) { // 39 ArrowRight
        nextSlide();
    } else if (keyCode = 38) { // 38 ArrowUp
        startPresentation();
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
        document.getElementById(currentSlideId.toString()).style.animation = "shadenow 2s linear";
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