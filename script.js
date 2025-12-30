let snowflakeCount = 0;
const maxSnowflakes = 90;

function createSnowflake() {
  if (snowflakeCount >= maxSnowflakes) return;

  const snowflake = document.createElement('div');
  const snowflakes = ['❄', '❅'];
  snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
  snowflake.classList.add('snowflake');

  const maxLeft = document.documentElement.clientWidth - 15;
  const startPosition = Math.random() * Math.max(0, maxLeft);
  snowflake.style.left = `${startPosition}px`;

  const size = 0.5 + Math.random() * 0.7;
  snowflake.style.fontSize = `${size}rem`;

  snowflake.style.opacity = 0.2 + Math.random() * 0.35;

  const duration = 2.5 + Math.random() * 3.5;
  snowflake.style.animationDuration = `${duration}s`;

  const rotation = Math.random() > 0.5 ? 'rotate(360deg)' : 'rotate(-360deg)';
  snowflake.style.setProperty('--rotation', rotation);

  document.body.appendChild(snowflake);
  snowflakeCount++;

  setTimeout(() => {
    snowflake.remove();
    snowflakeCount--;
  }, duration * 1000);
}

const snowInterval = setInterval(createSnowflake, 130);