console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    return function (b: number) {
        return a + b;
    }
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0
    return function () {
        return ++count;
    }
}

const counter = makeCounter();
counter();
console.log(counter());

const counter2 = makeCounter();
counter2();
counter2();
counter2();
console.log(counter2());

/*
for () {
    counter2(); //замыкание в цикле
}
*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;


function makeCounter3(num: number): any {
    let newNum = num;
    return
    let count = {
        increase: function () {
            return ++newNum
        },
        decrease: function () {
            return --newNum
        },
        reset: function () {
            return newNum = 0
        },
    };

}


let counter3 = makeCounter3(4);

console.log(counter3.increase);


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9)  //10

function superSum(num: number) {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;

    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= num) {
            _arguments.length = num
            return _arguments.reduce((acc, number) => acc + number);
        } else {
            return helper;
        }
    }

    return helper
}

//@ts-ignore
console.log(superSum(3)(2)(5)())
//@ts-ignore
console.log(superSum(3)(2)(5, 3))
//@ts-ignore
console.log(superSum(3)(2, 5, 3))


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
/*sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050*/

//рекурсия медленнее цикла, но сокращает код

function sumTo(arg: number) {
    let result = 0;
    for (let i = arg; i >= 1; i--) {
        result += i;
    }
    return result;

//OR
    function sumYo(arg: number): number {
        if (arg === 1) return arg;
        return arg + sumYo(arg - 1);
    }

    console.log(sumYo(100));

    //Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

    function fu(arg: number): number {
        if (arg === 1) return arg;
        return arg * fu(arg - 1)
    }

    console.log(fu(3));

    //Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

    function fib(arg: number): number {
        if (arg < 1) return arg;
        return fib(arg - 1) + fib(arg - 2);
    }

    console.log(fib(3));

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

    function customFlatend(arr: <Array>) {
        let flattend = [];

        function flat(arr: <Array>) {
            arr.forEach(el => {
                if (Array.isArray(el)) {
                    flat(el)
                } else flattend.push(el);
            });
        } (arr)
        return flattend;
    }
}

console.log(customFlatened([1, 2, [3, 4]]))


// just a plug
export default () => {
};