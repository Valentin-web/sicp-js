// SICP JS 1.1.7
function square(x) {
    return x * x;
}

function is_good_enough(guess,  oldguess) {
    return  oldguess === guess;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x, oldguess) {
    return is_good_enough(guess, oldguess)
           ? guess
           : sqrt_iter(improve(guess, x), x, guess);
}


sqrt_iter(3, 0.0000000000000000002, 0);
