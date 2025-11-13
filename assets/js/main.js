document.addEventListener("DOMContentLoaded", () => {
  function typeText(element, text, speed = 100) {
    element.textContent = "";
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const greeting = document.getElementById("greeting");
  typeText(greeting, "Hi, I'm Qu0i.", 100);
});
