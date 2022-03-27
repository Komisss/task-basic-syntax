/**
 * Переводит число из римской системы счисления в десятичную.
 *
 * @param {string} str - строка с римским числом.
 * @return {number} result - число, переведенное из римской системы в десятичную.
 */
export function romanToInteger(str) {
    let result = 0;

    /**
     * Возвращает римское значение в десятичной системе.
     *
     * @param {number} value - одно значение римского числа (I, V, X, L, C, D, M).
     * @return {number} римское значение в десятичной системе.
     */
    function value(ch) {
        switch (ch) {
            case 'I':
                return 1;
                break;
            case 'V':
                return 5;
                break;
            case 'X':
                return 10;
                break;
            case 'L':
                return 50;
                break;
            case 'C':
                return 100;
                break;
            case 'D':
                return 500;
                break;
            case 'M':
                return 1000;
                break;
        }
    }

    /**
     * Прохожу по строке римских значений и проверяю правило:
     *  1) Если данное значение не меньше, чем следующее,
     *      то прибавляю его к результату;
     *  2) Иначе вычитаю из результата текущее значение и
     *      прибавляю следующее.
     */
    for (let i = 0; i < str.length; i++) {
        let value1 = value(str[i]);

        if (i + 1 < str.length) {
            let value2 = value(str[i + 1]);

            if (value1 >= value2) {
                result += value1;
            } else {
                result = result - value1 + value2;
                i++;
            }
        } else {
            result += value1;
        }
    }

    return result;
}
