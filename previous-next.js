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
    const startTime = Date.now();
    const onDelay = function () {
        
        if (when()) {
            clearInterval(i);

            const body = document.querySelector('body');
            body.addEventListener('keydown', function (e) {
                const enabled = when();
                console.log("keydown event", e, "previousActionOrSelector", previousActionOrSelector, "nextActionOrSelector", nextActionOrSelector, "enabled", enabled);
                // left arrow
                if ((e.keyCode || e.which) == 37 && enabled) {
                    console.log("Perform action on previousActionOrSelector");
                    performAction(previousActionOrSelector);
                }
                // right arrow
                if ((e.keyCode || e.which) == 39 && enabled) {
                    console.log("Perform action on nextActionOrSelector");
                    performAction(nextActionOrSelector);
                }
            });
        }
        if (Date.now() - startTime > 10000) {
            clearInterval(i);
        }
    };
    i = setInterval(onDelay, 500);
};
