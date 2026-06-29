import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CompliancePage from './pages/CompliancePage';
import ImportPage from './pages/ImportPage';
import EnergyPage from './pages/EnergyPage';
import ConsultingPage from './pages/ConsultingPage';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/compliance" element={<CompliancePage />} />
        <Route path="/services/import" element={<ImportPage />} />
        <Route path="/services/energy" element={<EnergyPage />} />
        <Route path="/services/consulting" element={<ConsultingPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
