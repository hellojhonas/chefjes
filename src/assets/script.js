var loader;

function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function() {
      loadNow(opacity - 0.05);
    }, 50);
  }
}

function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById('loader');
  window.setTimeout(function() {
    loadNow(1);
  }, 1500); // wait 2 seconds before calling loadNow(1)
});
