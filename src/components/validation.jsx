import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';

const Validation = () => {
    const { error } = useSelector(state => state.auth)
    const errors =
    useCallback(()=> {
        return Object.keys(error).map((name)=> {
            const msg = error[name].join(', ')
            return `${name} ${msg}`
        })
    }, [error])
  return (
    error !== null &&
    errors().map((error) => (
      <div className="alert alert-danger" key={error} role="alert">
        {error}
      </div>
    ))
  );
}

export default Validation