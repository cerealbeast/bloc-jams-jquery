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

calculateTotalValue(length) {
 var minutes = Math.floor(length / 60),
   seconds_int = length - minutes * 60,
   seconds_str = seconds_int.toString(),
   seconds = seconds_str.substr(0, 2),
   time = minutes + ':' + seconds
 return time;
}
calculateCurrentValue(currentTime) {
 var current_hour = parseInt(currentTime / 3600) % 24,
   current_minute = parseInt(currentTime / 60) % 60,
   current_seconds_long = currentTime % 60,
   current_seconds = current_seconds_long.toFixed(),
   current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
 return current_time;
});
