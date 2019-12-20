function maxSubArraySum(arr, num) {
    if (num > arr.length)
        return null;
    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let count = 0;
        for (var j = 0; j < num; j++) {
            count += arr[i + j];
        }
        if (max < count)
            max = count;
    }
    return max;
}

maxSubArraySum([1, 2, 5, 9, 2], 2);
