Big O Notation
    It was very big in terms of significance

    To analyze the performance of an algorithm, we use Big O Notation
    Big O Notation can give us a high level understanding of the time or space complexity
        of an algorithm
    Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
    The time or space complexity (as measured by Big O) depends only on the algorithm,
        not the hardware used to run the algorithm
    Big O Notation is everywhere, so get lots of practice!

    We say that an algorithm is O(f(n)) if the number of simple operations the computer 
        has to do is eventually less than a constant times f(n), as n increases
    f(n) could be linear (f(n) = n)
    f(n) could be quadratic (f(n) = n2)
    f(n) could be constant (f(n) = 1)
    f(n) could be something entirely different!

###################################################################################
Big O Shorthands
    1. Arithmetic operations are constant
    2. Variable assignment is constant
    3. Accessing elements in an array (by index) or object (by key) is constant
    4. In a loop, the the complexity is the length of the loop times the complexity of 
       whatever happens inside of the loop

####################################################################################
Objects
    Unordered, key value pairs
    when you don't need order
    when you need fast access / insertion and removal
    Insertion -- O(1)
    Removal -- O(1)
    Searching -- O(N)
    Access -- O(1)
