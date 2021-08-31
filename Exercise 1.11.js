//Exercise 1.11

//function with recursive process
function f_recursive(n) {
    return n < 3
           ? n
           : n >= 3
           ? f_recursive(n - 1) + (2 * f_recursive(n - 2)) + (3 * f_recursive(n - 3))
           : 0;
}

//f_recursive(10);

//function with iterative process
function f_iterative(n) {
    function f_iter(a, b, c, counter) {
        return counter === 0
               ? c
               : f_iter(a + (2*b) + (3*c), a, b, counter - 1);
    }
    return f_iter(2, 1, 0, n);
}

f_iterative(10);