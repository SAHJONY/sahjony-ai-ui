'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe, Play, ArrowRight, Mic, Cpu } from 'lucide-react';
import NeuralBackground from '@/components/NeuralBackground';
import AIChatWidget from '@/components/AIChatWidget';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Neural Background */}
      <NeuralBackground />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-2xl font-bold gradient-text">SAHJONY</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {['Features', 'Industries', 'Pricing', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <button className="glass-panel px-6 py-2 rounded-full text-white hover:bg-white/10 transition-all flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Voice Demo
          </button>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">All Systems Operational</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text neon-text">SAHJONY</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 tracking-wider">
            UNIVERSAL AI VIDEO ENGINE
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Turn photos into living cinema. Upload static photos, speak a command, and watch as AI agents compose, animate, and render Hollywood-quality content for any industry in real-time.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              <Play className="w-5 h-5" />
              Start Creating
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              View Demo
            </motion.button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>99.99% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {[
            { icon: '🏠', title: 'Real Estate', desc: 'Cinematic virtual tours' },
            { icon: '🛒', title: 'E-Commerce', desc: 'Product showcase videos' },
            { icon: '⚖️', title: 'Legal', desc: 'Professional explainers' },
            { icon: '👤', title: 'Personal Brand', desc: 'High-quality content' }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-panel p-6 rounded-2xl text-center hover:border-primary/50 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Content?</h2>
            <p className="text-gray-300 mb-8">Join thousands of professionals using SAHJONY to create stunning AI-generated videos.</p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-primary/30 transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.section>
      </div>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </main>
  );
}
