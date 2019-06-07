import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { link } from 'react-router-dom'

export default function AllEmployees() {
  const [info, getInfo] = useState({})

  const fetchEmployees = () => {
    axios
      .get('https://sdg-staff-directory-app.herokuapp.com/api/Plix/Employees')
      .then(resp => {
        console.log({ resp })
        getInfo({
          info: resp.data
        })
      })
  }
  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <h2>
        {info.map((info, index) => {
          return { info }
        })}
      </h2>
    </>
  )
}
