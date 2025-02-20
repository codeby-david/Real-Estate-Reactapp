import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a381c37a-2581-475a-933c-47ca76b48f75");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
     toast.error(data.message);
      setResult("");
      
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center text-gray-800'>
        Contact
        <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> With Us</span>
      </h1>
      <p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg'>
        Real Stories from Those Who Found Home with Us
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
         
          <input className='w-full border-gray-300 rounded py-3 px-4 mt-2' type="text"name='Name' placeholder='Enter Your Name' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
         
          <input className='w-full border-gray-300 rounded py-3 px-4 mt-2' type="email"name='Email' placeholder='Enter Your Email' required/>
        </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message"placeholder='Message' required ></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
          {result ? result : "Send Message"}
        </button>
      </form>
      
    </div>
  )
}

export default Contact
