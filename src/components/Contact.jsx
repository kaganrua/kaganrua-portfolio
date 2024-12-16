import React, { useState }  from 'react'



function Contact() {

    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const additionalProperties = isSubmitting ? 'opacity-50 cursor-not-allowed' : ''

    const handleSubmission = async(e) => {

        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    Accept: 'application/json',
                }
            })

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset(); // Optionally reset the form
            } else {
                alert('Failed to send the message. Please try again.');
            }



        } catch(e) {
            alert('An error occurred. Please try again.');

        } finally {
            setIsSubmitting(false)
        }

    }

    const inputClass = "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className="py-6">Submit the form below to contact me</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/akkkxpra" method="POST" className='flex flex-col w-full md:w-1/2' onSubmit={handleSubmission}>
            <input type='text' name="name" placeholder='Please enter your name' className={inputClass}/>
            <input type='text' name="email" placeholder='Enter your email' className={`${inputClass} my-4` }/>
            <textarea name="message" rows="10" className={inputClass} placeholder='Enter your message'/>
            <button className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ${additionalProperties}`} disabled={isSubmitting}> Send </button>

            
            </form>
            

           
        </div>
      </div>
    </div>
  )
}

export default Contact
