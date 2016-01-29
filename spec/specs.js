describe('Pizza', function() {
  it("creates a pizza of the correct size", function() {
    var pizza = new Pizza("large", ["cheese", "sausage", "onions", "olives"]);
    expect(pizza.size).to.equal("large");
  });


});
