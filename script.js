document.addEventListener("DOMContentLoaded", function() {
    var audioElement = document.getElementById("background-music");
    var toggleButton = document.getElementById("toggle-music");

    toggleButton.addEventListener("click", function() {
        if (audioElement.paused) {
            audioElement.play();
            toggleButton.textContent = "Pause Music";
        } else {
            audioElement.pause();
            toggleButton.textContent = "Play Music";
        }
    });
});
audioElement.volume = 0.5;  // Âm lượng từ 0.0 đến 1.0
