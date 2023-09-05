// // Select the display input field by its id
// const displayInput = document.getElementById("display");

// // Add a keydown event listener to the document
// document.addEventListener("keydown", function (event) {
//   // Get the key code of the pressed key
//   const keyCode = event.keyCode;

//   // Define an object to map key codes to their corresponding characters
//   const keyMap = {
//     48: "0",  // 0
//     49: "1",  // 1
//     50: "2",  // 2
//     51: "3",  // 3
//     52: "4",  // 4
//     53: "5",  // 5
//     54: "6",  // 6
//     55: "7",  // 7
//     56: "8",  // 8
//     57: "9",  // 9
//     46: ".",  // .
//     47: "/",  // /
//     42: "*",  // *
//     45: "-",  // -
//     43: "+",  // +
//     13: "=",  // Enter (equals)
//     8: "BS",  // Backspace (for clearing)
//   };

//   // Check if the key code is in the keyMap
//   if (keyMap[keyCode]) {
//     // Prevent default key behavior (e.g., scrolling)
//     event.preventDefault();

//     // Handle specific keys
//     if (keyMap[keyCode] === "BS") {
//       // Backspace: Remove the last character from the display
//       displayInput.value = displayInput.value.slice(0, -1);
//     } else if (keyMap[keyCode] === "=") {
//       // Equals/Enter: Evaluate the expression
//       displayInput.value = eval(displayInput.value);
//     } else {
//       // Append the character associated with the key code
//       displayInput.value += keyMap[keyCode];
//     }
//   }
// });
