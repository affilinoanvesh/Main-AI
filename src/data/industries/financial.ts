import { Landmark } from 'lucide-react';
import { Industry } from './types';

export const financial: Industry = {
  id: 'financial',
  name: 'Financial Services',
  icon: Landmark,
  description: 'AI solutions for financial institutions that enhance risk assessment, automate processing, and improve customer service.',
  challenges: [
    {
      title: 'Risk Assessment',
      description: 'Evaluating financial risks and compliance.',
    },
    {
      title: 'Transaction Processing',
      description: 'Managing high volumes of financial transactions.',
    },
    {
      title: 'Customer Service',
      description: 'Providing personalized financial advice and support.',
    },
  ],
  solutions: [
    {
      title: 'Risk AI',
      description: 'AI-powered risk assessment and compliance.',
      timesSaved: '35 hours/week',
      roi: '380%',
    },
    {
      title: 'Transaction Processor',
      description: 'Automated transaction processing and verification.',
      timesSaved: '30 hours/week',
      roi: '350%',
    },
    {
      title: 'Service Assistant',
      description: 'Intelligent customer service and advisory system.',
      timesSaved: '25 hours/week',
      roi: '320%',
    },
  ],
  features: [
    {
      title: 'Risk Management',
      description: 'Advanced risk analysis and monitoring.',
    },
    {
      title: 'Transaction Analysis',
      description: 'Smart transaction processing and fraud detection.',
    },
    {
      title: 'Customer Support',
      description: 'Automated financial advice and service.',
    },
  ],
  integrations: [
    'Bloomberg Terminal',
    'Refinitiv Eikon',
    'Fiserv',
    'FIS',
    'Temenos',
  ],
  metrics: [
    {
      label: 'Risk Accuracy',
      value: '99.9%',
      description: 'Improved risk assessment',
    },
    {
      label: 'Processing Time',
      value: '-80%',
      description: 'Faster transaction handling',
    },
    {
      label: 'Customer Satisfaction',
      value: '+55%',
      description: 'Better service delivery',
    },
  ],
  testimonial: {
    quote: "The AI financial system has transformed our operations. We're processing transactions faster and providing better service to our clients.",
    author: "Sarah Thompson",
    position: "Operations Director",
    company: "Global Financial Services",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&h=600',
};