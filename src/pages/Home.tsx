import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Influencers from '../components/Influencers';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Influencers />
      <Footer />
    </div>
  );
}

export default Home;