
  let create = (tag) => {
    return document.createElement(tag)
}


let printNewsFull=(detailed_news)=>{

    // let detailed_news=document.getElementById('detailed_news')

  let newsData=JSON.parse(localStorage.getItem('news'))||[]
    console.log(newsData)

    let create=(tag)=>{
    return document.createElement(tag)
  }
    newsData.map(({urlToImage,title,content})=>{
      console.log(urlToImage,title,content)

      detailed_news.innerHTML=null;

      let img=create('img')
      img.src=urlToImage;
      img.setAttribute('id','img')
      detailed_news.append(img)


      let h3=create('h3')
      h3.innerHTML=title;
      detailed_news.append(h3)

      let p=create('p')
      p.innerHTML=content;
      detailed_news.append(p)

    })
}

export{printNewsFull}