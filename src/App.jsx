import { FaRegSmile } from "react-icons/fa";
import { ImSad } from "react-icons/im";
import './App.css'

function App() {
  
  return (
    <main>
      <article>
        <h1 className='text-center'>How are you feeling today?</h1>
        <h1 className='flex justify-between my-7 text-7xl text-blue-400'>
          <FaRegSmile />
          <ImSad />
        </h1>
      </article>
    </main>
  )
}

export default App
