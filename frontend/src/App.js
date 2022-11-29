import React, { useState } from "react";
import SideBar from './components/Sidebar'
import Header from './components/Header';
import Kanban from './components/Board';
import './App.css';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <section className="App">
      <div id="left" className="column">
        <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      </div>
      <div id="right" className="column">
        <div className="top-right">
          <Header />
        </div>
        <div className="bottom">
          <Kanban />
        </div>
      </div>
    </section>
  );
}

export default App;
