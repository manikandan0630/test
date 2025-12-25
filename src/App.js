import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import CookComponent from './components/Cook';
import BabyCareComponent from './components/BabycareComponent'
import PatientCare from './components/PatientCareComponent'
import MaidComponent from './components/MaidComponent'
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/scroll'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/services/cook" element={<CookComponent />} />
          <Route path="/services/baby-care-taker" element={<BabyCareComponent />}/>
          <Route path="/services/patient-care" element={<PatientCare />}/>
          <Route path="/services/maid" element={<MaidComponent />}/>
          <Route path="/contact-us" element={<Contact />}/>
          <Route path="/about-us" element={<About />}/>
          <Route path="*" element={
            <div className="p-8 text-center min-h-screen flex items-center justify-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
                <Link to="/" className="text-blue-600 hover:underline">Go back to Home</Link>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

