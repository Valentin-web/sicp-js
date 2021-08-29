// SICP JS Exercise 1.7 Code only
//square function is just for double checking square(sqrt_iter(3, 81, 0));
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

//the 0 is just for making it start, because in the beginning there is no oldguess
sqrt_iter(3, 81, 0);
//square(sqrt_iter(3, 81, 0));
// this will return the radicant