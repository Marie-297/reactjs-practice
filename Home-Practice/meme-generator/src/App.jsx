import React, { useState } from 'react'
import Header from './Components/Header'
import InputForm from './Components/InputForm'
import memeData from './assets/meme.js'
import Image from './Components/Image.jsx'

function App(props) {

  const [memeImg, setMemeImg] = useState("")
  console.log(memeImg)
  const getMemeImage = (e) => {
    const memeArr = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArr.length)
    const url = memeArr[randomNumber].imageUrl
    setMemeImg(url)
    console.log(url)
    e.preventDefault()
  }
  return (
    <div>
      <Header />
      <div className="mainbody">
        <InputForm click={getMemeImage} />
        <Image className="imagecard" srcUrl={memeImg} />
      </div>
    </div>
  )
}

export default App
