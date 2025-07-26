function createFlyingMoney() {
  for (let i = 0; i < 30; i++) {
    const money = document.createElement("img");
    money.src = "assets/money.png";
    money.className = "money";
    money.style.position = "fixed";
    money.style.zIndex = 1;
    money.style.width = "40px";
    money.style.top = Math.random() * window.innerHeight + "px";
    money.style.left = Math.random() * window.innerWidth + "px";
    money.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
    document.getElementById("money-container").appendChild(money);
  }
}

createFlyingMoney();