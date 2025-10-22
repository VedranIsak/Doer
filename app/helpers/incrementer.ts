const incrementTaskId = (function () {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
})();

const incrementSubTaskId = (function () {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
})();


export { incrementSubTaskId, incrementTaskId };

