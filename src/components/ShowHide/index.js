// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onClick1 = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClick = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="card">
            <div>
              <button className="button" type="button" onClick={this.onClick1}>
                Show/Hide FirstName
              </button>
              <div>{showFirstName && <p className="name">Joe</p>}</div>
            </div>
            <div>
              <button className="button" type="button" onClick={this.onClick}>
                Show/Hide LastName
              </button>
              <div>{showLastName && <p className="name">Jonas</p>}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
