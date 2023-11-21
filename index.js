const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
address2.color = "red";

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  if (getNumberOfProperty(address1) !== getNumberOfProperty(address2))
    return false;
  for (const key in address1) {
    if (!(key in address2) || address1[key] !== address2[key]) return false;
  }

  return true;
}

function getNumberOfProperty(obj) {
  return Object.keys(obj).length;
}

function areSame(address1, address2) {
  return address1 === address2;
}
