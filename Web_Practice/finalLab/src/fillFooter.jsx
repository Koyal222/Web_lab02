import React from 'react'

const FillFooter = ({bgColor="blue", name, width=100, height=100}) => {
    const footerStyle = {
        backgroundColor: bgColor,
        padding: '5px',
        width: width ,
        height: height ,
        alignText: "center",
        marginBottom: 0
      };

  return (
    <div style={footerStyle} >{name}</div>    
  )
}

export default FillFooter