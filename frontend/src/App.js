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

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../src/components/Navbar/Navbar'; // Adjust the path as necessary
import '../src/tailwind.css';
import Homepage from "./pages/Home/homepage"; // Ensure this path points to where you have Tailwind CSS set up

const App = () => (
    <div>
        <Homepage/>
        {/!* Other components *!/}
    </div>
);
export default App;
ReactDOM.render(<App />, document.getElementById('root'));*/


import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import DefaultRoute from "./pages/defaultRoute";
import Homepage from "./pages/Home/homepage";
import Pagenotfound from "./components/404/404";
import Signin from "./pages/SignIn/Signin";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signin'} element={<Signin/>}/>
                <Route path={'/*'} element={<DefaultRoute/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
