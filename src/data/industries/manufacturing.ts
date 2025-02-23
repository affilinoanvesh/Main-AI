import { Factory } from 'lucide-react';
import { Industry } from './types';

export const manufacturing: Industry = {
  id: 'manufacturing',
  name: 'Manufacturing',
  icon: Factory,
  description: 'AI solutions for manufacturing companies that optimize production, quality control, and equipment maintenance.',
  challenges: [
    {
      title: 'Production Efficiency',
      description: 'Optimizing manufacturing processes and reducing waste.',
    },
    {
      title: 'Quality Control',
      description: 'Maintaining consistent product quality standards.',
    },
    {
      title: 'Equipment Maintenance',
      description: 'Preventing equipment failures and downtime.',
    },
  ],
  solutions: [
    {
      title: 'Production AI',
      description: 'AI-powered production optimization system.',
      timesSaved: '35 hours/week',
      roi: '360%',
    },
    {
      title: 'Quality Inspector',
      description: 'Automated quality control and inspection.',
      timesSaved: '25 hours/week',
      roi: '300%',
    },
    {
      title: 'Maintenance Predictor',
      description: 'Predictive maintenance and equipment monitoring.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
  ],
  features: [
    {
      title: 'Process Optimization',
      description: 'Smart production line management.',
    },
    {
      title: 'Quality Monitoring',
      description: 'Real-time quality control system.',
    },
    {
      title: 'Predictive Maintenance',
      description: 'Equipment health monitoring and prediction.',
    },
  ],
  integrations: [
    'SAP',
    'Siemens MindSphere',
    'PTC ThingWorx',
    'GE Digital',
    'Rockwell Automation',
  ],
  metrics: [
    {
      label: 'Production Efficiency',
      value: '+40%',
      description: 'Improved manufacturing output',
    },
    {
      label: 'Quality Rate',
      value: '99.9%',
      description: 'Product quality compliance',
    },
    {
      label: 'Downtime Reduction',
      value: '-65%',
      description: 'Less equipment downtime',
    },
  ],
  testimonial: {
    quote: "The AI manufacturing system has revolutionized our production line. We're producing more with better quality and less waste.",
    author: "James Chen",
    position: "Plant Manager",
    company: "Precision Manufacturing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=1200&h=600',
};