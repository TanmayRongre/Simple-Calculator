// =============================================================
// STEP 1 — Get references to the HTML elements we need
// document.getElementById('id') finds an element by its id=""
// We store them in variables so we don't have to find them
// every single time we need them.
// =============================================================
const num1Input  = document.getElementById('num1');
const num2Input  = document.getElementById('num2');
const resultBox  = document.getElementById('resultBox');


// =============================================================
// STEP 2 — Pure math functions
// These do ONE job each: take numbers in, return a result out.
// They don't touch the page at all — just math.
// =============================================================

const add      = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Guard against dividing by zero — that's undefined in math
const divide   = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";
const modulus  = (a, b) => b !== 0 ? a % b : "Cannot mod by zero";

// ** is the exponent operator: 2 ** 3 = 8
const power    = (a, b) => a ** b;

// Math.sqrt() is built into JS — returns the square root
const sqrt     = (a) => a >= 0 ? Math.sqrt(a) : "Need a positive number";

const square   = (a) => a * a;

// |x| — absolute value removes the minus sign: |-5| = 5
const absolute = (a) => Math.abs(a);

// log base-10: Math.log10() is built into JS
const logarithm = (a) => a > 0 ? Math.log10(a) : "Need a positive number";

// sin in degrees — JS uses radians so we convert first: deg × π/180
const sine     = (a) => Math.sin(a * Math.PI / 180);

// Factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
// Only works on whole non-negative numbers
const factorial = (a) => {
  if (a < 0 || !Number.isInteger(a)) return "Need a whole positive number";
  if (a === 0 || a === 1) return 1;
  let result = 1;
  // loop from 2 up to a, multiplying result each time
  for (let i = 2; i <= a; i++) {
    result *= i;     // same as: result = result * i
  }
  return result;
};


// =============================================================
// STEP 3 — The main function: called when any button is clicked
// operator is the string we pass in from HTML, e.g. '+'
// =============================================================
function calculate(operator) {

  // Read the value from the input fields and convert to Number
  // Number('5') → 5,  Number('') → 0
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);

  // These will be filled in below
  let result;     // the answer
  let equation;   // the text shown, e.g. "10 + 5"

  // switch/case is like a chain of if/else for one variable
  switch (operator) {
    case '+':
      result   = add(a, b);
      equation = `${a} + ${b}`;
      break;  // stops here, doesn't fall into the next case

    case '-':
      result   = subtract(a, b);
      equation = `${a} − ${b}`;
      break;

    case '*':
      result   = multiply(a, b);
      equation = `${a} × ${b}`;
      break;

    case '/':
      result   = divide(a, b);
      equation = `${a} ÷ ${b}`;
      break;

    case '%':
      result   = modulus(a, b);
      equation = `${a} % ${b}`;
      break;

    case '**':
      result   = power(a, b);
      equation = `${a} ^ ${b}`;
      break;

    // Single-number operations — only use num1
    case 'sqrt':
      result   = sqrt(a);
      equation = `√(${a})`;
      break;

    case 'sq':
      result   = square(a);
      equation = `(${a})²`;
      break;

    case 'fact':
      result   = factorial(a);
      equation = `${a}!`;
      break;

    case 'abs':
      result   = absolute(a);
      equation = `|${a}|`;
      break;

    case 'log':
      result   = logarithm(a);
      equation = `log₁₀(${a})`;
      break;

    case 'sin':
      result   = sine(a);
      equation = `sin(${a}°)`;
      break;
  }

  // Round to 8 decimal places to avoid ugly floating point noise
  // e.g. 0.1 + 0.2 = 0.30000000000000004 in JS — we fix that
  if (typeof result === 'number') {
    result = parseFloat(result.toFixed(8));
  }

  // =============================================================
  // STEP 4 — Update the page with the result
  // innerText sets the visible text inside the element
  // =============================================================
  resultBox.innerText = `${equation} = ${result}`;

  // Add the glow class so CSS can light it up orange
  resultBox.classList.add('has-result');
}


// =============================================================
// STEP 5 — Clear everything back to the start
// =============================================================
function clearAll() {
  num1Input.value    = '';      // empties the input field
  num2Input.value    = '';
  resultBox.innerText = '—';   // resets the display
  resultBox.classList.remove('has-result');   // removes the glow
}
