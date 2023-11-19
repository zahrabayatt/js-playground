// we use logical operators to make decisions base on multi conditions
// In JS we have three type of logical operators:

// 1- logical AND (&&)
// console.log(true && true);
// console.log(false && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// 2- logical OR (||)
console.log(true || true);
console.log(false || true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);
// - logical NOT (!)
let applicationRefuse = !eligibleForLoan;

console.log("Application Refuse", applicationRefuse);
