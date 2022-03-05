const showPage = (page, div, func) => {
    page.addEventListener("click", () => {
        div.innerHTML = "";
        div.appendChild(func())
        
    })
}

export default showPage;