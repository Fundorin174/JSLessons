var multiply = function(numbers) {
  var result = 1;
  for (var i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

var result = multiply(numbers);
