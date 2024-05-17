import React from 'react';
import './App.css';
// components
// import BasicTable from './components/BasicTable';
// import SortingTable from './components/SortingTable';
import GlobalFiltering from './components/GlobalFiltering';

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <GlobalFiltering />
    </div>
  );
}

export default App;
