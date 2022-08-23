import {useState, useEffect} from 'react'; 
import style from './AddTasks.module.css'; 

const AddTasks = ({tasks, setTasks, update, setUpdate, taskUpdate }) => {
    const [task, setTask] = useState(''); 
    const [validation, setValidation] = useState(false); 

    useEffect(() => {
        if(Object.keys(taskUpdate).length > 0){

            setTask(taskUpdate.name);
        }
    }, [taskUpdate]);

    const hadleSubmit = (e) => {
        e.preventDefault();  

        if(!(task != '')){
            setValidation(true);
            return; 
        } 

        if(update){

            const newTask = {
                id: taskUpdate.id,
                name: task
            }

            const newTasks = tasks.filter(t => t.id !== taskUpdate.id); 
            setTasks([...newTasks, newTask]);
            setTask('');
            setUpdate(false);

            return;  
        }

        setValidation(false);

        const objectTask = {
            id: generateId(),
            name: task
        }

        setTasks([...tasks, objectTask]);
        setTask(''); 
    }

    const generateId = () => {
        const number = Math.random().toString().substring(2, 12);
        const date = Date.now().toString().substring(0, 5);

        return number + date; 
    }

    return(
        <form onSubmit={hadleSubmit} className={style.AddTasksContainer}>
            
            {validation && <p className={style.AddTasksError + " fontUbuntu"}>Campo vacio! </p>}
            <h2 className={style.AddTasksTitle + " fontUbuntu"}> Add a new task </h2>
            <input onChange={e => setTask(e.target.value)} className={style.AddTasksInput + " fontUbuntu"} placeholder="Add your task" type="text" value={task}/>
            <input className={style.AddTasksButton + " fontUbuntu"} type="submit" value={update ? 'update task' : 'add task'} />
        </form>
    ); 
}
export default AddTasks; 