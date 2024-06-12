import React from 'react'
import { v4 as uuid } from 'uuid'
import{Link} from 'react-router-dom'
import kids from '../Images/kids.jpg'
import ladies from '../Images/ladies.webp'
import men from '../Images/men.webp'
import foot from '../Images/footwear.jpg'
import access from '../Images/accessories.jpg'

function ItemList() {
  const lists = [
    { name: 'Kids Klosset', img: kids, id: uuid()},
    { name: 'Ladies Klosset', img:ladies, id: uuid()},
    { name: 'Mens Klosset', img:men, id: uuid()},
    { name: 'Footwear', img:foot, id: uuid()},
    { name: 'Accessories', img:access, id: uuid()},
  ]
  return (
    <div className='listdiv'>
      {lists.map((list) => {
        const backgroundImageStyle = {
          backgroundImage: `url(${list.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        };
   
        return (
          <div className="listings" key={list.id} style={backgroundImageStyle}>
            <Link to={`/shop/${list.name}`}>
              <h1>{list.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default ItemList
