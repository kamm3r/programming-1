"use strict";

import { h } from "../core/pragma";

const app = document.querySelector("#root");
const section = document.querySelector(".hello");
const ul = document.createElement("ul");
const ul2 = document.createElement("ul");
const ul3 = document.createElement("ul");
const select = document.createElement("select");
const article = document.createElement("article");
const h2 = document.createElement("h2");
h2.innerText = "Module 3. BOM, DOM and events";

// Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-list to the element with id="target"

ul.innerHTML = `<li>First item</li><li>Second item</li><li>Third item</li>`;
ul.className = "my-list";

// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item

ul2.innerHTML = `<li>First item</li><li>Second item</li><li>Third item</li>`;
ul2.querySelector("li:nth-child(2)").className = "my-item";

// Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
// Add the following HTML code to the element with id="target". Add the values from
// 'names' array to the <li> elements in a for-loop.
// <li>John</li>
// <li>Paul</li>
// <li>Jones</li>

// Open t4 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target". Add the values from 'students'
// array to the <option> elements in a for-loop.
// <option value="2345768">John</option>
// <option value="2134657">Paul</option>
// <option value="5423679">Jones</option>
// open Element Inspector from DevTools to see the full result. (right click, inspect...)

const students = new Set([
  { key: "", value: "Select student" },
  { key: "2345768", value: "John" },
  { key: "2134657", value: "Paul" },
  { key: "5423679", value: "Jones" },
]);

for (const student of students) {
  const option = document.createElement("option");
  option.value = student.key;
  option.innerText = student.value;
  select.appendChild(option);
}

// Open t5 folder in your IDE/editor. Create multiple <article> elements that contain heading,
// image, image caption and text and populate them with the data from picArray. Add the
// articles to the <section> element. (5p)
// The structure of the articles should be this:
// <article class="card">
//    <h2>title_from_picArray</h2>
//    <figure>
//       <img src="medium_image_from_picArray" alt="title_from_picArray"/>
//       <figcaption>caption_from_picarray</figcaption>
//    </figure>
//    <p>description_from_picArray</p>
// </article>

const picArray = [
  {
    title: "Title 1",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic1.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic1.jpg",
    },
    caption: "Caption 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
  },
  {
    title: "Title 2",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic2.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic2.jpg",
    },
    caption: "Caption 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
  },
  {
    title: "Title 3",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic3.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic3.jpg",
    },
    caption: "Caption 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
  },
  {
    title: "Title 4",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic4.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic4.jpg",
    },
    caption: "Caption 4",
    description:
      "Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    title: "Title 5",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic5.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic5.jpg",
    },
    caption: "Caption 5",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ",
  },
  {
    title: "Title 6",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic6.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic6.jpg",
    },
    caption: "Caption 6",
    description:
      "Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.",
  },
  {
    title: "Title 7",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic7.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic7.jpg",
    },
    caption: "Caption 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
  },
  {
    title: "Title 8",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic8.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic8.jpg",
    },
    caption: "Caption 8",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ",
  },
  {
    title: "Title 9",
    images: {
      large:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/img/pic9.jpg",
      medium:
        "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t5/thumbnails/pic9.jpg",
    },
    caption: "Caption 9",
    description:
      "Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ",
  },
];

for (const pic of picArray) {
  const allArticles = document.createElement("article");

  const heading = document.createElement("h2");
  heading.innerText = pic.title;
  article.appendChild(heading);

  const image = document.createElement("figure");

  const img = document.createElement("img");
  img.src = pic.images.medium;
  img.alt = pic.title;
  image.appendChild(img);

  const caption = document.createElement("figcaption");
  caption.innerText = pic.caption;
  image.appendChild(caption);

  article.appendChild(image);

  const description = document.createElement("p");
  description.innerText = pic.description;
  article.appendChild(description);

  article.appendChild(allArticles);
}

// Open t6 folder in your IDE/editor. Make a script that opens an alert window that says
// 'Button Clicked' when the <button> element is clicked. (1p)

const alertButton = document.createElement("button");
alertButton.innerText = "Alert";
alertButton.addEventListener("click", () => {
  alert("Button Clicked");
});

// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

const target = document.createElement("figure");
const trigger = document.createElement("p");
trigger.id = "trigger";
trigger.innerText = "Hover over me";
const picA =
  "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t7/img/picA.jpg";
const picB =
  "https://raw.githubusercontent.com/ilkkamtk/module3-starters/refs/heads/main/t7/img/picB.jpg";

const img = document.createElement("img");
img.style.width = "100%";
img.id = "target";
img.src = picA;
img.alt = "picA.jpg";

trigger.appendChild(target);

trigger.addEventListener("mouseover", () => {
  img.src = picB;
  img.alt = "picB.jpg";
});

trigger.addEventListener("mouseout", () => {
  img.src = picA;
  img.alt = "picA.jpg";
});

target.style.maxWidth = "400px";
target.appendChild(img);

// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
// There are two input fields where user enters numbers. Based on the drop-down list,
// calculator performs addition, subtraction, multiplication or division of these two numbers.
// Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
// Show the result in <p id="result"> when the button is clicked.

const calculator = document.createElement("form");
const formresult = document.createElement("p");
formresult.id = "result";
formresult.innerText = "Result: -";

calculator.innerHTML = `
<label for="a">First number:</label>
<input type="number" id="a" name="a" value="0">
<label for="b">Second number:</label>
<input type="number" id="b" name="b" value="0">
<select id="operation">
<option value="add">Add</option>
<option value="subtract">Subtract</option>
<option value="multiply">Multiply</option>
<option value="divide">Divide</option>
</select>
<button type="submit">Calculate</button>
`;
calculator.appendChild(formresult);

calculator.addEventListener("submit", (event) => {
  event.preventDefault();
  const a = parseInt(event.currentTarget[0].value);
  const b = parseInt(event.currentTarget[1].value);
  const operation = event.currentTarget[2].value;
  let result;
  if (operation === "add") {
    result = a + b;
  } else if (operation === "subtract") {
    result = a - b;
  } else if (operation === "multiply") {
    result = a * b;
  } else if (operation === "divide") {
    result = a / b;
  } else {
    result = 0;
    console.log("Invalid operation");
  }
  formresult.innerText = `Result: ${result}`;
});

// Open t9 folder in your IDE/editor. This is continuation to previous task.
// There is only one text field left, where the user writes the calculation
// (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc...

const div = document.createElement("div");
const input = document.createElement("input");
const calculate = document.createElement("button");
const resultp = document.createElement("p");
input.type = "text";
input.placeholder = "Enter calculation";
resultp.innerText = "Result: -";
calculate.disabled = true;
calculate.innerText = "Calculate";

input.addEventListener("input", () => {
  calculate.disabled = false;
});

calculate.addEventListener("click", () => {
  calculate.disabled = true;
  let result = parseInt(eval(input.value));
  if (isNaN(result)) {
    result = 0;
  }

  resultp.innerText = `Result: ${result}`;
  input.value = "";
});
div.appendChild(input);
div.appendChild(calculate);
div.appendChild(resultp);

// Open t10 folder in your IDE/editor. Read the first name and last name values from the
// form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker

const nameForm = document.createElement("form");
const targetname = document.createElement("p");
targetname.id = "target";
targetname.innerText = "Your name is ";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");

nameForm.innerHTML = `
<label for="firstName">First name:</label>
<input type="text" id="firstName" name="firstName" placeholder="John">
<label for="lastName">Last name:</label>
<input type="text" id="lastName" name="lastName" placeholder="Doe">
<button type="submit">Submit</button>
`;

nameForm.appendChild(targetname);

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNameValue = event.currentTarget[0].value;
  const lastNameValue = event.currentTarget[1].value;
  targetname.innerText = `Your name is ${firstNameValue} ${lastNameValue}`;
});

// </input>Continue task 5. Folder t11 already exists. Follow the instructions in t11.txt.
// </p></p>Modify the program to open large image in a modal when <article> is clicked. (6p)
// kick yourself at this point if you used innerHTML to create the <article> and its content.
// </article></article>add the following html code between </div> and </body> manually to
// the HTML-document (no JS)
// <dialog>
//    <span>&#x2715;</span>
//    <img>
// </img></dialog>
// </input>picArray has two images for each item: medium and large. Medium is used in
// </p></p>the <img> inside the <article> and large is used in the <img> inside the <dialog>.
// </dialog>use showModal() and close() functions to show and hide <dialog>
// </dialog>the same time you are opening the modal, you should put the large image to the <img> in the modal.
// </img></img>Don't forget to add alt attribute.
// </article>use <span> inside <dialog> to close the modal.

const articles = document.createElement("div");
let i = 0;
for (const pic of picArray) {
  const id = ++i;
  const modal = document.createElement("dialog");
  modal.innerHTML = `
  <button id="close${id}">&#x2715;</button>
  `;
  const openButton = document.createElement("button");
  openButton.innerText = "show modal";
  openButton.addEventListener("click", () => {
    modal.showModal();
    console.log("modal shown");
    document.querySelector(`#close${id}`).addEventListener("click", () => {
      modal.close();
      console.log("modal closed");
    });
  });
  const newarticle = document.createElement("article");

  const newheading = document.createElement("h2");
  newheading.innerText = pic.title;
  newarticle.appendChild(newheading);

  const newimage = document.createElement("figure");
  newimage.appendChild(openButton);
  const largeImage = document.createElement("img");
  largeImage.src = pic.images.large;
  largeImage.alt = pic.title;
  newarticle.appendChild(modal);
  modal.appendChild(largeImage);

  const newimg = document.createElement("img");
  newimg.src = pic.images.medium;
  newimg.alt = pic.title;
  newimage.appendChild(newimg);

  const newcaption = document.createElement("figcaption");
  newcaption.innerText = pic.caption;
  newimage.appendChild(newcaption);

  newarticle.appendChild(newimage);

  const newdescription = document.createElement("p");
  newdescription.innerText = pic.description;
  newarticle.appendChild(newdescription);

  articles.appendChild(newarticle);
}
const diver = document.createElement("div");

diver.append(
  h2,
  ul,
  ul2,
  ul3,
  select,
  article,
  alertButton,
  trigger,
  calculator,
  div,
  nameForm,
  articles
);
section.prepend(diver);
app.appendChild(section);
