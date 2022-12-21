exports.previousNext = function (when, previousSelector, nextSelector) {
    let i;
    const onDelay = function () {
        if (when()) {
            clearInterval(i);

            const body = document.querySelector('body');
            body.addEventListener('keydown', function (e) {
                // console.log("event", e);
                // left arrow
                if ((e.keyCode || e.which) == 37) {
                    document.querySelector(previousSelector).click();
                }
                // right arrow
                if ((e.keyCode || e.which) == 39) {
                    document.querySelector(nextSelector).click();
                }
            });
        }
    };
    i = setInterval(onDelay, 500);
};
