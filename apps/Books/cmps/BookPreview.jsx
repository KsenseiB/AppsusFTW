const { Link } = ReactRouterDOM

export function BookPreview({ book }) {
    return (
        <Link to={`/book/${book.id}`}>
        <article className="book-preview">
                <p>{book.title}</p>
                <p>No. of Pages: {book.pageCount}</p>
                <p>Publish Year: {+book.publishedDate}</p>
                <img src={book.thumbnail}></img>
        </article>
        </Link>
    )
}