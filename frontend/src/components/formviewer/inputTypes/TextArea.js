import React from 'react'
import CustomTextEditor from '../CustomEditor'

const TextArea = ({ answer, handleAnswerChange,index }) => {
  return (
    <textarea placeholder='eg : some text' value={answer} onChange={(e) => handleAnswerChange(index, e.target.value)}   className='w-[80%] p-2 border-t-0 border-x-0  border-b'/>
  )
}

export default TextArea