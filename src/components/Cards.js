import React from 'react'

const Cards = (prop) => {
  return (
    <div className='card'>
        <h2>Name: {prop.results.name.first}</h2>
        <img src={prop.results.picture.large} alt={prop.results.name.first} />
        <p>Genre: {prop.results.gender}</p>
        <p>Age: {prop.results.dob.age}</p>
        <p>Adress: {prop.results.location.street.name}</p>
        <p>City: {prop.results.location.city}</p>
        <p>State: {prop.results.location.state}</p>
        <p>Country: {prop.results.location.postcode}</p>
        <p>Email: {prop.results.email}</p>
        <p>Phone: {prop.results.phone}</p>
        <p>Cell: {prop.results.cell}</p>
    </div>
  )
}

export default Cards