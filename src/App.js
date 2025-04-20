import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RailTrace from "./pages/RailTrace";
import Map from "./pages/Map";
import Splash from "./pages/Splash";
import SearchResult from "./pages/SearchResult";
import SelectedTrain from "./pages/SelectedTrain";
import Alerts from "./pages/Alerts";
import TrainChat from "./pages/TrainChat";
import TrainListPage from "./pages/TrainListPage";
import TrainSchedulePage from "./pages/TrainSchedulePage";
import Sidebar from "./pages/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";

// User Context
const UserContext = createContext();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (loading) return <Splash />;

  return (
    <GoogleOAuthProvider clientId="610102041410-a30bcbj4oq54qeqq6mnns7469q927kl1.apps.googleusercontent.com">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/" element={<RailTrace />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/SearchResult" element={<SearchResult />} />
              <Route path="/SelectedTrain" element={<SelectedTrain />} />
              <Route path="/Alerts" element={<Alerts />} />
              <Route path="/trains" element={<TrainListPage />} />
              <Route path="/train/:trainId" element={<TrainSchedulePage />} />
              <Route path="/TrainChat" element={<TrainChat />} /> 
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
}

export { UserContext };