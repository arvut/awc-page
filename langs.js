/* Language switcher: keep the current #anchor when switching language,
   so /awc/en/#office opens /awc/de/#office. External file: arvut.ch CSP
   allows script-src 'self' only. Without JS the links still work. */
(function () {
  var links = document.querySelectorAll(".langs a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      var h = window.location.hash;
      if (!h) return;
      e.preventDefault();
      window.location.href = this.getAttribute("href").split("#")[0] + h;
    });
  }
})();
