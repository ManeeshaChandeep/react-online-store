// import './App.css';
// import React from "react";
// import NewDash from "./pages/NewDashBoard/NewDash";
// import Dashboard from "./pages/Dash Board/DashBoard";
//
// function App() {
//   return (
//
// <div>
//
//   <NewDash/>
// </div>
//   );
// }
//
// export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src/components/Navbar/Navbar'; // Adjust the path as necessary
import '../src/tailwind.css';
import Homepage from "./pages/Home/homepage"; // Ensure this path points to where you have Tailwind CSS set up

const App = () => (
    <div>
        <Homepage/>
        {/* Other components */}
    </div>
);
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
