import { useState } from 'react'

function App() {
  //costanti per le funzioni
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState ('')
  const [send, setSend] = useState(false)

//funzione per settare il nome dell'autore
  function handleAuthorName(e) {
    console.log(e.target.name);
    setAuthor(e.target.value) 
  }

  //funzione per settare il titolo del post
  function handleTitleName(e) {
    console.log(e.target.name);
    setTitle(e.target.value) 
  }

  //funzione per settare il testo del post
  function handleMessage(e) {
    console.log(e.target.name);
    setMessage(e.target.value) 
  }

  function handleSend(e) {
    console.log(e.target.name)
    setSend(e.target.checked)
  }
  

  return (
    <>
    <div className="container m-5">
      <div className="card m-3 p-3">
        <h1>Send Something To Boolean</h1>
          <div className="mb-3">
            <label forhtml="author" className="form-label fs-4">Author</label>
            <input
              type="text"
              className="form-control p-3"
              name="author"
              id="author"
              aria-describedby="helpId"
              placeholder="Author Name"
              value={author}
              onChange={handleAuthorName}
            />
          </div>
          <div className="mb-3">
            <label forhtml="title" className="form-label fs-4">Title</label>
            <input
              type="text"
              className="form-control p-3"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Post Title"
              value={title}
              onChange={handleTitleName}
            />
          </div>
          <div className="mb-3">
            <label forhtml="message" className="form-label fs-4">Your message</label>
            <textarea className="form-control p-3" name="message" id="message" rows="3" placeholder='Write your message here' value={message} onChange={handleMessage}></textarea>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" name="send" id="send" onChange={handleSend}/>
            <label className="form-check-label" htmlFor="send"> Send </label>
          </div>
          <button type='submit' className='btn btn-primary p-3 fs-4'> Send your post <i className="fa-regular fa-message"></i> </button>        
      </div>
    </div>
    </>
  )
}

export default App
