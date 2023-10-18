import React from 'react'

export default function form() {
  return (
    <div className='flex justify-center align-items-center h-screen w-screen'>
      <form className='flex flex-col w-3/5 justify-center gap-4 '>
        <label htmlFor="title" className='text-gray-400'>Title</label>
        <input type="text" className='border rounded-md focus:outline-none p-2' />


        <label htmlFor="body-content" className='text-gray-400'>Body Content</label>    
        <div className='border  rounded-md h-52 w-full'>
          <textarea className='w-full h-full border-gray-400 focus:outline-none rounded-md p-1' />
        </div>

        <button type='submit' className='bg-blue-600 text-white w-32 rounded-sm px-2 py-2'>Save New Post</button>
      </form>
    </div>
  )
}
