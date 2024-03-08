import React from 'react'
import './App.css'
import List from './component/List.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])
useEffect(()=>{
  console.log("refresh");
},[taskList])

const taskHandler = ()=>{
    setTaskList([...taskList,task])
    console.log(taskList);
}

const taskRemover = (index)=>{
  let allTask = taskList;
  allTask.splice(index,1)
  setTaskList(allTask)
  console.log(taskList);
}

  return (
    <div className='main-container'>
        <h1>TODO</h1>
      <div className="inner-container">
        <div className="input">
        <input type="text" placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)} value={task}/>
       
        <button onClick={()=>{
          taskHandler(task)
          setTask("")
        }}>Add</button>  
        </div>
        
        {
          taskList.map((item,i)=>(
            <List task={item} key={i} index={i} taskRemover={taskRemover}/>
          ))
        }
      </div>
    </div>
  )
}

export default App