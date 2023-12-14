function toggleOverlay() {
  const overlay = document.getElementById('overlay');
  const whiteNavbar = document.getElementById('whiteNavbar');
  const barsButton = document.getElementById('bars');
  const mobileNavLinks = document.getElementById('mobileNavLinks');
  const crossImage = document.getElementById('crossImage');
  const rightMobileSide = document.getElementById('rightMoblieSide');

  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  whiteNavbar.style.display = whiteNavbar.style.display === 'block' ? 'none' : 'block';
  crossImage.style.display = whiteNavbar.style.display === 'block' ? 'block' : 'none';

  while (mobileNavLinks.firstChild) {
    whiteNavbar.appendChild(mobileNavLinks.firstChild);
  }
  mobileNavLinks.style.display = 'none';

  while (rightMobileSide.firstChild) {
    whiteNavbar.appendChild(rightMobileSide.firstChild);
  }
  rightMobileSide.style.display = 'none';
}

function closeWhiteNavbar() {
  const overlay = document.getElementById('overlay');
  const whiteNavbar = document.getElementById('whiteNavbar');
  const crossImage = document.getElementById('crossImage');

  overlay.style.display = 'none';
  whiteNavbar.style.display = 'none';
  crossImage.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  //yt film
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
  // koniec yt

  //nawigacja
  const barsButton = document.getElementById('bars');
  barsButton.addEventListener('click', toggleOverlay);
});
