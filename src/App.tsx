import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import HealthPackages from './pages/HealthPackages';
import PackageDetails from './pages/PackageDetails';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import PatientInfo from './pages/PatientInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServiceDetails />} />
        <Route path="health-packages" element={<HealthPackages />} />
        <Route path="health-packages/:id" element={<PackageDetails />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="patient-information" element={<PatientInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
