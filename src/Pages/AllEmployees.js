import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Employee from './Employee'

export default function AllEmployees() {
  const [employeeList, getEmployeeList] = useState([])

  const fetchEmployees = () => {
    axios
      .get('https://sdg-staff-directory-app.herokuapp.com/api/Plix/Employees')
      .then(resp => {
        console.log({ resp })
        getEmployeeList(resp.data)
      })
  }
  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <h1 className="header">List of All Employee's at Plix</h1>
      <section>
        {employeeList.map(employee => {
          return (
            <section>
              <Employee key={employee.id} employee={employee} />
            </section>
          )
        })}
      </section>
    </>
  )
}
