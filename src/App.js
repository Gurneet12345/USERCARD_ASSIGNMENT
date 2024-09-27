import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/assignmentData.json')
      .then((response) => {
        setUsers(response.data[0].data)
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="app">
      <h1>User Card Assignment</h1>
      <p>App contains the information regarding the user, and the user's email id given in the assignmentData.json</p>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
