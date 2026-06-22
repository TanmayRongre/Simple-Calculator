# 🧮 Calculator

A sleek, feature-rich web calculator built using HTML, CSS, and vanilla JavaScript. It supports both basic arithmetic and advanced mathematical operations. 🚀

## ✨ Features

- **➕➖ Basic Arithmetic:** Addition, Subtraction, Multiplication, and Division.
- **🔢 Advanced Operations:** 
  - Modulo (`%`)
  - Exponentiation (`xⁿ`)
  - Square Root (`√`)
  - Square (`x²`)
  - Factorial (`n!`)
  - Absolute Value (`|x|`)
  - Base-10 Logarithm (`log`)
  - Sine in degrees (`sin`)
- **🎯 Precision:** Handles floating-point rounding gracefully to prevent typical JavaScript decimal noise.
- **🧹 Clear & Reset:** A dedicated clear button to reset inputs and results.
- **🎨 Clean UI:** Clean typography with Google Fonts (Poppins) and dynamic visual feedback when a result is calculated.

## 🛠️ Technologies Used

- **🏗️ HTML5:** For structuring the input fields and operator buttons.
- **💅 CSS3:** For styling, grid layout of buttons, and visual enhancements.
- **⚡ JavaScript (Vanilla):** For all mathematical logic and DOM manipulation.

## 🚀 How to Use

1. 🌐 Open `index.html` in your web browser.
2. ⌨️ Enter the first number in the **First Number** input field.
3. 🔢 For operations requiring two numbers (like addition or exponentiation), enter a value in the **Second Number** field. For single-number operations (like `√`, `x²`, `!`, `|x|`, `log`, `sin`), you only need the first number.
4. 🖱️ Click the button corresponding to your desired operation.
5. 🎉 The full equation and the final answer will appear dynamically in the **Result** box.
6. 🔄 Click **Clear 🧹** to reset all fields and start over.

## 📂 File Structure

- 📄 `index.html`: The markup containing inputs and the interactive operator grid.
- 🎨 `style.css`: The styling and layout logic for the calculator interface.
- 📜 `script.js`: The robust JavaScript logic containing individual mathematical functions and DOM updaters.
