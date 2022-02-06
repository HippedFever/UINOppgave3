// Oppgave 1
document.getElementById('remove-btn').onclick = function() {remove()};

function remove(){
  document.getElementById('remove').innerHTML = '';
}


// Oppgave 2
document.getElementById('change-btn').onclick = function() {change()};

function change(){
  document.getElementById('change').innerHTML = 'Teksten er endret';
}


// Oppgave 3
document.getElementById('input').oninput = function() {inputChange()};

function inputChange(){
  document.getElementById('input-text').innerHTML = input.value;
}

 
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul = document.getElementById("ul"); 
const writeListButton = document.getElementById("write-list");  

function addItemsToList(strings) {   
  strings.forEach(string => {     
    const li = document.createElement("li");     
    li.innerText = string;     
    ul.append(li);   
  }); } 

writeListButton.addEventListener("click", () => {   
  addItemsToList(myList); });


// Oppgave 5
document.getElementById('create').onclick = function(){createText()}

function createText(){
var select = document.getElementById('select');
var size = select.options[select.selectedIndex].value;
var textInBox = document.getElementById('text').value;

switch (size) {
  case 'h2':
    document.getElementById('placeholder').innerHTML = '<h2>'+ textInBox;
    break;
  case 'h3':
      document.getElementById('placeholder').innerHTML = '<h3>'+ textInBox;
      break;
  case 'span':
      document.getElementById('placeholder').innerHTML = '<span>'+ textInBox;
      break;
  case 'p':
      document.getElementById('placeholder').innerHTML = '<p>'+ textInBox;
      break;
  default:
    console.log('error');
}
}

// Oppgave 6
document.getElementById('remove-li').onclick = function(){removeLi()}

function removeLi(){
  var element = document.getElementById('list');
  element.removeChild(element.childNodes[1]);
}

// Oppgave 7
document.getElementById('order').onclick = function(){changeColor()}

  function changeColor(){
    var textInInput = document.getElementById('name').value;

    if (textInInput.length <= 4){
      document.getElementById('name').style.backgroundColor = 'green';
    }
    else {
      document.getElementById('name').style.backgroundColor = 'red';
    }

    }

// Oppgave 8
let buttonNed = document.getElementById("color");
buttonNed.addEventListener('click', borderOn);

function borderOn() {
  const collection = document.getElementsByClassName("dd44");
  for (let i = 0; i < collection.length; i++) {
    if (i % 2) {
      collection[i].style.border = "thick solid pink";
    } else {
      collection[i].style.border = "thick solid green";
    }
  }
};