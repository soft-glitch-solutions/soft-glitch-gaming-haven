import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { ArrowRight, GamepadIcon, Users, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-4 mx-auto text-center">
          <Logo />
          <h1 className="text-4xl md:text-6xl font-pixel text-white mt-8 mb-4">
            SOFT GLITCH
            <span className="text-primary">STUDIO</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Creating immersive gaming experiences with a touch of glitch magic
          </p>
          <a
            href="#games"
            className="inline-flex items-center px-6 py-3 bg-primary text-secondary-foreground font-pixel rounded-lg hover:bg-glitch-400 transition-colors"
          >
            View Our Games
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-secondary">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-pixel text-primary mb-12 text-center">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div key={game} className="bg-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
                <div className="h-48 bg-glitch-500/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-pixel text-white mb-2">Game Title {game}</h3>
                <p className="text-gray-400">A brief description of the game goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-pixel text-primary mb-12 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <GamepadIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-pixel text-white mb-2">Passionate Gaming</h3>
              <p className="text-gray-400">We live and breathe games, creating experiences we love to play.</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-pixel text-white mb-2">Community First</h3>
              <p className="text-gray-400">Building games with our community, for our community.</p>
            </div>
            <div className="text-center p-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-pixel text-white mb-2">Always Connected</h3>
              <p className="text-gray-400">Join our Discord and be part of our journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-pixel text-primary mb-8">Join Our Community</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of our growing community. Get early access to our games, share your feedback, and connect with other gamers.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-primary text-secondary-foreground font-pixel rounded-lg hover:bg-glitch-400 transition-colors"
          >
            Join Discord
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;