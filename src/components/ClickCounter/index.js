import {Component} from 'react'
import './index.css'

// Write your code here
class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state is :${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span style={{color: 'red'}}> {count}</span> times
        </h1>
        <p className="count">Click the button to increase the count!</p>

        <button className="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
