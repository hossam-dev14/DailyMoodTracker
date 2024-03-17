import React, { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import { FaRegFaceAngry } from "react-icons/fa6";
import { ImSad } from "react-icons/im";


const moods = {
  sad: 'I am Sad today!',
  happy: 'I am very happy today!',
  angry: 'I am Angry today!'
}

export default function MoodTracker() {
  const [mood, setMood] = useState('');

  const handleMood = (mood) => {
    // Checks if a given mood is present in the moods object
    let givenMood = mood in moods;
    
    if (givenMood){
      setMood(moods[mood]);
    }
  }

  return (
    <main className="grid h-screen content-evenly place-items-center p-2 md:p-10 font-mono ">
      <div>
        <h1 className='text-center leading-3 m-3 font-semibold text-pink-400 text-xl'>How are you feeling today?</h1>
      </div>
      <div className="px-1 py-2 backdrop-brightness-200 min-w-56 rounded-2xl">
        <h1 className="mood text-center leading-10 m-3 font-bold text-2xl sm:text-3xl md:text-4xl  text-gray-50  ">
          {!mood ? '...' : mood}
        </h1>
      </div>
      <article className="rounded-2xl text-white w-full p-4 max-w-xs md:max-w-md lg:max-w-2xl mx-auto ">
        
        <div className='flex justify-between my-3 text-blue-400 mt-7 '>
          <button className="hover:text-pink-500 text-7xl" 
            onClick={() => handleMood('happy')} value='happy'> 
            <FaRegSmile />
          </button>
          
          <button className="hover:text-pink-500 text-7xl" 
            onClick={() => handleMood('sad')}value='sad'> 
            <ImSad />
          </button>
          
          <button className="hover:text-pink-500 text-7xl" 
            onClick={() => handleMood('angry')} value='angry'> 
            <FaRegFaceAngry />
          </button>
        </div>
      </article>
    </main>
  )

}


