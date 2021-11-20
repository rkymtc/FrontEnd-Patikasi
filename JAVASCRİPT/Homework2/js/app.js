let inputDOM = document.getElementById("task");
let listDOM = document.getElementById("list");
let liDOM = document.querySelectorAll("li");

const completed = (e) => {
  e.target.classList.toggle("checked");
};

const deleteItem = (e) => {
  e.target.parentNode.style.display = "none";
};

liDOM.forEach((el) => {
  el.addEventListener("click", completed);

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);

  el.appendChild(span);

  el.childNodes[1].addEventListener("click", deleteItem);
});

let close = document.getElementsByClassName("close");

const newElement = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(inputDOM.value));

  !inputDOM.value
    ? $(".error").toast("show")
    : listDOM.appendChild(li)
    ? $(".success").toast("show")
    : "";

  inputDOM.value = "";

  li.addEventListener("click", completed);

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);

  li.appendChild(span);

  li.childNodes[1].addEventListener("click", deleteItem);
};
