const address = {
  street: "St.1",
  city: "Tehran",
  zipCode: 111111,
};
showAddress(address);

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}
