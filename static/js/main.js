var domReadyCallback = function(){
  document.body.classList.remove("preload");
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  domReadyCallback();
} else {
  document.addEventListener("DOMContentLoaded", domReadyCallback);
}