import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOWFACTS } from '../redux/facts';
import { ShowFacts } from './ShowFacts';

export const ShowTask1 = () => {
  const facts = useSelector((state) => state.showfacts.facts);
  const dispatch = useDispatch();
  function getNumber() {
    const quantity = Number(document.getElementById('num').value) - 1;
    dispatch(SHOWFACTS(quantity));
  }
  function reset() {
    document.getElementById('num').value = '';
    dispatch(SHOWFACTS(-1));
  }
  return (
    <div className='task1'>
      <h3 className='title'>Задача №1. Страница с фактами о Star Wars</h3>
      <label className='task1_lab'> Выберите количетво фактов: 
        <input type='number' max='5' min='0' step='1' id='num' onChange={getNumber}/>
        <input type='reset' value='Очистить' onClick={reset}/>
      </label>
      <ShowFacts data={facts}/>
    </div>
  )
}

