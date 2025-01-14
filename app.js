/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const keywordFilter = document.getElementById('keywordFilter');
  const articles = document.querySelectorAll('article');

  keywordFilter.addEventListener('change', function () {
    const selectedKeyword = keywordFilter.value.toLowerCase();

    articles.forEach(function (article) {
      // Get the keywords for the current article
      const keywords = article.getAttribute('data-keywords').toLowerCase().split(', ');

      // Check if the selected keyword matches the article's keywords
      if (selectedKeyword === 'all' || keywords.includes(selectedKeyword)) {
        article.style.display = 'block';  // Show the article
      } else {
        article.style.display = 'none';   // Hide the article
      }
    });
  });
});