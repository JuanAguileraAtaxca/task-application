import style from './Tasks.module.css'; 
import { FaEdit, FaTimes } from "react-icons/fa";

const Tasks = () => {
    return (
        <div className={style.TasksContainer}>

            <div className={style.Task}>
                <p className={style.TasksTitle + " fontUbuntu"}> Tarea </p>
                <div className={style.TasksButtons}>
                    <button className={style.TasksButton + " center-elements"}> <FaTimes /> </button>
                    <button className={style.TasksButton + " center-elements"}> <FaEdit /> </button>
                </div>
            </div>

            <div className={style.Task}>
                <p className={style.TasksTitle + " fontUbuntu"}> Tarea </p>
                <div className={style.TasksButtons}>
                    <button className={style.TasksButton + " center-elements"}> <FaTimes /> </button>
                    <button className={style.TasksButton + " center-elements"}> <FaEdit /> </button>
                </div>
            </div>

            <div className={style.Task}>
                <p className={style.TasksTitle + " fontUbuntu"}> Tarea </p>
                <div className={style.TasksButtons}>
                    <button className={style.TasksButton + " center-elements"}> <FaTimes /> </button>
                    <button className={style.TasksButton + " center-elements"}> <FaEdit /> </button>
                </div>
            </div>
        </div>
    ); 
}

export default Tasks; 