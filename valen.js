const hearts = ['💕', '💖', '💞', '💗', '❤️‍🔥', '🩷'];
const container = document.getElementById('hearts');

if (container) {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = (Math.random() * 8) + "s";
        heart.style.fontSize = (Math.random() *15 + 15) + 'px';
        container.appendChild(heart);
    }
}

function openGift() {
    document.getElementById('giftModal').classList.add('show');
}

function closeGift(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('modal-close')) {
        document.getElementById('giftModal').classList.remove('show');
    }
}