import React, { Component} from "react"


class SameListSolution extends Component {

  state = {
    items: []
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.items !== this.props.items
  }

 static getDerivedStateFromProps(nextProps, state) {
  if(nextProps.item !== state.items) {
    return { items: nextProps.items}
  } else {
    return null
  }
 }

  handleClick (index) {
    this.props.onClick(index)
  }

  renderElement (item, index) {
    return <li key={`item_ ${index}`} onClick={() => this.handleClick(index)}>{item.text}</li>
  }

  render () {
    return (
      <ul style={{ backgroundColor: 'red', cursor: "pointer"}}>
        {this.state.items.map((item, i) => this.renderElement(item, i))}
      </ul>
    )
  }
}


export default SameListSolution