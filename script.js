// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("procurementForm");
  const errorsDiv = document.getElementById("errors");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission

    // Clear previous errors
    errorsDiv.innerHTML = "";
    let errors = [];

    // Collect values
    const tonnage = document.getElementById("tonnage").value.trim();
    const dealer = document.getElementById("dealer").value.trim();
    const cost = document.getElementById("cost").value.trim();
    const type = document.getElementById("type").value.trim();

    // === Error Simulation Rules ===
    // 1. Tonnage must be > 1000
    if (!tonnage || tonnage <= 1000) {
      errors.push("❌ Error: Tonnage must be a positive number.");
    }

    // 2. Dealer name must not be empty
    if (!dealer) {
      errors.push("❌ Error: Dealer name is required.");
    }

    // 3. Cost must be > 3000
    if (!cost || cost <= 3000) {
      errors.push("❌ Error: Cost must be a positive number.");
    }

    // 4. Type must not be empty
    if (!type) {
      errors.push("❌ Error: Type is required.");
    }

    // === Display Results ===
    if (errors.length > 0) {
      errorsDiv.style.color = "red";
      errorsDiv.innerHTML = "<h3>Form Errors:</h3><ul>" + errors.map(e => `<li>${e}</li>`).join("") + "</ul>";
    } else {
      errorsDiv.style.color = "green";
      errorsDiv.innerHTML = "<h3> Form submitted successfully!</h3>";

      // Optional: reset form after success
      form.reset();
    }
  });
});
