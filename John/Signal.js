
var replayCount = 0;
var buttonCreated = false;

function ReplaySound() {
    var audio = document.querySelector("audio");
    audio.currentTime = 0;
    audio.play();

    replayCount++;

    if (replayCount > 5 && !buttonCreated) {
        document.getElementById('HintBtn').style.display = 'block';
    }

}

function Hint(){
    document.getElementById('message').textContent = '---..';
}