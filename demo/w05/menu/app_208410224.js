import { menu } from './data.js'

// const category = ['all','breakfast','lunch','dinner','shakes']
const category = ['all',...new Set(menu.map((item) => item.category))]
const btnContainer = document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.section-center')
// let btnFilter

const displayMenuItems  = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
          <img src="${item.img}" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
          </div>
        </article>
        `
    })
    // console.log('displayMenu',displayMenu)
    displayMenu = displayMenu.join('')
    // console.log('displayMenu after join',displayMenu)
    sectionCenter.innerHTML = displayMenu
}
const displayFilterBtn = (category) => {
    let btn = category.map((item) => {
        return`
        <button type="button" class="filter-btn" data-id="${item}">${item}</button>
        `
    })
    // console.log('btn',btn)
    btn = btn.join('')
    // console.log('btn after join',btn)
    btnContainer.innerHTML = btn

    const btnFilter = document.querySelectorAll('.filter-btn')
    console.log('filterBtns',btnFilter);
    btnFilter.forEach(item => {
        item.addEventListener('click',(e) => {
            menuFilter(e.currentTarget.dataset.id)
        })
    });
}
const menuFilter = (cat) => {
    let filteredMenu = menu.filter((item) => item.category === cat)
    if (cat === 'all') {
        console.log('all',menu);
        displayMenuItems(menu)
    }else{
        console.log(cat,filteredMenu);
        displayMenuItems(filteredMenu)
    }
}

window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu)
    displayFilterBtn(category)
})