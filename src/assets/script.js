document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    setTimeout(function() {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // wait 2 seconds before displaying content
  });