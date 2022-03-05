const starterImg = require("../images/starter.jpg");
const mainImg = require("../images/main.jpg")
const desertImg = require("../images/desert.jpg")
import appender from "./appender";

const foodItems = [
    {
        type: "Starter",
        foodName: "Creole Fish",
        src:starterImg
    },
    {
        type: "Main",
        foodName: "Chichi's Seafood Fryup",
        src:mainImg
    },
    {
        type: "Desert",
        foodName: "Ice-Cream Delight",
        src:desertImg
    }
]

const displayFoodItems = (menudiv) => {
    let h2 = document.createElement("h2");
    h2.innerHTML = "Today's Menu"
    h2.classList.add("foodItemsH2");
    menudiv.appendChild(h2)
    let foodsDiv = document.createElement("div");
    foodsDiv.classList.add("foodsDiv")
    foodItems.map((items) => {
        let foodDiv = document.createElement("div");
        foodDiv.classList.add("fooddiv")
        let foodH2 = document.createElement("h2");
        let foodH4 = document.createElement("h4")
        let foodImg = document.createElement("img");
        foodH2.innerText = items.type;
        foodH4.innerText = items.foodName;
        foodImg.setAttribute("src", items.src)
        appender([foodH2, foodH4, foodImg], foodDiv)
        foodsDiv.appendChild(foodDiv);
    })
    menudiv.appendChild(foodsDiv)
}

export default displayFoodItems;