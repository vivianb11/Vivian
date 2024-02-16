document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.code-block');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function() {
            if (this.value.length > 1) {
                this.value = this.value.slice(0, 1);
            }
            var next = this.nextElementSibling;
            if (next && this.value) {
                next.focus();
            }
        });
        inputs[i].addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value) {
                var prev = this.previousElementSibling;
                if (prev) {
                    prev.focus();
                }
            }
            else if (e.key === 'Enter') {
                validateCode();
            }
        });
    }
});



function validateCode() {
    var code1 = document.getElementById('code1').value;
    var code2 = document.getElementById('code2').value;
    var code3 = document.getElementById('code3').value;
    var code4 = document.getElementById('code4').value;
    var code = code1 + code2 + code3 + code4;
    if (code === '2805') {
        window.location.href = 'valid.html';John/John.js
    } else {
        document.getElementById('message').textContent = 'Incorrect code. Please try again.';
    }
}

var audio = new Audio('John/Outer Wilds.mp3');
audio.loop = true;
audio.volume = 0.05;
audio.play();