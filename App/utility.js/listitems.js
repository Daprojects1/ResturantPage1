const createLists = (arrItems, ul) => {
    arrItems.map((item) => {
        let li = document.createElement("li")
        let text = document.createTextNode(item)
        li.appendChild(text)
        ul.appendChild(li)
    })
}

export default createLists