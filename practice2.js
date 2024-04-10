// Generating a random integer from 1 to 10
const random = Math.floor(Math.random() * 10) + 1;

// Take input from the user
let number = 6;

// Take the input until the guess is correct
while (number == random) {
  number = 4;
}

// The loop will exit only if the guess is correct.
console.log("You guessed the correct number.");
