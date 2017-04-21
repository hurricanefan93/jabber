import React from 'react'

const Entry = ({ term, defintion }) => (
  <div>
    <h2>{term}</h2>
    <div className='defintion'>
      {defintion}
    </div>
  </div>
)

export default Entry
