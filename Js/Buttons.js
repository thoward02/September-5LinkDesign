//Bring up menu
function CollapsMenu(){
  //Collaps
  document.getElementById("Pathing-Content").style.height = "0";

  //Hide children
  for(var Children in document.getElementById("Pathing-Content").children){
    let Child = document.getElementById("Pathing-Content").children[Children];

    if(Child.nodeName == "DIV"){
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
      Child.style.marginTop = "0px";
    }

  }

  //Reset switch
  document.getElementById("Header-Title").onclick = CollapsMenu;
}

function AddCollapsableMenu(){
  let Menu = document.getElementById("Header-Title");

  Menu.onclick = UnCollapsMenu;

}

function AddLinks(){
  let Children = document.getElementById("Pathing-Content").children;

  for(var Items in Children){
    let Elem = Children[Items];
    //Ensure you're on the link
    if(Elem.nodeName == "DIV"){
      //Add click event
      Elem.addEventListener("click", function(Elem){
        //If the outside element is clicked
        if(Elem.target.nodeName == "DIV"){
          //Open the sub child's ID
          window.open(Elem.target.children[0].id);
        }
        //If the inside element is clicked
        if(Elem.target.nodeName == "P"){
          //Open the elements's ID
          window.open(Elem.target.id);
        }
      });


    }
  }

}

document.addEventListener("DOMContentLoaded", function(){
  //Add menu content
  AddCollapsableMenu();

  //Add links
  AddLinks();

  //Main Content
  CreateOwOs();
  AddKeyPressChange();
});
