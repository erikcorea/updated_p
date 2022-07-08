import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Hello! I'm Erik Correa, a NYC based software engineer.(willing to relocate) I am experienced in full stack development. My skills allow me to tackle complex programming problems presented on the job. My love for programming stems from my passion to know how things work, how to build them, and how to fix them. Contact me to get started working together!

            </p>
            <br />
        </div>
    </div>
  )
}

export default About