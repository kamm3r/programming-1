/**
 *
 * @param {string | ((props: any, children: any[]) => HTMLElement)} tag
 * @param {Record<string, string> | null} props
 * @param  {(Node | string)[]} children
 * @returns
 */
export function h(tag, props, ...children) {
  // If tag is a component, call it
  if (typeof tag === "function") {
    return tag({ ...props }, children);
  }
  // Create HTML-element with given attributes
  const element = document.createElement(tag);
  if (props) {
    Object.entries(props).forEach(([key, val]) => {
      if (key === "className") {
        element.classList.add(...(val || "").trim().split(" "));
        return;
      }
      element.setAttribute(key, val);
    });
  }

  // Append child elements into the parent
  children.forEach((child) => {
    element.append(child);
  });

  return element;
}
