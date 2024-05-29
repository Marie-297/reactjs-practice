import React from 'react'


function InputForm(props) {
  return (
    <div className='formbody'>
      <form>
        <div className="row">
          <div className="col">
            <label>
              Top Text
            </label>
            <input type="text" />
          </div>

          <div className="col">
            <label>
              Bottom Text
            </label>
            <input type="text" />
          </div>
        </div>

        <div className="btn">
          <input type="submit" value="submit" className='btn-img' onClick={props.click} />
        </div>
      </form>
    </div>
  )
}

export default InputForm
