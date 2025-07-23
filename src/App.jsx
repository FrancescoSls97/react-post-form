import { useState } from 'react'

function App() {
  

  return (
    <>
    <div className="container m-5">
      <div className="card m-3 p-3">
        <h1>Send Something To Boolean</h1>
          <div className="mb-3">
            <label for="author" className="form-label fs-4">Author</label>
            <input
              type="text"
              className="form-control p-3"
              name="author"
              id="author"
              aria-describedby="helpId"
              placeholder="Author Name"
            />
          </div>
          <div className="mb-3">
            <label for="title" className="form-label fs-4">Title</label>
            <input
              type="text"
              className="form-control p-3"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Post Title"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label fs-4">Your message</label>
            <textarea class="form-control p-3" name="message" id="message" rows="3" placeholder='Write your message here'></textarea>
          </div>
          <button type='submit' className='btn btn-primary p-3 fs-4'> Send your message <i class="fa-regular fa-message"></i> </button>        
      </div>
    </div>
    </>
  )
}

export default App
