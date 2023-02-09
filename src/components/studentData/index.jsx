import React from "react";

function studentData({ apiData }) {
  return(
  <div style={{height:'20px', width:'20px' }}>
  {apiData.map((user) => (
    {user}
  ))}
  </div>
  )
}

export default studentData;
