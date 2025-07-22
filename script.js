// Add flying money animation
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');
    img.src = 'https://i.imgur.com/ZbXbT3P.png'; // dollar bill image
    img.className = 'flying-money';
    img.style.top = Math.random() * 100 + 'vh';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(img);
  }
});
