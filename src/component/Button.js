import React from 'react'

export default function Button(props) {
  return (
    <div>
    <a href={props.link} id={props.id}><button className='buttons'><p>{props.dname}</p></button></a> 
    </div>
  )
}
