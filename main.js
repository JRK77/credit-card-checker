// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// create an empty array for use later
let vNewArr = [];

// Luhn algorithm
const validateCred = arr => {
  // remove last element from array (without changing original array), and reverse
  newArr = arr.slice(0, -1).reverse();
  
  // multiply digits in odd positions by 2, subtracting 9 if > 9
  for (i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      times_2 = newArr[i] * 2;
      if (times_2 > 9) {
        vNewArr.push(times_2 - 9);
      } else {
        vNewArr.push(times_2);
      }
    } else {
      vNewArr.push(newArr[i]);
    }
  }

  // Sum of all numbers in the array plus the digit dropped in step 1, module 10
  const arraySum = vNewArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  
  const arraySum2 = arraySum + arr.pop();
  if (arraySum2 % 10 === 0) {
    return "Valid number";
  } else {
    return "Invalid number";
  } 
}


// another array for use below
let invalid_arr = [];

// check if elements of an array are valid credit card numbers
const findInvalidCards = cardArray => {
  for (let i = 0; i < cardArray.length; i++) {
    if (validateCred(cardArray[i]) === "Invalid number") {
      invalid_arr.push(cardArray[i]);
    }
  }
  return invalid_arr;
}

// array to contain the list of companies that are issuing invalid credit card numbers
let companies = [];

// function to identify companies
const idInvalidCardCompanies = invalid_arr => {
  for (i = 0; i < invalid_arr.length; i++) {
    if (invalid_arr[i][0] === 3) {
      companies.push("American Express");
    } else if (invalid_arr[i][0] === 4) {
      companies.push("Visa");
    } else if (invalid_arr[i][0] === 5) {
      companies.push("Mastercard");
    } else if (invalid_arr[i][0] === 6) {
      companies.push("Discovery");
    } else {
      companies.push("Company not found");
    }
  }
  return companies;
}


console.log(idInvalidCardCompanies(batch));