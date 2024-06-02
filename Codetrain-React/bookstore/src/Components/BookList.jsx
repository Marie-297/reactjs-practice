import React, { useState } from 'react'
import {Card, Button, Modal} from 'react-bootstrap'

function BookList(props) {
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

  const [modal, setModal] = useState(false);

  const changeModal = () => {
    setModal(!modal);
  }
  return (
    <div>
      <Card style={{ width: '14rem' }} className='carddiv'>
        <Card.Img className='cardtitle' variant="top" src={props.ImgSrc} alt={props.title} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.author}
          </Card.Subtitle>
          <Card.Text className='text'>
            {props.description}
          </Card.Text>
        </Card.Body>
        <div className="btns">
          <Button variant="primary" onClick={changeModal}>Edit</Button>{' '}
          <Button variant="danger" onClick={props.deleteNewBook}>Delete</Button>{' '}
        </div>
      </Card>

      <Modal show={modal} onHide={changeModal} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className='formbody'>
            <div className="left-form">
              <div className="title one">
                <input type="text" id='title' onChange={changeTitle} value={title} placeholder='Book title here...' />
              </div>
              <div className="author one">
                <input type="text" id='author' onChange={changeAuthor} value={author} placeholder="Enter Author's name..." />
              </div>
              <div className='one'>
                <input type="file" accept="image/*"
                onChange={changeImageUrl} />
              </div>
            </div>
            
            <textarea type="text" rows={5} cols={60} onChange={changeDescription} value={description} placeholder="Write a summary of the book" />           
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={changeModal}>Close</Button>
          <Button variant="primary" onClick={props.editNewBook}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BookList
