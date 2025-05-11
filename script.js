async function fetchBTCPrice() {
  try {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");
    const data = await res.json();
    const btcPrice = data.bpi.USD.rate_float;

    document.getElementById("btcPrice").textContent = `$${btcPrice.toFixed(2)}`;

    document.querySelectorAll(".btcValue").forEach(el => {
      const usd = parseFloat(el.dataset.usd);
      const btc = usd / btcPrice;
      el.textContent = `${btc.toFixed(6)} BTC`;
    });
  } catch (err) {
    console.error("Error fetching BTC price", err);
  }
}

fetchBTCPrice();
setInterval(fetchBTCPrice, 10000);
