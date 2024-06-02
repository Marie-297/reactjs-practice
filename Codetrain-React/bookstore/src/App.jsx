import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBookList from './Components/AllBookList'
import { Container, Row } from 'react-bootstrap'
import BookForm from './Components/BookForm';
import {v4 as uuid} from 'uuid'

function App() {

  const [books, setBooks] = useState([
    {title: 'End of Watch', author: 'Stephen King', description: 'A powerful novel of suspense that is very interesting and powerful', imageUrl: "https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg", id: uuid()},
    {title: 'How to Satisfy a woman Everytime...', author: 'Naura Hayden', description: 'The first and only book that tells you exactly how to satisfy your woman and make her beg for more', imageUrl: "https://scribemedia.com/wp-content/uploads/2016/03/satisfy-book-cover.jpg", id: uuid()}
  ])

  const addNewBook = (newBook) => {
    setBooks([...books, newBook])
  }
  console.log(books);

  const editBook = (editBookid,editBookDetail) => {
    const editedBook = books.map((book) => {
      if (book.id === editBookid) {
        return editBookDetail
      }
      else {
        return book
      }
    })
    setBooks(editedBook)
  }
  const deleteBook = (delBookid) => {
    const delArr = books.filter((book) => {
      if (book.id !== delBookid) {
        return book
      }
    })
    setBooks(delArr);
  }

  return (
    <div>
      <Container>
        <Row className='firstrow'>
          <BookForm addBook={addNewBook}/>
          <hr />
        </Row>
        <Row className='secondrow'>
          <AllBookList allList={books} editBook={editBook} deleteBook={deleteBook}/>
        </Row>
      </Container>
    </div>
  )
}

export default App
