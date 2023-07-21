window.addEventListener("beforeunload", function(event) {
    window.scrollTo(0, 0);
});
  
window.addEventListener('load', function () {
    sal();
});

// Fix viewport height (vh) unit issues for browsers that do not support dvh
// https://stackoverflow.com/a/72245072
window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize();