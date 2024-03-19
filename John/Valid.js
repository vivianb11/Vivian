let TypeSound = new Audio("Type VFX.mp3");

var setted = new Boolean(false);

// Set the date we're counting down to
var countDownDate = new Date("Mars 18, 2024 23:00:00").getTime();

if (countDownDate < new Date().getTime() && setted) {
    countDownDate = new Date().getTime() + 30000;
    setted = true;
}

// Update the countdown every second
var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        var message = "Look Under Your Pillow !!!";
        var sfxAudio = new Audio("Type VFX.mp3");
        document.getElementById("countdown").innerHTML = message;
        sfxAudio.play();
    }
}, 1000);

// Play sound on startup and loop
var audio = new Audio("EchoOfTheEye.mp3");
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.05;
audio.play();
