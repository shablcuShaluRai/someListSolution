import React from "react"


const SameListSolution = (props) => {

 const handleClick = (index) => {
    props.onClick(index)
  }

 const renderElement = (item, index) => {
    return <li key={`item_ ${index}`} onClick={() => handleClick(index)}>{item.text}</li>
  }

    return (
      <ul style={{ backgroundColor: 'red', cursor: "pointer"}}>
        {props.items.map((item, i) => renderElement(item, i))}
      </ul>
    )
  }



export default SameListSolution