import "./styles.css"
import createLists from "./utility.js/listitems"

export default class NavHeader {
    constructor() {
        this.header = document.querySelector(".header")
    }

    display = () => {
        let navArray = ["Home", "Menu", "Contact"]
        let nav = document.createElement("nav");
        nav.classList.add("nav")
        let ul = document.createElement("ul")
        createLists(navArray,ul)
        nav.appendChild(ul)
        this.header.appendChild(nav);
        this.home = ul.children[0]
        this.menu = ul.children[1]
        this.contact = ul.children[2]
        return this.header;
    }
}