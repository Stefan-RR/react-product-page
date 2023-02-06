function Image({ source, name }) {
    return (
        <img src={source} className={name}></img>
    )
}

export default Image