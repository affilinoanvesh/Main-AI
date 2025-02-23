import { Phone } from 'lucide-react';
import { Industry } from './types';

export const telecommunications: Industry = {
  id: 'telecommunications',
  name: 'Telecommunications',
  icon: Phone,
  description: 'AI solutions for telecom providers that optimize network performance, customer support, and service delivery.',
  challenges: [
    {
      title: 'Network Management',
      description: 'Monitoring and optimizing network performance.',
    },
    {
      title: 'Customer Support',
      description: 'Handling high volumes of technical support requests.',
    },
    {
      title: 'Service Quality',
      description: 'Maintaining consistent service quality and uptime.',
    },
  ],
  solutions: [
    {
      title: 'Network AI',
      description: 'AI-powered network monitoring and optimization.',
      timesSaved: '30 hours/week',
      roi: '340%',
    },
    {
      title: 'Support Assistant',
      description: 'Automated technical support and troubleshooting.',
      timesSaved: '25 hours/week',
      roi: '290%',
    },
    {
      title: 'Service Analytics',
      description: 'Predictive maintenance and quality assurance.',
      timesSaved: '20 hours/week',
      roi: '270%',
    },
  ],
  features: [
    {
      title: 'Network Monitoring',
      description: 'Real-time performance tracking and optimization.',
    },
    {
      title: 'Support Automation',
      description: 'AI-driven customer support system.',
    },
    {
      title: 'Quality Assurance',
      description: 'Automated service quality monitoring.',
    },
  ],
  integrations: [
    'Cisco Systems',
    'Salesforce',
    'ServiceNow',
    'Zendesk',
    'Nagios',
  ],
  metrics: [
    {
      label: 'Network Uptime',
      value: '99.99%',
      description: 'Improved service reliability',
    },
    {
      label: 'Response Time',
      value: '-75%',
      description: 'Faster support resolution',
    },
    {
      label: 'Customer Satisfaction',
      value: '+50%',
      description: 'Higher service quality',
    },
  ],
  testimonial: {
    quote: "The AI network management system has transformed our operations. We're providing better service with fewer interruptions.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "TeleTech Solutions",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=600',
};