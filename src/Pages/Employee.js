import React, { useState, useEffect } from 'react'

export default function Employee(props) {
  return (
    <>
      <p>{props.employee.firstName}</p>
      <p>{props.employee.lastName}</p>
    </>
  )
}
