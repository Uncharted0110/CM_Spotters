import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PageLayout from './components/PageLayout';
import Nutrition from './pages/Nutrition';
import Diseases from './pages/Diseases';
import MCHFamilyPlanning from './pages/MCHFamilyPlanning';
import Vaccines from './pages/Vaccines';
import HealthPlanning from './pages/HealthPlanning';
import MedicalStatistics from './pages/MedicalStatistics';
import EnvironmentHealth from './pages/EnvironmentHealth';
import MedicalEntomology from './pages/MedicalEntomology';
import Insecticides from './pages/Insecticides';
import BiomedicalWaste from './pages/BiomedicalWaste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nutrition" element={<PageLayout><Nutrition /></PageLayout>} />
        <Route path="/diseases" element={<PageLayout><Diseases /></PageLayout>} />
        <Route path="/mch" element={<PageLayout><MCHFamilyPlanning /></PageLayout>} />
        <Route path="/vaccines" element={<PageLayout><Vaccines /></PageLayout>} />
        <Route path="/health-planning" element={<PageLayout><HealthPlanning /></PageLayout>} />
        <Route path="/statistics" element={<PageLayout><MedicalStatistics /></PageLayout>} />
        <Route path="/environment" element={<PageLayout><EnvironmentHealth /></PageLayout>} />
        <Route path="/entomology" element={<PageLayout><MedicalEntomology /></PageLayout>} />
        <Route path="/insecticides" element={<PageLayout><Insecticides /></PageLayout>} />
        <Route path="/biomedical-waste" element={<PageLayout><BiomedicalWaste /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
