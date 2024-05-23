import React from 'react'

const FillArea = ({bgColor="blue", name="Nav BAr", width=100, height=100}) => {

    const headerStyle = {
        backgroundColor: bgColor,
        padding: '5px',
        width: width ,
        height: height ,
        alignText: "center",
        marginTop: 0
      };
      

  return (

    <div>
      <div style={headerStyle} >{name}</div>   
     
        


    </div>
  )
}

export default FillArea