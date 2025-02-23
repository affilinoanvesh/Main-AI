import { Truck } from 'lucide-react';
import { Industry } from './types';

export const transportation: Industry = {
  id: 'transportation',
  name: 'Transportation & Logistics',
  icon: Truck,
  description: 'AI solutions for transportation companies that optimize routes, reduce fuel costs, and improve delivery efficiency.',
  challenges: [
    {
      title: 'Route Optimization',
      description: 'Finding the most efficient delivery routes.',
    },
    {
      title: 'Fleet Management',
      description: 'Maintaining vehicles and tracking performance.',
    },
    {
      title: 'Delivery Timing',
      description: 'Meeting delivery windows and managing delays.',
    },
  ],
  solutions: [
    {
      title: 'Smart Routing',
      description: 'AI-powered route optimization and planning.',
      timesSaved: '30 hours/week',
      roi: '320%',
    },
    {
      title: 'Fleet Analytics',
      description: 'Predictive maintenance and performance tracking.',
      timesSaved: '25 hours/week',
      roi: '280%',
    },
    {
      title: 'Delivery Management',
      description: 'Real-time tracking and delay prediction.',
      timesSaved: '20 hours/week',
      roi: '250%',
    },
  ],
  features: [
    {
      title: 'Route Planning',
      description: 'Dynamic route optimization and scheduling.',
    },
    {
      title: 'Vehicle Tracking',
      description: 'Real-time fleet monitoring and analytics.',
    },
    {
      title: 'Delivery Updates',
      description: 'Automated customer notifications and ETAs.',
    },
  ],
  integrations: [
    'Samsara',
    'Fleetio',
    'Verizon Connect',
    'Omnitracs',
    'KeepTruckin',
  ],
  metrics: [
    {
      label: 'Fuel Savings',
      value: '-30%',
      description: 'Through optimized routes',
    },
    {
      label: 'On-Time Delivery',
      value: '+45%',
      description: 'Improvement in delivery accuracy',
    },
    {
      label: 'Vehicle Uptime',
      value: '+25%',
      description: 'Better maintenance scheduling',
    },
  ],
  testimonial: {
    quote: "The AI routing system has transformed our delivery operations. We're saving on fuel and completing more deliveries each day.",
    author: "Maria Rodriguez",
    position: "Operations Director",
    company: "Swift Logistics",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=600',
};