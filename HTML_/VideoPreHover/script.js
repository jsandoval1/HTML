let video = document.querySelector(".vid")

/* Adding the event listeners on the video to play/pause the video. */
video.addEventListener("mouseover", function () {
    video.play();
})

/* Applying the mouse out event to pause the video */
video.addEventListener("mouseout", function () {
    video.pause();
})