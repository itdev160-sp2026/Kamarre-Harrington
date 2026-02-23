function checkAge() {
  const input = document.getElementById("ageInput").value;
  const result = document.getElementById("result");
  const age = Number(input);

  console.log("Input value:", input);
  console.log("Converted age:", age);

  if (input === "") {
    result.textContent = "Please enter your age";
    result.className = "invalid";
  } else if (isNaN(age)) {
    result.textContent = "Invalid age - please enter a number";
    result.className = "invalid";
  } else if (age < 0 || age > 150) {
    result.textContent = "Invalid age - please enter a realistic age (0-150)";
    result.className = "invalid";
  } else if (age < 18) {
    result.textContent = `You are ${age} years old - You are a minor`;
    result.className = "minor";
  } else {
    result.textContent = `You are ${age} years old - You are an adult`;
    result.className = "adult";
  }
}