window.addEventListener("beforeunload", function(event) {
    window.scrollTo(0, 0);
});

// Fix viewport height (vh) unit issues for browsers that do not support dvh
// https://stackoverflow.com/a/72245072
// https://stackoverflow.com/a/43575432
function vportHeight() {
    document.body.style.height = window.innerHeight + "px";
}
window.addEventListener('resize', vportHeight);

window.addEventListener('load', function () {
    sal();
    vportHeight();
});