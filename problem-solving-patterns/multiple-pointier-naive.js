function sumZero(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }

}

sumZero([-3, -2, -1, 0, 1, 2, 3]);
// sumZero([-2, 0, 1, 3]);
