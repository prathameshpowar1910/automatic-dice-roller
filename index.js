//*For Multiple Dice ROll
window.addEventListener('DOMContentLoaded', function() {
    var diceElement = document.getElementById('dice');
    var rollButton = document.getElementById('rollButton');
    var diceCountInput = document.getElementById('diceCount');

    rollButton.addEventListener('click', function() {
        var diceCount = parseInt(diceCountInput.value);
        var diceValues = rollDice(diceCount);
        updateDiceContainer(diceValues);
    });
    
    document.addEventListener('keypress',function(event) {

        if (event.key==='Enter') {
            var diceCount = parseInt(diceCountInput.value);
            var diceValues = rollDice(diceCount);
            updateDiceContainer(diceValues);
        }

    });

    function rollDice(count) {
        var values = [];
        for (var i = 0; i < count; i++) {
            var diceValue = Math.floor(Math.random() * 6) + 1;
            values.push(diceValue);
        }
        return values;
    }

    function updateDiceContainer(values) {
        diceElement.innerHTML = '';
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            diceElement.innerHTML = diceElement.innerHTML+`<img height="100px" src="images/dice${values[i]}.png" alt="">`;
            sum += parseInt(values[i])
        }
        document.getElementById('total').innerText = "Total: "+ sum;
    }
});


//*For Single Dice ROll
// window.addEventListener('DOMContentLoaded', function() {
//     var diceElement = document.getElementById('dice');
//     var rollButton = document.getElementById('rollButton');
  
//     rollButton.addEventListener('click', function() {
//       var diceValue = rollDice();
//       diceElement.innerHTML = `<img height="100px" src="images/dice${diceValue}.png" alt="">`;
//     });

//     function rollDice() {
//       return Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
//     }
//   });