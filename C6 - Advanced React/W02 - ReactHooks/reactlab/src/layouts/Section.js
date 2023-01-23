import React from 'react'

const Section = ({title, children, color}) => {
  return (
    <div
      style={{
        padding: "40px",
        border: `3px solid ${color}`,
        margin: "15px",
      }}
    >
    <h1 style={{ padding: "0px" }}>{title} Example</h1>
    <hr style={{ border: `1px solid ${color}` }} />
    {children}
    </div>
  )
}

export default Section
