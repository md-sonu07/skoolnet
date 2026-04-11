import { Navigate, Route } from 'react-router-dom';
import About from '../pages/landing/About';
import Contact from '../pages/landing/Contact';
import Home from '../pages/landing/Home';
import Pricing from '../pages/landing/Pricing';
import Services from '../pages/landing/Services';

const appRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/dashboard" element={<Navigate to="/dashboard/manager" replace />} />
  </>
);

export default appRoutes;
