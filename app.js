// Dynamic Pricing Calculator
function calculatePrice() {
    const clientBudget = document.getElementById('client-budget').value;
    const toxicityMultiplier = 1.25; // This would come from AI analysis
    const recommendedPrice = clientBudget * toxicityMultiplier;
    
    document.querySelector('.multiplier').textContent = `${toxicityMultiplier}x`;
    document.querySelector('.final-price').textContent = `Your price: $${recommendedPrice.toFixed(0)}`;
}

// Animated Loss Counter
let lossCounter = 384950;
setInterval(() => {
    lossCounter += 127;
    document.getElementById('loss-counter').textContent = `$${lossCounter.toLocaleString()} lost this week`;
}, 1000);

// Initialize FOMO Timer
function startTimer(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        document.getElementById('price-timer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (++timer >= 86400) timer = 0;
    }, 1000);
}

startTimer(0);

// Добавляем 3D эффект для карточек
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Анимация взрыва для токсичных ТЗ
function explodeCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.transform = 'scale(1.2)';
    card.style.filter = 'hue-rotate(90deg) blur(2px)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.filter = 'none';
    }, 500);
} 