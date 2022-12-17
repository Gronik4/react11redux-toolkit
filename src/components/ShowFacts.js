import React from 'react';

export const ShowFacts = ({data}) => {
  if(!data) return;
  return (
    <div className='task1_facts show_res'>
      {data.map((el, index) => {return(<p key={index} className='task1_fact'>{data.indexOf(el) + 1}. {el}</p>)})}
    </div>
  )
}

