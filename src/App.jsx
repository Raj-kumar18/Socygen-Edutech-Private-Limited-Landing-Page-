import React, { useState } from 'react';
import Header from './components/Header';
import PrivacyPolicy from './Pages/PrivacyPolicy';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import TermCondition from './Pages/TermCondition';
import RefundPolicy from './Pages/RefundPolicy';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermCondition />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </>
  );
}

export default App;

