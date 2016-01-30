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

$('document').ready(function() {
  $('button#submit-btn').click(function(event) {
    event.preventDefault();

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

    console.log(cost);


  });
});


/*
// checked radio val:
$('input[type="radio"]:checked').val();

//checked checkboxes vals:
$.each($('#checkboxes input:checked'), function() {array.push($(this).val())});



for (var i=0; i< $('#checkboxes input:checked').length; i++) {arr.push($('#checkboxes input:checked').val());}




$('input[type="checkbox"]').on('click', function() {
    alert($(this).attr('value'));
});

var selected = [];
$('#checkboxes input:checked').each(function() {
    selected.push($(this).attr('value'));
});
*/
