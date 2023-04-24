const ball = document.getElementById('ball');
const basket = document.getElementById('basket');
let score = 0;

ball.addEventListener('click', () => {
  score++;
  document.title = `Score: ${score}`;
  ball.style.top = '0';
  ball.style.left = `${Math.floor(Math.random() * 300) + 50}px`;
});

setInterval(() => {
  const ballTop = parseInt(ball.style.top);
  const basketLeft = parseInt(basket.style.left);
  if (ballTop > 380 && ballTop < 400 && basketLeft > 170 && basketLeft < 230) {
    score++;
    document.title = `Score: ${score}`;
    ball.style.top = '0';
    ball.style.left = `${Math.floor(Math.random() * 300) + 50}px`;
  } else if (ballTop > 400) {
    alert(`Game over! Your score is ${score}`);
    score = 0;
    document.title = 'Catch the Ball';
  }
}, 10);
