import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className="container mt-5 mx-auto px-2 border border-[#24b8fd] rounded-2xl">
      <div className="h-[560px] w-full flex items-center">
        {/* Left side (text) */}
        <div className="w-1/2 px-4 ml-20 text-white">
          <h1 className="text-5xl font-normal mb-4">Hi There,</h1>
          <h2 className="text-4xl font-normal mb-4">I'm Kavindu Jayawardhana</h2>
          <h4 className="text-2xl mb-6">
            I'm into{' '}
            <span className='text-[#24b8fd]'>
              <Typewriter
                words={['Web Designing', 'UI/UX Designing', 'Web Development']}
                loop={true}
                cursor
                cursorStyle=" "
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}/>
            </span>
            </h4>
          <button className="bg-[#24b8fd] text-white px-4 py-2 rounded-md">About Me</button>
        </div>
        {/* Right side (image) */}
        <div className="w-1/2 flex justify-center items-center">
          <img src='' alt="Profile Image" className="rounded-lg max-w-[80%]" />
        </div>
      </div>
    </div>

  )
}

export default Home