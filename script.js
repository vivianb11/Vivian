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
        // Fait disparaitre le popup après 3 secondes
        popup.style.top = "-100%";
        popup.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    }, 3000);
});
