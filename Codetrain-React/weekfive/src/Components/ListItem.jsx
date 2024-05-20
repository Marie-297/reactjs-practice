import React from 'react'

function ListItem(props) {
  return (
    <div>
      <h2>{props.details.name}</h2>
      <h4>{props.details.email}</h4>
    </div>
  )
}

export default ListItem
