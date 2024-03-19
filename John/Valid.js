// Set the date we're counting down to
var countDownDate = new Date("Mars 15, 2024 00:00:00").getTime();

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
        var index = 0;
        var glitchedMessage = "";
        var interval = setInterval(function () {
            if (index < message.length) {
                glitchedMessage += String.fromCharCode(
                    Math.floor(Math.random() * 26) + 65
                );
                document.getElementById("countdown").innerHTML =
                    glitchedMessage;
                index++;
                // Play sound when letter is revealed
                sfxAudio.play();
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
}, 1000);

// Play sound on startup and loop
var audio = new Audio("EchoOfTheEye.mp3");
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.05;
audio.play();
