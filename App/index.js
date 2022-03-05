import "./styles.css";
import "./images/resturantPage.jpg"
import NavHeader from "./navHeader"
import HomePage from "./homePage";
import MenuPage from "./menuPage";
import ContactPage from "./contactPage";
import showPage from "./utility.js/showsPage";

class Body {
    constructor() {
        this.body = document.querySelector("body");
        this.wrapper = document.querySelector(".wrapper")
        this.main = document.querySelector(".main");
        this.footer = document.querySelector(".footer");
    }
    display = () => {
        // creating instances of the components;
        this.header = new NavHeader();
        this.homepage = new HomePage();
        this.menupage = new MenuPage()
        this.contactpage = new ContactPage();
        this.body.classList.add("bodyReset")
        this.wrapper.classList.add("img");
        // appending to the main div the header and navigation 
        this.wrapper.appendChild(this.header.display());
        // appending the main element to the wrapper; 
        this.wrapper.appendChild(this.main);
        // appending the initial homepage;
        this.homepage.div.appendChild(this.homepage.display());
        this.main.appendChild(this.homepage.div);
        this.home = this.header.home;
        this.menu = this.header.menu;
        this.contact = this.header.contact;
        // created a reuasble function to rerender the pages on click.
        showPage(this.home, this.homepage.div, this.homepage.display);
        showPage(this.menu, this.homepage.div, this.menupage.display);
        this.draft(this.contact)
        // this.showHome(this.home);
        // this.showMenu();
        // this.showContacts();
    }
    draft = (menu) => {
        menu.addEventListener("click", () => {
            this.homepage.div.innerHTML = "";
            this.homepage.div.appendChild(this.contactpage.display())
            
        })
    }
    showInitial = () => {
        
    }
}

let body = new Body()
body.display();
