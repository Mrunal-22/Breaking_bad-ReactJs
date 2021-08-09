import React from 'react'

const CharacterItem = ({ item }) => {
    console.log(item)
    return( 
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Portrayed by:</strong> {item.portrayed}
            </li>
            <li>
              <strong>D.O.B:</strong> {item.birthday}
             </li>
             <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>         
            <li>
              <strong>Status:</strong> {item.status}
            </li>
             <li>
              <strong>Nickname:</strong> {item.nickname}
             </li>
            <li>
              <strong>Quote:</strong> {item.quote}
            </li>
                     
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
