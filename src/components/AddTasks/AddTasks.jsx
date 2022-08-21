import style from './AddTasks.module.css'; 

const AddTasks = () => {

    return(
        <form className={style.AddTasksContainer}>
            {/* this token is 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 */ }
            <h2 className={style.AddTasksTitle + " fontUbuntu"}> Add a new task </h2>
            <input className={style.AddTasksInput + " fontUbuntu"} placeholder="Add your task" type="text"/>
            <input className={style.AddTasksButton + " fontUbuntu"} type="submit" value="add tasks" />
        </form>
    ); 
}
export default AddTasks; 