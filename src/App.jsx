import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Component/Post'

function App() {

  return (
    <>
      <div className='head'>
        <img src={reactLogo}></img>
        <button className='create_post'>Ask Question</button>
      </div>
      
      <main>
      <h2 className='main_question' >What is Quara? I take it to be a social media site that allows people to ask questions and allows people to respond to the questions and the answers. Why do some responders take their answers so personally, not wanting to hear alt opinions?</h2>
        {/* post */}
        <Post></Post>
      </main>
    </>
  )
}

export default App
