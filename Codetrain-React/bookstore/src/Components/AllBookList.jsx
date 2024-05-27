import React from 'react'
import BookList from './BookList'

function AllBookList(props) {
  return (
    <div className='bottomrow'>
      {props.allList.map((newBook) => {
        return (
          <div key={newBook.id}>
            <BookList ImgSrc={newBook.imageUrl} title={newBook.title} author={newBook.author} description={newBook.description} />
          </div>
        )
      })}
    </div>
  )
}

export default AllBookList
