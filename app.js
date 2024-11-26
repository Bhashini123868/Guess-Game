let y = Math.floor(Math.random() * 10) + 1;
console.log("Generated number (for testing):", y);

let attempts = 0;
const maxAttempts = 3;

function Guess() {
    let x = parseInt(document.getElementById("number").value);

    let output = document.getElementById("output");

    if (isNaN(x) || x < 1 || x > 10) {
        output.innerHTML = "Please enter a valid number between 1 and 10!";
        return;
    }

    attempts++;

    if (x === y) {
        output.innerHTML = "Congratulations ! You guessed it right.";
        console.log("Correct guess");
    } else if (attempts >= maxAttempts) {
        output.innerHTML = `You lose ! The correct number was: ${y}`;
        console.log("Out of attempts");
    } else if (x > y) {
        output.innerHTML = `Sorry ! Try a lower number. Attempts left: ${maxAttempts - attempts}`;
        console.log("Guess too high");
    } else {
        output.innerHTML = `Sorry ! Try a greater number. Attempts left: ${maxAttempts - attempts}`;
        console.log("Guess too low");
    }

    if (attempts >= maxAttempts || x === y) {
        document.getElementById("number").disabled = true;
        document.getElementById("Guess").disabled = true;
    }
}
