// import { menu } from "./data.js";

const category = ["all", "breakfast", "lunch", "dinner", "shakes"];
const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");
const url = "./api/data.json";
let menu;

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
        <article class="menu-item">
          <img src="${item.remote_img}" alt="menu item" class="photo" />
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
        `;
  });
  // console.log('displayMenu',displayMenu)
  displayMenu = displayMenu.join("");
  // console.log('displayMenu after join',displayMenu)
  sectionCenter.innerHTML = displayMenu;
};

const displayFilterBtn = () => {
  const category = ["all", ...new Set(menu.map((item) => item.category))];
  let btn = category.map((item) => {
    return `
        <button type="button" class="filter-btn" data-id="${item}">${item}</button>
        `;
  });
  // console.log('btn',btn)
  btn = btn.join("");
  // console.log('btn after join',btn)
  btnContainer.innerHTML = btn;

  const btnFilter = document.querySelectorAll(".filter-btn");
  console.log("filterBtns", btnFilter);
  btnFilter.forEach((item) => {
    item.addEventListener("click", (e) => {
      menuFilter(e.currentTarget.dataset.id);
    });
  });
};

const menuFilter = (cat) => {
  let filteredMenu = menu.filter((item) => item.category === cat);
  if (cat === "all") {
    console.log("all", menu);
    displayMenuItems(menu);
  } else {
    console.log(cat, filteredMenu);
    displayMenuItems(filteredMenu);
  }
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log("fetch data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  menu = await fetchData(url);
  await displayMenuItems(menu);
  await displayFilterBtn();
});
