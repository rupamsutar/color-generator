import React from 'react'

const SingleColor = ({color, index}) => {
    const {hex, weight} = color;
    console.log(hex)
  return (
    <article className="color" style={{backgroundColor:`#${color}`}} ></article>
  )
}

export default SingleColor