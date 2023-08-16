
export function MakeListToDoS({nameFilter, toDoS, completeTask, deleteTask}){
    const typeFilter = {
        'All': toDoS,
        'Completed': toDoS.filter(todo=> todo.completed === true),
        'Pending': toDoS.filter(todo=> todo.completed === false)

    }
    const  showToDoS = typeFilter[nameFilter]
    return(
        <>
            <ul className="task-box">
                {showToDoS.map((task)=>{
                    return (
                    
                        <>
                        <li className="task" key={task.id}>
                            <label htmlFor={task.title}>
                                <p>
                                    {task.title}
                                    <input type="checkbox" checked={task.completed} onChange={(e) => completeTask(task.id, e.target.checked)}/>
                                </p>
                            </label>
                            
                            <button onClick={()=> deleteTask(task.id)} className="clear-btn">Delete</button>
                        </li>
                        </>
    
                    )
                
                })}
            
            </ul>
        </>
    )
}