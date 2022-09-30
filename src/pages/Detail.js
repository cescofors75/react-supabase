import React   from "react"
import TaskCard from '../components/TaskCard'
import {useNavigate, useParams} from 'react-router-dom'
import {useTasks} from '../context/TaskContext'


function Detail () {
  const navigate = useNavigate();
  const detail= useParams();
  console.log (detail.id)
 
  const {tasks} = useTasks()
  // eslint-disable-next-line
  const task = tasks.find((t) => t.id == detail.id)
  console.log (tasks)
  console.log (task)
  if (task){
  return (
    
    <>
       <h1> Detail Page </h1>
       <p> Direct data </p>
       <h2> {task.name} </h2>
       <h3> {task.done ? "Done" : "Not done"} </h3>
       <p> {task.created_at} </p>
       <p> Card Style</p>
       <TaskCard key={task.id} task={task}  />
       <p></p>
        <button onClick={() =>  navigate(-1)}>Return</button>
    </>
  );} else {return <><div>No results</div>
  <button onClick={() =>  navigate(-1)}>Return</button></>
}}
export default Detail
  // <TaskCard key={task.id} task={task}  />