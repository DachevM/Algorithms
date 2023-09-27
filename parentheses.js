const isValid = function(s) {
    const stack = [];
    const obj = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (const par of s) {
        if (!(par in obj)) {
            stack.push(par);
            continue;
        }
        if (stack[stack.length - 1] === obj[par]) {
            stack.pop();
            continue;
        }
        return false;
    }
    return stack.length === 0;
};
