import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Button.css'
const Button = ({ icon , onClickFunc, id , personInfo }) => {
  
  return (
    <button onClick={() => onClickFunc(id , personInfo) } >  {icon} </button>
  )
}
Button.propTypes = {
  onClickFunc : PropTypes.func
}
export default Button