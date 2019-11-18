import React, {Component} from 'react';

//import data from '../data.json';

class DashBoard extends Component {

  state = {
    users: []
  }
  componentDidMount() {

    fetch(`../data.json`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
    })
    .catch(console.log)
  }
 

 render(){
 	return(
  <div className="container">
        <div className="col-xs-12">
        <h1>users</h1>
        {this.state.users.map((user) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.id}</h5>
              <h5 className="card-title">{user.name}</h5>
              <h5 className="card-title">{user.age}</h5>
              <h5 className="card-title">{user.Gender}</h5>
              <h5 className="card-title">{user.email}</h5>
              <h5 className="card-title">{user.phoneNo}</h5>
            </div>
          </div>
        ))}
        </div>
       </div>
 	);
 
}
}

export default DashBoard;