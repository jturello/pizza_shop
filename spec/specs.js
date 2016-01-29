describe('Pizza', function() {
  it("creates a pizza of the correct size", function() {
    var pizza = new Pizza("large", ["cheese", "sausage", "onions", "olives"]);
    expect(pizza.size).to.equal("large");
  });

  it("creates a pizza with the correct toppings", function() {
    var pizza = new Pizza("large", ["sausage", "onions", "olives"]);
    expect(pizza.toppings).to.eql(["sausage", "onions", "olives"]);
  })
});

describe('cost', function() {
  it("calculates and returns the correct cost for a pizza", function() {
    var pizza = new Pizza('large', ['sausage', 'onions', 'olives']);
    expect(pizza.cost()).to.equal('$14.25');
  })
});
