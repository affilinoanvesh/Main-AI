import { Car } from 'lucide-react';
import { Industry } from './types';

export const automotive: Industry = {
  id: 'automotive',
  name: 'Automotive',
  icon: Car,
  description: 'AI solutions for auto repair shops and dealerships that streamline diagnostics, inventory, and customer service.',
  challenges: [
    {
      title: 'Diagnostic Accuracy',
      description: 'Identifying vehicle issues quickly and accurately.',
    },
    {
      title: 'Parts Management',
      description: 'Managing inventory and predicting parts needs.',
    },
    {
      title: 'Service Scheduling',
      description: 'Optimizing workshop capacity and reducing wait times.',
    },
  ],
  solutions: [
    {
      title: 'Smart Diagnostics',
      description: 'AI-powered vehicle diagnostic system.',
      timesSaved: '20 hours/week',
      roi: '300%',
    },
    {
      title: 'Parts Prediction',
      description: 'Automated inventory management and ordering.',
      timesSaved: '15 hours/week',
      roi: '250%',
    },
    {
      title: 'Service Optimizer',
      description: 'Intelligent scheduling and capacity management.',
      timesSaved: '12 hours/week',
      roi: '220%',
    },
  ],
  features: [
    {
      title: 'Diagnostic AI',
      description: 'Advanced vehicle problem identification.',
    },
    {
      title: 'Inventory Control',
      description: 'Smart parts management and ordering.',
    },
    {
      title: 'Workshop Planning',
      description: 'Optimized service scheduling system.',
    },
  ],
  integrations: [
    'Mitchell1',
    'AutoZone Pro',
    'NAPA TRACS',
    'CarFax',
    'AllData',
  ],
  metrics: [
    {
      label: 'Diagnostic Time',
      value: '-60%',
      description: 'Faster problem identification',
    },
    {
      label: 'Parts Accuracy',
      value: '98%',
      description: 'Inventory management precision',
    },
    {
      label: 'Service Efficiency',
      value: '+45%',
      description: 'Improved workshop throughput',
    },
  ],
  testimonial: {
    quote: "The AI diagnostic system has revolutionized how we service vehicles. We're more accurate and efficient than ever before.",
    author: "Mike Rodriguez",
    position: "Service Manager",
    company: "Elite Auto Service",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&h=600',
};