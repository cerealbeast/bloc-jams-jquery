{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#album-artist').text(album.artist);
  $('#album-release-info').text(album.releaseInfo);

}
