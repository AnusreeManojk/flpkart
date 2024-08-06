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
        inputDiv.innerHTML = `<div class="input-div"><input class="searchInput" type="text" placeholder="${item.placeHolder}"><button><img src="${item.searchImg}"></button></div>`
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

      // sidebar
      const sidBar = document.querySelector(".sidebar")
      const sideBarTop = document.createElement("div")
      sideBarTop.className = "filter"
      sideBarTop.innerHTML = `<span>${data.sideBar.filterTxt}</span>`
      sidBar.appendChild(sideBarTop)
      // tue
      const Catogories=document.createElement("div")
      Catogories.className="catogories"
      const catogoryTxt=document.createElement("div")
      catogoryTxt.className="catogory-Txt"
      catogoryTxt.innerHTML=`<span>${data.sideBar.catogoryTxt}</span>`
        Catogories.appendChild(catogoryTxt)
      
      const catogoryTxt1=document.createElement("div")
      catogoryTxt1.className="catogory-Txt1"
      catogoryTxt1.innerHTML=`<img src="${data.sideBar.mobileimg}"> <a>${data.sideBar.mobileAccessories}</a>`
      Catogories.appendChild(catogoryTxt1)

      const catogoryTxt2=document.createElement("div")
      catogoryTxt2.className="catogory-Txt2"
      catogoryTxt2.innerHTML=`<a>${data.sideBar.mobileTxt}</a>`
      Catogories.appendChild(catogoryTxt2)
      sidBar.appendChild(Catogories)

      const priceRange=document.createElement("div")
      priceRange.className="price-range"
      const priceTxt=document.createElement("span")
      priceTxt.innerText=data.sideBar.priceTxt
      priceRange.appendChild(priceTxt)
     const range=document.createElement("div")
     range.className="range"
     range.innerHTML=`<input type="range" min="0" max="30000+" step="1">`
     priceRange.appendChild(range)

     sidBar.appendChild(priceRange)
      // tue
      // maincontent
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
      const topMiddle = document.createElement("div")
      topMiddle.className = "top-middle"
      topMiddle.innerHTML = `<span>${data.main.mainHeader.mainHead}</span>`
      main.appendChild(topMiddle)

      const headBtm = document.createElement("div")
      headBtm.className = "head-btm"
      main.appendChild(headBtm)
      const headUl = document.createElement("ul")
      headBtm.appendChild(headUl)
      data.main.mainHeader.headFilters.forEach(item => {
        const ulItem = document.createElement("li")
        ulItem.innerText = item
        headUl.appendChild(ulItem)
      })
      
// filter function
//  const searchInput = document.querySelector(".input-div input");
//       searchInput.addEventListener('input', function() {
//         const searchTerm = this.value.toLowerCase();
//         const filteredProducts = products.filter(product =>
//           product.mobileName.toLowerCase().includes(searchTerm)
//         );
//         createProductCards(filteredProducts);
//       });


      const rightContent = document.querySelector(".right-content")

      // tue

      function products(productItem){

        rightContent.innerHTML='';

      productItem.forEach(item => {

        const cardPadding=document.createElement("div")
        cardPadding.className="card-padding"

        const card = document.createElement("div")
        card.className = "card"

        const cardLeft = document.createElement("div")
        cardLeft.className = "card-left"

        cardLeft.innerHTML = `<div class="phone-img"><img src="${item.mobileImg}"></div>
        <div class="input"><input type="checkbox"> <span>${item.checkBoxTxt}</div>`
 
 
        const likeImg=document.createElement("div")
        likeImg.className="like-img"
        likeImg.innerHTML=`<img src="${item.likeImg}">`
        cardLeft.appendChild(likeImg)
                card.appendChild(cardLeft)


        const cardRight = document.createElement("div")
        cardRight.className = "card-right"
        // card.appendChild(cardRight)

        const rightFirst = document.createElement("div")
        rightFirst.className = "right-first"
        const mobileName = document.createElement("h2")
        mobileName.innerText = item.mobileName
        rightFirst.appendChild(mobileName)

        const rating = document.createElement("div")
        rating.className = "rating"
        const rateBtn= document.createElement("div")
        rateBtn.className="rate-btn"
        rateBtn.innerHTML=`<span>${item.rateTxt}<img src="${item.rateImg}.</span>"`
        rating.appendChild(rateBtn)

        const review=document.createElement("p")
       review.innerText=item.rateNumber
       rating.appendChild(review)
       rightFirst.appendChild(rating)

       
        const specUl = document.createElement("ul")

        item.specification.forEach(item => {
           const listItem = document.createElement("li")
           listItem.innerHTML = item
           specUl.appendChild(listItem)
         })
         rightFirst.appendChild(specUl)
 
        
      //  rating.appendChild(rateBtn)

        cardRight.appendChild(rightFirst)

        const rightEnd = document.createElement("div")
        rightEnd.className = "right-end"
        const endTop=document.createElement("div")
        endTop.className="end-top"
        const priceDetail=document.createElement("div")
        priceDetail.className="price-details"

        

        const priceTop=document.createElement("div")
        priceTop.className="price-top"
        priceTop.innerHTML=`<h2>${item.price}</h2>
        <div class="price-last">${item.originalPrice}<span>${item.percentage}</span></div>`
        priceDetail.appendChild(priceTop)

        const priceBottom=document.createElement("div")
        priceBottom.className="price-btm"
        priceBottom.innerHTML=`<span>${item.deliveryStatus}  </span>`
        priceDetail.appendChild(priceBottom)
        endTop.appendChild(priceDetail)
        const  flipkartImg=document.createElement("div")
        flipkartImg.className="flipkart-img"
        flipkartImg.innerHTML=`<img src="${item.flipkartImg}">`

        // endTop.appendChild(priceDetail)
        endTop.appendChild(flipkartImg)

        rightEnd.appendChild(endTop)

        const offerTxt=document.createElement("div")
        offerTxt.className="offer-txt"
        offerTxt.innerHTML=`<span>${item.offerTxt}</span>`
        rightEnd.appendChild(offerTxt)

        const bottomSpan=document.createElement("div")
        bottomSpan.className="btm-span"
        bottomSpan.innerHTML=item.exchangeTxt
        rightEnd.appendChild(bottomSpan)
        cardRight.appendChild(rightEnd)

        card.appendChild(cardRight)
        cardPadding.appendChild(card)
        rightContent.appendChild(cardPadding)

      })
    }
     products(data.main.mobileGrid)
    })
})
