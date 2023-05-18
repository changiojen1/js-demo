const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const url =
    "https://theaudiodb.com/api/v1/json/2/discography.php?s=ed%20sheeran";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.album);
    displayItems(data.album);
  } catch (error) {
    console.error(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strAlbum } = item;
      return `<p>${strAlbum}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
