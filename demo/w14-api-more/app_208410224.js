const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //     "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  //   },
  // };

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.drinks);
    displayItems(data.drinks);
  } catch (error) {
    console.error(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strDrink } = item;
      return `<p>${strDrink}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
