export const Quote = ({ quote, author }) => {
    return (
        <blockquote className="blockquote bg-warning px-5 py-3 border border-4 border-danger rounded-pill">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    )
}
