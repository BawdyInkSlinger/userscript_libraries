function performAction(action) {
    console.log("typeof action", (typeof action));
    if (typeof action === 'string') {
        document.querySelector(action).click();
    } else {
        action();
    }
}

previousNext = function (when, previousActionOrSelector, nextActionOrSelector) {
    let i;
    const onDelay = function () {
        if (when()) {
            clearInterval(i);

            const body = document.querySelector('body');
            body.addEventListener('keydown', function (e) {
                console.log("keydown event", e, "previousActionOrSelector", previousActionOrSelector, "nextActionOrSelector", nextActionOrSelector);
                // left arrow
                if ((e.keyCode || e.which) == 37) {
                    performAction(previousActionOrSelector);
                }
                // right arrow
                if ((e.keyCode || e.which) == 39) {
                    performAction(nextActionOrSelector);
                }
            });
        }
    };
    i = setInterval(onDelay, 500);
};
