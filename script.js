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
});