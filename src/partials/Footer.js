import React from 'react'
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Footer() {
  return (
    <div className="flex justify-center align-middle flex-col text-center mt-16">
      <p className="text-sm-gray-600">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('ValenciaHQ')
              .pauseFor(2500)
              .start();
          }}
        />
      </p>
      <a className="text-blue-500 hover:underline" href="https://fastupload.io/en/feyBUUFfWmA5LpE/file" target="_blank" rel="noreferrer">Download my resume</a>
      <a
        className="flex items-center justify-center  m-1 p-1 sm:m-2 sm:p-2 text-gray-100 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        href={'https://github.com/valenciaHQ/resume'}
      >
        <FaGithub className='text-xl' />
        <p style={{ margin: "0.5rem" }} className='text-lg'>Project repo</p>
      </a>
    </div>
  )
}

export default Footer