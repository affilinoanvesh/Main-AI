import { Coffee } from 'lucide-react';
import { Industry } from './types';

export const cafe: Industry = {
  id: 'cafe',
  name: 'Cafes & Coffee Shops',
  icon: Coffee,
  description: 'AI solutions for cafes that optimize operations, enhance customer experience, and increase efficiency.',
  challenges: [
    {
      title: 'Peak Hour Management',
      description: 'Handling rush hours and managing wait times.',
    },
    {
      title: 'Inventory Control',
      description: 'Managing perishable items and reducing waste.',
    },
    {
      title: 'Staff Scheduling',
      description: 'Optimizing staff coverage during busy periods.',
    },
  ],
  solutions: [
    {
      title: 'Queue Manager',
      description: 'AI-powered order and wait time optimization.',
      timesSaved: '20 hours/week',
      roi: '270%',
    },
    {
      title: 'Smart Inventory',
      description: 'Automated stock management and waste reduction.',
      timesSaved: '15 hours/week',
      roi: '240%',
    },
    {
      title: 'Staff Scheduler',
      description: 'Intelligent staff allocation and scheduling.',
      timesSaved: '10 hours/week',
      roi: '220%',
    },
  ],
  features: [
    {
      title: 'Order Prediction',
      description: 'Smart preparation and queue management.',
    },
    {
      title: 'Waste Reduction',
      description: 'Automated inventory and freshness tracking.',
    },
    {
      title: 'Staff Optimization',
      description: 'Dynamic scheduling based on demand.',
    },
  ],
  integrations: [
    'Square',
    'Toast POS',
    'QuickBooks',
    'DoorDash',
    'Uber Eats',
  ],
  metrics: [
    {
      label: 'Wait Times',
      value: '-50%',
      description: 'Reduced customer waiting',
    },
    {
      label: 'Food Waste',
      value: '-40%',
      description: 'Less inventory waste',
    },
    {
      label: 'Revenue Growth',
      value: '+30%',
      description: 'Increased sales',
    },
  ],
  testimonial: {
    quote: "The AI cafe system has transformed our daily operations. We're serving more customers faster while reducing waste and improving staff satisfaction.",
    author: "James Wilson",
    position: "Owner",
    company: "The Daily Grind",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&h=600',
};