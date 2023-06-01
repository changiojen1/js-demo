const search = document.querySelector("#search");
const submit = document.querySelector("#submit");
const random = document.querySelector("#random");
const resultHeading = document.querySelector("#result-heading");
const mealsEl = document.querySelector("#meals");
const single_mealEl = document.querySelector("#single-meal");

const searchMeal = (e) => {
  e.preventDefault();
  const term = search.value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
          resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                    </div>
                </div>
              `
            )
            .join("");
        }
      });
  } else {
    alert("Please enter a search term");
  }
};

const getMealById = (mealID) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("data", data);
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
};

const addMealToDOM = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
    // console.log("ingredients", ingredients);
  }
  console.log("ingredients", ingredients);
  single_mealEl.innerHTML = `
    <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="single-meal-info">
            ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
            ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
        </div>
        <div class="main">
            <p>${meal.strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
        </div>
    </div>
  `;
};

const randomMeal = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("data", data);
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
};

submit.addEventListener("submit", searchMeal);
random.addEventListener("click", randomMeal);

mealsEl.addEventListener("click", (e) => {
  // console.log("e.path", e.composedPath());
  const composedPath = e.composedPath();
  const mealInfo = composedPath.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else {
      return false;
    }
  });
  if (mealInfo) {
    // console.log("mealInfo", mealInfo);
    const mealID = mealInfo.getAttribute("data-mealid");
    getMealById(mealID);
  }
});
