{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex >= album.songs.length) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event){
    player.setVolume(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control .total-time').text( totalTime );
    $('#time-control input').val(percent);
  }, 1000);
};

function calculateTotalValue(length) {
 var minutes = Math.floor(length / 60);
   let seconds_int = length - minutes * 60;
   let seconds_str = seconds_int.toString()
   let seconds = seconds_str.substr(0, 2);
   let time = minutes + ':' + seconds;
 return time;
}
function calculateCurrentValue(currentTime) {
 var current_hour = parseInt(currentTime / 3600) % 24;
   let current_minute = parseInt(currentTime / 60) % 60;
   let current_seconds_long = currentTime % 60;
   let current_seconds = current_seconds_long.toFixed();
   let current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
 return current_time;
}
