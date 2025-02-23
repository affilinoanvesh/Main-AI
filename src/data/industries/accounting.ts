import { Calculator } from 'lucide-react';
import { Industry } from './types';

export const accounting: Industry = {
  id: 'accounting',
  name: 'Accounting Firms',
  icon: Calculator,
  description: 'AI solutions for small accounting firms that automate bookkeeping, streamline tax preparation, and enhance client services.',
  challenges: [
    {
      title: 'Data Entry',
      description: 'Processing large volumes of receipts and invoices.',
    },
    {
      title: 'Tax Preparation',
      description: 'Managing complex tax calculations and deadlines.',
    },
    {
      title: 'Client Reporting',
      description: 'Generating and delivering financial reports efficiently.',
    },
  ],
  solutions: [
    {
      title: 'Smart Bookkeeping',
      description: 'AI-powered receipt and invoice processing.',
      timesSaved: '25 hours/week',
      roi: '320%',
    },
    {
      title: 'Tax Assistant',
      description: 'Automated tax calculation and verification.',
      timesSaved: '20 hours/week',
      roi: '290%',
    },
    {
      title: 'Report Generator',
      description: 'Intelligent financial report creation and delivery.',
      timesSaved: '15 hours/week',
      roi: '260%',
    },
  ],
  features: [
    {
      title: 'Document Processing',
      description: 'Automated receipt and invoice handling.',
    },
    {
      title: 'Tax Calculations',
      description: 'Smart tax preparation and review.',
    },
    {
      title: 'Client Portal',
      description: 'Secure document sharing and communication.',
    },
  ],
  integrations: [
    'QuickBooks',
    'Xero',
    'Drake Tax',
    'Bill.com',
    'Receipt Bank',
  ],
  metrics: [
    {
      label: 'Processing Time',
      value: '-75%',
      description: 'Faster document handling',
    },
    {
      label: 'Accuracy Rate',
      value: '99.9%',
      description: 'In financial calculations',
    },
    {
      label: 'Client Capacity',
      value: '+40%',
      description: 'More clients served',
    },
  ],
  testimonial: {
    quote: "The AI accounting system has transformed our practice. We're processing more transactions with better accuracy and serving more clients.",
    author: "Linda Chen",
    position: "Principal",
    company: "Chen Accounting Group",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=600',
};