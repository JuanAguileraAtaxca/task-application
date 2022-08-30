import './App.css';
import Header from './components/Header/Header.jsx';
import AddTasks from './components/AddTasks/AddTasks.jsx'; 
import Tasks from './components/Tasks/Tasks.jsx'; 
import {useEffect, useState} from 'react'; 

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []); 
  const [update, setUpdate] = useState(false);
  const [taskUpdate, setTaskUpdate] = useState({}); 

  /*
  useEffect(() => {
    const tasksLS = JSON.parse(localStorage.getItem('tasks')) ?? []; 
    setTasks(tasksLS);
    console.log(tasksLS); 
  }, []); */ 

  useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <div className='AppContent center'>
        <AddTasks 
          tasks={tasks} 
          setTasks={setTasks} 
          update={update} 
          setUpdate={setUpdate}
          taskUpdate={taskUpdate}
        />

        <Tasks 
          tasks={tasks} 
          setTasks={setTasks} 
          setUpdate={setUpdate} 
          update={update} 
          setTaskUpdate={setTaskUpdate}
        />

      </div>
    </>
  )
}

export default App; 
