import React, { Component } from 'react'
import balloader  from './balloader.gif'
const  Spinner= () => {
 
    const spinnerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };  
    return (
      <div style={spinnerStyle}>
        <img src= {balloader} alt="loading" />
      </div>
    )
  
}

export default Spinner