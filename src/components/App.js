import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

function App() {
  return (
    <main class="page bg-white" id="petratings">
    <div class="container">
      <div class="row">
        <div class="col-md-12 bg-white">
          <div class="container">
            <SearchAppointments />
            <AddAppointments />
            <ListAppointments />
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
