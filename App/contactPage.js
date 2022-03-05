import appender from "./utility.js/appender";
const chefImg = require("./images/pic1.jpg")

export default class ContactPage{
    display = () => {
        let contactDiv = document.createElement("div");
        contactDiv.classList.add("contactDiv")
        let h2 = document.createElement("h2");
        let img = document.createElement("img")
        img.setAttribute("src", chefImg)
        h2.innerHTML="Get in touch!"
        let phoneh4 = document.createElement("h4");
        phoneh4.innerHTML="PHONE: +01632 960270"
        let emailh4 = document.createElement("h4");
        emailh4.innerHTML = "EMAIL: KitchenKings@outlook.com"
        let addyh4 = document.createElement("h4");
        addyh4.innerText = "ADDRESS: 29 Parkshot Ave, Richmond, Surrey, TW9 2RG"
        appender([h2, img, phoneh4, emailh4, addyh4], contactDiv)
        return contactDiv
    }
}