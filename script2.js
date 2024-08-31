document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const elapsed = document.querySelector('.elapsed');
    const timeNow = document.querySelector('.time_now');
    const timeFull = document.querySelector('.time_full');
    
    let isPlaying = false;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.innerHTML = `
                <!-- Play icon -->
                <path d="M5 3.879v16.242c0 1.067 1.292 1.625 2.048.848l13.152-8.121c.747-.462.747-1.579 0-2.041L7.048 3.031C6.292 2.254 5 2.812 5 3.879z"></path>`;
        } else {
            audioPlayer.play();
            playPauseButton.innerHTML = `
                <!-- Pause icon -->
                <path clip-rule="evenodd" d="M8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" fill-rule="evenodd"></path>`;
        }
        isPlaying = !isPlaying;
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const elapsedTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const percentage = (elapsedTime / duration) * 100;
        elapsed.style.width = `${percentage}%`;
        
        const minutesNow = Math.floor(elapsedTime / 60);
        const secondsNow = Math.floor(elapsedTime % 60);
        timeNow.textContent = `${minutesNow}:${secondsNow < 10 ? '0' : ''}${secondsNow}`;
        
        const minutesFull = Math.floor(duration / 60);
        const secondsFull = Math.floor(duration % 60);
        timeFull.textContent = `${minutesFull}:${secondsFull < 10 ? '0' : ''}${secondsFull}`;
    });

    previousButton.addEventListener('click', () => {
        audioPlayer.currentTime = 0;
        elapsed.style.width = '0%';
    });

    nextButton.addEventListener('click', () => {
        audioPlayer.currentTime = audioPlayer.duration;
        elapsed.style.width = '100%';
    });
});
