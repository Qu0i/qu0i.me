const commands = {
  ls: () => "about/   projects/",
  "cd about": () => (window.location.href = "about.html"),
  "cd projects": () => (window.location.href = "projects.html"),
  help: () =>
    "Available commands: <br>ls, cd [dir], help, <br>whoami, echo [text], clear",

  whoami: () => "qu0i",

  echo: (args) => args.slice(1).join(" ") || "",

  clear: () => {
    output.innerHTML = "";
    return null;
  },

  
};

const input = document.getElementById("cmd");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const raw = input.value.trim();
    const parts = raw.split(" ");
    const cmd = parts[0];
    const handler = commands[raw] || commands[cmd];

    if (handler) {
      if (typeof handler === "function") {
        const result = handler(parts);
        if (result) {
          output.innerHTML += `<div>${result}</div>`;
        } else {
          output.innerHTML += ``;
        }
      }
    } else {
      output.innerHTML += `<div>${raw}: command not found...</div>`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
