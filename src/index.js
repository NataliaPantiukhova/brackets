module.exports = function check(str, bracketsConfig) {
  let resultArr = [],
      pairOfBrackets = {},
      arrayFromString = str.split('');

  for(let i = 0; i < bracketsConfig.length; i++) {
    pairOfBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for(let i = 0; i < arrayFromString.length; i++) {
    if(arrayFromString[i] == (resultArr[resultArr.length - 1] || 0)) {
      resultArr.pop();
    } else {
      resultArr.push(pairOfBrackets[arrayFromString[i]]);
    }

  }
  if(resultArr.length == 0) {
    return true;
  } else {
    return false;
  }
}