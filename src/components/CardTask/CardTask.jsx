import { FaEdit, FaTimes } from "react-icons/fa";
import style from './CardTask.module.css'; 


const CardTask = ({task, deleteElement, setUpdate, setTaskUpdate }) => {

    const updating = (object) =>{
        setUpdate(true);
        setTaskUpdate(object);
    }

    return (
        <div className={style.Task}>
            <p className={style.TasksTitle + " fontUbuntu"}> {task.name} </p>
            <div className={style.TasksButtons}>
                <button onClick={() => deleteElement(task.id)} className={style.TasksButton + " center-elements"}> <FaTimes /> </button>
                <button onClick={() =>  updating(task)} className={style.TasksButton + " center-elements"}> <FaEdit /> </button>
            </div>
        </div>
    );  
}

export default CardTask; 