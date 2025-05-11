const countries = [
  { name: "USA", petrol: 1000 },
  { name: "Germany", petrol: 800 },
  { name: "India", petrol: 1200 },
  { name: "Brazil", petrol: 600 },
  { name: "Nigeria", petrol: 400 }
];

function updateData() {
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  countries.forEach(country => {
    // Simulate live fluctuation
    const fluctuation = Math.floor(Math.random() * 21) - 10;
    country.petrol = Math.max(0, country.petrol + fluctuation);

    const div = document.createElement("div");
    div.className = "country";
    div.innerHTML = `<h3>${country.name}</h3><p>${country.petrol} barrels available</p>`;
    container.appendChild(div);
  });
}

setInterval(updateData, 2000);
updateData();
