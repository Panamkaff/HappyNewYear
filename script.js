function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.innerHTML = "❄";
  snowflake.classList.add("snowflake");

  // Случайная позиция по горизонтали
  const startPosition = Math.random() * window.innerWidth;
  snowflake.style.left = `${startPosition}px`;

  // Случайный размер
  const size = 0.5 + Math.random() * 1.2;
  snowflake.style.fontSize = `${size}rem`;

  // Случайная прозрачность
  snowflake.style.opacity = 0.4 + Math.random() * 0.6;

  // Случайная скорость падения (от 5 до 15 секунд)
  const duration = 5 + Math.random() * 10;
  snowflake.style.animationDuration = `${duration}s`;

  document.body.appendChild(snowflake);

  // Удаляем снежинку после окончания анимации
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// Запускаем снежинки каждые 200 мс
setInterval(createSnowflake, 200);

// Адаптация при изменении размера окна
window.addEventListener("resize", () => {
  const snowflakes = document.querySelectorAll(".snowflake");
  snowflakes.forEach((sf) => sf.remove());
});
