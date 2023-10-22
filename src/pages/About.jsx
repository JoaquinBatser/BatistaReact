import React from 'react'
import { Toaster, toast } from 'sonner'
const About = () => {
  return (
    <div className='pt-20'>
    <Toaster />
    <button onClick={() => toast('My first toast')}>
      Give me a toast
    </button>
  </div>
  )
}

export default About