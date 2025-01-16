import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='bg-primaryblue text-white py-2 px-4 md:ml-8 hover:opacity-90 duration-500 capitalize'>
      {props.children}
      </button>
    </div>
  )
}
