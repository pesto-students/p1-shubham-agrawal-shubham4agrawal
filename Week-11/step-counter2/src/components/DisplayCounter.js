import React from 'react'
import {useSelector} from 'react-redux';

function DisplayCounter() {
const steps = useSelector((state) => state.stepOperations)

  return (
    <div>
        <h2>You have walked {steps} steps</h2>
    </div>
  )
}

export default DisplayCounter