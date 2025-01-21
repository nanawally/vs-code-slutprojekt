function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onload = function() {
  var x = document.getElementById("myLinks");
  x.style.display = "none"; // hamburgarmenyn är stängd by default
}

document.addEventListener('DOMContentLoaded', function () {
  const keywordFilter = document.getElementById('keywordFilter');
  const articles = document.querySelectorAll('article');

  keywordFilter.addEventListener('change', function () {
    const selectedKeyword = keywordFilter.value.toLowerCase();

    articles.forEach(function (article) {
      // ta keywords till varje artikel
      const keywords = article.getAttribute('data-keywords').toLowerCase().split(', ');

      // kolla om det valda keywordet matchar artikelns keyword
      if (selectedKeyword === 'all' || keywords.includes(selectedKeyword)) {
        article.style.display = 'block';  // visa artikeln
      } else {
        article.style.display = 'none';   // göm artikeln
      }
    });
  });
});