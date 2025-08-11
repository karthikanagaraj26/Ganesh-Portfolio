import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Education from './Pages/Education';
import Contact from './Pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      {/* Optional: Catch-all for 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
