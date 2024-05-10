# Popup Component Readme

This repository contains a simple popup component built using HTML, CSS, and JavaScript. The popup component allows users to open and close a popup window by clicking on designated buttons.

## Demo

You can access the live demo of the popup component [here](https://kchamling.github.io/popup/).

## Usage

To use the popup component:

1. Open the `index.html` file in a web browser.
2. Click the button labeled "Open Popup" to display the popup window.
3. Click the "X" button within the popup window or anywhere outside the popup window to close it.

## Files

- `index.html`: Contains the HTML structure of the web page with the popup component.
- `styles.css`: Contains the CSS styles for the popup component and other elements on the web page.
- `script.js`: Contains the JavaScript code for showing and hiding the popup window.

## Code Overview

- The JavaScript code includes functions to show and hide the popup window by adding and removing a CSS class (`show-popup`) to the popup element.
- The `openBtn` event listener triggers the `showPopup()` function when the "Open Popup" button is clicked.
- The `closeBtn` event listener triggers the `closePopup()` function when the "X" button within the popup window is clicked.
- Clicking anywhere outside the popup window also triggers the `closePopup()` function, ensuring a consistent user experience.
