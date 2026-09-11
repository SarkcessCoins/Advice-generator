const adviceButton = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const indicator = document.getElementById("indicator");

async function getQoute() {
  adviceText.textContent = "Loading. . .";
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`Error fetching advice: ${response.status}`);
    }
    const data = await response.json();
    adviceId.textContent = `${data.slip.id}`;
    adviceText.innerHTML = `<q> ${data.slip.advice} </q>`;
  } catch (error) {
    adviceText.style.display = "none";
    indicator.classList.add("indicator-error");
    indicator.textContent = `${error.message}`;
  }
}

adviceButton.addEventListener("click", getQoute);
