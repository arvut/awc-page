/* Preview copy (relative paths for GitHub Pages). On arvut.ch the paths are /awc/<lang>/.
   /awc entry page: send the visitor to /awc/<browser-language>/ (fallback DE).
   External file on purpose: arvut.ch CSP allows script-src 'self' only. The
   per-language pages are static, crawlable hreflang siblings. */
(function () {
  if (!document.documentElement.hasAttribute("data-awc-dispatch")) return;
  var LANGS = ["de", "fr", "it", "en"];
  var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || "de"];
  var pick = "de";
  for (var i = 0; i < list.length; i++) {
    var l = (list[i] || "").slice(0, 2).toLowerCase();
    if (LANGS.indexOf(l) !== -1) { pick = l; break; }
  }
  var carry = (location.search || "") + (location.hash || "");
  try { location.replace(pick + "/" + carry); } catch (e) { location.href = "de/" + carry; }
})();
