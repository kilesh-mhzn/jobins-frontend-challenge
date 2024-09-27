import { Sidebar } from "@components/commons/sidebar/sidebar.component";

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "@components/commons/navbar/navbar.component";

function App() {
  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="app__content">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
