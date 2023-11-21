// more info about date format supported by Date:
// https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format

const now = new Date();
const data1 = new Date("May 11 2023 09:00 ");
// month is zero base : 0 represent january and 11 represent december
// const date2 = new Date(2023, 4, 11, 9, 0); by default each arg is 0 so we can ignore minute in date2
const date2 = new Date(2023, 4, 11, 9);

// all date objects have bunch of get and set methods:
now.setFullYear(2018);

console.log(now.toDateString()); // Wed Nov 21 2018
console.log(now.toTimeString()); // 11:58:16 GMT+0330 (Iran Standard Time)
console.log(now.toISOString()); // 2018-11-21T08:28:16.233Z - common use in web application for transforming date between client and server
