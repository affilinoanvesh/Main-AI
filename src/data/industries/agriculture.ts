import { Tractor } from 'lucide-react';
import { Industry } from './types';

export const agriculture: Industry = {
  id: 'agriculture',
  name: 'Agriculture',
  icon: Tractor,
  description: 'AI solutions for farms and agricultural businesses that optimize crop management, reduce waste, and improve yield.',
  challenges: [
    {
      title: 'Crop Management',
      description: 'Monitoring crop health and predicting optimal harvest times.',
    },
    {
      title: 'Resource Optimization',
      description: 'Managing water, fertilizer, and pesticide usage efficiently.',
    },
    {
      title: 'Weather Impact',
      description: 'Adapting to weather changes and protecting crops.',
    },
  ],
  solutions: [
    {
      title: 'Smart Farming',
      description: 'AI-powered crop monitoring and management system.',
      timesSaved: '25 hours/week',
      roi: '340%',
    },
    {
      title: 'Resource Planning',
      description: 'Automated resource allocation and optimization.',
      timesSaved: '20 hours/week',
      roi: '290%',
    },
    {
      title: 'Weather Analytics',
      description: 'Predictive weather analysis and crop protection.',
      timesSaved: '15 hours/week',
      roi: '260%',
    },
  ],
  features: [
    {
      title: 'Crop Monitoring',
      description: 'Real-time health tracking and analysis.',
    },
    {
      title: 'Resource Management',
      description: 'Smart irrigation and fertilization systems.',
    },
    {
      title: 'Yield Prediction',
      description: 'AI-driven harvest timing optimization.',
    },
  ],
  integrations: [
    'John Deere Operations Center',
    'Climate FieldView',
    'Farmers Edge',
    'Granular',
    'AgWorld',
  ],
  metrics: [
    {
      label: 'Yield Increase',
      value: '+35%',
      description: 'Through optimized crop management',
    },
    {
      label: 'Resource Savings',
      value: '-40%',
      description: 'Water and fertilizer reduction',
    },
    {
      label: 'Labor Efficiency',
      value: '+50%',
      description: 'Improved workforce productivity',
    },
  ],
  testimonial: {
    quote: "The AI farming system has revolutionized how we manage our crops. We're seeing better yields with less waste.",
    author: "John Anderson",
    position: "Owner",
    company: "Anderson Family Farms",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&h=600',
};