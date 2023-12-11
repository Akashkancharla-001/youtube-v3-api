
const apiKey = 'AIzaSyC5TZrjGjkUl_4VjJyhz7JfbBlS22PqhzU';
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
        },
    });
}

function loadVideo() {
    const videoId = document.getElementById('videoId').value;
    
    // Fetch video details using YouTube API
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
        .then(response => response.json())
        .then(data => {
            const videoTitle = data.items[0].snippet.title;
            document.getElementById('player').innerHTML = `<h2>${videoTitle}</h2>`;
            
            // Load video into the player
            player.cueVideoById(videoId);
        })
        .catch(error => console.error('Error fetching video details:', error));
}
