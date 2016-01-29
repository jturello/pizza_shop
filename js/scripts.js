function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var cents = 0;
  var cost = "";

  switch(this.size) {
    case 'small' : cents = 800; break;
    case 'medium': cents = 1000; break;
    case 'large' : cents = 1200; break;
  }
  cents += (this.toppings.length * 75);
  return cost = '$' + (cents * .01);
}
