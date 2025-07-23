import { useEffect, useState } from 'react'

function App() {
  //costanti per le funzioni
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState ('')
  

  //API
  const url = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  
//fetch function
function handleSubmit(e) {
  e.preventDefault()

  const requestOptions = {
    method: 'POST',
    header: {
      'Connect-Type': 'application/json'
    },
    body: JSON.stringify({
      author: author,
      title: title,
      message: message,
    })
  };
    fetch(url, requestOptions)
    .then (response => response.json())
    .then (data => {
      console.log('Hey!! Listen!!');
      console.log(data);     
    })   
};

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



  return (
    <>
    <div className="container m-5">
      <form action={handleSubmit}>

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
            <input className="form-check-input" type="checkbox" name="send" id="send" />
            <label className="form-check-label" htmlFor="send"> Send </label>
          </div>
          <button type='submit' className='btn btn-primary p-3 fs-4'> Send your post <i className="fa-regular fa-message"></i> </button>        
      </div>
      </form>
    </div>
    </>
  )
}

export default App
