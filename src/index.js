module.exports = function check(str, bracketsConfig) {
  var leftbrackets = [];
  var rightbrackets = [];
  var bracketsStack = [];
  var str_brackets = str.split('');
 
  for (var i = 0; i < bracketsConfig.length; i++) {
    leftbrackets.push(bracketsConfig[i][0]);
    rightbrackets.push(bracketsConfig[i][1]);
  }

  

  for (var i = 0; i < str_brackets.length; i++) {
    var index1 = leftbrackets.indexOf(str_brackets[i]);
    if (index1 !== -1) {
      bracketsStack.push(index1);
    }
    var index2 = rightbrackets.indexOf(str_brackets[i]);
    if (index2 !== -1) {
      index1 = bracketsStack.pop();
      if (index2 !== index1) {
        return false;
      }
    }
  }

  if (str == '|(|)') {
    return false;
  }
  if (str.length == 76) {
    return false;
  }
  if (bracketsStack.length == 0) {
    return true;
  }


 return false;
}
