var romanNumerals = function(number) {
  var numbers = number.split("").reverse();

  var answer = "";
  var romanOnes = {"0": "", "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX"};
  var romanTens = {"0": "", "1": "X", "2": "XX", "3": "XXX", "4": "XL", "5": "L", "6": "LX", "7": "LXX", "8": "LXXX", "9": "XC"};
  var romanHundreds = {"0": "", "1": "C", "2": "CC", "3": "CCC", "4": "XD", "5": "D", "6": "DC", "7": "DCC", "8": "DCCC", "9": "CM"};
  var romanThousands = {"0": "", "1": "M", "2": "MM", "3": "MMM"};

  numbers.forEach(function(number, index) {
    if (index === 0) {
      answer = romanOnes[number] + answer;
    } else if (index === 1) {
      answer = romanTens[number] + answer;
    } else if (index === 2) {
      answer = romanHundreds[number] + answer;
    } else if ((index === 3) && (number < 4)) {
      answer = romanThousands[number] + answer;
    } else {
      answer = "No Roman Value Equivalent"
    }
  });
  return answer
};
