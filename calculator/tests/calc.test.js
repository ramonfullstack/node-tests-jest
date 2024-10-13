import { sum, subtract, multiply, divide } from '../calculator';

describe('Calculadora', () => {
    test('adiciona 1 + 2 para igualar 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adiciona 10 + 10 para igualar 20', () => {
        expect(sum(10, 10)).toBe(20);
    });

    test('subtrai 5 - 2 para igualar 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiplica 3 * 4 para igualar 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('divide 10 por 2 para igualar 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide 5 por 0 deve lançar um erro', () => {
        expect(() => {
            divide(5, 0);
        }).toThrow('Divisão por zero não é permitida!');
    });
});
