const menu = [
    {
        id: 1,
        title:'toasted bread',
        category: 'breakfast',
        price: 12,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: "A simple pleasure elevated to perfection with golden-brown crust, a fluffy interior, and a slather of butter or jam.",
    },
    {
        id: 2,
        title:'salad',
        category: 'lunch',
        price: 15,
        img: './images/my-2.jpg',
        remote_img: '',
        desc: "A wholesome bowl of fresh greens, crisp veggies, and protein, topped with a delicious dressing that packs a flavor punch.",
    },
    {
        id: 3,
        title:'fried rice',
        category: 'dinner',
        price: 18,
        img: './images/my-3.jpg',
        remote_img: '',
        desc: "A beloved Asian staple of fluffy rice stir-fried with savory meats, veggies, and spices, creating a symphony of textures and flavors.",
    },
    {
        id: 4,
        title:'buttermilk pancakes',
        category: 'dessert',
        price: 15.99,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",

    },
    {
        id: 5,
        title:'dinner double',
        category: 'dinner',
        price: 13.99,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: "A towering feast for burger lovers, featuring two juicy patties, gooey cheese, crispy bacon, and all the classic toppings on a toasted bun.",
    },
    {
        id: 6,
        title:'godzilla milkshake',
        category: 'shakes',
        price: 13.99,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: "A dessert lover's dream come true, with creamy ice cream, candy bits, cookie crumbs, whipped cream, and a cherry on top, all blended to perfection.",
    },
]
// const category = ['all','breakfast','lunch','dinner','shakes']
const category = ['all',...new Set(menu.map((item) => item.category))]
const btnContainer = document.querySelector('.btn-container')
const sectionCenter = document.querySelector('.section-center')
let btnFilter

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
    console.log('btn',btn)
    btn = btn.join('')
    console.log('btn after join',btn)
    btnContainer.innerHTML = btn
}
const menuFilter = (cat) => {
    let filteredMenu = []
    if (cat === 'all') {
        filteredMenu = menu
        displayMenuItems(filteredMenu)
    }else{
        menu.map((item) => {
            if (item.category.includes(cat)) {
                filteredMenu.push(item)
            }
        })
        displayMenuItems(filteredMenu)
    }
}

window.addEventListener('DOMContentLoaded',() => {
    displayMenuItems(menu)
    displayFilterBtn(category)
    btnFilter = document.querySelectorAll('.filter-btn')
    // console.log(btnFilter.innerHTML);
    btnFilter.forEach(item => {
        item.addEventListener('click',() => {
            // console.log('123')
            menuFilter(item.innerHTML)
        })
    });
})