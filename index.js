const p = {
  firstName: "Zahra",
  lastName: "Bayat",
};

console.log(`${p.firstName} ${p.lastName}`);

// we may use full name in a lot of code so it is better to move it in object as method

const person = {
  firstName: "Zahra",
  lastName: "Bayat",
  fullName() {
    // short syntax of fullName: function() {}
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

// we can't use fullName like this:
// person.fullName;
// person.fullName = 'John Smith';

// in this situation we can use getter and setter

const another = {
  firstName: "Zahra",
  lastName: "Bayat",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  another.fullName = "";
} catch (error) {
  alert(error.message);
}

console.log(another.fullName);
