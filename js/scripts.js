function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var cents = 0;
  var cost = "";

  console.log(cents + " pre switch");

  switch(this.size) {
    case 'small' : cents = 800; break;
    case 'medium': cents = 1000; break;
    case 'large' : cents = 1200; break;
  }

  console.log(cents + " post switch");

  cents += (this.toppings.length * 75);
  console.log(cents + " post * 75");
  cost = '$' + (cents * .01);
  console.log(cost + " cost final");
  return cost;
}

$('document').ready(function() {
  $('button#submit-btn').click(function(event) {
    event.preventDefault();
  $('.pizza-cost-display').hide();

    var pizza_size = $("input[type='radio']:checked").val();
    console.log(pizza_size);
    var toppings = [];
    $.each($('#checkboxes input:checked'), function(){
      toppings.push($(this).val())
    });

    var pizza = new Pizza(pizza_size, toppings);
    console.log(pizza);

    var cost = pizza.cost();

    $('#pizza-cost-text').text(cost);

    $('.pizza-cost-display').show();
    console.log(cost);

  });
});
