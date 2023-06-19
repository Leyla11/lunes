import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

const Principal = () => {
    const [user, setUser]= useState([])
    const traerResults = async() => {
        try {
            let dataxios=await axios.get ("https://randomuser.me/api/")
            let data = dataxios.data
            console.log(data.results)
            setUser(data.results)
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        traerResults()
    }, [])

  return (
    <div className='container'>
        {user.map(oneuser=>(
            <Cards key={oneuser.name.first} results={oneuser} />
        ))
        }
    </div>
  )
}

export default Principal