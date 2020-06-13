import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Appointment from './Appointment';

function App() {
  return (
    <main class="page bg-white" id="petratings">
    <div class="container">
      <div class="row">
        <div class="col-md-12 bg-white">
          <div class="container">
            <Appointment />
            <div>Search Appointments</div>
            <div>List Appointments</div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
