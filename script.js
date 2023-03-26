window.addEventListener('scroll', function () {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        document.querySelector('footer').style.display = 'block';
    } else {
        document.querySelector('footer').style.display = 'none';
    }
});