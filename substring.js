const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let substring = "";

    for (let i = 0; i < s.length; i++) {
        if (substring.includes(s[i])) {
            const index = substring.indexOf(s[i]);
            substring = substring.slice(index + 1);
        }
        substring += s[i];
        maxLength = Math.max(maxLength, substring.length);
    }

    return maxLength;
};
