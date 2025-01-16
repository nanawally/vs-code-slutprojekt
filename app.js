/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
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
  x.style.display = "none"; // Ensure the menu is closed by default
}

/*
function toggleMenu() {
  var x = document.getElementById("myLinks");
  x.classList.toggle("active");
}
*/

// Ensure the menu is closed when a new page loads (in mobile view)
/*
window.addEventListener('load', function() {
  var x = document.getElementById("myLinks");
  if (window.innerWidth <= 768) {
    x.classList.remove("active");
  }
});
*/


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