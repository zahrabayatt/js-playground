const circle = {
  radius: 2,
  get area() {
    return Math.floor(Math.pow(this.radius, 2) * Math.PI);
  },
};

circle.radius = 3;
circle.area = 20;
console.log(circle.area, circle.radius);
