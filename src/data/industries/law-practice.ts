import { Scale } from 'lucide-react';
import { Industry } from './types';

export const lawPractice: Industry = {
  id: 'law-practice',
  name: 'Law Practices',
  icon: Scale,
  description: 'AI solutions for small law firms that automate document review, streamline case management, and enhance client communication.',
  challenges: [
    {
      title: 'Document Management',
      description: 'Organizing and reviewing large volumes of case documents.',
    },
    {
      title: 'Client Communication',
      description: 'Keeping clients updated on case progress and deadlines.',
    },
    {
      title: 'Time Tracking',
      description: 'Accurately tracking billable hours and managing invoices.',
    },
  ],
  solutions: [
    {
      title: 'Document AI',
      description: 'AI-powered legal document analysis and organization.',
      timesSaved: '20 hours/week',
      roi: '300%',
    },
    {
      title: 'Client Portal',
      description: 'Automated case updates and communication system.',
      timesSaved: '15 hours/week',
      roi: '250%',
    },
    {
      title: 'Time & Billing',
      description: 'Smart time tracking and invoice management.',
      timesSaved: '10 hours/week',
      roi: '220%',
    },
  ],
  features: [
    {
      title: 'Document Analysis',
      description: 'Smart legal document review and organization.',
    },
    {
      title: 'Case Management',
      description: 'Automated deadline tracking and updates.',
    },
    {
      title: 'Client Communication',
      description: 'Secure messaging and document sharing.',
    },
  ],
  integrations: [
    'Clio',
    'MyCase',
    'PracticePanther',
    'TimeSolv',
    'NetDocuments',
  ],
  metrics: [
    {
      label: 'Document Review',
      value: '-65%',
      description: 'Faster document processing',
    },
    {
      label: 'Client Response',
      value: '-80%',
      description: 'Quicker communication',
    },
    {
      label: 'Billable Hours',
      value: '+25%',
      description: 'More accurate time tracking',
    },
  ],
  testimonial: {
    quote: "The AI legal system has revolutionized our small firm. We're handling more cases while providing better service to our clients.",
    author: "James Wilson",
    position: "Managing Partner",
    company: "Wilson Law Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=600',
};