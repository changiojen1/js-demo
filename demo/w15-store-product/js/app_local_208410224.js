const url = `./api/products.json`;

const container = document.querySelector(".products-container");
const btns = document.querySelectorAll(".company-btn");
let data;

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(url);
  data = await response.json();
  console.log(data);
  displayProducts(data);
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const company = e.currentTarget.innerHTML;
    const filterData = productsFilter(company);
    displayProducts(filterData);
  });
});

const displayProducts = (products) => {
  const displayData = products
    .map((product, index) => {
      const { name, price } = product.fields;
      let image = `./images/product-${index + 1}.jpg`;
      return `
        <div class="single-product">
              <img
                src="${image}"
                class="single-product-img img"
                alt="${name}"
              />
              <footer>
                <h5 class="name">${name}</h5>
                <span class="price">$${price}</span>
              </footer>
            </div>
    `;
    })
    .join("");
  container.innerHTML = displayData;
};

const productsFilter = (company) => {
  console.log("companyID", company);
  const filterData = data.filter((product) => {
    if (product.fields.company === company) {
      return product;
    } else if (company === "all") {
      return product;
    }
  });
  console.log(company, filterData);
  return filterData;
};
