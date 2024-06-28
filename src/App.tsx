import React from 'react';
import './App.css';
import DataDisplay from "./components/DataDisplay";
import {ErrorBoundary} from "react-error-boundary";


function App() {
  return (
      <ErrorBoundary fallbackRender={fallbackRender} onError={(error, info) => console.log(error, info)}>
          <div className="App">
            <h2 className="header">Albums</h2>
            <DataDisplay/>
          </div>
      </ErrorBoundary>
  );
}

function fallbackRender({error}: any) {
    return (
        <div>
            <h2>Oops.. Something went wrong</h2>
            <h4>{error.message}</h4>
        </div>
    )
}

export default App;