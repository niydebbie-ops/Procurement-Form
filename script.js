document.getElementById("procurementForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from submitting

  let errors = [];

  let tonnage = document.getElementById("tonnage").value;
  let dealer = document.getElementById("dealer").value;
  let cost = document.getElementById("cost").value;
  let type = document.getElementById("type").value;

  // Rule 1: Tonnage must be at least 1000kg
  if (tonnage < 1000) {
    errors.push("Tonnage must be at least 1000kg");
  }

  // Rule 2: Dealer name must be at least 2 characters
  if (!dealer || dealer.length < 2) {
    errors.push("Dealer name too short");
  }

  // Rule 3: Cost must be at least 5 digits
  if (cost.toString().length < 5) {
    errors.push("Cost must be at least 5 digits");
  }

  // Rule 4: Type cannot be empty
  if (!type || type.trim() === "") {
    errors.push("Type cannot be empty");
  }

  // Show errors
  let errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = "";

  if (errors.length > 0) {
    errorDiv.innerHTML = "Errors found:<br>" + errors.map((err, i) => `${i+1}. ${err}`).join("<br>");
  } else {
    errorDiv.innerHTML = "Form is valid!";
  }
});
