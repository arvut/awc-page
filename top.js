/* Back-to-top button: appears after the first screen, scrolls smoothly to the top.
   External file on purpose: arvut.ch CSP allows script-src 'self' only.
   Without JS the button stays a plain href="#" link (always visible). */
(function () {
  var btn = document.querySelector(".to-top");
  if (!btn) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  btn.classList.add("to-top--js");
  var ticking = false;
  function update() {
    ticking = false;
    btn.classList.toggle("on", window.scrollY > window.innerHeight * 0.9);
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    btn.blur();
  });
  update();
})();
