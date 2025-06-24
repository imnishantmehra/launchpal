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
import ContentType from "./components/Content-Type/CotentType";
import PreviewScreen from "./components/PreviewScreen/PreviewScreen";
import Content from "./components/Content/Content";
import ContentCreation from "./components/Content-Creation/ContentCreation";


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
            className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${sidebarOpen ? "bg-black/50 pointer-events-none" : "bg-gray-50"
              }`}
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/content-type" element={<ContentType />} />
              <Route path="/preview" element={<PreviewScreen />} />
              <Route path="/content-creation" element={<ContentCreation />} />
              <Route path="/content" element={<Content />} />
              <Route path="/approval" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Approval</h2>} />
              <Route path="/brand-controls" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Brand Controls</h2>} />
              <Route path="/post-now" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Post Now</h2>} />
              <Route path="/themes" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Themes</h2>} />
              <Route path="/calendar" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Calendar</h2>} />
              <Route path="/activity-feed" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Activity Feed</h2>} />
              <Route path="/analytics" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Analytics</h2>} />
              <Route path="/reports" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Reports</h2>} />
              <Route path="/settings" element={<h2 className="text-xl font-bold bg-gray-100 py-4 px-4">Settings</h2>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
