import { ShoppingBag } from 'lucide-react';
import { Industry } from './types';

export const retail: Industry = {
  id: 'retail',
  name: 'Retail',
  icon: ShoppingBag,
  description: 'AI solutions for retail stores that optimize inventory, enhance customer service, and boost sales.',
  challenges: [
    {
      title: 'Inventory Management',
      description: 'Balancing stock levels and preventing stockouts.',
    },
    {
      title: 'Customer Service',
      description: 'Handling customer inquiries and support requests.',
    },
    {
      title: 'Sales Optimization',
      description: 'Maximizing revenue and reducing waste.',
    },
  ],
  solutions: [
    {
      title: 'Smart Inventory',
      description: 'AI-powered stock prediction and management.',
      timesSaved: '18 hours/week',
      roi: '290%',
    },
    {
      title: 'Customer Support Bot',
      description: 'Automated response system for common queries.',
      timesSaved: '25 hours/week',
      roi: '320%',
    },
    {
      title: 'Sales Analytics',
      description: 'Predictive insights for better decision-making.',
      timesSaved: '12 hours/week',
      roi: '250%',
    },
  ],
  features: [
    {
      title: 'Stock Prediction',
      description: 'AI-driven inventory forecasting.',
    },
    {
      title: '24/7 Support',
      description: 'Automated customer service assistance.',
    },
    {
      title: 'Sales Insights',
      description: 'Real-time analytics and recommendations.',
    },
  ],
  integrations: [
    'Shopify',
    'Square',
    'QuickBooks',
    'Xero',
    'Lightspeed',
  ],
  metrics: [
    {
      label: 'Stock Accuracy',
      value: '98%',
      description: 'Inventory management precision',
    },
    {
      label: 'Response Time',
      value: '-85%',
      description: 'Customer service improvement',
    },
    {
      label: 'Revenue Growth',
      value: '+40%',
      description: 'Year-over-year increase',
    },
  ],
  testimonial: {
    quote: "The AI system has transformed our retail operations. We've cut costs, improved service, and grown our business significantly.",
    author: "Michael Chen",
    position: "Owner",
    company: "Modern Retail Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=600',
};