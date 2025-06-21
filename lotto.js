function generateLotteryNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b); // Convert set to array and sort
}


window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLotto").appendChild(node);
  }
}
  // Example usage for a 6-number lottery with numbers from 1 to 60:
const lotteryNumbers = generateLotteryNumbers(6, 69);
const powerballNumbers = generateLotteryNumbers(1, 26);
console.log('Your Lucky Numbers Today are:')
console.log(lotteryNumbers);
console.log('...and your Powerball Number is:')
console.log(powerballNumbers);

