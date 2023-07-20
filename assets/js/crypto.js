document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON file
    fetch("./assets/data/connect.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Populate the wallet information
        var walletContainer = document.querySelector(".wallets");
  
        data.forEach(function(item) {
          var walletBox = document.createElement("div");
          walletBox.className = "wallet-box";
  
          var wnameElement = document.createElement("div");
          wnameElement.className = "wname";
          wnameElement.textContent = item.wname;
  
          var btitleElement = document.createElement("div");
          btitleElement.className = "btitle";
          btitleElement.textContent = item.btitle;
  
          var buttonLink = document.createElement("a");
          buttonLink.className = "button-link";
          buttonLink.href = item["button-link"];
  
          var buttonElement = document.createElement("button");
          buttonElement.textContent = item.btitle;
          buttonLink.appendChild(buttonElement);
  
          var imageElement = document.createElement("img");
          imageElement.className = "image";
          imageElement.src = item.image;
          imageElement.alt = item.wname;
  
          walletBox.appendChild(wnameElement);
          walletBox.appendChild(btitleElement);
          walletBox.appendChild(buttonLink);
          walletBox.appendChild(imageElement);
  
          walletContainer.appendChild(walletBox);
        });
      })
      .catch(function(error) {
        ("Error fetching JSON:", error);
      });
  });
  