import React from 'react'

const alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert=${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  )
}

export default alert

// could put an 'x' button in this to close it as well as timeout
