document.getElementById('add-item').addEventListener("click", function() {
  var value = document.getElementById("input").value;

  if(value === "") {
    alert("Add something...");
    } else {
    addItem(value);
    document.getElementById("input").value= '';
  }
});
function addItem(text) {
    //creating a list item
  var list = document.getElementById('my-list');
  var item = document.createElement('li');
  item.innerText = text;


   //creating a button to remove added item
  var button = document.createElement('button');
  var txt = document.createTextNode('\u00D7');
  button.id = "close";
  button.appendChild(txt);
  item.appendChild(button);
  list.insertBefore(item, list.childNodes[0]);
   //click to remove item
   var close = document.getElementById('close')
   close.addEventListener('click', function() {
   var div = this.parentElement;
   div.style.display = 'none';
 });
}

  //mark checked item when clicked
  var check = document.querySelector('ul');
  check.addEventListener('click', function(ev) {
  if(ev.target.tagName ==='LI') {
  ev.target.classList.toggle('checked');
    }
  }, false);

  //remove items already on page
 function rem() {
   var list = document.getElementsByTagName('li');
   var i;
   for(var i=0;li=list[i];i++){
   li.parentNode.removeChild(li);
   }
 }
