var domReadyCallback = function(){
  document.body.classList.remove("is-preload");
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", domReadyCallback);
}