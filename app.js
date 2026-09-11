const adviceButton = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const indicator = document.getElementById("indicator");

async function getQuote() {
  if (adviceButton.getAttribute("aria-disabled") === "true") {
    return;
  }
  resetIndicator();
  adviceText.textContent = "Loading. . .";
  adviceButton.classList.add("disabled");
  adviceButton.setAttribute("aria-disabled", "true");

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`Error fetching advice: ${response.status}`);
    }

    const data = await response.json();
    adviceId.textContent = `${data.slip.id}`;
    adviceText.style.display = "block";
    adviceText.innerHTML = `<q> ${data.slip.advice} </q>`;
  } catch (error) {
    adviceText.style.display = "none";
    indicator.classList.add("indicator-error");
    indicator.textContent = `${error.message}`;
  } finally {
    adviceButton.classList.remove("disabled");
    adviceButton.setAttribute("aria-disabled", "false");
  }
}
function resetIndicator() {
  indicator.textContent = ` `;
  indicator.classList.remove("indicator-error");
}

adviceButton.addEventListener("click", getQuote);
