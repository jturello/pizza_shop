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
  var centStr = cents.toString();
  cost = '$' + centStr.substring(0, (centStr.length - 2)) + '.' + centStr.substring(centStr.length - 2);

  return cost;
}

$('document').ready(function() {
  $('button#submit-btn').click(function(event) {
    event.preventDefault();
  $('.pizza-cost-display').hide();

    var pizza_size = $("input[type='radio']:checked").val();
    var toppings = [];
    $.each($('#checkboxes input:checked'), function(){
      toppings.push($(this).val())
    });

    var pizza = new Pizza(pizza_size, toppings);
    var cost = pizza.cost();

    $('#pizza-cost-text').text(cost);
    $('.pizza-cost-display').show();

  });
});
