import React, { useEffect } from 'react';

const Alert = ({ message, type, setAlert }) => {

  useEffect(() => {
    setTimeout(() => {
      setAlert({ status:false, type:"", message:"" })
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return <div className={`alert ${type}`}>{message}</div>;
}

export default Alert;