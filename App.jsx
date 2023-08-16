import { useEffect, useState } from 'react'
import { MakeListToDoS } from './listToDoS'
import { MakeFormToDo } from './formToDo'
import { MakeControls } from './controls'

function App() {
  const [toDoS, setToDoS] = useState(()=>{
    const items = localStorage.getItem('ITEM')
    if(items === null) return []
    return JSON.parse(items)
  })
  useEffect(()=>{
    localStorage.setItem('ITEM', JSON.stringify(toDoS))
  },[toDoS]
  )
  const [taskFilter, setFilter] = useState('All')
  function createNewItem(newItem){
    setToDoS([...toDoS, {id: crypto.randomUUID(), title: newItem, completed: false}])
  };
  function deleteTask(id){
    setToDoS((toDoS)=>{
      return toDoS.filter(todo => todo.id !== id)  
    })
    
  }
  function completeTask(id, completed){
    setToDoS((toDoS)=>{
      return toDoS.map((todo)=>{
        
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      }
      )
    })

  }
  function deleteAllToDoS(){
    setToDoS([])
  }
  function changeTaskFilter(newFilter){
    setFilter(newFilter)
  }
 
  return (
    <>
      <MakeFormToDo createNewItem={createNewItem}/>      
      <MakeControls newTaskFilterName={changeTaskFilter} deleteAllToDoS={deleteAllToDoS}/>
      <MakeListToDoS toDoS={toDoS} nameFilter={taskFilter} completeTask={completeTask} deleteTask={deleteTask} />
      
    </>
  )
}

export default App
