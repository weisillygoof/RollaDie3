// Function to roll a D20 die (generate a random number between 1 and 20)
function rolldie() {
    const result = rolladie(); // Get a random number between 1 and 20
    displayResult(result); // Display the result (only the text)
  }
  
  // Helper function to generate a random number between 1 and 20
  function rolladie() {
    return Math.floor(Math.random() * 20) + 1; // Returns a number between 1 and 20
  }
  
  // Function to update the result text
  function displayResult(result) {
    // Update the text to show the rolled number
    const diceResult = document.querySelector(".diceResult");
    diceResult.textContent = `You rolled: ${result}`; // Update the text dynamically
  }