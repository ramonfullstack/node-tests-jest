export function sum(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida!');
    }
    return a / b;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide
};