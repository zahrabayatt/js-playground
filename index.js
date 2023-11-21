function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(1000));

// for best practice default parameters should be last parameters
