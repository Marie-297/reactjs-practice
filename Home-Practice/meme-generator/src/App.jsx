import React, { useState } from 'react'
import Header from './Components/Header'
import InputForm from './Components/InputForm'
import memeData from './assets/meme.js'
import Image from './Components/Image.jsx'

function App(props) {

  const [memeImg, setMemeImg] = useState({
    topText: '',
    bottomText: '',
    imageUrl: "https://i.imgflip.com/1bij.jpg"
  })
  console.log(memeImg)
  const getMemeImage = (e) => {
    const memeArr = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArr.length)
    const url = memeArr[randomNumber].imageUrl
    const id = memeArr[randomNumber].id
    e.preventDefault()
    setMemeImg(prevState => ({
      ...prevState,
      imageUrl: url
    }));
    console.log(id)
  }
  return (
    <div>
      <Header />
      <div className="mainbody">
        <InputForm click={getMemeImage} setMemeImg={setMemeImg} memeImg={memeImg} />
        <Image className="imagecard" srcUrl={memeImg.imageUrl} topText={memeImg.topText} bottomText={memeImg.bottomText} />
      </div>
    </div>
  )
}

export default App
