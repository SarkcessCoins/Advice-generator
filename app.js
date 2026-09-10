const adviceButton = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

const handleAdvice = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.adviceslip.com/advice", true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      adviceText.textContent = `${data.slip.advice}`;
      adviceId.textContent = `${data.slip.id}`;
    }
  };
  xhr.send();
};

adviceButton.addEventListener("click", handleAdvice);
