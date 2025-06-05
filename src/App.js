import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/Dashboard/Maincontent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1 relative">
          <Header onToggleSidebar={toggleSidebar} />
          {sidebarOpen && (
            <div className="fixed inset-0 z-10 bg-black opacity-80 transition-opacity duration-300 md:hidden"></div>
          )}
          <main
            className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
              sidebarOpen ? "bg-black/50 pointer-events-none" : "bg-gray-50"
            }`}
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/content" element={<div>Content Page</div>} />
              <Route path="/approval" element={<div>Approval Page</div>} />
              <Route path="/brand-controls" element={<div>Brand Controls Page</div>} />
              <Route path="/post-now" element={<div>Post Now Page</div>} />
              <Route path="/themes" element={<div>Themes Page</div>} />
              <Route path="/calendar" element={<div>Calendar Page</div>} />
              <Route path="/activity-feed" element={<div>Activity Feed Page</div>} />
              <Route path="/analytics" element={<div>Analytics Page</div>} />
              <Route path="/reports" element={<div>Reports Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
