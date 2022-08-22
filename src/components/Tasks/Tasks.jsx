import style from './Tasks.module.css'; 
import { FaEdit, FaTimes, FaPlusCircle } from "react-icons/fa";

const Tasks = ({tasks}) => {
    return (
        <div className={style.TasksContainer}>
            {tasks.length > 0 ? 
                <>
                    {tasks.map((task) => {
                        return (
                            <div className={style.Task}>
                                <p className={style.TasksTitle + " fontUbuntu"}> {task} </p>
                                <div className={style.TasksButtons}>
                                    <button className={style.TasksButton + " center-elements"}> <FaTimes /> </button>
                                    <button className={style.TasksButton + " center-elements"}> <FaEdit /> </button>
                                </div>
                            </div>
                        );   
                    })}
                </>
                
                :

                <h1 className={style.TasksWithOut + " fontUbuntu"}> Agrega nuevas tareas <span className='center-elements'> <FaPlusCircle /> </span> </h1>
            }
            
            

        </div>
    ); 
}

export default Tasks; 