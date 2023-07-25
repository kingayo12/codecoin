 // Function to handle the search functionality
         // -------------------------search funbction for connect ----------------------------------
         function handleSearch() {
            const searchInput = document.getElementById("searchInput");
            const searchValue = searchInput.value.toLowerCase();
      
            const walletBoxes = document.querySelectorAll(".wallet-box");
      
            walletBoxes.forEach((box) => {
              const walletName = box.querySelector(".wname").textContent.toLowerCase();

              if (walletName.includes(searchValue)) {
                box.classList.remove('hidden')// Show the wallet box if it matches the search
              } else {
                box.classList.add("hidden") // Hide the wallet box if it doesn't match the search
              }
            });
          }
      
          // Add an event listener to the search input field
          document.getElementById("searchInput").addEventListener("input", handleSearch);


          