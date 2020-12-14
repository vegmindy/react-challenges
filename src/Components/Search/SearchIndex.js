import React from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: ''
    }
  }

  searchFunction(e) {
    this.setState({
      searchTerm: (e)
    })
  }

  render() {
    return (
      <div>
        <Input type='text' placeholder='Search Here' onChange={(e)=>this.searchFunction(e.target.value)} />
        <h3>Results:</h3>
        {console.log(this.state.things)}
        {this.state.things
        .filter(thing => {
            if (thing.includes(this.state.searchTerm)){
              return true
            } else {
              return null
            }
        })
        .map((thing) => {
          return(
            <div>
              <h3>{thing}</h3>
            </div>
          )
        })
        }
      </div>
    )
  }
}

export default SearchIndex