// Creating the dices.

const dice1Roll = {
    number: 0,
};

const dice2Roll = {
    number: 0,
};

const elDiceOne = document.getElementById('dice1');
const elDiceTwo = document.getElementById('dice2');

// This object has an array with the right amount of items to
// capture the amount of rolls per number.
const amountOfRolls = {
    arrayRolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
}

// Creating a toggle "show" button to display or hide graph
const buttonShow = document.querySelector('#showbttn');

const graph = document.querySelector('.graph');

buttonShow.addEventListener('click', () => {
    if (graph.style.display === "none") {
        graph.style.display = "block";
    } else {
        graph.style.display = "none";
    }
});

// Start rolling and collecting data button.
const buttonRoll = document.querySelector('#rollbttn');

buttonRoll.addEventListener('click', () => {

    dice1Roll.number = Math.floor(Math.random() * 6) + 1;
    dice2Roll.number = Math.floor(Math.random() * 6) + 1;

    for (let i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (dice1Roll.number === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (let k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (dice2Roll.number === k) {
            elDiceTwo.classList.add('show-' + k);
        }
    }

    let sumDice = dice1Roll.number + dice2Roll.number;

    document.querySelector('#result').textContent = `You roll ${sumDice}. The numbers are ${dice1Roll.number} and ${dice2Roll.number}`;


    buttonRoll.addEventListener('click', () => {});

    if (sumDice === 2) {
        amountOfRolls.arrayRolls[0] = amountOfRolls.arrayRolls[0] + (1);
        console.log("The amount of Rolls of 2 is: " + amountOfRolls.arrayRolls[0]);
    }
    if (sumDice === 3) {
        amountOfRolls.arrayRolls[1] = amountOfRolls.arrayRolls[1] + (1);
        console.log("The amount of Rolls of 3 is: " + amountOfRolls.arrayRolls[1]);
    }
    if (sumDice === 4) {
        amountOfRolls.arrayRolls[2] = amountOfRolls.arrayRolls[2] + (1);
        console.log("The amount of Rolls of 4 is: " + amountOfRolls.arrayRolls[2]);
    }
    if (sumDice === 5) {
        amountOfRolls.arrayRolls[3] = amountOfRolls.arrayRolls[3] + (1);
        console.log("The amount of Rolls of 5 is: " + amountOfRolls.arrayRolls[3]);
    }
    if (sumDice === 6) {
        amountOfRolls.arrayRolls[4] = amountOfRolls.arrayRolls[4] + (1);
        console.log("The amount of Rolls of 6 is: " + amountOfRolls.arrayRolls[4]);
    }
    if (sumDice === 7) {
        amountOfRolls.arrayRolls[5] = amountOfRolls.arrayRolls[5] + (1);
        console.log("The amount of Rolls of 7 is: " + amountOfRolls.arrayRolls[5]);
    }
    if (sumDice === 8) {
        amountOfRolls.arrayRolls[6] = amountOfRolls.arrayRolls[6] + (1);
        console.log("The amount of Rolls of 8 is: " + amountOfRolls.arrayRolls[6]);
    }
    if (sumDice === 9) {
        amountOfRolls.arrayRolls[7] = amountOfRolls.arrayRolls[7] + (1);
        console.log("The amount of Rolls of 9 is: " + amountOfRolls.arrayRolls[7]);
    }
    if (sumDice === 10) {
        amountOfRolls.arrayRolls[8] = amountOfRolls.arrayRolls[8] + (1);
        console.log("The amount of Rolls of 10 is: " + amountOfRolls.arrayRolls[8]);
    }
    if (sumDice === 11) {
        amountOfRolls.arrayRolls[9] = amountOfRolls.arrayRolls[9] + (1);
        console.log("The amount of Rolls of 11 is: " + amountOfRolls.arrayRolls[9]);
    }
    if (sumDice === 12) {
        amountOfRolls.arrayRolls[10] = amountOfRolls.arrayRolls[10] + (1);
        console.log("The amount of Rolls of 12 is: " + amountOfRolls.arrayRolls[10]);
    }

    // I know .map() is a better loop but since we are working directly and changing the original array
    // I felt that .forEach() was a better fit in this specific case.
    amountOfRolls.arrayRolls.forEach(myFunction);

    function myFunction(value, index, array) {

        // Adding 2 to the index since the id starts at 2 and the index at 0
        // Also creating the varible with the whole name to pass to getElementById.
        let num = "number" + (index + 2);
        let dis = "disNum" + (index + 2);

        // The id can be a variable which is very helpful.
        document.getElementById(num).style.height = value + '0%';
        document.getElementById(dis).textContent = value;

    };

    // Using reduce to sum every roll in the array.
    let totalRolls = amountOfRolls.arrayRolls.reduce((a, b) => a + b, 0);
    console.log(totalRolls);

    document.getElementById("total").textContent = totalRolls;
});

// Button and function to start again and clean everything.
const buttonAgain = document.querySelector('#againbttn');

buttonAgain.addEventListener('click', () => {

    // Clear the rolls and array
    dice1Roll.number = 0;
    dice2Roll.number = 0;
    amountOfRolls.arrayRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    document.querySelector('#result').textContent = "";
    // Clear the total
    document.getElementById("total").textContent = "";

    // Clear the dice
    indexClass1 = elDiceOne.classList.item(2);
    indexClass2 = elDiceTwo.classList.item(2);
    elDiceOne.classList.remove(indexClass1);
    elDiceTwo.classList.remove(indexClass2);

    // Clear the graph
    amountOfRolls.arrayRolls.forEach(cleaning);

    function cleaning(value, index, array) {

        // Adding 2 to the index since the id starts at 2 and the index at 0
        // Also creating the varible with the whole name to pass to getElementById.
        let num = "number" + (index + 2);
        let dis = "disNum" + (index + 2);

        // The id can be a variable which is very helpful.
        document.getElementById(num).style.height = value + '0%';
        document.getElementById(dis).textContent = value;

    };

});