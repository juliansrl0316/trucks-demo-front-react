import React, { useState, useEffect, } from 'react';
import Table from './components/Table';
import AppService from "./services/AppServices";
import "./bootstrap.min.css"

function App() {

  const [routes, setRoutes] = useState([])

  useEffect(() => {
    getRoutes()
  }, [])

  const getRoutes = () => {
    AppService.getAllRoutes().then((response) => {
      const isSuccess = response && response.networkCode === 200;
      if (isSuccess) {
        delete response.networkCode;
        setRoutes(Object.entries(response));
      }
    });
  };

  return (
    <div>
      <div className="main container-fluid" style={{ marginBottom: "30px", background: "linear-gradient(#82888C ,#8b949a, #FFFFFF)", padding: "50px" }}>
        <center>
          <img style={{ height: "96" }} src="https://assertivemoving.com/wp-content/uploads/2020/09/Group-124.png" alt="Company logo" />
        </center>
      </div>
      <div className="main container-fluid " style={{ width: "80%" }}>
        {routes?.map((route) => (
          <Table data={route[1]} title={route[0]} />
        ))}
      </div>
    </div>
  )
}

export default App;
