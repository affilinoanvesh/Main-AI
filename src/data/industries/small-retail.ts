import { Store } from 'lucide-react';
import { Industry } from './types';

export const smallRetail: Industry = {
  id: 'small-retail',
  name: 'Small Retail & Boutiques',
  icon: Store,
  description: 'AI solutions for small shops and boutiques that streamline inventory, enhance customer service, and boost sales.',
  challenges: [
    {
      title: 'Inventory Management',
      description: 'Keeping track of stock levels and predicting demand.',
    },
    {
      title: 'Customer Service',
      description: 'Providing personalised attention with limited staff.',
    },
    {
      title: 'Competition',
      description: 'Competing with larger retailers and online shops.',
    },
  ],
  solutions: [
    {
      title: 'Smart Inventory',
      description: 'AI-powered stock prediction and management.',
      timesSaved: '15 hours/week',
      roi: '250%',
    },
    {
      title: 'Customer Assistant',
      description: 'Automated customer support and recommendations.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
    {
      title: 'Sales Optimizer',
      description: 'Smart pricing and promotion management.',
      timesSaved: '10 hours/week',
      roi: '230%',
    },
  ],
  features: [
    {
      title: 'Stock Prediction',
      description: 'Automated inventory forecasting and ordering.',
    },
    {
      title: 'Customer Insights',
      description: 'Personalized shopping recommendations.',
    },
    {
      title: 'Competitive Analysis',
      description: 'Market trend monitoring and pricing optimization.',
    },
  ],
  integrations: [
    'Square',
    'Shopify',
    'QuickBooks',
    'Mailchimp',
    'Facebook Shop',
  ],
  metrics: [
    {
      label: 'Sales Growth',
      value: '+35%',
      description: 'Increased revenue',
    },
    {
      label: 'Stock Accuracy',
      value: '98%',
      description: 'Improved inventory management',
    },
    {
      label: 'Customer Return Rate',
      value: '+45%',
      description: 'Better customer retention',
    },
  ],
  testimonial: {
    quote: "The AI retail system has transformed our boutique. We're managing inventory better and providing personalized service that keeps customers coming back.",
    author: "Maria Garcia",
    position: "Owner",
    company: "Bella's Boutique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=600',
};