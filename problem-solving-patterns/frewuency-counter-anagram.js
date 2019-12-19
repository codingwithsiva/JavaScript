// function validAnagram(first, second) {
//     if (first.length != second.length) {
//         return false;
//     }

//     let firstCounter = {};
//     let secondCounter = {};

//     for (let key of first) {
//         firstCounter[key] = (firstCounter[key] || 0) + 1;
//     }

//     for (let key of second) {
//         secondCounter[key] = (secondCounter[key] || 0) + 1;
//     }

//     for (var val in firstCounter) {
//         if (firstCounter[val] != secondCounter[val]) {
//             return false;
//         }
//     }
//     return true;
// }

function validAnagram(first, second) {
    if (first.length != second.length) {
        return false;
    }

    let lookup = {};

    for (let key of first) {
        lookup[key] = (lookup[key] || 0) + 1;
    }

    for (let key in second) {
        if (!lookup[second[key]]) {
            return false;
        } else {
            lookup[second[key]] -= 1;
        }
    }

    return true;
}

// validAnagram("anagrame", "nagaramm"); // false
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
