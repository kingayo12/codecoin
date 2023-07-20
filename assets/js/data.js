document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON file
    fetch("./assets/data/data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Populate the HTML structure with JSON data
        var boxElement = document.querySelector(".box");
        var titleElement = boxElement.querySelector(".title");
        var numElement = boxElement.querySelector(".num");
  
        data.forEach(function(item) {
          var newBox = boxElement.cloneNode(true);
          var newTitle = newBox.querySelector(".title");
          var newNum = newBox.querySelector(".num");
  
          newTitle.textContent = item.title;
          newNum.textContent = item.num;
  
          boxElement.parentNode.appendChild(newBox);
        });
  
        boxElement.parentNode.removeChild(boxElement);
      })
      .catch(function(error) {
        console.log("Error fetching JSON:", error);
      });
  });