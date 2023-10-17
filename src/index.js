console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          const li = document.createElement("li");
          li.innerText = breed;
          dogBreedsList.appendChild(li);
        });
      });
  
    // Challenge 3: Change font color on click
    dogBreedsList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        event.target.style.color = "red"; // Change the font color to red (or your chosen color)
      }
    });
  
    // Challenge 4: Filter breeds by the selected letter
    breedDropdown.addEventListener("change", function () {
      const selectedLetter = breedDropdown.value;
      const breedList = dogBreedsList.getElementsByTagName("li");
  
      for (const breed of breedList) {
        const breedName = breed.innerText;
        if (breedName.startsWith(selectedLetter)) {
          breed.style.display = "list-item";
        } else {
          breed.style.display = "none";
        }
      }
    });
  });
  
