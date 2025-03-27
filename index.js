document.querySelectorAll('.offer').forEach(offer => {
    offer.addEventListener('mouseenter', () => {
        offer.querySelector('.options').style.display = 'block';
    });
    offer.addEventListener('mouseleave', () => {
        offer.querySelector('.options').style.display = 'none';
    });
});