import React, { useEffect, useRef, useState } from 'react'
import { contactMe } from '../../apis/firebase'
import emailjs from '@emailjs/browser';

export default function Input() {
  const form = useRef();
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsUploading(true)

    const data = new FormData(e.currentTarget)
    const email = data.get('user_email')
    const name = data.get('user_name')
    const message = data.get('message')

    if(!email || !message) {
      setError('Enter everything please!')
      setIsUploading(false)
      return 
    } 
    const request = {
      email,
      name,
      message
    }
    contactMe(request)
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          setIsUploading(false)
          setSuccess('Thanks for contacting me')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          setIsUploading(false)
      });
  }

  useEffect(() => {
    if(!error) return
    setTimeout(() => {
      setSuccess('')
    }, 3000)
  }, [error])

  return (
    <section className='w-full text-center mt-6'>
        {success && <p className='my-2'>✅{success}</p>}
        <form className='flex flex-col justify-center items-center py-2' ref={form} onSubmit={sendEmail}>
            <input className='border-2 w-4/12 p-2 mb-2 rounded-xl hover:border-blue-500' name='user_email' type='email' placeholder='Email' autoComplete='off' autoFocus required/>
            <input className='border-2 w-4/12 p-2 mb-2 rounded-xl hover:border-blue-500' name='user_name' type='text' placeholder='Name' autoComplete='off' />
            <input className='border-2 w-4/12 p-2 mb-4 rounded-xl hover:border-blue-500' name='message' type='text' placeholder='Message' autoComplete='off' required />
            <button 
              className='text-xl font-bold bg-blue-500 text-white rounded-full w-4/12 py-1'
              disable={isUploading.toString()}
            >
                {isUploading? 'Submitting now..' : 'Submit'}
              </button>
        </form>
    </section>
  )
}
