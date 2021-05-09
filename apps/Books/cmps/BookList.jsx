import {BookPreview} from '../cmps/BookPreview.jsx'

export function BookList({books, setSelectedBook}){
    return(
        <div className="book-list flex">
            {books.map((book) =>(
            <BookPreview book={book} key={book.id} setSelectedBook={setSelectedBook}/>            
            ))}
        </div>
    )
}