import React, { useState } from 'react'

function BookForm(props) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImg] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value)
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value)
  };
  const changeDescription = (e) => {
    setDescription(e.target.value)
  };
  const changeImageUrl = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };
  // const changeImageUrl = (e) => {
  //   setImg(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newBook = {
      title: title,
      author: author,
      description: description,
      imageUrl: imageUrl
    }
    props.addBook(newBook)
    setTitle("")
    setAuthor("")
    setDescription("")
  };

  return (
    <div onSubmit={handleSubmit} className='formdiv'>
      <form className='formbody'>
        <div className="left-form">
          <div className="title one">
            <label htmlFor="title">Book Title</label>
            <input type="text" id='title' onChange={changeTitle} value={title} placeholder='Book title here...' />
          </div>
          <div className="author one">
            <label htmlFor="author">Name of Author</label>
            <input type="text" id='author' onChange={changeAuthor} value={author} placeholder="Enter Author's name..." />
          </div>
          <div className='one'>
            <label htmlFor="img">Add Image Cover</label>
            <input type="file" accept="image/*"
            onChange={changeImageUrl} />
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
