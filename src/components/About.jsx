import React from 'react'

function About() {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center pt-20 pb-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
            I’m Kagan Rua, a Software Developer who loves combining creativity and technology to build impactful solutions. Over the years, I’ve gained hands-on experience developing scalable web applications and full-stack solutions with Python, React, Node.js, and cloud platforms. I’ve worked on projects ranging from automation tools to AI-powered platforms, always focusing on delivering efficient, user-centered results.            </p>

            <br />
            <p className='text-xl'>
            Outside of coding, I find balance and inspiration in unexpected places. I’m an avid salsa and bachata dancer, where every step fuels my creativity, and an improv enthusiast, sharpening my quick thinking and teamwork. These passions not only bring joy but also shape my approach to problem-solving and collaboration.</p>
            <br />
            <p className='text-xl'>
            Whether I’m debugging a tough issue or learning a new dance move, I’m driven by curiosity and the desire to grow. Let’s build something extraordinary together!
            </p>
        </div>
    </div>
  )
}

export default About
