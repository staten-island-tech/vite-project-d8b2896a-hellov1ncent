document.querySelector(".themebtn").addEventListener("click", function (){
    if (document.body.classList.contains("cold")){
        document.body.classList.add("hot");
        document.body.classList.remove("cold");
    } else {
        document.body.classList.add("cold");
        document.body.classList.remove("hot");
    }
});
const DOMSelectors = {
    button: document.querySelectorAll(".btn"),
    lemonadeBtn: document.querySelector('.Original'),
    fruitBtn: document.querySelector('.Fruit'),
    sugarBtn: document.querySelector('.SugarFree'),
    themeBtn: document.querySelector('.themebtn'),
}

import "../styles/style.css"
import {cards} from "./array";





function clearfields(){
    DOMSelectors.column.innerHTML="";
}

function insertCards(arr){
    arr.forEach((cards) => {
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

let initiallemonade = cards.filter((cards)=> cards.type === 'Fruit');
insertCards(initiallemonade);

DOMSelectors.lemonadeBtn.addEventListener('click', function() {
    let newArr = cards.filter((card) => card.type === 'Original');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.fruitBtn.addEventListener('click', function() {
    let newArr = cards.filter((card) => card.type === 'Fruit');
    clearfields();
    insertCards(newArr);
});

DOMSelectors.sugarBtn.addEventListener('click', function() {
    let newArr = cards.filter((card) => card.type === 'Sugarfree');
    clearfields();
    insertCards(newArr);
});

















