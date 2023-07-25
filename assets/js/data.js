document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch the JSON file
        const response = await fetch("./assets/data/data.json");
        const data = await response.json();

        // Populate the HTML structure with JSON data
        const boxElement = document.querySelector(".box");
        const boxParent = boxElement.parentNode;

        data.forEach(function (item) {
            const newBox = boxElement.cloneNode(true);
            const newTitle = newBox.querySelector(".title");
            const newNum = newBox.querySelector(".num");

            newTitle.textContent = item.title;
            newNum.textContent = item.num;

            boxParent.appendChild(newBox);
        });

        boxParent.removeChild(boxElement);
    } catch (error) {
        console.log("Error fetching JSON:", error);
    }
});

// Function to populate the wallet information
// Function to fetch connect.json data
async function fetchConnectData() {
    try {
      const response = await fetch("/assets/data/connect.json");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return await response.json();
    } catch (error) {
      console.log("Error fetching or parsing JSON:", error);
      return [];
    }
  }
  
  // Function to populate the wallet information
  async function populateWallets() {
    const data = await fetchConnectData();
    const walletContainer = document.querySelector(".wallets");
    walletContainer.innerHTML = ""; // Clear existing contents
  
    data.forEach(function (wallet) {
      const walletBox = document.createElement("div");
      walletBox.className = "wallet-box";
  
      // Rest of the code for populating the wallet information...
      // (Same as before)
  
      const imageElement = document.createElement("div");
      imageElement.className = "image";
      const image = document.createElement("img");
      image.src = wallet.image;
      image.alt = wallet.wname;
      image.width = "80";
      imageElement.appendChild(image);
  
      const cnameElement = document.createElement("div");
      cnameElement.className = "cname";
  
      const wnameElement = document.createElement("p");
      wnameElement.className = "wname";
      wnameElement.textContent = wallet.wname;
  
      const ratingsElement = document.createElement("div");
      ratingsElement.className = "ratings";
      for (let i = 0; i < wallet.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star color-gold";
        ratingsElement.appendChild(starIcon);
      }
  
      const connectBtnElement = document.createElement("div");
      connectBtnElement.className = "connect-btn";
      const connectButton = document.createElement("button");
      connectButton.className = "btitle";
      connectButton.textContent = wallet.btitle;
      const iconSpan = document.createElement("span");
      iconSpan.className = "icon-color ges";
      iconSpan.textContent = ">>";
      connectButton.appendChild(iconSpan);
      connectBtnElement.appendChild(connectButton);
  
      cnameElement.appendChild(wnameElement);
      cnameElement.appendChild(ratingsElement);
      cnameElement.appendChild(connectBtnElement);
  
      walletBox.appendChild(imageElement);
      walletBox.appendChild(cnameElement);
  
      walletContainer.appendChild(walletBox);
    });
  }
  
  // Function to display a specific wallet based on the provided id
  function displayWalletById(walletId) {
    const parsedWalletId = parseInt(walletId);
    if (!isNaN(parsedWalletId)) {
      populateWallets(); // Populate all wallet information first
      const walletContainer = document.querySelector(".wallets");
      const walletBoxes = walletContainer.querySelectorAll(".wallet-box");
  
      let found = false;
      walletBoxes.forEach(function (walletBox) {
        const id = walletBox.querySelector(".wname").textContent;
        if (parseInt(id) === parsedWalletId) {
          walletContainer.innerHTML = ""; // Clear existing contents
          walletContainer.appendChild(walletBox);
          found = true;
        }
      });
  
      if (!found) {
        console.log("Wallet with the specified id not found.");
      }
    } else {
      console.log("Invalid wallet id.");
    }
  }
  
  // Call populateWallets to load all wallet information
  populateWallets();
  
// -----------------------------crypto currencies-----------------------------

  // Function to fetch connect.json data
// Function to fetch cryptocurrency data from CoinGecko API
async function fetchCryptoData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return await response.json();
    } catch (error) {
      console.log('Error fetching or parsing JSON:', error);
      return [];
    }
  }
  
  // Function to populate the wallet information
  async function populateCryptoWallets() {
    const data = await fetchCryptoData();
  
    const cryptoMain = document.querySelector('.crypto_main');
    cryptoMain.innerHTML = ''; // Clear existing contents
  
    data.forEach(function (crypto) {
      const cryptBox = document.createElement('div');
      cryptBox.className = 'crypt-box';
  
      const imageAndName = document.createElement('div');
      imageAndName.className = 'image_name';
  
      const cryptoImg = document.createElement('div');
      cryptoImg.className = 'crypto-img';
      const img = document.createElement('img');
      img.src = crypto.image;
      img.alt = crypto.name;
      cryptoImg.appendChild(img);
  
      const cryptoName = document.createElement('div');
      cryptoName.className = 'crypto-name icon-color';
      cryptoName.textContent = crypto.name;
  
      imageAndName.appendChild(cryptoImg);
      imageAndName.appendChild(cryptoName);
  
      const price = document.createElement('div');
      price.className = 'price';
      price.innerHTML = `<span class="icon-color mr">Price:</span>$ ${crypto.current_price}`;
  
      const marketCap = document.createElement('div');
      marketCap.className = 'marketcap';
      marketCap.innerHTML = `<span class="icon-color mr">MarketCap:</span> ${crypto.market_cap}`;
  
      const dailyChange = document.createElement('div');
      dailyChange.className = 'daily-change';
      dailyChange.innerHTML = `<span class="icon-color mr">Daily Change:</span> ${crypto.price_change_percentage_24h}%`;
  
      cryptBox.appendChild(imageAndName);
      cryptBox.appendChild(price);
      cryptBox.appendChild(marketCap);
      cryptBox.appendChild(dailyChange);
  
      cryptoMain.appendChild(cryptBox);
    });
  }

  function handleSearchInput() {
    const searchInput = document.getElementById('crypto-search');
    const searchTerm = searchInput.value.toLowerCase();
  
    const cryptBoxes = document.querySelectorAll('.crypt-box');
  
    cryptBoxes.forEach(cryptBox => {
      const cryptoName = cryptBox.querySelector('.crypto-name').textContent.toLowerCase();
  
      if (cryptoName.includes(searchTerm)) {
        cryptBox.classList.remove('hidden');
      } else {
        cryptBox.classList.add('hidden');
      }
    });
  }
  
  // Call populateWallets to load cryptocurrency data and populate the wallet information
  populateCryptoWallets();
  const searchInput = document.getElementById('crypto-search');
searchInput.addEventListener('input', handleSearchInput);