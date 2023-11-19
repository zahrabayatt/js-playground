// 8 bit = 1 Bite
// Decimal = Binary
// 1 = 00000001
// 2 = 00000010

// Bitwise OR operator
console.log(1 | 2); // 3 - which equals to 00000011

// Bitwise AND operator
console.log(1 & 2); // 0 - which equals to 00000000

// Real world example:
// Read, Write, Execute
// 00000100 --> has only read permission
// 00000110 --> has read and write permission
// 00000111 --> has all permissions

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
