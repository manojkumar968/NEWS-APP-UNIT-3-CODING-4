// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{navbar} from "../components/navbar.js"

import{fetchNews,printNews} from "../components/printNews.js"



let byId = (id) => {
    return document.getElementById(id)
}

let create = (tag) => {
    return document.createElement(tag)
}


let navbarDiv=byId('navbar')
navbarDiv.innerHTML=navbar()



fetchNews('in').then((res)=>{
    // console.log(res)
    let resultsDiv=byId('results')
    printNews(res,resultsDiv).then((res)=>{

    })
})



let arr=['India','China','USE','UK','New Zealand']
let arrId=['in','ch','us','uk','nz']
let sidebarDiv=byId('sidebar')

let i=0;

arr.map((e)=>{
    let h3=create('h3')
    h3.innerHTML=e;
    h3.setAttribute('class','country')
    h3.setAttribute('id',arrId[i])
    i++;
    h3.addEventListener('click',function(){
        // console.log(h3.innerHTML)
        let str=h3.innerHTML.slice(0,2).toLowerCase();
        if(str=='ne')
        {
            str='nz'
        }
        console.log(str)
        fetchNews(str).then((res)=>{
            // console.log(res)
            let resultsDiv=byId('results')
            printNews(res,resultsDiv).then((res)=>{

            })
        })

    })

    sidebarDiv.append(h3)
})