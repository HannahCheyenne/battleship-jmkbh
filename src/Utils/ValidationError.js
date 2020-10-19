import React from 'react';
import './validationerror.css'

export default function ValidationError(props) {
  if(props.message) {
    return (
      <label className="error">{props.message}</label>
    );
  }

  return <></>
}