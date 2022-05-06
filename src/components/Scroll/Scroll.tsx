import React from 'react';

const Scroll = (props: any) => {
  console.log(props)
  return (
    <div style={{ overflowY: 'scroll', height: '700px' }}>
      {props.children}
    </div>
  )

}

export default Scroll