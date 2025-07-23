import { useState } from 'react'

function App() {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState ('')

  function handleAuthorName(e) {
    console.log(e.target.name);
    setAuthor(e.target.value) 
  }

  function handleTitleName(e) {
    console.log(e.target.name);
    setTitle(e.target.value) 
  }

  function handleMessage(e) {
    console.log(e.target.name);
    setMessage(e.target.value) 
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
          <button type='submit' className='btn btn-primary p-3 fs-4'> Send your message <i className="fa-regular fa-message"></i> </button>        
      </div>
    </div>
    </>
  )
}

export default App
