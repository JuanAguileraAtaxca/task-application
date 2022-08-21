import './App.css';
import Header from './components/Header/Header.jsx';
import AddTasks from './components/AddTasks/AddTasks.jsx'; 
import Tasks from './components/Tasks/Tasks.jsx'; 

function App() {

   
  return (
    <>
      <Header />
      <div className='AppContent center'>
        <AddTasks />
        <Tasks />
      </div>
    </>
  )
}

export default App
