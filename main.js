document.querySelectorAll(".two").forEach(function (el) {
  el.style.opacity = "0";
});

document.querySelectorAll("[data-hover-show]").forEach(function (article) {
  var showId = article.getAttribute("data-hover-show");
  var hideId = article.getAttribute("data-hover-hide");

  article.addEventListener("mouseenter", function () {
    document.getElementById(showId).style.opacity = "1";
    document.getElementById(hideId).style.opacity = "0";
  });

  article.addEventListener("mouseleave", function () {
    document.getElementById(showId).style.opacity = "0";
    document.getElementById(hideId).style.opacity = "1";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var lastUpdated = new Date(document.lastModified);
  var options = { year: "numeric", month: "short" };
  document.getElementById("last-updated").textContent =
    lastUpdated.toLocaleDateString("en-US", options);
});
