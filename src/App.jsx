import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
