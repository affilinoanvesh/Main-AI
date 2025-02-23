import { Home } from 'lucide-react';
import { Industry } from './types';

export const realEstate: Industry = {
  id: 'real-estate',
  name: 'Real Estate',
  icon: Home,
  description: 'AI solutions for real estate agencies that streamline property management, improve client matching, and automate marketing.',
  challenges: [
    {
      title: 'Property Matching',
      description: 'Finding the right properties for clients quickly.',
    },
    {
      title: 'Market Analysis',
      description: 'Accurately pricing properties and predicting trends.',
    },
    {
      title: 'Client Management',
      description: 'Managing inquiries and follow-ups efficiently.',
    },
  ],
  solutions: [
    {
      title: 'Smart Matching',
      description: 'AI-powered property and client matching system.',
      timesSaved: '20 hours/week',
      roi: '300%',
    },
    {
      title: 'Market Intelligence',
      description: 'Automated market analysis and pricing.',
      timesSaved: '15 hours/week',
      roi: '270%',
    },
    {
      title: 'Client Automation',
      description: 'Automated inquiry handling and follow-ups.',
      timesSaved: '25 hours/week',
      roi: '290%',
    },
  ],
  features: [
    {
      title: 'Property Matching',
      description: 'AI-driven property recommendations.',
    },
    {
      title: 'Market Analysis',
      description: 'Real-time market trends and pricing.',
    },
    {
      title: 'Lead Management',
      description: 'Automated client communication system.',
    },
  ],
  integrations: [
    'Zillow',
    'MLS',
    'Realtor.com',
    'DocuSign',
    'BoomTown',
  ],
  metrics: [
    {
      label: 'Sales Cycle',
      value: '-40%',
      description: 'Faster property transactions',
    },
    {
      label: 'Lead Conversion',
      value: '+55%',
      description: 'Improved client matching',
    },
    {
      label: 'Time Saved',
      value: '30hrs/week',
      description: 'Administrative efficiency',
    },
  ],
  testimonial: {
    quote: "The AI system has revolutionized how we match properties with clients. Our sales cycle is shorter and our clients are happier.",
    author: "David Chen",
    position: "Principal Broker",
    company: "Premier Real Estate",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=600',
};