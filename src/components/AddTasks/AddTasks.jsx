import style from './AddTasks.module.css'; 
const AddTasks = () => {

    return(
        <form className={style.AddTasksContainer}>
            <h2 className={style.AddTasksTitle + " fontUbuntu"}> Add a new task </h2>
            <input className={style.AddTasksInput + " fontUbuntu"} placeholder="Add your task" type="text"/>
            <input className={style.AddTasksButton + " fontUbuntu"} type="submit" value="add tasks" />
        </form>
    ); 
}
export default AddTasks; 