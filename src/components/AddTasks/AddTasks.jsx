import {useState} from 'react'; 
import style from './AddTasks.module.css'; 

const AddTasks = ({tasks, setTasks}) => {
    const [task, setTask] = useState(''); 
    const [validation, setValidation] = useState(false); 

    const hadleSubmit = (e) => {
        e.preventDefault();  
        if(!(task != '')){
            setValidation(true);
            return; 
        } 

        setValidation(false);
        setTasks([...tasks, task]);
        setTask(''); 
    }

    return(
        <form onSubmit={hadleSubmit} className={style.AddTasksContainer}>
            
            {validation && <p className={style.AddTasksError + " fontUbuntu"}>Campo vacio! </p>}
            <h2 className={style.AddTasksTitle + " fontUbuntu"}> Add a new task </h2>
            <input onChange={e => setTask(e.target.value)} className={style.AddTasksInput + " fontUbuntu"} placeholder="Add your task" type="text" value={task}/>
            <input className={style.AddTasksButton + " fontUbuntu"} type="submit" value="add tasks" />
        </form>
    ); 
}
export default AddTasks; 