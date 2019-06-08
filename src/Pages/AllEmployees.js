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
      <ul>
        {employeeList.map(employee => {
          return (
            <li>
              <Employee key={employee.id} employee={employee} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
