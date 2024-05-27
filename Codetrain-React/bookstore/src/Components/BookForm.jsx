import React, { useState } from 'react'

function BookForm() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImg] = useState("")

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeAuthor = (e) => {
    setAuthor(e.target.value)
  }
  const changeDescription = (e) => {
    setDescription(e.target.value)
  }
  const changeImageUrl = (e) => {
    setImg(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // let newBook = {
    //   title: title,
    //   author: author,
    //   description: description,
    //   imageUrl: imageUrl
    // }
    // props.addBook(newBook)
    setTitle("")
    setAuthor("")
    setDescription("")
    setImg("")
    console.log(newBook);
  }

  return (
    <div>
      <form className='formbody'>
        <div className="left-form">
          <div className="title one">
            <label htmlFor="">Book Title</label>
            <input type="text" onChange={changeTitle} value={title} placeholder='Book title here...' />
          </div>
          <div className="autor one">
            <label htmlFor="">Name of Author</label>
            <input type="text" onChange={changeAuthor} value={author} placeholder="Enter Author's name..." />
          </div>
          <div className='one'>
            <label htmlFor="">Add Image Cover</label>
            <input type="file" accept="image/*"
            onChange={changeImageUrl} value={author} placeholder="Enter Author's name..." />
          </div>
        </div>
        <div className="right-form">
          <div className="description one">
            <label htmlFor="">Description</label>
            <textarea type="text" rows={5} cols={60} onChange={changeDescription} value={description} placeholder="Write a summary of the book" />
          </div>
        
          <div className="btn">
            <input type="submit" value="Add Book" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default BookForm
