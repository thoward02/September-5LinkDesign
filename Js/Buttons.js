//Bring up menu
function CollapsMenu(){
  //Collaps
  document.getElementById("Pathing-Content").style.height = "0";

  //Hide children
  for(var Children in document.getElementById("Pathing-Content").children){
    let Child = document.getElementById("Pathing-Content").children[Children];

    if(Child.nodeName == "DIV"){
      Child.style.visibility = "hidden";
      Child.style.marginTop = "-100px";
    }

  }

  //Reset button
  document.getElementById("Header-Title").onclick = UnCollapsMenu;
}

//Bring down menu
function UnCollapsMenu(){
  //Bring it out
  document.getElementById("Pathing-Content").style.height = "10%";

  //Show children
  for(var Children in document.getElementById("Pathing-Content").children){
    let Child = document.getElementById("Pathing-Content").children[Children];

    if(Child.nodeName == "DIV"){
      Child.style.visibility = "visible";
      Child.style.marginTop = "0px;";
    }

  }

  //Reset switch
  document.getElementById("Header-Title").onclick = CollapsMenu;
}

function AddCollapsableMenu(){
  let Menu = document.getElementById("Header-Title");

  Menu.onclick = UnCollapsMenu;

}

document.addEventListener("DOMContentLoaded", function(){
  //Add menu content
  AddCollapsableMenu();

  //Main Content
  CreateOwOs();
  AddKeyPressChange();
});
