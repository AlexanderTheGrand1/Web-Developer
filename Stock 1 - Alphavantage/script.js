const apiKey = 'S4QYLZOYXPRPYOGX'; // Replace with your actual API key from Alpha Vantage

// Function to fetch stock data from the API
async function fetchStockData(symbol) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data['Global Quote'];
}

// Function to display stock data on the webpage
function displayStockData(data) {
  const container = document.getElementById('stocks-container');
  const symbol = data['01. symbol'];
  const price = data['05. price'];
  const change = data['09. change'];
  const changePercent = data['10. change percent'];
  const stockElement = document.createElement('div');
  stockElement.innerHTML = `
    <h2>${symbol}</h2>
    <p>Price: ${price}</p>
    <p>Change: ${change} (${changePercent})</p>
  `;
  container.appendChild(stockElement);
}

// Call the fetchStockData function for each stock symbol and display the data on the webpage
const symbols = ['AAPL', 'GOOGL', 'TSLA']; // Replace with your desired stock symbols
for (const symbol of symbols) {
  fetchStockData(symbol).then(displayStockData);
}