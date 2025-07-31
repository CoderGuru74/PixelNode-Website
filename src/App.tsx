import React, { useState, useEffect } from 'react'; // Fixed: changed '=>' to 'from'
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Cpu, // Cpu icon is still imported but not used for the logo itself
  Smartphone,
  Globe,
  MessageSquare,
  Lightbulb,
  Target,
  Rocket,
  CheckCircle,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Sparkles,
  Zap,
  Code,
  Layers
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize floating particles
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(initialParticles);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Boundary checks to wrap particles around the screen
        if (newX > window.innerWidth) newX = 0;
        else if (newX < 0) newX = window.innerWidth;

        if (newY > window.innerHeight) newY = 0;
        else if (newY < 0) newY = window.innerHeight;

        return {
          ...particle,
          x: newX,
          y: newY,
        };
      }));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence implementations that transform your business processes and decision-making capabilities."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
    },
    {
      icon: Globe,
      title: "Web Platforms",
      description: "Scalable web applications and platforms built with modern technologies for optimal performance and user engagement."
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description: "We dive deep into understanding your vision, goals, and requirements through comprehensive consultation."
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Our team develops a tailored strategy and roadmap that aligns with your business objectives."
    },
    {
      icon: Target,
      title: "Design",
      description: "We create intuitive, user-centered designs that balance aesthetics with functionality."
    },
    {
      icon: Rocket,
      title: "Development",
      description: "Our experts build your solution using cutting-edge technologies and best practices."
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      company: "Innovate Solutions Pvt. Ltd.",
      rating: 5,
      text: "PixelNode transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%."
    },
    {
      name: "Rahul Kumar",
      company: "TechSpark Innovations",
      rating: 5,
      text: "The mobile app they developed exceeded all expectations. Incredible attention to detail and user experience."
    },
    {
      name: "Ananya Singh",
      company: "Digital Horizons Corp.",
      rating: 5,
      text: "Professional, innovative, and results-driven. PixelNode is our go-to partner for all digital projects."
    }
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in React, Node.js, Python, AI/ML frameworks, mobile development with React Native and Flutter, and cloud platforms like AWS and Azure."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple applications take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our discovery phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including regular updates, security patches, performance monitoring, and feature enhancements."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems and can help modernize legacy applications while maintaining business continuity."
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 animate-gradient-shift"></div>

        {/* Floating orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float-diagonal"></div>
        </div>

        {/* Interactive mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-blue-500/3 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        </div>

        {/* Floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-blue-400 rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
          ></div>
        ))}

        {/* Radial gradients with animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.15)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(147,51,234,0.15)_0%,_transparent_50%)] animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_transparent_70%)] animate-pulse-slowest"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Updated to use p.png */}
            <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-glow">
              <img
                src="/p.png" // Path to your logo in the public folder
                alt="PixelNode Logo"
                className="h-8 w-8 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-200 group-hover:drop-shadow-glow transition-all duration-300">
                PixelNode
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Process', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white hover:drop-shadow-glow transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-glow transition-all duration-300 group-hover:w-full group-hover:shadow-blue-500/50"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white hover:drop-shadow-glow hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-blue-500/20 animate-slide-down">
              <nav className="flex flex-col space-y-4 p-6">
                {['About', 'Services', 'Process', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:drop-shadow-glow hover:translate-x-2 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-blue-400/30 animate-twinkle" />
          <Zap className="absolute top-1/3 right-1/3 w-8 h-8 text-purple-400/30 animate-float-slow" />
          <Code className="absolute bottom-1/3 left-1/5 w-5 h-5 text-cyan-400/30 animate-bounce-slow" />
          <Layers className="absolute top-1/2 right-1/4 w-7 h-7 text-blue-300/30 animate-pulse-slow" />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-stagger-up">
            <span className="inline-block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              Crafting Digital
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow">
              Futures
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 animate-fade-in-up animation-delay-500 leading-relaxed hover:text-gray-200 transition-colors duration-300">
            We transform innovative ideas into powerful digital solutions that drive growth and create lasting impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/70 hover:drop-shadow-intense-glow overflow-hidden animate-pulse-button">
              <span className="relative z-10 group-hover:scale-110 group-hover:text-white transition-all duration-300">Get Started Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 group-hover:animate-bounce transition-all duration-300" />
            </button>

            <button className="group relative px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-500/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:drop-shadow-glow overflow-hidden">
              <span className="relative z-10 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="mt-16 animate-bounce-glow cursor-pointer group">
            <ChevronDown className="w-10 h-10 mx-auto text-blue-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-150 group-hover:drop-shadow-intense-glow animate-pulse-slow" />
            <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">Scroll down</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              About PixelNode
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate innovators, designers, and developers who believe in the power of technology to transform businesses and create meaningful experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400 hover:text-cyan-400 hover:drop-shadow-glow transition-all duration-300">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that not only meet today's challenges but anticipate tomorrow's opportunities. We combine technical expertise with creative vision to deliver exceptional results.
              </p>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:animate-pulse" />
                <span className="text-gray-300">Innovation-driven approach</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:animate-pulse" />
                <span className="text-gray-300">Client-focused solutions</span>
              </div>
              <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:animate-pulse" />
                <span className="text-gray-300">Cutting-edge technology</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 group-hover:animate-pulse">3+</div> {/* Changed from 150+ */}
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-pink-400 group-hover:animate-pulse">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg border border-green-500/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-emerald-400 group-hover:animate-pulse">2-3</div> {/* Changed from 5 */}
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-red-900/20 rounded-lg border border-pink-500/20 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:text-rose-400 group-hover:animate-pulse">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions tailored to your unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-500/70 hover:drop-shadow-intense-glow cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 relative">
                  <service.icon className="w-12 h-12 text-blue-400 group-hover:text-cyan-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-300 group-hover:drop-shadow-glow transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-500/70 hover:drop-shadow-intense-glow cursor-pointer animate-fade-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-white group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                  {index + 1}
                </div>
                <div className="mb-4 relative">
                  <step.icon className="w-10 h-10 text-blue-400 group-hover:text-cyan-300 group-hover:scale-125 group-hover:animate-bounce transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-300 group-hover:drop-shadow-glow transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              Client Reviews
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our clients say about working with PixelNode.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-500/70 hover:drop-shadow-intense-glow cursor-pointer animate-fade-in-right"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 group-hover:drop-shadow-glow transition-all duration-300">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300 animate-text-shimmer">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 hover:border-blue-500/70 hover:drop-shadow-glow cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 group-hover:drop-shadow-glow transition-all duration-300">
                    {faq.question}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-blue-400 group-hover:rotate-90 group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300" />
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Enhanced background for CTA */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-gradient-shift"></div>

        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-text-shimmer hover:drop-shadow-intense-glow transition-all duration-300">
            Curious about what we can create together?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss your project and explore how PixelNode can help bring your digital vision to life.
          </p>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-xl transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/70 hover:drop-shadow-mega-glow overflow-hidden animate-pulse-button">
            <span className="relative z-10 group-hover:scale-110 group-hover:text-white transition-all duration-300">Book a Free Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Phone className="inline-block ml-3 w-6 h-6 group-hover:animate-bounce group-hover:text-white" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                {/* Logo - Updated to use p.png */}
                <img
                  src="/p.png" // Path to your logo in the public folder
                  alt="PixelNode Logo"
                  className="h-10 w-10 rounded-lg object-contain transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent hover:drop-shadow-glow transition-all duration-300">
                  PixelNode
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming innovative ideas into powerful digital solutions that drive growth and create lasting impact.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 hover:bg-blue-500/30 hover:border-blue-500/70 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/50 hover:drop-shadow-glow"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 group-hover:animate-pulse transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white hover:text-blue-300 hover:drop-shadow-glow transition-all duration-300">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-gray-200 hover:translate-x-2 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 group-hover:animate-bounce" />
                  <span>pixelnodeofficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-gray-200 hover:translate-x-2 transition-all duration-300 group">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 group-hover:animate-bounce" />
                  <span>+91 9942498114</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-gray-200 hover:translate-x-2 transition-all duration-300 group">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 group-hover:animate-bounce" />
                  <span>Patna, Bihar, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white hover:text-blue-300 hover:drop-shadow-glow transition-all duration-300">Quick Links</h4>
              <nav className="space-y-3">
                {['About', 'Services', 'Process', 'Reviews', 'FAQ'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white hover:underline hover:drop-shadow-glow transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8 mt-12 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} PixelNode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
