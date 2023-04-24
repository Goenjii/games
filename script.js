if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', () => {
    alert('You won!');
});
