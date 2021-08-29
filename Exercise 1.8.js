// Exercise 1.8
function square(x) {
    return x * x;
}
function is_good_enough(guess,  oldguess) {
    return  oldguess === guess;
}

function improve(guess, x) {
    return ((x / square(guess)) + (2 * guess)) / 3;
}

function cubrt_iter(guess, x, oldguess) {
    return is_good_enough(guess, oldguess)
           ? guess
           : cubrt_iter(improve(guess, x), x, guess);
}

function cubrt(x) {
    return x === 0
           ? 0
           : cubrt_iter(1, x, 0);
}

cubrt(-10);