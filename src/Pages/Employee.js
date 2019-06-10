import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Employee(props) {
  const [deletedEmployee, sendDeletedEmployee] = useState([])
  const [selectedEmployee, showSelectedEmployee] = useState([])

  const selectEmployee = () => {
    axios
      .put(
        `https://sdg-staff-directory-app.herokuapp.com/api/Plix/employees/${
          props.employee.id
        }`
      )
      .then(resp => {
        console.log({ resp })
        showSelectedEmployee(resp.data)
      })
  }

  const removeEmployee = () => {
    axios
      .delete(
        `https://sdg-staff-directory-app.herokuapp.com/api/Plix/Employees/${
          props.employee.id
        }`
      )
      .then(resp => {
        console.log({ resp })
        sendDeletedEmployee(resp.data)
      })
  }

  return (
    <>
      <h1>{props.selectedEmployee}</h1>
      <section className="employee-list">
        <p>
          <span className="input">Name: </span>
          {props.employee.firstName}
          <span>{props.employee.lastName}</span>
        </p>
        <p>
          <span className="input">Job Title: </span>
          {props.employee.jobTitle}
        </p>
        <Link to={`/employee/${props.employee.id}`}>
          <button onClick={selectEmployee}>Select</button>
        </Link>
        <button onClick={removeEmployee}>Delete</button>
        <hr />
      </section>
    </>
  )
}
