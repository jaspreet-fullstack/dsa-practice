// 1. Print numbers from 1 to N
function printNum(num) {

    for (let i = 1; i <= num; i++) {
        return i;
    }
}

// 2. Print numbers from N to 1
function printNumNto1(num) {

    for (let i = num; i >= 1; i--) {
        return i;
    }
}

// 3. Print all even numbers from 1 to N
function checkEvenNum(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
}

// 4. Print all odd numbers from 1 to N
function checkOddNum(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            return i;
        }
    }
}


// 5. Find the sum of numbers from 1 to N
function sumOfNum(num) {
    let val = 0;
    for (let i = 1; i <= num; i++) {
        val = val + i;
    }
    return val;
}

// 6. Find the sum of all even numbers up to N
function sumOfEvenNum(num) {

    let val = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            val = val + i
        }
    }
    return val;
}

// 7. Find the sum of all odd numbers up to N
function sumOfOddNum(num) {
    let val = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            val = val + i
        }
    }
}

// 8. Print the multiplication table of a number 

function multiplicationTable(num) {

    let table = '';
    for (let i = 1; i <= 10; i++) {

        table += `${num} * ${i} = ${num * i}\n`;
    }

    return table;
}

// 9. Count from 1 to N using while

function count1ToN(num) {

    let i = 1;

    let count = '';

    while (i <= num) {
        count += `${i}\n`
        i++;
    }

    return count
}

// 10. Find the sum of numbers divisible by 3 or 5

function findDivisibleNum(num) {

    let divisibleNum = ''
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {

            divisibleNum += i
        }
    }

    return divisibleNum;
}

// 11. Print a sequence with a given step size

function findSequence(start, end, stepSize) {

    for (let i = start; i <= end; i += stepSize) {
        console.log('enter', i)
    }

    return sequence;
}

// 12. Count the digits in a number

function countDigit(num) {

    if (num == 0) {
        return 1
    }
    let count = 0;
    let digit = Math.abs(num);


    if (num == null || num == undefined) {
        return "Please add a valid number"
    }

    while (digit > 0) {

        digit = Math.floor(digit / 10);
        count++;

    }

    return count;
}

// 13. Find the sum of digits

// function findSumOfDigit(num) {

//     if( num === 0) {
//         return 0
//     }
//     let digit = Math.floor(Math.abs(num));
//     let sum = 0; 

//     while(digit > 0) {

//         sum += digit % 10; 
//         digit = Math.floor(digit / 10)
//     }

//     return sum;
// }
// console.log(findSumOfDigit(0))


// 14. Find the product of digits

function findProductOfDigit(num) {
    if (num == 0) {
        return 0
    }

    let digit = Math.floor(Math.abs(num));
    let productNum = 1;


    while (digit > 0) {
        productNum *= digit % 10
        digit = Math.floor(digit / 10)
    }
    return productNum;

}

// 14 (1) Reverse a number

function reverseNumber(num) {

    let revNum = ''
    let val = Math.abs(num)
    while (val > 0) {
        revNum += val % 10
        val = Math.floor(val / 10)
    }
    return revNum;
}

// 14 (2) Reverse a number
function reverseNumberLoop(num) {
    let val = num.toString()
    let reverseNu = ''

    for (let i = val.length - 1; i >= 0; i--) {
        reverseNu += val[i]
    }

}

// 15. Check whether a number is a palindrome

function isNumPalindrome(num) {

    if (num == 0) {
        return 'Num val is 0'
    }

    let numVal = Math.floor(Math.abs(num));
    let revNum = ''

    while (numVal > 0) {

        revNum += numVal % 10;
        numVal = Math.floor(numVal / 10)
    }

    return num == revNum ? 'Num is Palindrome' : 'Number is not palindrome'
}

// 16. Check whether a number is an Armstrong number

function isNumArmstrong(num) {

    let val = Math.abs(num);
    let count = 0;
    let revDigit = [];
    let powerOfDigitTotal = 0

    while (val > 0) {
        revDigit.push(val % 10)
        val = Math.floor(val / 10)
        count++;
    }

    for (let i = 0; i < revDigit.length; i++) {
        powerOfDigitTotal += (revDigit[i] ** count);
    }

    return powerOfDigitTotal;
}

// 17. Find the factorial of a number

function isNumFactorial(num) {

    let divisibleNum = 1;
    let res = 0

    for(let i = num; i >= 1; i--){
        res = divisibleNum * i
        divisibleNum = res;
    }
}

// isNumFactorial(0)

// Count occurrences of a digit in a number

function countOccurance(num) {

    let val = String(Math.abs(num));

    for(let i =1; i <= val.length; i++) {

        console.log('i--', i)
    }


}

// countOccurance(543625)

// 23. check number is prime

function isPrimeNum(num) {

    let val = Math.abs(num); 
    let res = 0

    if ( num <= 1) {
        return false
    }

    for (let i = 2; i <= val; i++) {

        if(val % i == 0) {
            return false;
        }
        else
        {
            return true;
        }
    }

}

// Print all prime up to N
console.log('helloooo----', 6 % 2 != 0)

function getAllPrimeNum(num) {

    let val = Math.abs(num);
    let getlastDigit = 0;
    let getPrimeNum = 0
    const allPrimeNumList = []

    while (val > 0) {

        getlastDigit = val % 10;
        val = Math.floor(val / 10);

    
        for( let i =2; i <= getlastDigit; i++) {
            // console.log('enter--for-loop', i, 'gett---', getlastDigit)

            if(getlastDigit % i != 0) {
               
               getPrimeNum = getlastDigit
               break;

            }
        }
       allPrimeNumList.push(getPrimeNum)
    }

    console.log('all--', allPrimeNumList)

}

getAllPrimeNum(5265)

// isNumArmstrong(123)

// console.log("Print numbers from 1 to N", printNum(5))
// console.log("Print numbers from N to 1", printNumNto1(5))
// console.log("Print all even numbers from 1 to N", checkEvenNum(5))
// console.log("Print all odd numbers from 1 to N", checkOddNum(5))
// console.log("Find the sum of numbers from 1 to N", sumOfNum(5))
// console.log("Find the sum of all even numbers up to N", sumOfEvenNum(5))
// console.log("Find the sum of all odd numbers up to N", sumOfOddNum(5))
// console.log("Print the multiplication table of a number", multiplicationTable(2))

// console.log( " Print Count using While", count1ToN(5))
// console.log(" Find the sum of numbers divisible by 3 or 5", findDivisibleNum(5))
// console.log("Print a sequence with a given step size", findSequence(1, 10, 1))
// console.log(' Count the digits in a number', countDigit() )
// findProductOfDigit(55)

reverseNumberLoop(23)