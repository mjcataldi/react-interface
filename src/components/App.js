import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: 'Matthew',
      data: []
    };
  }

  componentDidMount() {
    fetch('./data.json')
      .then(data => data.json())
      .then(data => this.setState({
        data
      }));

  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchAppointments />
                <AddAppointments />
                <ListAppointments appointments={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
