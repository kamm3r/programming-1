const body = document.body;
const app = document.querySelector("#app");

function Button(text, action, disabled = false) {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", action);
  button.disabled = disabled;
  return button;
}

const cachedFilenames = new Set();

function loadJSFile(file) {
  return () => {
    for (const previousfile of cachedFilenames.values()) {
      if (previousfile) {
        console.log(`unloaded previousscript: ${previousfile}`);
        const existingScripts = document.querySelector(
          `script[src="${previousfile}"]`
        );
        if (existingScripts) {
          existingScripts.parentNode.removeChild(existingScripts);
          cachedFilenames.delete(previousfile);
        }
      }
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = file;
    cachedFilenames.add(file);
    body.appendChild(script);
    console.log(`Loaded script: ${file}`);
  };
}

app.innerHTML = `
  <h1>JavaScript Assignment</h1>
  <p>Click on the buttons below to load the modules.</p>
`;
for (let i = 1; i < 5; ++i) {
  if (i === 4) {
    app.append(Button(`Module ${i}`, loadJSFile(`./ext${i}.js`), true));
  } else {
    app.append(Button(`Module ${i}`, loadJSFile(`./ext${i}.js`)));
  }
}
