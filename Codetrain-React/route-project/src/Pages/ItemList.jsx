import React from 'react'
import { v4 as uuid } from 'uuid'
import{Link} from 'react-router-dom'

function ItemList() {
  const lists = [
    { name: 'Kids Klosset', id: uuid()},
    { name: 'Ladies Klosset', id: uuid()},
    { name: 'Mens Klosset', id: uuid()},
    { name: 'Footwear', id: uuid()},
    { name: 'Sanitaries', id: uuid()},
  ]
  return (
    <div className='listdiv'>
      {lists.map((list) => {
        return (
          <div className="listings" key={list.id}>
            <Link to={`/shop/${list.id}`}>
              <h1>{list.name}</h1>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList
