document.getElementById('messageButton').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    const audio = document.getElementById('birthday-audio');
    audio.play();
});
