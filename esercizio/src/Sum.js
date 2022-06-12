function Sum({ numbers = [2, 2, 1, 20] }) {
    return (
        <h1>Sum:
            {numbers.reduce((total, current) => { return (total += current) })}
        </h1>
    )
}
export default Sum