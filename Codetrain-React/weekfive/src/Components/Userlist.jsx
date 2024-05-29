import React from 'react'
import ListItem from './ListItem'

function Userlist(props) {
  return (
    <div>
      <h1>Component List</h1>
      {props.userlist.map((user) => {
        return (
          <ListItem key={user.id} details={user} deleteTargetUser={props.deleteUser} editTargetUser={props.editUser}/>
        )
      })}
     
    </div>
  )
}

export default Userlist
