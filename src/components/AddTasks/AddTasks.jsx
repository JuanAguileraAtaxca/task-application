import style from './AddTasks.module.css'; 
import Input from '.././Input/Input.jsx'; 
import Button from '.././Button/Button.jsx'; 

const AddTasks = () => {

    return(
        <form className={style.AddTasksContainer + " center"}>
            <h2 className={style.AddTasksTitle}> Add a new task </h2>
            <div>
                <Input placeHolder="Insert your task" typeInput="text"/>
            </div>
            <Button value="Add task"/>
        </form>
    ); 
}
export default AddTasks; 