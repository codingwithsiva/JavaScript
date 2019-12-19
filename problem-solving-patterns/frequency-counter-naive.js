function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        let idx = arr2.indexOf(arr1[i] ** 2);
        if (idx === -1) {
            return false;
        }
        arr2.splice(idx, 1);
    }
    return true;
}

same([1, 3, 1], [1, 1, 5]);
