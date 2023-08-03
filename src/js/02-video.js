import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    

player.on("timeupdate", throttle(function (data) { localStorage.setItem("videoplayer-current-time", data.seconds) }, 1000))


    player.on('play', function() {
        //console.log('played the video!');
        //console.log(localStorage.getItem("videoplayer-current-time"));
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
            console.log('Current time set to:', seconds);
        }).catch(function (error) {
            console.error('Error setting current time:', error);
        });
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });







