import React, { useState } from 'react'
import axios from 'axios'

export default function Employee(props) {
  const [deletedEmployee, sendDeletedEmployee] = useState([])

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
      <section className="employee-list">
        <p>
          Name: {props.employee.firstName}
          <span>{props.employee.lastName}</span>
        </p>
        <p>Job Title: {props.employee.jobTitle}</p>
        <button>Select</button>
        <button onClick={removeEmployee}>Delete</button>
        {/* <Link to={`$/employee/${props.employee.id}}/> */}
      </section>
    </>
  )
}
