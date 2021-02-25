//https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function (arr) {
    let res = [];
    let resZeros = [];
    arr.map((el) => {
        if (el === 0) {
            resZeros.push(el);
        } else {
            res.push(el);
        }
    })
    return res.concat(resZeros);
}

//https://www.codewars.com/kata/559a28007caad2ac4e000083
function perimeter(n) {
    let amount = ++n;
    const res = 4 * fibbonachi(amount);
    function fibbonachi(amount) {
        let sum = 0;
        while (amount >= 1) {
            sum += fib(amount);
            function fib(n) {
                let a = 1;
                let b = 1;
                for (let i = 3; i <= n; i++) {
                    let c = a + b;
                    a = b;
                    b = c;
                }
                return b;
            }
            amount--;
        }
        return sum;
    }
    return res;
}

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
function firstNonRepeatingLetter(s) {
    const array = s.split('');
    const array1 = s.toLowerCase().split('');
    const repeatArray = new Set();
    const unique = new Set();
    array1.forEach((item) => {
        if (!unique.has(item)) {
            unique.add(item);
        } else {
            repeatArray.add(item);
        }
    })

    let res = '';
    for (let i = 0; i < array1.length; i++) {
        if (!repeatArray.has(array1[i])) {
            res = array[i];
            break;
        }
    }
    return res;
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
    const arrayFromStr = str.split(/\b/);
    const res = [];

    arrayFromStr.forEach((item) =>{
        if (item === ' ' || item === ' !' || item === ' ?') {
            res.push(item);
            return;
        }
        let arrayFromWord = [];
        arrayFromWord = item.split('');
        let buffer = arrayFromWord[0];
        for (let i = 1; i < arrayFromWord.length; i++){
            arrayFromWord[i-1] = arrayFromWord[i];
        }
        arrayFromWord[arrayFromWord.length-1] = buffer;
        console.log(arrayFromWord.join(''));
        res.push(arrayFromWord.join(''),'a','y');
    })
    return res.join('');
}

//https://www.codewars.com/kata/525a037c82bf42b9f800029b
function partitionOn(pred, items) {
    const falseArr = [];
    const trueArr = [];
    items.forEach(item => { pred(item) ? trueArr.push(item) : falseArr.push(item) });
    const arr = falseArr.concat(trueArr);
    for (let i = 0; i < items.length; i++) {
        items[i] = arr[i]
    }
    let i= falseArr.length;
    return i;
}

//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
function add(n) {
    function adding(b) {
        return add(n + b);
    }
    adding.valueOf = function valueOf(){
        return n;
    }
    return adding;
}