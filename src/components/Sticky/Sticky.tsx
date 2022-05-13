import React from 'react';

const Sticky = (props: { children: React.ReactNode }) => {
  return (
    <div style={{
      position: 'sticky',
      top: '10px',
      zIndex: 1
    }}>
      {props.children}
    </div>
  )

}

export default Sticky