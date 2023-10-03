import { useState } from 'react'
import './App.css'

function App() {
  
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [assistantContent, setAssistantContent] = useState(''); 

  const handleButtonClick = (x, y, content) => {
    // Calculate the new position and set content
    const newPosition = { x: x, y: y };
    setPosition(newPosition);
    setAssistantContent(content);
  };

  return (
    <>
      <div className='position' style={{position: "relative", height: "100vh"}}>
        <h1> On-page Assistant</h1>
        <div className='btns'>
          <button id="btn-1" className='btn' onClick={() => handleButtonClick(50, 300, "Login button was clicked. This button can perform a login action.")}>Login</button>
          <button id="btn-2" className='btn' onClick={() => handleButtonClick(300, 300, "Get Started button was clicked. This button can initiate the onboarding process.")}>Get Started</button>
          <button id="btn-3" className='btn' onClick={() => handleButtonClick(600, 300, "Learn More button was clicked. This button can provide more information.")}>Learn More</button>
        </div>
        <div className='btns' style={{marginTop: "200px", }}>
          <button id="btn-4" className='btn' onClick={() => handleButtonClick(50, 150, "Explore button was clicked. This button can navigate to other sections.")}>Explore</button>
          <button id="btn-5"className='btn' onClick={() => handleButtonClick(300, 150, "Contact Us button was clicked. This button can open a contact form.")}>Contact Us</button>
          <button id="btn-6" className='btn' onClick={() => handleButtonClick(600, 150, "Sign Up button was clicked. This button can perform a sign-up action.")}>Sign Up</button>
        </div>

        <div className='assistant' style={{position: "absolute", display: "flex", left: `${position.x}px`, bottom: `${position.y}px`}}>
        <img src="https://gifdb.com/images/high/animated-winter-days-walking-xizdn42xi95y262e.gif" alt="man" width="200px" style={{}}/>
        <div>
          <p>{assistantContent}</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
