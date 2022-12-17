import React from 'react'

export const ShowFotos = ({data}) => {
  if(!data) return;
  return (
    <div className='task2_photos show_res'>
      {data.map((el, index) => {return(<img key={index} className='task2_photo' src={el} alt={`number${data.indexOf(el)}`}/>)})}
    </div>
  )
}
