import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'

export class BooksHome extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy).then((books) => {
            this.setState({ books })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    render() {
        const { books, selectedBook } = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section>
                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}
                {selectedBook && <BookDetails book={selectedBook} goBack={() => this.setSelectedBook(null)} />}
            </section>
        )
    }
}