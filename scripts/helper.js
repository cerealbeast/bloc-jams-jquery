class Helper {
  playPauseAndUpdate(song){
    player.playPause(song);
    player.getDuration(song);
  }
};

const helper = new Helper()
