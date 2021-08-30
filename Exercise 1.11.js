//Exercise 1.11

//function with recursive process
function f(n) {
    return n < 3
           ? n
           : n >= 3
           ? f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3))
           : 0;
}

f(6);

//function with