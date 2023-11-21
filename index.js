// Escape notation:
let message = "This is my \n first message ";

const name = "John";
message = "Hi " + name + ",\n";

// One problem with escape notation is that we can't visualize text in the code as it appears. In this situation, we can use a template literal.

// Template literal ``
let another = `This is my
first message`;
// We can use a template literal for an email message
another = `Hi John,

Thank you for joining my mailing list.

Regards,
Zahra Bayat
`;

another = `Hi ${name} ${2 + 3},

Thank you for shopping from us.
`;

console.log(message);
console.log(another);
