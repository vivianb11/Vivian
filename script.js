//#region Popup Interaction
const copyLink = document.querySelector('#copy-link');
const textToCopy = 'vivianb.pro@gmail.com';

copyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied successfully!');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
    <div class="popup-content">
      <h2>Email Copied!</h2>
      <p>The email has been copied to the clipboard</p>
      <button id="closeButton">Close</button>
    </div>
  `;

    document.body.appendChild(popup);

    // Fait apparaitre le popup de la top de la page
    popup.style.top = "-100%";
    popup.style.opacity = "0";
    popup.style.transition = "all 0.3s ease-in-out";
    setTimeout(() => {
        popup.style.top = "0";
        popup.style.opacity = "1";
    }, 100);

    const closeButton = popup.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        // Fait disparaitre le popup
        popup.style.top = "-100%";
        popup.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    });

    setTimeout(() => {
        // Fait disparaitre le popup apr�s 3 secondes
        popup.style.top = "-100%";
        popup.style.opacity = "0";
    }, 3000);
});
//#endregion

//#region Deck Handler
document.addEventListener("DOMContentLoaded", function () {
  const decks = document.querySelectorAll(".card-deck");

  decks.forEach(function (deck) {
    const cards = deck.querySelectorAll(".card");
    const triangles = deck.querySelectorAll(".triangle");
  
    let currentIndex = 0;
    cards[currentIndex].classList.add("active");
  
    triangles.forEach(function (triangle, index) {
      triangle.addEventListener("click", function () {
        cards[currentIndex].classList.remove("active");
        if (triangle.classList.contains("prev")) {
          currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        } else if (triangle.classList.contains("next")) {
          currentIndex = (currentIndex + 1) % cards.length;
        }
        cards[currentIndex].classList.add("active");
      });
    });
  });
});
//#endregion

//#region Video Manager
const videos = document.querySelectorAll('video');

if (videos.length > 0) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Play video when 50% of it is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, options);

  videos.forEach(video => {
    observer.observe(video);
  });
}
//#endregion
  
