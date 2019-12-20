function stringMatch(str, find) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(find) != -1) {
            var c = str.indexOf(find);
            str = str.substring(c + find.length);
            count++;
        }
        else break;
    }
    if(!count) return -1;
    else return count;
}

stringMatch("sammlme me", "m");
