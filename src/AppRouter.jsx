import React from 'react';
import Dashboard from './components/Dashboard';
import AreaPersonal from './components/AreaPersonal';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/area-personal" element={<AreaPersonal />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
