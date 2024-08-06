document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.experience-card').forEach(c => {
            c.classList.remove('active');
        });
        card.classList.add('active');
    });
});
