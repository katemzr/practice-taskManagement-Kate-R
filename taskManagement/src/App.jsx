import { Routes } from 'react-router'
import './App.css'


const tasks = [
  {id:1,
  title:"Task 1",
  description:"This is Task 1."
  },
  {id:2,
    title:"Task 2",
    description:"This is Task 2."
  },
  {id:3,
    title:"Task 3",
    description:"This is Task 3."
  }
]

function App() {

  return (
    <Routes>
      <Route path= '/'
      element={<TaskLIst taskData={tasks}/>}/>

      <Route path='/task/:taskId'
      element={<TaskDetail taskData={tasks}/>}/>
    </Routes>
  )
}

export default App
