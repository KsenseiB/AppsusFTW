const { Link } = ReactRouterDOM
import { bookService } from '../services/book-service.js'

export class BookDetails extends React.Component {
    state = {
        book: null
      }

      componentDidMount() {
          this.loadBook()
      }

      loadBook() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then((book) => {
            if (!book) return this.props.history.push('/')
            this.setState({ book})
        })
    }

    render() {
        const {book} = this.state
        if (!book) return <div>Loading...</div>
        return (
            <div className="book-details">
            <p>{book.title}</p>
            <p>Subtitle: {book.subtitle}</p>
            <img src={book.thumbnail}></img>
            <p>Author: {book.authors}</p>
            <p>No. of Pages: {book.pageCount}</p>
            <p>Publish Year: {+book.publishedDate}</p>
            <p>Language: {book.language}</p>
            <p>Synopsis: {book.description}</p>
            <button onClick={() => this.props.history.push('/book')} > Go back</button>
        </div>
        )
    }

}




