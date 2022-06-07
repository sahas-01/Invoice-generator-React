import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Landing from './pages/Landing';
import InvoiceGenerator from './pages/InvoiceGenerator';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/invoicegenerate" element={<InvoiceGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
