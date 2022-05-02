let fetchNews=async(cu)=>{
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cu}`)
    let data=await res.json();
    // console.log(data.articles)
    // printNews(data.articles)
    return data.articles;
  }

  let create = (tag) => {
    return document.createElement(tag)
}



  let printNews=async(data,resultsDiv)=>{
    // let resultsDiv=byId('results')
    resultsDiv.innerHTML=null;
    data.map(({urlToImage,title,description,content})=>{
      console.log(urlToImage)

      let secondMainDiv=create('div')
      secondMainDiv.setAttribute('id','secondMainDiv')
      secondMainDiv.addEventListener('click',function(){
        storeNews(urlToImage,title,content)
      })

      resultsDiv.append(secondMainDiv)


      let imgDiv=create('div')
      secondMainDiv.append(imgDiv)

      let img=create('img')
      img.src=urlToImage
      img.setAttribute('id','img')

      imgDiv.append(img)

      let titleDisDiv=create('div')
      secondMainDiv.append(titleDisDiv)

      let h4=create('h4')
      h4.innerHTML=title;

      titleDisDiv.append(h4)


      let p=create('p')
      p.innerHTML=description;

      titleDisDiv.append(p)



    })
  }


  let storeNews=(urlToImage,title,content)=>{
    let arr=[]
    let obj={
      urlToImage:urlToImage,
      title:title,
      content:content,
    }

    arr.push(obj)

    localStorage.setItem('news',JSON.stringify(arr))
    window.location.href='news.html'
  }


  export{fetchNews,printNews};