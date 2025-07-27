// Flying money duplication (basic loop for animation)
document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;
  for (let i = 0; i < 10; i++) {
    const money = document.createElement("img");
    money.src = "assets/money.png";
    money.className = "money";
    money.style.left = Math.random() * 100 + "vw";
    money.style.top = Math.random() * 50 + 50 + "vh";
    money.style.animationDuration = (6 + Math.random() * 4) + "s";
    container.appendChild(money);
  }
});