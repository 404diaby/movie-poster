const rankings = document.querySelectorAll('.rating');

rankings.forEach((ranking) => {
    const stars = ranking.querySelectorAll('.star');
    let selectedRating = 0; // Variable pour stocker la note sélectionnée

    stars.forEach((star) => {
        const starRating = parseInt(star.getAttribute('data-rating'));

        star.addEventListener('click', () => {
            selectedRating = starRating;

            stars.forEach((s) => {
                const sRating = parseInt(s.getAttribute('data-rating'));
                s.classList.toggle('active', sRating <= selectedRating);
            });
        });

        star.addEventListener('mouseenter', () => {
            const tempRating = starRating;

            stars.forEach((s) => {
                const sRating = parseInt(s.getAttribute('data-rating'));
                s.classList.toggle('temp-active', sRating <= tempRating);
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach((s) => {
                s.classList.remove('temp-active');
            });
        });
    });
});