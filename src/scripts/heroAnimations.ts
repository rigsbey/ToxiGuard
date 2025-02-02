export const initHeroAnimations = () => {
  // 3D эффект для карточек
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const xAxis = (window.innerWidth / 2 - mouseEvent.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - mouseEvent.pageY) / 25;
      (card as HTMLElement).style.transform = 
        `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  });

  // ... остальной код без изменений
};