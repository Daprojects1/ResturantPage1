const appender = (vals, appendee) => {
    vals.map((val) => {
        appendee.appendChild(val)
    })
}

export default appender;