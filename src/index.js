module.exports = function check(str, bracketsConfig) {
  let dictionary = {};


  
    if (str.length % 2 != 0) {
      return false;
    }
    fillInDictionary(bracketsConfig);
    const stack = [];
    for (let symbol of str) {
      const topSymbolInStack = stack[stack.length - 1];
      if (topSymbolInStack !== undefined && topSymbolInStack === symbol) {
        stack.pop();
      } else {
        const closedSymbolForCurrent = dictionary[symbol];
        stack.push(closedSymbolForCurrent);
      }
    }
    return stack.length === 0;
  
  
  
  
  function fillInDictionary(bracketsConfig) {
    let result = {};
    bracketsConfig.forEach(element => {
      const openSymbol = element[0];
      const closeSymbol = element[1];
      result[openSymbol] = closeSymbol;
    });
    dictionary = result;
  }
}
