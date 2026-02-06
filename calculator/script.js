// ===== ELEMENTS =====
const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll(".keys button");
const themeToggle = document.getElementById("themeToggle");

let expression = "";

// ===== CALCULATOR LOGIC =====
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    // CLEAR
    if (val === "AC") {
      expression = "";
      expressionEl.innerText = "";
      resultEl.innerText = "0";
      return;
    }

    // EQUAL
    if (val === "=") {
      try {
        const finalExpr = expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        const answer = eval(finalExpr);
        resultEl.innerText = answer;
        expression = answer.toString();
      } catch {
        resultEl.innerText = "Error";
        expression = "";
      }
      return;
    }

    // NORMAL BUTTONS
    expression += val;
    expressionEl.innerText = expression;
  });
});

// ===== THEME TOGGLE =====
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  // Change icon
  themeToggle.innerText =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

