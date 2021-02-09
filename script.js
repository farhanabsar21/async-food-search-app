const getItems = async ()=> {
    const inputAreaText = document.getElementById("input-area").value;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputAreaText}`);
    const data = await res.json();
    displayData(data.meals);
}

const displayData = (foodItems)=> {
    const itemContainer = document.getElementById("list-container");
    itemContainer.innerHTML = "";
    if(foodItems == null){
        alert("Please insert a proper food name!");
    }else{
        foodItems.forEach(foodItem => {
            const list = document.createElement("LI");
            list.innerHTML = `
                <img class="food-img" src="${foodItem.strMealThumb}">
                <h2>${foodItem.strMeal}</h2>
            `;
            itemContainer.appendChild(list);
            list.addEventListener("click",getDetails);
        })
    }
}

const getDetails = async () => {
    const inputAreaText = document.getElementById("input-area").value;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputAreaText}`);
    const data = await res.json();
    displayDetails(data.meals); 
}


const displayDetails = (itemDetails) =>{
    const detailsContainer = document.getElementById("detailBox");
    detailsContainer.innerHTML = "";
    itemDetails.forEach(itemDetail => {
        const itemDiv = document.createElement("DIV");
        itemDiv.className = "details-para";
        itemDiv.innerHTML = `
            <p>${itemDetail.strIngredient1} ${itemDetail.strMeasure1}</p>
        `;
        detailsContainer.appendChild(itemDiv);
        detailsContainer.style.left = "0px";
    });
}
