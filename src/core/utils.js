"use strict";

import { createSignal } from "./signals";

const [cachedfile, setCachedfile] = createSignal("");
export function loadJSFile(file) {
  return () => {
    if (cachedfile() !== "") {
      const oldfile = cachedfile();
      console.log(`cachedfile: ${oldfile}`);
      console.log(`file: ${file}`);
      if (oldfile === file) {
        console.log(`I return early`);
        return;
      }
      // get file number from ./src/modules/ext2.js
      const filenumber = oldfile.split("/")[3].split(".")[0].split("ext")[1];
      console.log(`${oldfile} vs ${filenumber}`);

      const existingScripts = document.querySelector(
        `script[src="${cachedfile()}"]`
      );

      if (existingScripts) {
        existingScripts.parentNode.removeChild(existingScripts);
        console.log(`unloaded previous script: ${cachedfile()}`);
      }
      // if (oldsection) {
      //   window.location.reload();
      // }
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = file;
    setCachedfile(file);
    document.body.appendChild(script);
    console.log(`Loaded script: ${file}`);
  };
}

export function numberRange(start, end) {
  return Math.floor(
    Math.random() * (Math.floor(end) - Math.ceil(start) + 1) + Math.ceil(start)
  );
}
