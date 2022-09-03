// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;
/* 2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора. */
const Numbers = str => {
    let res = 1;
    for (let i = 0; i < str.length; i++) {
        res *= str[i];
        console.log('1:', str);
    }
    return res;
};
const newNumbers = Numbers(num.toString());
console.log('2: ', newNumbers);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const raising = newNumbers ** 3;
console.log('3: ', raising);

// 4) Вывести на экран первые 2 цифры полученного числа
console.log('4: ', raising.toString().substr(0,2));