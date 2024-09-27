import React from 'react'
import './UserCard.css'

function UserCard(props) {
  return (
    <div className="user-card">
      <img className="user-avatar" src={props.user.avatar} alt={props.user.first_name + " " + props.user.last_name} />
      <div className="user-info">
        <h2>{props.user.first_name} {props.user.last_name}</h2>
        <p>{props.user.email}</p>
      </div>
    </div>
  )
}

export default UserCard
