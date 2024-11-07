const app = document.querySelector("#app");

function Button(text, action, disabled = false) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", action);
  button.disabled = disabled;
  return button;
}

function loadJSFile(file) {
  return () => {
    const existingScripts = document.querySelector(`script[src="${file}"]`);
    if (existingScripts) {
      existingScripts.remove();
      console.log(`unloaded previousscript: ${file}`);
    }
    const script = document.createElement("script");
    script.src = file;
    script.type = "module";
    app.appendChild(script);
    console.log(`Loaded script: ${file}`);
  };
}

const module1Button = Button("Module 1", loadJSFile("./ext1.js"));
const module2Button = Button("Module 2", loadJSFile("./ext2.js"));
const module3Button = Button("Module 3", loadJSFile("./ext3.js"), true);
const module4Button = Button("Module 4", loadJSFile("./ext4.js"), true);

app.innerHTML = `
  <h1>JavaScript Assignment</h1>
  <p>Click on the buttons below to load the modules.</p>
`;
app.appendChild(module1Button);
app.appendChild(module2Button);
app.appendChild(module3Button);
app.appendChild(module4Button);
