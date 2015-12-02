var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", EditItem);
  inputs[i].addEventListener("blur", UpdateItem);
  inputs[i].addEventListener("keypress", ItemKeypress);
}

function EditItem() {
  this.className = "edit";
  var inputs = this.querySelector("input");
  input.focus();
  input(setSelectionRange(0, input.value.length);
}

function UpdateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function ItemKeypress(event) {
  if (event.which === 13) {
    UpdateItem.call(this);
  }
}
