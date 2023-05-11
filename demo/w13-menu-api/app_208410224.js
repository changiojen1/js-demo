// import { menu } from "./data.js";
const supabaseUrl = "https://ztflbjygdewbkwpghxwx.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZmxianlnZGV3Ymt3cGdoeHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTQwODksImV4cCI6MTk5MzMzMDA4OX0.TaTe87HUG_3BYs-WGIOxG31Ghq2zWILRovwmLP2Fn2U";

const category = ["all", "breakfast", "lunch", "dinner", "shakes"];
const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");
const url =
  "https://ztflbjygdewbkwpghxwx.supabase.co/rest/v1/menu_208410224?select=*";

let menu;
let supa = supabase.createClient(supabaseUrl, SUPABASE_KEY);
console.log("database", supa);
// const category = ["all", ...new Set(menu.map((item) => item.category))];

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
        <article class="menu-item">
          <img src="${item.local_img}" alt="menu item" class="photo" />
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

const displayFilterBtn = (category) => {
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
  //   console.log("filterBtns", btnFilter);
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
    // let {data,error} = await supa.from("menu_208410224").select("*");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apiKey: `${SUPABASE_KEY}`,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
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
  await displayFilterBtn(category);
});
