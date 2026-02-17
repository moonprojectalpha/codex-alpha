/* SEARCH FEATURE */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

  let filter = searchInput.value.toLowerCase();
  let items = document.querySelectorAll(".mockup");

  items.forEach(item => {

    let name = item.dataset.name;
    item.style.display =
      name.includes(filter) ? "block" : "none";

  });

});

}



/* CUSTOM ADD MOCKUP */

function addMockup(){

  let url =
    document.getElementById("imgUrl").value;

  let name =
    document.getElementById("imgName").value;

  let preview =
    document.getElementById("preview");

  let div = document.createElement("div");

  div.innerHTML =
    `<img src="${url}" width="200">
     <p>${name}</p>`;

  preview.appendChild(div);

}
