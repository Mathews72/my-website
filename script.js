async function fetchBTCPrice() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");
  const data = await res.json();
  const btcPrice = data.bpi.USD.rate_float;
  
  document.getElementById("btcPrice").textContent = `$${btcPrice.toFixed(2)}`;

  document.querySelectorAll(".btcValue").forEach(el => {
    const usdPrice = parseFloat(el.getAttribute("data-usd"));
    const btcEquivalent = usdPrice / btcPrice;
    el.textContent = `${btcEquivalent.toFixed(6)} BTC`;
  });
}

fetchBTCPrice();
setInterval(fetchBTCPrice, 10000); // Update every 10 seconds
