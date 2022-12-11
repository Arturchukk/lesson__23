// ================JS ДЗ №4 - ЦИКЛИ=====================
for ( let i = 0; i < 5; i++) {
     console.log(i);
}

let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
}

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor;
        }
        console.log(size);
}
}
// ================JS ДЗ №4 - Числа=====================
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne); // Выведет 1 что не верно

let value = parseFloat("135.58px");
console.log(value);

let number = 58 + "Artur";
if (isNaN(number)) {
    console.log('Результат выражения NaN');
}

let max = Math.max(-5, 10, 2, 9.4, 3);
console.log(max);

let floor = Math.floor(58.858);
console.log(floor);
// ================JS ДЗ №5 - Строки=====================

let text = 'фрилансер';
console.log(text[5]);

let textOne = 'фрилансер';
console.log(textOne.toLowerCase());

let textTwo = 'фрилансер';
 console.log(textTwo.indexOf('лан'));
 console.log(textTwo.includes('лан'));