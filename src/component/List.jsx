import React from 'react'
import './List.css'

const list = ({task,index,taskRemover}) => {
  return (
    <div className='list'>
        <h3>{task}</h3>
        <i className="fa fa-trash" aria-hidden="true" onClick={()=>taskRemover(index)}></i>    </div>
  )
}

export default list