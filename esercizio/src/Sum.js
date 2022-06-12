function Sum(props) {
    return (
        <h1>Sum:
            {props.numbers.reduce((total, current) => { return (total += current) })}
        </h1>
    )
}
export default Sum