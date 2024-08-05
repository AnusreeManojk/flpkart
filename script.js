document.addEventListener('DOMContentLoaded', () => {

  fetch('index.json')
    .then(response => response.json())
    .then(data => {
      const headerContent = document.querySelector(".header-content")
      data.header.forEach(item => {
        const logo = document.createElement("div")
        logo.className = "logo"
        logo.innerHTML = `<div class="top-logo"><img src="${item.logo}"></div>
         <div class="bottom-logo"> <a>${item.logoText1}<span>${item.logoText2}</span><img src="${item.textImg}"></a></div> `
        headerContent.appendChild(logo)
        const inputDiv = document.createElement("div")
        inputDiv.className = "input-padding"
        inputDiv.innerHTML = `<div class="input-div"><input type="text" placeholder="${item.placeHolder}"><button><img src="${item.searchImg}"></button></div>`
        headerContent.appendChild(inputDiv)
        const loginBtn = document.createElement("div")
        loginBtn.className = "login"
        loginBtn.innerHTML = `<button><a>${item.login}</a></button>`
        headerContent.appendChild(loginBtn)
        const sellertxt = document.createElement("div")
        sellertxt.className = "seller-txt"
        sellertxt.innerHTML = `<a>${item.sellerTxt}`
        headerContent.appendChild(sellertxt)
        const moreCont = document.createElement("div")
        moreCont.className = "more-item"
        moreCont.innerHTML = `<span>${item.moreTxt}</span><img src="${item.icon}">`
        headerContent.appendChild(moreCont)
        const cartContent = document.createElement("div")
        cartContent.className = "cart-content"
        cartContent.innerHTML = `<img src="${item.cartImg}"><span>${item.cartTxt}</span>`
        headerContent.appendChild(cartContent)

      });
      const nav = document.querySelector(".nav-padding")
      data.navBar.forEach(item => {
        const navItem = document.createElement("div")
        navItem.className = "nav-item"
        navItem.innerHTML = `<span>${item.navText}</span><img src="${item.navArrow}">`
        nav.appendChild(navItem)
      })
      const sidBar = document.querySelector(".sidebar")
      const sideBarTop = document.createElement("div")
      sideBarTop.className = "filter"
      sideBarTop.innerHTML = `<span>${data.sideBar.filterTxt}</span>`
      sidBar.appendChild(sideBarTop)
      const main = document.querySelector(".mainTop-padding")
      const topMain = document.createElement("div")
      topMain.className = "top-content"
      main.appendChild(topMain);
      data.main.mainHeader.headerTop.forEach(item => {
        const topItem = document.createElement("div")
        topItem.className = "top-item"
        topItem.innerHTML = `<a>${item.text}</a>
         <img src="${item.topIcon}">`
        topMain.appendChild(topItem)
      })
      const topMiddle=document.createElement("div")
      topMiddle.className="top-middle"
      topMiddle.innerHTML=`<span>${data.main.mainHeader.mainHead}</span>`
      main.appendChild(topMiddle)
    
      const headBtm=document.createElement("div")
      headBtm.className="head-btm"
      main.appendChild(headBtm)
      const headUl=document.createElement("ul")
      headBtm.appendChild(headUl)
       data.main.mainHeader.headFilters.forEach(item=>{
        const ulItem=document.createElement("li")
        ulItem.innerText=item
      headUl.appendChild(ulItem)
       })
 const cardPadding=document.querySelector(".card")
       const card=document.createElement("div")
        card.className="card"
        cardPadding.appendChild(card)
    })
})
