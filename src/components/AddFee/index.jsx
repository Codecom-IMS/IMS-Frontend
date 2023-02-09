import React from 'react'
import'./addfee.css'
function AddFeeDiv({children}) {
  return (
    <div className="AddFeeContainer" >
      <div className="AddFeeComponents" >
        {children}
      </div>
    </div>
  )
}

export default AddFeeDiv