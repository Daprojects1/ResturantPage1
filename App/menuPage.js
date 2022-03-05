import displayFoodItems from "./utility.js/foodItems"


export default class MenuPage{
    display = () => {
        let menudiv = document.createElement("div")
        displayFoodItems(menudiv);
        menudiv.classList.add("menudiv")
        return menudiv;
    }
}