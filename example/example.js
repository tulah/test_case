import Search from '../lib/Search' /* 'react-search' */
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {



  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }



  render () {
    let items = [
      { id: 0, value: 'Lindah', 'position': 'Human resource'},
      { id: 1, value: 'James', 'position': 'Managment' },
      { id: 2, value: 'Petro', 'position': 'Coordinator' },
      { id: 3, value: 'stanley' , 'position': 'Grounds'},
      { id: 5, value: 'Julian', 'position': 'Hardware' },
      { id: 6, value: 'Fionah', 'position': 'Chef' },
      { id: 7, value: 'Wembley' , 'position': 'clearck'},
      { id: 8, value: 'Rabecah', 'position': 'CEO' },
      { id: 9, value: 'Jude' , 'position': 'Technitian'},
      { id: 10, value: 'Imaculate' , 'position': 'Well fare'},
    ]

    return (
      <div>
        <Search items={items} />

        <Search items={items}
                placeholder='Click here to search single worker...'
                maxSelected={2}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />

      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root'))
