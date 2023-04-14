var currentSlideId;
var minSlideId;
var maxSlideId;

function loadslides() {
    currentSlideId = Number(document.getElementById("1").id);
    minSlideId = Number(document.getElementById("1").id);
    maxSlideId = Number(document.getElementById("3").id);
}

function startPresentation() {
    document.getElementById(currentSlideId.toString()).style.display = "block";
}

function nextSlide() {
    if (currentSlideId == maxSlideId) {
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = -1;
        document.getElementById(currentSlideId.toString()).style.display = "block";
    } else if (currentSlideId == -1) {
        () => null;
    } else {
        document.getElementById(currentSlideId.toString()).style.display = "none";
        currentSlideId = currentSlideId + 1;
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