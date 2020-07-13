
function length(string) {
    var max = 0
    var strings = ""

    for (i = 0; i < string.length; i += 1) {
        cha = string.charAt(i);
        pos = strings.indexOf(cha);
        if (pos !== -1) {
            strings = strings.substr(pos + 1);
        }
        strings += cha;
        max = Math.max(max, strings.length);
    }
    return max;
}

console.log(length("pwwkew"))