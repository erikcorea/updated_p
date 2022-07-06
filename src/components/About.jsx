import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Dolorum voluptate perferendis quo, qui ipsa error
                dignissimos, ipsum soluta reprehenderit fugiat placeat 
                neque officia pariatur distinctio iste. Beatae excepturi 
                impedit vitae.
            </p>
            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae laudantium praesentium rerum corrupti suscipit! 
                Iste tenetur voluptatibus corrupti obcaecati ipsum 
                incidunt blanditiis harum quaerat. Velit, quaerat. 
                Corrupti velit numquam sit.
            </p>
        </div>
    </div>
  )
}

export default About