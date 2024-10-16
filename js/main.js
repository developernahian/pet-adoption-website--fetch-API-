//create loadCategories
const loadCategories = () => {
  document.getElementById("spinner-btn").classList.remove("hidden");
  document.getElementById("categories").classList.add("hidden");

  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())

    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
  setTimeout(() => {
    document.getElementById("spinner-btn").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
  }, 2000);
};




const loadPets = () => {
  document.getElementById("spinner-card").classList.remove("hidden");
  document.getElementById("pets-container").classList.add("hidden");

  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())

    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
  setTimeout(() => {
    document.getElementById("spinner-card").classList.add("hidden");
    document.getElementById("pets-container").classList.remove("hidden");
  }, 2000);
};




const loadCategoryPets = (id) => {
  document.getElementById("spinner-card").classList.remove("hidden");
  document.getElementById("pets-container").classList.add("hidden");

  fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${id.toLowerCase()}`
  )
    .then((res) => res.json())

    .then((data) => displayPets(data.data))
    .catch((error) => console.log(error));
  setTimeout(() => {
    document.getElementById("spinner-card").classList.add("hidden");
    document.getElementById("pets-container").classList.remove("hidden");
  }, 2000);
};





const loadDetails = async (petId) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();

  displayDetails(data.petData);
};
const displayDetails = (pet) => {
  const detailContainer = document.getElementById("modal_content");

  detailContainer.innerHTML = `

      <figure class="w-full ">
                    <div class="w-full" >
                    <img
                    class="w-full h-full rounded-2xl object-cover"
                    src=${pet.image}
                    alt="Shoes" />
                    </div>
                </figure>

      <h2 class="font-extrabold text-xl py-3">${pet.pet_name}</h2>

      <div id="Container" class="grid grid-cols-1 sm:grid-cols-2 justify-between">


        <div>
        
                  <div class="flex items-center gap-2 text-secondary">
            <img class="w-4 h-4" src="./assets/icon/breed.png" alt="icon">
            <span>Breed:</span>
            ${
              pet.breed !== undefined && pet.breed !== null
                ? pet.breed
                : "Not Found"
            }
        </div>


        <div class="flex items-center gap-2 text-secondary">
            <img class="w-4 h-4" src="./assets/icon/gender.png" alt="icon">
            <span>Gender:</span>
            ${
              pet.gender !== undefined && pet.gender !== null
                ? pet.gender
                : "Not Found"
            }
        </div>


        <div class="flex items-center gap-2 text-secondary">
            <img class="w-4 h-4" src="./assets/icon/injection.png" alt="icon">
            <span>Vaccinated status:</span>
            ${pet.vaccinated_status ? pet.vaccinated_status : "Not Found"}
        </div>
        
        </div>
      


        <div>
          
                <div class="flex items-center gap-2 text-secondary">
            <img class="w-4 h-4" src="./assets/icon/birth.png" alt="icon">
            <span>Birth:</span>
            ${pet.date_of_birth ? pet.date_of_birth : "Not Found"}
        </div>



            <div class="flex items-center gap-2 text-secondary">
            <img class="w-4 h-4" src="./assets/icon/price.png" alt="icon">
            <span>Price:</span>

            ${pet.price ? pet.price + " $" : "Not Found"}
        </div>

        
        </div>

      </div>

      <hr class="border my-2">
      


      <div>
        <p class="text-xl font-bold">Detail Information</p>
        <p class="text-secondary pt-2">${pet.pet_details}</p>
      </div>
      

  `;

  document.getElementById("details_modal").showModal();
};

const displayPets = (pets) => {
  const petLeft = document.getElementById("pet-left");
  petLeft.innerHTML = "";

  if (pets.length == 0) {
    petLeft.classList.remove("grid");
    petLeft.innerHTML = `
            <div class="bg-bg_error min-h-[70vh] w-full flex flex-col gap-5 justify-center items-center border rounded-2xl">
                <img src="./assets/error.webp" alt="empty">
                <p class="text-xl md:text-3xl font-extrabold text-center">No Information Available</p>
                <p class="w-11/12 md:w-1/2 text-center text-secondary">As of right now, we have no bird data. We'll be adding bird data here shortly. We appreciate you being here. Stay tuned for future updates and exciting features!</p>
                
            </div>
        `;
    return;
  } else {
    petLeft.classList.add("grid");
  }

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList = "card card-compact border border-gray-300 "; // (card and card-compact) eta daisy ui er first line er class
    card.innerHTML = `
                <figure class="lg:p-5 p-3 w-full>
                    <div class="w-full p-4" >
                    <img
                    class="w-full h-full rounded-2xl object-cover"
                    src=${pet.image}
                    alt="Shoes" />
                    </div>
                </figure>

             
                <div class="px-4  flex flex-col gap-2">

                    <div>
                        <h2 class="font-extrabold text-xl pb-2">${
                          pet.pet_name
                        }</h2>

                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/breed.png" alt="icon">
                            <span>Breed:</span>
                            ${
                              pet.breed !== undefined && pet.breed !== null
                                ? pet.breed
                                : "Not Found"
                            }
                        </div>


                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/birth.png" alt="icon">
                            <span>Birth:</span>
                            ${
                              pet.date_of_birth
                                ? pet.date_of_birth
                                : "Not Found"
                            }
                        </div>



                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/gender.png" alt="icon">
                            <span>Gender:</span>
                            ${
                              pet.gender !== undefined && pet.gender !== null
                                ? pet.gender
                                : "Not Found"
                            }
                        </div>
                        
                        

                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/price.png" alt="icon">
                            <span>Price:</span>

                            ${pet.price ? pet.price + " $" : "Not Found"}
                        </div>
                        
                        
                    </div>

                    <hr class="border my-2">


                    
                    <div class="flex justify-between mb-4">
                        <button onclick="like_function('${
                          pet.petId
                        }')"  class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white px-3 sm:px-5 md:px-7">
                            <img src="./assets/icon/like.png" alt="like">
                        </button>

                        <button onclick="adopt_function(this)" class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white text-aqua_primary">Adopt</button>

                        <button onclick="loadDetails('${
                          pet.petId
                        }')" class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white text-aqua_primary">Details</button>
                    </div>


                </div>
        `;
    petLeft.append(card);
  });
};

const adopt_function = (btn) => {
  const countNumber = document.getElementById("count_number");
  const count = countNumber.innerText;
  let i = parseInt(count);

  adopt_modal.showModal();

  const setTime = setInterval(() => {
    i--;
    countNumber.innerText = i;
    if (i == 0) {
      clearInterval(setTime);
      adopt_modal.close();
      btn.innerText = "Adopted";
      btn.disabled = true;
      countNumber.innerText = count;
    }
  }, 1000);
};

const like_function = async (petId) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  const petRight = document.getElementById("pet-right");
  petRight.innerHTML += `

            <img
            class="w-full rounded-2xl object-cover"
            src=${data.petData.image}
            alt="icon" />

    `;
};

//create DisplayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  //add Data in Html

  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");

    //TODO: button customization
    buttonContainer.innerHTML = `

        <button id="${item.category}" onclick="loadCategoryPets('${item.category}')" class=" category-btn btn w-full  h-20 bg-white border-2 border-gray-300">
        <img src="${item.category_icon}" alt="icon" class="w-6 h-6" />
            <span class="font-bold text-base lg:text-lg">${item.category}</span>
        </button>

        `;

    const button = buttonContainer.querySelector(".category-btn");

    button.addEventListener("click", () => {
      activateButton(button);
    });

    //add button to category container
    categoryContainer.appendChild(buttonContainer);
  });
};

function activateButton(button) {
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((btn) => {
    // Reset all buttons to default style
    btn.style.color = "black";
    btn.style.backgroundColor = "";
    btn.classList.remove("border-[#0E7A81]", "rounded-full");
    btn.classList.add("border-2");
  });

  // Set the clicked button's border color to blue, background color, and apply rounded border
  button.style.backgroundColor = "rgba(14, 122, 129, 0.1)";
  button.classList.remove("border-4");
  button.classList.add("border-[#0E7A81]");
  button.classList.add("rounded-full");
}

document.getElementById("sotringBtn").addEventListener("click", async () => {
  document.getElementById("pet-left").innerHTML = "";
  const data = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const res = await data.json();

  document.getElementById("spinner-card").classList.remove("hidden");
  document.getElementById("pets-container").classList.add("hidden");
  const petLeft = document.getElementById("pet-left");
  petLeft.classList.add("grid");

  res.pets.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  res.pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList = "card card-compact border border-gray-300 ";
    card.innerHTML = `
                <figure class=" w-full" >
                    <div class="w-full p-4" >
                    <img
                    class="w-full h-full rounded-2xl object-cover"
                    src=${pet.image}
                    alt="Shoes" />
                    </div>
                </figure>

                
                <div class="px-4 flex flex-col gap-2">

                    <div>
                        <h2 class="font-extrabold text-xl pb-2">${
                          pet.pet_name
                        }</h2>

                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/breed.png" alt="icon">
                            <span>Breed:</span>
                            ${
                              pet.breed !== undefined && pet.breed !== null
                                ? pet.breed
                                : "Not Found"
                            }
                        </div>


                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/birth.png" alt="icon">
                            <span>Birth:</span>
                            ${
                              pet.date_of_birth
                                ? pet.date_of_birth
                                : "Not Found"
                            }
                        </div>


                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/gender.png" alt="icon">
                            <span>Gender:</span>
                            ${
                              pet.gender !== undefined && pet.gender !== null
                                ? pet.gender
                                : "Not Found"
                            }
                        </div>
                        
                        

                        <div class="flex items-center gap-2 text-secondary">
                            <img class="w-4 h-4" src="./assets/icon/price.png" alt="icon">
                            <span>Price:</span>

                            ${pet.price ? pet.price + " $" : "Not Found"}
                        </div>
                        
                        
                    </div>

                    <hr class="border my-2">


                    
                    <div class="flex justify-between mb-4">
                        <button onclick="like_function('${
                          pet.petId
                        }')"  class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white px-3 sm:px-5 md:px-7">
                            <img src="./assets/icon/like.png" alt="like">
                        </button>

                        <button onclick="adopt_function(this)" class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white text-aqua_primary">Adopt</button>

                        <button onclick="loadDetails('${
                          pet.petId
                        }')" class="btn border-2 border-gray-300 bg-white hover:border-[#0E7A81] hover:bg-white text-aqua_primary">Details</button>
                    </div>


                </div>
        `;
    petLeft.append(card);
  });

  setTimeout(() => {
    document.getElementById("spinner-card").classList.add("hidden");
    document.getElementById("pets-container").classList.remove("hidden");
  }, 2000);
});

loadCategories();
loadPets();
