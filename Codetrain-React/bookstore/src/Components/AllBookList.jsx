import React from 'react'
import BookList from './BookList'

function AllBookList(props) {
  return (
    <div className='bottomrow'>
      {props.allList.map((newBook) => {
        return (
          <div key={newBook.id}>
            <BookList bookDetails={newBook} editNewBook={props.editBook} deleteNewBook={props.deleteBook} />
          </div>
        )
      })}
    </div>
  )
}

export default AllBookList
