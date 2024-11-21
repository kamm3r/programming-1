"use strict";
import { h } from "./core/pragma.js";
import { createEffect, createSignal } from "./core/signals.js";
import { loadJSFile } from "./core/utils.js";

function counter() {
  const [counter, setCounter] = createSignal(0);
  const count = h("button", null, `count is ${counter()}`);
  count.addEventListener("click", () => setCounter(counter() + 1));

  createEffect(() => {
    count.innerHTML = `count is ${counter()}`;
  });

  return count;
}

/**
 *
 * @param {string} text
 * @param {fn} action
 * @param {boolean} disabled
 * @returns {HTMLButtonElement}
 */
function Button(text, action, disabled = false) {
  const button = h("button", { className: "module" }, text);
  button.addEventListener("click", action);
  button.disabled = disabled;
  return button;
}

async function loadModule(modulePath) {
  try {
    await import(modulePath);
  } catch (error) {
    console.error(`Error loading module ${modulePath}:`, error);
  }
}

const throwaway = h("section", { className: "hello" });

export const App = h(
  "main",
  null,
  h("h1", null, "JavaScript Assignment"),
  h("p", null, "Click on the buttons below to load the modules."),
  Button("Module 1", loadJSFile("./src/modules/ext1.js")),
  Button("Module 2", loadJSFile("./src/modules/ext2.js")),
  Button("Module 3", () => loadModule("./modules/ext3.js")),
  Button("Module 4", () => loadModule("./modules/ext4.js")),
  counter(),
  throwaway
);
