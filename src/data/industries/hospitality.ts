import { Hotel } from 'lucide-react';
import { Industry } from './types';

export const hospitality: Industry = {
  id: 'hospitality',
  name: 'Hospitality',
  icon: Hotel,
  description: 'AI solutions for hotels, restaurants, and hospitality businesses that enhance guest experience and streamline operations.',
  challenges: [
    {
      title: 'Guest Experience',
      description: 'Managing guest requests and personalizing service.',
    },
    {
      title: 'Resource Management',
      description: 'Optimizing staff scheduling and inventory.',
    },
    {
      title: 'Booking Efficiency',
      description: 'Maximizing occupancy and managing reservations.',
    },
  ],
  solutions: [
    {
      title: 'Guest AI',
      description: 'AI-powered guest service and experience management.',
      timesSaved: '25 hours/week',
      roi: '320%',
    },
    {
      title: 'Smart Operations',
      description: 'Automated resource and inventory management.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
    {
      title: 'Booking Optimizer',
      description: 'Intelligent reservation and occupancy management.',
      timesSaved: '15 hours/week',
      roi: '250%',
    },
  ],
  features: [
    {
      title: 'Guest Services',
      description: 'Automated request handling and personalization.',
    },
    {
      title: 'Resource Planning',
      description: 'Smart staff and inventory management.',
    },
    {
      title: 'Revenue Management',
      description: 'Dynamic pricing and booking optimization.',
    },
  ],
  integrations: [
    'Opera PMS',
    'Cloudbeds',
    'HotSOS',
    'OpenTable',
    'Toast POS',
  ],
  metrics: [
    {
      label: 'Guest Satisfaction',
      value: '+45%',
      description: 'Improved service quality',
    },
    {
      label: 'Occupancy Rate',
      value: '+30%',
      description: 'Better capacity utilization',
    },
    {
      label: 'Revenue Growth',
      value: '+35%',
      description: 'Increased business performance',
    },
  ],
  testimonial: {
    quote: "The AI hospitality system has transformed how we serve our guests. We're providing better service while operating more efficiently.",
    author: "Lisa Chen",
    position: "General Manager",
    company: "Grand Hotel & Spa",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=600',
};