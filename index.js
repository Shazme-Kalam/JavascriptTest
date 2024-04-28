//Question 1 
   // Example 1

function product(numb) {

    let product1 = numb[0];
    let product2 = numb[0];
    let result = numb[0];

    for (let i = 1; i < numb.length; i++) {
        if (numb[i] < 0) {
            let temp = product1;
            product1 = product2;
            product2 = temp;
        }
        product1 = Math.max(numb[i], product1 * numb[i]);
        product2 = Math.min(numb[i], product2 * numb[i]);

        result = Math.max(result, product1);
    }

    return result;
}

let input = prompt("Enter number separated by commas (e.g., 2,3,-2,4):");
let numb = input.split(",").map(Number);

let product1 = product(numb);
console.log("Largest product subarray:", product1);


 // Example 2

 function proArr(numb) {
    let prod1 = numb[0];
    let prod2 = numb[0];
    let result = numb[0];

    for (let i = 1; i < numb.length; i++) {
        if (numb[i] === 0) {
            prod1 = 1;
            prod2 = 1;
            result = Math.max(result, 0);
            continue;
        }

        if (numb[i] < 0) {
            let temp = prod1;
            prod1 = prod2;
            prod2 = temp;
        }

        prod1 = Math.max(numb[i], prod1 * numb[i]);
        prod2 = Math.min(numb[i], prod2 * numb[i]);

        result = Math.max(result, prod1);
    }

    return result;
}

let inp = prompt("Enter numbers separated by commas (e.g., -2,0,-1):");
let nUm = inp.split(",").map(Number);

let prod1 = proArr(numb);
console.log("Largest product subarray:", prod1);
 
//Question 2 

// example 2

 function twoSum(numb, target) {
    const indicesNum = {};

    for (let i = 0; i < numb.length; i++) {
        const indcs = target - numb[i];

        if (indicesNum.hasOwnProperty(indcs)) {
            return [indicesNum[indcs], i];
        }

        indicesNum[numb[i]] = i;
    }

    return [];
}

const num1 = [3, 2, 4];
const target = 6;
console.log(twoSum(numb, target)); 

//Question 3 

function reverseWords(input) {
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    var str = words.join(" ");
    return str;
}

var str = prompt("Enter a sentence:");
var reversedStr = reverseWords(str);
console.log(reversedStr);

//Question 4

var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
    {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
];

function statusBook(library) {
    for (var i = 0; i < library.length; i++) {
        var book = library[i];
        var status = book.readingStatus ? "already read" : "not read yet";
        console.log("Book:", book.title + " by " + book.author + ", Reading Status: " + status);
    }
}

statusBook(library);


//Question 5 

const price = parseInt(prompt("Enter the price:"));

function cnvrtCoins(price, coins) {
    coins.sort((a, b) => b - a); 

    const result = [];

    for (let i = 0; i < coins.length; i++) {
        const numCoins = Math.floor(price / coins[i]); // Calculate the number of coins of current denomination

        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]); 
        }

        price %= coins[i]; 
    }

    return result;
}

const coins = [25, 10, 5, 2, 1];
const result = cnvrtCoins(price, coins);
console.log("coins", result.join(", "));
