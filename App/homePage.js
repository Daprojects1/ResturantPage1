import "./styles.css";
import createLists from "./utility.js/listitems";

export default class HomePage {
    constructor() {
        this.div = document.createElement("div")
    }
    display = () => {
        let firstDiv = document.createElement("div")
        firstDiv.classList.add(".home");
        let h1 = document.createElement("h1");
        h1.classList.add("homeh1");
        h1.innerText = "KITCHEN KINGS";
        let p = document.createElement("p");
        p.classList.add("hometext")
        p.classList.add("padding")
        let text = document.createTextNode("Welcome to kitchen kings. We take pride in our foods and say boldly we rule the kitchen! Our chefs are top of the range chefs who have built a distinguished reputation in the industry over many years. It is such a pleasure to have you join us. Please have a look around !")
        p.appendChild(text)
        let timesDiv = document.createElement("div");
        timesDiv.classList.add("timesDiv")
        timesDiv.classList.add("padding")
        let hoursh1 = document.createElement("h2");
        hoursh1.innerHTML = "Hours"
        timesDiv.appendChild(hoursh1)
        let ul = document.createElement("ul");
        ul.classList.add("homeul");
        let openTimesArr = ["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6pm - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 1pm - 2am"];
        createLists(openTimesArr, ul)
        timesDiv.appendChild(ul);
        this.div.appendChild(h1);
        this.div.appendChild(p);
        this.div.appendChild(timesDiv);
        return firstDiv;
    }
}