// Ude Import export (MANDATORY)

import{navbar} from "../components/navbar.js"

import{printNewsFull} from "../components/printNewsFull.js"

let byId = (id) => {
    return document.getElementById(id)
}

let navbarDiv=byId('navbar')
navbarDiv.innerHTML=navbar()


 
let detailed_news=byId('detailed_news')
printNewsFull(detailed_news);

