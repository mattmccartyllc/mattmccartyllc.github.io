window.addEventListener("beforeunload", function(event) {
    window.scrollTo(0, 0);
});

window.addEventListener('load', function () {
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (!isIE11) {
        sal();
    } else {
        document.body.style.height = window.innerHeight + "px";
    }
});