import style from './Tasks.module.css'; 
import { FaPlusCircle } from "react-icons/fa";
import CardTask from '.././CardTask/CardTask.jsx';

const Tasks = ({tasks, setTasks, setUpdate, setTaskUpdate}) => {

    const deleteElement = (id) =>{
        const newTasks = tasks.filter(task => task.id !== id);     
        setTasks(newTasks); 
    }

    return (
        <div className={style.TasksContainer}>
            {tasks.length > 0 ? 
                <>
                    {tasks.map(task => {
                        return <CardTask 
                                    key={task.id} 
                                    task={task} 
                                    deleteElement={deleteElement} 
                                    setUpdate={setUpdate} 
                                    setTaskUpdate={setTaskUpdate}
                                />
                    })}
                </>
                :
                <h1 className={style.TasksWithOut + " fontUbuntu"}> Agrega nuevas tareas <span className='center-elements'> <FaPlusCircle /> </span> </h1>
            }
            
            

        </div>
    ); 
}

export default Tasks; 