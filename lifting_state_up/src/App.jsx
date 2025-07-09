import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeBtn from './components/LikeBtn';
import DislikeBtn from './components/DislikeBtn';

function App() {

  const [likes,setLikes] = useState(0);
  const [dislikes,setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    if(dislikes > 0) setDislikes(prev => prev - 1);
  }

    const handleDislike = () => {
    setDislikes(prev => prev + 1);
    if(likes > 0) setLikes(prev => prev - 1);
  }



  return (
    <div>
      <h2>React Like/Dislike Example</h2>
      <LikeBtn likes={likes} onLike={handleLike}/>
      <DislikeBtn dislikes={dislikes} onDislike={handleDislike}/>  
    </div>
  )
}

export default App
