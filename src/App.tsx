import React from 'react';
import './App.css';
import InputFields from "./components/InputFields";




const App : React.FC = () => {
  return (
    <div className="App">
      {/* <span> tag is used to markup part of text/doc, easily manipulated with JavaScript using the class or id attribute. */}
      <span className="heading">TaskMaster</span>  {/* span.heading  + enter*/}

      <InputFields/>
    </div>
  );
} //returns JSX element. The type of App is React functional component (React.FC)

export default App;
