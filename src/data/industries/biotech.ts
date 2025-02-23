import { FlaskRound as Flask } from 'lucide-react';
import { Industry } from './types';

export const biotech: Industry = {
  id: 'biotech',
  name: 'Biotechnology',
  icon: Flask,
  description: 'AI solutions for biotech companies that accelerate research, optimize lab operations, and enhance data analysis.',
  challenges: [
    {
      title: 'Research Efficiency',
      description: 'Accelerating research and development processes.',
    },
    {
      title: 'Data Analysis',
      description: 'Processing large volumes of experimental data.',
    },
    {
      title: 'Lab Operations',
      description: 'Optimizing laboratory workflows and resources.',
    },
  ],
  solutions: [
    {
      title: 'Research AI',
      description: 'AI-powered research acceleration platform.',
      timesSaved: '40 hours/week',
      roi: '400%',
    },
    {
      title: 'Data Analyzer',
      description: 'Automated data analysis and interpretation.',
      timesSaved: '35 hours/week',
      roi: '360%',
    },
    {
      title: 'Lab Optimizer',
      description: 'Smart laboratory management system.',
      timesSaved: '25 hours/week',
      roi: '300%',
    },
  ],
  features: [
    {
      title: 'Research Automation',
      description: 'Intelligent research process optimization.',
    },
    {
      title: 'Data Processing',
      description: 'Advanced data analysis and visualization.',
    },
    {
      title: 'Lab Management',
      description: 'Efficient laboratory resource allocation.',
    },
  ],
  integrations: [
    'LabVantage',
    'Benchling',
    'GraphPad Prism',
    'LIMS',
    'ELN Systems',
  ],
  metrics: [
    {
      label: 'Research Speed',
      value: '+70%',
      description: 'Faster research completion',
    },
    {
      label: 'Data Accuracy',
      value: '99.9%',
      description: 'Improved analysis precision',
    },
    {
      label: 'Lab Efficiency',
      value: '+55%',
      description: 'Better resource utilization',
    },
  ],
  testimonial: {
    quote: "The AI biotech system has revolutionized our research capabilities. We're making discoveries faster and more efficiently than ever before.",
    author: "Dr. Sarah Kim",
    position: "Research Director",
    company: "BioInnovate Labs",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&h=600',
};