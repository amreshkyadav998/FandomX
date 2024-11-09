import React from 'react'
import Accordian from './Accordian';
import './Question.css'
import data from './AccordianData.js';

const Question = () => {
  return (
    <div className='questions-container'>
      {/* <h1 className=' flex justify-center gap-3'> <span>Frequent </span> Asked Questions</h1> */}
      <h1> <span>Frequent </span> Asked Questions</h1>
      <div className="accordians-container">
      {data.map((item) => {
        return <Accordian item={item}/>
      })}
      </div>
    </div>
  )
}

export default Question