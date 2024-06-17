import React, { useState } from 'react'


function InputForm({ click, setMemeImg, memeImg}) {

  const handletopText = (e) => {
    setMemeImg(prevState => ({
      ...prevState,
      topText: e.target.value
    }));
  };

  const handlebottomText = (e) => {
    setMemeImg(prevState => ({
      ...prevState,
      bottomText: e.target.value
    }));
  };
  
  return (
    <div className='formbody'>
      <form onSubmit={click}>
        <div className="row">
          <div className="col">
            <label>
              Top Text
            </label>
            <input type="text" onChange={handletopText} value={memeImg.topText} />
          </div>

          <div className="col">
            <label>
              Bottom Text
            </label>
            <input type="text" onChange={handlebottomText} value={memeImg.bottomText} />
          </div>
        </div>

        <div className="btn">
          <input type="submit" value="submit" className='btn-img' onClick={click} />
        </div>
      </form>
    </div>
  )
}

export default InputForm
