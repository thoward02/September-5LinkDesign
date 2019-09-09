function CreateLinkButton(Link){
  //Create parent
  let Parent = document.createElement("div");
  Parent.className = "Link";

  //Create child
  let TextChild = document.createElement("div");
  TextChild.innerHTML = "Click Me OwO";

  //Create picture
  let Picture = document.createElement("img");
  Picture.src = Link;
  Picture.className = "Link-Image";

  //Append
  Parent.appendChild(TextChild);
  Parent.appendChild(Picture);

  document.getElementById("Body-Links").appendChild(Parent);

  //Add event listener
  Parent.addEventListener("click", function(){
    window.location = Link;
  })

}


function CreateButtons(){
  window.Links = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bOYGHLNEdbOWSsXSY8Wg5gPaz_pcWRJluWR-kR9Zw4o2JUCn",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQURmrle6OrXYT5eUgYk2oUKsV3S8AzYCJcq58WSLzVPYkM3nUA",
    "https://i.imgur.com/HV9RMDt.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtahl6khQgmzzioydF9gze12sOcOBjzrERD-MxLU8kQvpCSkX",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajJM-RS6GvmGg1mufL2fAH2XnZYLQyS6LRoo3YJne8yxalFv4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQxwN4WfszT04UXw6u8Lw3nGFS6V9pFLGoiwCgK_Bl4y4KpAUtA",
    "https://memestatic.fjcdn.com/pictures/Owo_3c511d_6598663.jpg",
    "https://66.media.tumblr.com/61d95e0effed507c0c353d3c17d7c12d/tumblr_p36wrgmP0x1s9sccqo1_400.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm0A94F7mcE64vGuu1GAZFH9rQ4n5kA9FXRdsAU4PwidunpMW",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzzXzK47fN6RBPJ66xIvbLGo0fi73KLUo1J291NcEJNqguGI0lA",
    "https://ih0.redbubble.net/image.662328004.4359/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg",
    "https://art.pixilart.com/62a8c79f0aa7b4a.png",
    "https://pbs.twimg.com/profile_images/784976735007760384/wfWIHWWc_400x400.jpg",
    "https://bigmemes.funnyjunk.com/pictures/Owo_753219_6598663.jpg"
  ];


  let Buttons = 12//document.getElementsByClassName("Link");

  for(var items = 0; items < Buttons; items++){
    //Fetch ID
    let ImgID = Math.floor(Math.random() * window.Links.length);
    let img   = window.Links[ImgID];

    //Get rid of element
    let TempVar = [];
    for(var Links in window.Links){
      if(Links != ImgID){
        TempVar[TempVar.length] = window.Links[Links];
      }

    }
    window.Links = TempVar;

    //Add it
    CreateLinkButton(img);
  }


}

function AddKeyPressChange(){
  window.onkeydown = function(){
    //Remove items
    for(var items in document.getElementById("Body-Links").children){
        let Elem = document.getElementById("Body-Links").children[items];
        if(Elem.nodeName == "DIV"){
          document.getElementById("Body-Links").removeChild(Elem);
        }
    }

    //Add items
    CreateButtons();
  }
}

document.addEventListener("DOMContentLoaded", function(){
  CreateButtons();
  AddKeyPressChange();
});
