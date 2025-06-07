function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerText = "Please select a valid date!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - dob) / (1000 * 60 * 60 * 24));

  document.getElementById("result").innerHTML =
    `<strong>Your age is:</strong><br> 
    ${years} years, ${months} months, and ${days} days.<br><br>
    <em>🗓️ You've been alive for <strong>${totalDays.toLocaleString()}</strong> days!</em>`;
}
