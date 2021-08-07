console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

//Task 1
setTimeout(() => console.log(1), 0);
console.log(2);
(() => console.log(3))();
Promise.resolve(console.log(4)); //если нет .then микротаска не создаётся, он синхронный
//2341

//Task 2 до асинх. запроса
new Promise((res, rej) => { //выполенение конструктора промиса идет синхронно
    console.log(1);
})
new Promise((res, rej) => {
    setTimeout(() => console.log(2), 0);
})
Promise.resolve(setTimeout(() => console.log(3), 0)); //зарезолвленный промис тоже синхронно выполняется без .then
console.log(4);
Promise.reject(console.log(5));
//14523

//Task 3a
(function () {
    setTimeout(() => console.log(1), 100);
})();
console.log(2);
/*let i = 0;
while ( i < 5000000000 ) {
    i++
}*/
new Promise((res, rej) => {
    setTimeout(() => console.log(3), 50);
})

function fu() {
    console.log(4);
}

Promise.resolve(console.log(5));
// 2531


//Task 4
function foo(num: number) {
    console.log(num);
}

Promise.resolve(1)
    .then(f);

(function () {
    console.log(2);
})();

console.log(3);

new Promise((res, rej) => {
    console.log(4);
});

setTimeout(f, 0, 5);
// 23415

//Task 5
console.log(1);

function f() {
    console.log(2);
}

setTimeout(() => {
    console.log(3);
    let p = new Promise((res, rej) => {
        console.log(4);
        res();
    });
    p.then(() => f())
}, 0);
/*let l = new Promise((res, rej) => {
    console.log(5);
    rej();
}); e.log(res)).catch(() => console.log(6));*/
console.log(7);
//1576342

//Task 7
/* исходник, нада, чтобы ввыводило 321 (сейчас выводит 123) - промисификация
async function sleep(ms: number) {
           setTimeout(() => {
            console.log(ms);
        }, ms * 100);
}

async function show() {
    await sleep(3)
    await sleep(2)
    await sleep(1)
}
show();*/

async function sleep(ms: number) {
    return new Promise(res => {
        setTimeout(() => {
            console.log(ms);
            res();
        }, ms * 100);
    })
}

async function show() {
    await sleep(0)
    await sleep(3)
    await sleep(2)
    await sleep(1)
}
show();

//Task 8
let pr1 = new Promise((res) => {
    res(10);
});
let pr2 = new Promise((res) => {
    res(0)
});
pr1
    .then((res: any) => {
        console.log(res);
        return res + 2;
    })
    .then((res: any) => {
        console.log(res);
        return res + 2;
    })
    .then(console.log);
pr2
    .then((res: any) => {
        console.log(res);
        return res + 1;
    })
    .then((res: any) => {
        console.log(res);
        return res + 1;
    })
    .then(console.log);
// 10 0 12 1 14 2 

// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
let prom = new Promise (res => console.log("Promise is created"))

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
Promise.resolve("Promise Data")
    .then ((value) => console.log(value))


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
Promise.reject("Promise Data")
    .then ((value) => console.log(value))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
let prom4 = new Promise (res => {
    setTimeout(() => console.log("Promise Data"), 3000 )
})


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type TestObjType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess: (paramName: string) => void;
    onError: (paramName: string) => void;
}

const handlePromise: TestObjType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`);
    }
}

export const createPropmise = () => {
    const somePromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res;
        handlePromise.reject = rej;
    });
    handlePromise.promise=somePromise;
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
    console.log(handlePromise)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve("1")
}
export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject("0")
}
//@ts-ignore
window.prom = handlePromise;

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

let prom6 = new Promise (res => {
    let str = "My name is"
    res(setTimeout(() => str, 1000 ))
})
    .then(res=>{
        return  onSuccess(res)
    })
    .then(res => {
        return print(res)
    })
//@ts-ignore
const onSuccess = (param) => {
    return param + "Elya"
}
//@ts-ignore
const print = (param) => {
    console.log(param)
}


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let first =
// just a plug
export default () => {
};