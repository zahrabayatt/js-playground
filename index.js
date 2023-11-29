function HtmlElement() {
  this.click = function () {
    console.log("clicking");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focusing");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement(); // because we have click method in object instance
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
