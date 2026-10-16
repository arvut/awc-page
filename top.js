/* Кнопка «наверх»: появляется после первого экрана, плавно возвращает наверх.
   Отдельный файл намеренно: CSP arvut.ch разрешает только script-src 'self'.
   Без JS кнопка остаётся обычной ссылкой href="#" (видна всегда). */
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
