document.querySelector(".btn").addEventListener("click", function (){
    if (document.body.classList.contains("cold")){
        document.body.classList.add("hot");
        document.body.classList.remove("cold");
    } else {
        document.body.classList.add("cold");
        document.body.classList.remove("hot");
    }
});

import "../styles/style.css"




const DOMSelectors = {
    button: document.querySelectorAll(".btn"),
    lemonadebtn: document.querySelector('.Original'),
    fruitbtn: document.querySelector('.fruit'),
    lemonadebtn: document.querySelector('.SugarFree'),
    hotbtn: document.querySelector('.hot'),
    coldbtn:document.querySelector('.cold')
}


function clearfields(){
    DOMSelectors.column.innerHTML="";
}


function insertCards(arr){
    arr.array.forEach(lemonade => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${cards.name}</h3>
                <img src="${cards.img}" class="img">
                <h4>Price: ${cards.price}</h4>
            </div>`
        )
    });
}















