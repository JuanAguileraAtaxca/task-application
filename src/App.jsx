import './App.css';
import Header from './components/Header/Header.jsx';
import AddTasks from './components/AddTasks/AddTasks.jsx'; 
import Tasks from './components/Tasks/Tasks.jsx'; 
import {useState} from 'react'; 

function App() {
  const [tasks, setTasks] = useState([]); 
  return (
    <>
      <Header />
      <div className='AppContent center'>
        <AddTasks tasks={tasks} setTasks={setTasks}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App
