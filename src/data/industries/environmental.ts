import { Leaf } from 'lucide-react';
import { Industry } from './types';

export const environmental: Industry = {
  id: 'environmental',
  name: 'Environmental Services',
  icon: Leaf,
  description: 'AI solutions for environmental companies that optimize waste management, energy efficiency, and sustainability tracking.',
  challenges: [
    {
      title: 'Waste Management',
      description: 'Optimizing collection routes and recycling processes.',
    },
    {
      title: 'Energy Monitoring',
      description: 'Tracking and reducing energy consumption.',
    },
    {
      title: 'Sustainability Reporting',
      description: 'Managing environmental compliance and reporting.',
    },
  ],
  solutions: [
    {
      title: 'Smart Waste Management',
      description: 'AI-powered waste collection and recycling optimization.',
      timesSaved: '25 hours/week',
      roi: '290%',
    },
    {
      title: 'Energy Analytics',
      description: 'Automated energy monitoring and optimization.',
      timesSaved: '20 hours/week',
      roi: '260%',
    },
    {
      title: 'Sustainability Tracker',
      description: 'Automated environmental reporting and compliance.',
      timesSaved: '15 hours/week',
      roi: '230%',
    },
  ],
  features: [
    {
      title: 'Route Optimization',
      description: 'Smart waste collection routing system.',
    },
    {
      title: 'Energy Monitoring',
      description: 'Real-time energy usage tracking and analysis.',
    },
    {
      title: 'Compliance Reporting',
      description: 'Automated environmental compliance system.',
    },
  ],
  integrations: [
    'EPA Compliance',
    'Energy Star',
    'GreenBiz',
    'WasteTrack',
    'EnergyCAP',
  ],
  metrics: [
    {
      label: 'Waste Reduction',
      value: '45%',
      description: 'Less waste to landfill',
    },
    {
      label: 'Energy Savings',
      value: '35%',
      description: 'Reduced energy consumption',
    },
    {
      label: 'Compliance Rate',
      value: '99.9%',
      description: 'Environmental regulations met',
    },
  ],
  testimonial: {
    quote: "The AI environmental system has helped us achieve our sustainability goals while reducing costs. It's a game-changer for our industry.",
    author: "David Wilson",
    position: "Sustainability Director",
    company: "EcoSmart Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&h=600',
};