import React, { useState } from 'react';
import AddTask from './components/addTask/AddTask';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import Teams from './components/teams/Teams';
import './App.css'

const data = [
  {
    taskName: 'Task Two',
    category: 'Front-End',
    teamMember: 'Mamun',
    deadline: '2023-04-06',
    status: 'Pending',
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb9d'
  },
  {
    taskName: 'Task One1',
    category: 'Unit Test',
    teamMember: 'Rakib',
    deadline: '2023-04-06',
    status: 'Complete',
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb8d'
  },
  {
    taskName: 'Task manager',
    category: 'Front-End',
    teamMember: 'Mamun',
    deadline: '2023-04-06',
    status: 'Pending',
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5d'
  },
  {
    taskName: 'Task manager2',
    category: 'Unit Test',
    teamMember: 'Mamun',
    deadline: '2023-04-06',
    status: 'Pending',
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5c'
  }
]
const memberData = ["BIPLOB"]



const App = () => {

  const [search, setSearch] = useState("")
  const [members, setMembers] = useState([...memberData])
  const [tasks, setTasks] = useState([...data])
  const [editedData, setEditedData] = useState("")

  const handleSetMembers = (data) => {
    // setMembers([members, ...data])
    let oldData = [...members]
    oldData.push(data)
    setMembers(oldData)
  }
  const handleSetTasks = (data, type) => {
    if (type === "add") {
      let oldData = [...tasks]
      oldData.push(data)
      setTasks(oldData)
    } else if (type === "update") {
      let oldData = [...tasks]
      let index = oldData.findIndex(item => item.id === data.id)
      oldData[index] = data
      setTasks(oldData)
    }
  }
  const editEnable = (data) => {
    setEditedData(data)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div>
      <Header handleSearchChange={handleSearchChange} />
      <main>

        <div className="sidebar">
          <AddTask editedData={editedData} members={members} handleSetTasks={handleSetTasks} />
          <Teams handleSetMembers={handleSetMembers} members={members} />
        </div>

        <Tasks members={members} search={search} editEnable={editEnable} tasks={tasks} />
      </main>
    </div>
  );
};

export default App;