/*
JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

Alert Box
An alert box is often used if you want to make sure information comes through to the user.x
When an alert box pops up, the user will have to click "OK" to proceed.

alert("I am an alert box!");


Confirm Box
A confirm box is often used if you want the user to verify or accept something.
When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

Syntax
window.confirm("sometext");
The window.confirm() method can be written without the window prefix.
Example
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}


Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.
When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

Syntax
window.prompt("sometext","defaultText");
The window.prompt() method can be written without the window prefix.

Example
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}

*/