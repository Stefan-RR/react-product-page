function Description ({name, title, description}) {
    return (
        <div className={name}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Description