document.addEventListener('DOMContentLoaded', () => {

  fetch('copy.json')
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
      // filter

      const sideBarTop = document.querySelector(".filter")
      sideBarTop.innerHTML = `<span>${data.sideBar.filterTxt}</span>`

      // catogory
      const Catogories = document.querySelector(".catogories")
      const catogoryTxt = document.createElement("div")
      catogoryTxt.className = "catogory-Txt"
      catogoryTxt.innerHTML = `<span>${data.sideBar.catogoryTxt}</span>`
      Catogories.appendChild(catogoryTxt)

      const catogoryTxt1 = document.createElement("div")
      catogoryTxt1.className = "catogory-Txt1"
      catogoryTxt1.innerHTML = `<img src="${data.sideBar.mobileimg}"> <a>${data.sideBar.mobileAccessories}</a>`
      Catogories.appendChild(catogoryTxt1)

      const catogoryTxt2 = document.createElement("div")
      catogoryTxt2.className = "catogory-Txt2"
      catogoryTxt2.innerHTML = `<a>${data.sideBar.mobileTxt}</a>`
      Catogories.appendChild(catogoryTxt2)


      // price
      const price = document.querySelector(".price-range")
      const priceTxt = document.querySelector(".price-span")
      priceTxt.innerText = data.sideBar.priceTxt

      const rangeTop = document.querySelector(".range-top")
      const rangeTopDiv = document.createElement("div")
      rangeTopDiv.className = "range-top"
      rangeTop.appendChild(rangeTopDiv)

      const Lrange = document.getElementById("left-range")
      const LrangeDiv = document.createElement("div")
      LrangeDiv.className = "round"
      Lrange.appendChild(LrangeDiv)

      const midrange = document.querySelector(".mid-range")
      const midrangeDiv = document.createElement("div")
      midrangeDiv.className = "mid-line"
      midrange.appendChild(midrangeDiv)

      const Rrange = document.getElementById("right-range")
      const RrangeDiv = document.createElement("div")
      RrangeDiv.className = "round"
      Rrange.appendChild(RrangeDiv)



      // min-max Sat
      const MinMax = document.querySelector(".min-max")
      const min = document.createElement("div")
      min.className = "min"
      const minSelect = document.createElement("select")
      data.sideBar.min.forEach(min => {
        const option = document.createElement("option")
        option.innerHTML = min
        minSelect.appendChild(option)
      })
      min.appendChild(minSelect)
      MinMax.appendChild(min)

      const midSpan = document.createElement("div")


      const max = document.createElement("div")
      max.className = "max"
      const maxSelect = document.createElement("select")
      data.sideBar.max.forEach(min => {
        const option = document.createElement("option")
        option.innerHTML = min
        maxSelect.appendChild(option)
      })
      max.appendChild(maxSelect)
      MinMax.appendChild(max)

      // min-max end
      // brand
      const brand = document.querySelector(".brand")

      // brand-head
      const brandtxt = document.createElement("div")
      brandtxt.className = "brand-txt"
      brandtxt.innerHTML = `<span>${data.sideBar.brandTxt}</span><img src="${data.sideBar.brandIcon}">`
      brand.appendChild(brandtxt)


      // brand-content
      const brandCont = document.createElement("div")
      brandCont.className = "brand-cont"


      // brand search
      const brandSearch = document.createElement("div")
      brandSearch.className = "search-content"
      const searchDiv = document.createElement("div")
      searchDiv.className = "search-div"
      searchDiv.innerHTML = `<img src="${data.sideBar.searchIcon}">
    <input type="text"  class="brand-input"  placeholder="${data.sideBar.brandInput}">`

      brandSearch.appendChild(searchDiv)
      brandCont.appendChild(brandSearch)
      brand.appendChild(brandCont)
      const brandMore = document.createElement("div")
      brandMore.innerHTML = data.sideBar.more
      brand.appendChild(brandMore)



      // event listener for brand dropdown
      brandtxt.addEventListener('click', () => {
        if (brandCont.style.display === 'none' || brandCont.style.display === '') {
          brandCont.style.display = 'block';
        } else {
          brandCont.style.display = 'none';
        }
      })


      // brand search input

      const brandInput = document.querySelector(".brand-input")
      // console.log(brandInput)
      brandInput.addEventListener('input', function () {
        const searchItem = this.value.toLowerCase();

        const filteredItem = data.sideBar.brand.filter(product =>
          product.includes(searchItem.toLowerCase())

        );
        console.log(filteredItem)
        products(filteredItem);
      });


      // brand checkboxes
      const checkboxContent = document.createElement("div")
      checkboxContent.className = "checkbox-content"


      // brand checkbox loop
      data.sideBar.brand.forEach(item => {
        const checkboxItem = document.createElement("div")
        checkboxItem.className = "checkbox-item"
        checkboxItem.innerHTML = ` <label>
      <input type="checkbox" " name="brand"  class="checkboxInput" value="${item}">
      <div class="checkboxTxt">  ${item}</div>
    </label>`
        checkboxContent.appendChild(checkboxItem)
      })
      brandCont.appendChild(checkboxContent)



      // brand filter
      const checkInputs = document.querySelectorAll(".checkboxInput");
      function filterData() {
        const selectedBrands = Array.from(checkInputs)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value.toLowerCase());

        console.log("Selected Brands:", selectedBrands);

        if (selectedBrands.length > 0) {
          const filteredProducts = data.main.mobileGrid.filter(product =>
            selectedBrands.includes(product.id.toLowerCase())
          );
          console.log("Filtered Products:", filteredProducts);
          products(filteredProducts);
        } else {
          console.log("All Products:", data.main.mobileGrid);
          products(data.main.mobileGrid);
        }
      }

      document.querySelectorAll('.checkboxInput').forEach(checkbox => {
        checkbox.addEventListener('change', filterData);
      });

      filterData();

      // flipkart Assured img

      const flipImgContent = document.createElement("div")
      flipImgContent.className = "flipImgContent"
      flipImgContent.innerHTML = '<input type="checkbox">'

      const flipkartImg = document.createElement("div")
      flipkartImg.className = "flip-img"
      flipkartImg.innerHTML = `<img src="${data.sideBar.flipCheck}">`
      flipImgContent.appendChild(flipkartImg)
      const flipspan = document.createElement("div")
      flipspan.className = "flip-span"
      flipspan.innerHTML = `<span>?</span>`
      flipImgContent.appendChild(flipspan)

      sidBar.appendChild(flipImgContent)


      // sidesection
      const sideSections = document.createElement("div")
      sideSections.className = "side-section"
      data.sideBar.sidebarSections.forEach(item => {
        const section = document.createElement("div")
        section.className = item.id
        section.id = item.nameId
        const secHead = document.createElement("div")
        secHead.className = "sec-head"
        secHead.innerHTML = `<span>${item.sectionName}</span><img class="drop-img"  src="${item.brandIcon}">`
        section.appendChild(secHead)

        const dropDownImg = document.querySelector(".drop-img")
        console.log(dropDownImg)
        secHead.addEventListener('click', () => {
          if (secDropdown.style.display === 'none' || secDropdown.style.display === '') {
            secDropdown.style.display = 'block';
          } else {
            secDropdown.style.display = 'none';
          }
        })

        secHead.addEventListener('click', function () {
          dropDownImg.style.transform = dropDownImg.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        })

        const secDropdown = document.createElement("div")
        secDropdown.className = "sec-dropdown"
        item.selectedItems.forEach(checkItem => {
          const checkDiv = document.createElement("div")
          checkDiv.className = "checkDiv"

          const checkInput = document.createElement("input")
          checkInput.type = "checkbox"
          checkDiv.appendChild(checkInput)
          const checkLabel = document.createElement("label")
          checkLabel.innerHTML = checkItem
          checkDiv.appendChild(checkLabel)

          secDropdown.appendChild(checkDiv)

          section.appendChild(secDropdown)
          sideSections.appendChild(section)
        })
        const moreBtn = document.createElement("div")

        moreBtn.innerHTML = `<button>${item.more}</button>`
        moreBtn.className = item.moreDisplay
        section.appendChild(moreBtn)
      })

      sidBar.appendChild(sideSections)


      // footer
      const topPadding = document.querySelector(".top-padding")
      data.footer.footerTop.forEach(element => {
        const footerGrid = document.createElement("div")
        footerGrid.className = "footer-grid"
        const gridPadding = document.createElement("div")
        gridPadding.className = "grid-padding"
        footerGrid.appendChild(gridPadding)
        const gridHead = document.createElement("div")
        gridHead.className = "grid-head"
        gridHead.innerText = element.topHead
        gridPadding.appendChild(gridHead)
        const topUl = document.createElement("ul")
        element.footerGrid.forEach(topItem => {
          const listItem = document.createElement("li")
          listItem.innerHTML = `<a>${topItem}</a>`
          topUl.appendChild(listItem)

        })
        gridPadding.appendChild(topUl)
        topPadding.appendChild(footerGrid)

      })

      const downPadding = document.querySelector(".down-padding")
      data.footer.footerBottom.forEach(downItem => {
        const downItemDiv = document.createElement("div")
        downItemDiv.className = "down-item"
        downItemDiv.innerHTML = `<img src="${downItem.footerImg}">
        <span>${downItem.imgSpan}</span>`

        downPadding.appendChild(downItemDiv)
      })



      // -maincontent

      const main = document.querySelector(".mainTop-padding")
      const topMain = document.createElement("div")
      topMain.className = "top-content"

      // top1
      main.appendChild(topMain);
      data.main.mainHeader.headerTop.forEach(item => {
        const topItem = document.createElement("div")
        topItem.className = "top-item"
        topItem.innerHTML = `<a>${item.text}</a>
         <img src="${item.topIcon}">`
        topMain.appendChild(topItem)
      })

      // top2
      const topMiddle = document.createElement("div")
      topMiddle.className = "top-middle"
      topMiddle.innerHTML = `<span>${data.main.mainHeader.mainHead}</span>`
      main.appendChild(topMiddle)

      // top3
      const headBtm = document.createElement("div")
      headBtm.className = "head-btm"
      main.appendChild(headBtm)
      const headUl = document.createElement("ul")
      headBtm.appendChild(headUl)
      data.main.mainHeader.headFilters.forEach(item => {
        const ulItem = document.createElement("li")
        ulItem.innerText = item.name
        ulItem.id = item.id
        headUl.appendChild(ulItem)
      })


      // price low-to-high fliters-wed
      const lowToHigh = document.getElementById("filter4")
      lowToHigh.addEventListener('click', function () {
        const itemsCopy = [...data.main.mobileGrid];
        const sortedItems = itemsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        products(sortedItems)

      });


      // price high-to-low fliters-wed

      const HighToLow = document.getElementById("filter5")
      HighToLow.addEventListener('click', function () {
        const arrayItems = [...data.main.mobileGrid];
        const sortedArray = arrayItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        products(sortedArray)

      });


      // filter function-search input
      const searchInput = document.querySelector(".searchInput");
      searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        const filteredProducts = data.main.mobileGrid.filter(product =>
          product.mobileName.toLowerCase().includes(searchTerm)
        );
        products(filteredProducts);
      });



      // right-main Content
      // right bottom


      // const btmBtnDiv= document.querySelector(".bottom-btn");


      // let firstBtmBtnNav = null;
      // let previousClickedButton = null; // To keep track of the previously clicked button

      // data.main.bottomBtn.btmBtn.forEach((btn, index) => {
      //   const btmBtnNav = document.createElement("div");
      //   btmBtnNav.className = "btmBtnNav";
      //   const link = document.createElement("a");
      //   link.textContent = btn;
      //   btmBtnNav.appendChild(link);

      //   if (index === 0) {
      //     firstBtmBtnNav = btmBtnNav;
      //   }

      //   btmBtnDiv.appendChild(btmBtnNav);

      //   btmBtnNav.addEventListener('click', () => {
      //     if (previousClickedButton) {
      //       previousClickedButton.style.backgroundColor = ''; // Reset to original color
      //       previousClickedButton.style.color = ''; // Reset text color
      //     }

      //     btmBtnNav.style.backgroundColor = '#2874f0';
      //     btmBtnNav.style.color = 'white';

      //     if (index > 0) {
      //       if (firstBtmBtnNav) {
      //         firstBtmBtnNav.style.display = 'flex';
      //       }
      //       prev.style.display = 'flex';
      //     }else{
      //       prev.style.display = 'none';
      //     }

      //     previousClickedButton = btmBtnNav;
      //   });
      // });


      // right phone card

      // const rightContent = document.quercontentySelector(".right-content");

      // rightContent.appendChild(bottomBtn);


      function products(productItem, page = 1, perPage = 10) {
        const rightContent = document.querySelector(".right-content");
        rightContent.innerHTML = '';

        // Calculate the start and end index for the current page
        const start = (page - 1) * perPage;
        const end = start + perPage;
        const paginatedItems = productItem.slice(start, end);


        paginatedItems.forEach(item => {

          const cardPadding = document.createElement("div")
          cardPadding.className = "card-padding"

          const card = document.createElement("div")
          card.className = "card"

          const cardLeft = document.createElement("div")
          cardLeft.className = "card-left"


          const cardLeftImg = document.createElement("div")
          cardLeftImg.className = "phone-img"
          cardLeftImg.innerHTML = `<img src="${item.mobileImg}">`
          cardLeft.appendChild(cardLeftImg)
          const cardLeftInput = document.createElement("div")
          cardLeftInput.className = "input"

          cardLeftInput.innerHTML = `<input type="checkbox"> <span>${item.checkBoxTxt}`
          cardLeft.appendChild(cardLeftInput)
          const likeImg = document.createElement("div")
          likeImg.className = "like-img"
          likeImg.innerHTML = `<img src="${item.likeImg}">`
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
          const rateBtn = document.createElement("div")
          rateBtn.className = "rate-btn"
          rateBtn.innerHTML = `<span>${item.rateTxt}<img src="${item.rateImg}"></span>`
          rating.appendChild(rateBtn);
          // let html = ``
          // rateBtn.insertAdjacentHTML('afterbegin', html)
          const review = document.createElement("p")
          review.innerText = item.rateNumber
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
          const endTop = document.createElement("div")
          endTop.className = "end-top"
          const priceDetail = document.createElement("div")
          priceDetail.className = "price-details"



          const priceTop = document.createElement("div")
          priceTop.className = "price-top"
          priceTop.innerHTML = `<h2>₹${item.price}</h2>
          <div class="price-last"><p>₹${item.originalPrice}</p><span>${item.percentage}</span></div>`
          priceDetail.appendChild(priceTop)

          const priceBottom = document.createElement("div")
          priceBottom.className = "price-btm"
          priceBottom.innerHTML = `<span>${item.deliveryStatus}  </span>`
          priceDetail.appendChild(priceBottom)
          endTop.appendChild(priceDetail)
          const flipkartImg = document.createElement("div")
          flipkartImg.className = "flipkart-img"
          flipkartImg.innerHTML = `<img src="${item.flipkartImg}">`

          // endTop.appendChild(priceDetail)
          endTop.appendChild(flipkartImg)

          rightEnd.appendChild(endTop)

          const offerTxt = document.createElement("div")
          offerTxt.className = "offer-txt"
          offerTxt.innerHTML = `<span>${item.offerTxt}</span>`
          rightEnd.appendChild(offerTxt)

          const bottomSpan = document.createElement("div")
          bottomSpan.className = "btm-span"
          bottomSpan.innerHTML = item.exchangeTxt
          rightEnd.appendChild(bottomSpan)
          cardRight.appendChild(rightEnd)

          card.appendChild(cardRight)
          cardPadding.appendChild(card)
          rightContent.appendChild(cardPadding)

        })
        addPaginationControls(productItem.length, page, perPage);

      }

      const bottomDiv = document.querySelector('.bottom-div')

      const pageNum = document.createElement("div")
      pageNum.className = "page-num"
      pageNum.innerHTML = data.main.bottomBtn.btmSpan
      console.log(pageNum)
    

        bottomDiv.appendChild(pageNum)
    

      function addPaginationControls(totalItems, currentPage, perPage) {
        const pagination = document.querySelector(".pagination");
        if (!pagination) {
          const paginationContainer = document.createElement("div");
          paginationContainer.className = "pagination";
          document.querySelector(".right-content").appendChild(paginationContainer);
        }
        const totalPages = 10;


        // const totalPages = Math.ceil(totalItems / perPage);
        let paginationHTML = '';

        if (currentPage > 1) {
          paginationHTML += `<a href="#" data-page="${currentPage - 1}">Previous</a>`;
        }

        for (let i = 1; i <= totalPages; i++) {
          paginationHTML += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
        }

        if (currentPage < totalPages) {
          paginationHTML += `<a href="#" data-page="${currentPage + 1}">Next</a>`;
        }

        document.querySelector(".pagination").innerHTML = paginationHTML;

        // Add event listeners to pagination links
        document.querySelectorAll(".pagination a").forEach(link => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = parseInt(event.target.getAttribute('data-page'), 10);
            products(data.main.mobileGrid, page);
          });
        });


      }
      bottomDiv.appendChild(pagination)


      products(data.main.mobileGrid)
    })
})
























































