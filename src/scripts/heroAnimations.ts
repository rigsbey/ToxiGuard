export const initHeroAnimations = () => {
  // 3D эффект для карточек
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      (card as HTMLElement).style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  });

  // Анимация взрыва
  const explodeCard = (cardId: string) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    
    card.style.transform = 'scale(1.2)';
    card.style.filter = 'hue-rotate(90deg) blur(2px)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
      card.style.filter = 'none';
    }, 500);
  };
};

export default initHeroAnimations; 