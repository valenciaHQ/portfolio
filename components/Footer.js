import React from 'react'
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Footer() {
  return (
    <section className="flex justify-center align-middle flex-col text-center mt-16 text-gray-600 dark:text-white">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('ValenciaHQ')
            .pauseFor(2500)
            .start();
        }}
      />
      <a className="text-blue-500 hover:underline" href={`files/alejandrovalencia.pdf`} download>Download my resume</a>
      <a
        className="flex items-center justify-center  m-1 p-1 sm:m-2 sm:p-2 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:hover:bg-gray-400"
        href={'https://github.com/valenciaHQ/portfolio'}
      >
        <FaGithub className='text-xl' />
        <span className="sr-only">Github</span>
        <p style={{ margin: "0.5rem" }} className='text-lg'>Project repository</p>
      </a>
    </section>
  )
}

export default Footer