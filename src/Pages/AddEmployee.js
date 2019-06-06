import React, { useState } from 'react'
import axios from 'axios'

// export default function AddEmployee() {
//   return (
//     <>
//       <h1>this is a thing</h1>
//     </>
//   )
// }

export default function AddEmployee() {
  const [employee, addEmployee] = useState('')
  const [dob, addDob] = useState('')
  const [email, addEmail] = useState('')
  const [address, addAddress] = useState('')
  const [zip, addZip] = useState('')

  const addEmployeeToList = e => {
    e.preventDefault()
    axios
      .post(
        'https://sdg-staff-directory-app.herokuapp.com/api/Plix/Employees',
        {
          firstName: employee,
          birthday: dob,
          email: email,
          address: address,
          zip: zip
        }
      )
      .then(resp => {
        console.log({ resp })
      })
  }
  return (
    <section className="add-employee-form">
      <form onSubmit={addEmployeeToList}>
        <input
          type="text"
          placeholder="Name"
          value={employee}
          onChange={e => {
            addEmployee(e.target.value)
          }}
        />
        <input
          type="date"
          placeholder="DOB"
          value={dob}
          onChange={e => {
            addDob(e.target.value)
          }}
        />
        <input
          type="e-mail"
          placeholder="E-Mail"
          value={email}
          onChange={e => {
            addEmail(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={e => {
            addAddress(e.target.value)
          }}
        />
        <input
          type="zip"
          placeholder="Zip"
          value={zip}
          onChange={e => {
            addZip(e.target.value)
          }}
        />
        <button>+</button>
      </form>
    </section>
  )
}
