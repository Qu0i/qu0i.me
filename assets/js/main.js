document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I’m Qu0i.";
  const speed = 100;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();


  const quotes = [
    "Keep it simple.",
    "Code. Sleep. Repeat.",
    "Freedom in every line.",
    "Minimalism is clarity."
  ];
  const quoteEl = document.getElementById("quote");
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
