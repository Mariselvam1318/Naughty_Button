# Naughty Button Form

This project is a fun "Naughty Button" form where the submit button dodges the user's attempts to click it if the form validation conditions are not met. This project demonstrates interactive form validation and CSS animations in a light-hearted way using HTML, CSS, and JavaScript.

## Features

*   **Dynamic Button Animation:** The submit button moves left and right if form fields aren't filled out correctly, challenging the user to complete all fields accurately.
*   **Form Validation:** Basic validation checks for:
*   A non-empty username
*   A valid email format (contains "@" and a "." with appropriate positioning)
*   A password of exactly 8 characters
*   **Styling:** The form has a sleek, centered layout with a gradient background, rounded corners, and a subtle box-shadow effect.
*   **User Feedback:** Upon successful form submission, the user receives an alert saying "Form submitted successfully!"

## Files

### HTML (`index.html`)

The HTML file defines the structure of the form and includes:

*   Input fields for username, email, and password
*   A "Submit" button with `onmouseover` event to trigger the "naughty" functionality

### CSS (`style.css`)

The CSS file handles styling for a visually appealing form:

*   Linear gradient background
*   Centered form with padding, rounded corners, and shadow
*   Transition effects on the submit button

### JavaScript (`script.js`)

The JavaScript file contains functions for:

*   **Button Movement Logic:** The `naughty()` function checks form field values and moves the button left or right based on the validity of inputs.
*   **Form Validation:** Additional validation to check if the form meets criteria before allowing submission.
*   **Button Resetting:** The button resets to its original position when an input field is clicked.

## Getting Started

1.  Clone the repository to your local machine.
2.  Ensure you have the required Bootstrap CSS file in `./bootstrap-5.0.2-dist/css/bootstrap.min.css`.
3.  Open `index.html` in your browser to test the form.

## Usage

*   Enter a username, email, and password in the form.
*   If any input is invalid, the button will move away when you try to click it.
*   Once all fields are correctly filled, the button will stop moving and allow the form to be submitted.

## Code Snippets

### HTML Button Setup
```
<button type="button" class="btn btn-primary" onmouseover="naughty()" onclick="submitForm()" id="btn">Submit</button>
```
### JavaScript Button Movement
```
function buttonmoveleft() {   
 const btn = document.getElementById("btn");
    btn.style.transform = "translateX(-180%)";
}

function buttonmoveright() {
    const btn = document.getElementById("btn");
    btn.style.transform = "translateX(180%)";
}
```
