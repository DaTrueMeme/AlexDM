const cards = document.querySelectorAll('.card');
const toggleSwitch = document.getElementById('flexSwitchCheckDefault');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (toggleSwitch.checked) {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            confetti({
                particleCount: 10,
                spread: 70,
                origin: {
                    x: centerX / window.innerWidth,
                    y: centerY / window.innerHeight
                }
            });
        }
    });
});