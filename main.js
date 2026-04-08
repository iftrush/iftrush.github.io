document.addEventListener("DOMContentLoaded", function () {
  var paperMediaToggles = document.querySelectorAll(".paper-media");

  function setPaperMediaState(media, isActive) {
    media.classList.toggle("is-active", isActive);
    media.setAttribute("aria-pressed", String(isActive));
  }

  function closeOtherPaperMedia(activeMedia) {
    paperMediaToggles.forEach(function (media) {
      if (media !== activeMedia) {
        setPaperMediaState(media, false);
      }
    });
  }

  paperMediaToggles.forEach(function (media) {
    media.addEventListener("click", function () {
      var nextState = !media.classList.contains("is-active");
      closeOtherPaperMedia(media);
      setPaperMediaState(media, nextState);
    });

    media.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var nextState = !media.classList.contains("is-active");
        closeOtherPaperMedia(media);
        setPaperMediaState(media, nextState);
      }

      if (event.key === "Escape") {
        setPaperMediaState(media, false);
        media.blur();
      }
    });
  });

  document.addEventListener("click", function (event) {
    paperMediaToggles.forEach(function (media) {
      if (!media.contains(event.target)) {
        setPaperMediaState(media, false);
      }
    });
  });

  document.addEventListener("focusin", function (event) {
    paperMediaToggles.forEach(function (media) {
      if (!media.contains(event.target)) {
        setPaperMediaState(media, false);
      }
    });
  });

  var lastUpdated = new Date(document.lastModified);
  var options = { year: "numeric", month: "short" };
  document.getElementById("last-updated").textContent =
    lastUpdated.toLocaleDateString("en-US", options);
});
