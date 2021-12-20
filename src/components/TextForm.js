import React, { useState } from "react"

export default function TextForm(props) {
  const [text, setText] = useState("")
  const [words, setWords] = useState(0)

  const clearText = () => {
    setText("")
  }

  const convertToUpper = () => {
    const newText = text.toUpperCase()
    setText(newText)
  }

  const convertToLower = () => {
    const newText = text.toLowerCase()
    setText(newText)
  }

  function WordCount(str) {
    return str.split(" ").filter(function (n) {
      return n !== ""
    }).length
  }

  const fetchText = (event) => {
    setText(event.target.value)
    let str = WordCount(text)
    setWords(str)
  }

  return (
    <>
      <div className='container'>
        <form>
          <div className='form-group my-4'>
            <h3 className={`text-${props.mode}`}>Enter Text</h3>
            <textarea
              className='form-control'
              rows='6'
              value={text}
              onChange={fetchText}
              id='myBox'
            ></textarea>
            <button
              type='button'
              className='btn btn-primary my-3'
              onClick={clearText}
            >
              Clear
            </button>
            <button
              type='button'
              className='btn btn-primary my-3 mx-3'
              onClick={convertToUpper}
            >
              Convert to Upper Case
            </button>
            <button
              type='button'
              className='btn btn-primary my-3 '
              onClick={convertToLower}
            >
              Convert to Lower Case
            </button>
            <button
              type='button'
              className='btn btn-primary my-3 mx-3'
              onClick={() => {
                navigator.clipboard.writeText(text)
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </form>
        <h4 className='text-danger'>Your Text Summary</h4>
        <h5 className={`text-${props.mode}`}>
          Your Text Contain &nbsp;
          {words}&nbsp; Words & {text.length} Characters
        </h5>
        <h4 className='text-danger mt-5'>Your Text Preview</h4>
        <p className={`text-${props.mode} my-1`}>{text}</p>
      </div>
    </>
  )
}
