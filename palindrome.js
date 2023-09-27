const isPalindrome = function(s) {
    const a = s.replace(/[\W_]/g, "").toLowerCase().split("");
    return a.join("") === a.reverse().join("");
};
