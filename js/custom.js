/** INSERT CUSTOM JS HERE **/
export default function () {}

document.addEventListener('DOMContentLoaded', function () {
  const watchVideoText = document.getElementById('watchVideoText');
  const videoOverlay = document.getElementById('videoOverlay');
  const closeButton = document.getElementById('closeButton');

  const videoId = '_ALtBbXcyXc';
  const apiKey = 'AIzaSyBm7UENF4lq7kk7c4hQsMF6DrgdsQtSqYI';

  const videoUrl = `https://www.youtube.com/embed/${videoId}?key=${apiKey}`;

  watchVideoText.addEventListener('click', function () {
    youtubeVideo.src = videoUrl;
    videoOverlay.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    youtubeVideo.src = '';
    videoOverlay.style.display = 'none';
  });
});
