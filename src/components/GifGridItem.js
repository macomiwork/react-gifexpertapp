import React from 'react'

export const GifGridItem = ( { id, url, title} ) => {

  return (
    <div className='animate__animated animate__heartBeat card'>
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
}
