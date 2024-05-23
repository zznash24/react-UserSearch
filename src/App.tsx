// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import UserSearch from "./Components/UserSearch";
import MaterialNavbar from "./Components/MaterialNavbar";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <MaterialNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-search" element={<UserSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
