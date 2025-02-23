import { Plane } from 'lucide-react';
import { Industry } from './types';

export const logistics: Industry = {
  id: 'logistics',
  name: 'Logistics & Supply Chain',
  icon: Plane,
  description: 'AI solutions for logistics companies that optimize supply chain operations, route planning, and inventory management.',
  challenges: [
    {
      title: 'Route Optimization',
      description: 'Planning efficient delivery routes and schedules.',
    },
    {
      title: 'Supply Chain Visibility',
      description: 'Tracking shipments and managing inventory flow.',
    },
    {
      title: 'Resource Allocation',
      description: 'Optimizing vehicle and workforce utilization.',
    },
  ],
  solutions: [
    {
      title: 'Route AI',
      description: 'AI-powered route optimization system.',
      timesSaved: '35 hours/week',
      roi: '350%',
    },
    {
      title: 'Supply Chain Tracker',
      description: 'Real-time shipment and inventory monitoring.',
      timesSaved: '30 hours/week',
      roi: '320%',
    },
    {
      title: 'Resource Manager',
      description: 'Smart resource allocation and scheduling.',
      timesSaved: '25 hours/week',
      roi: '290%',
    },
  ],
  features: [
    {
      title: 'Route Planning',
      description: 'Dynamic route optimization system.',
    },
    {
      title: 'Shipment Tracking',
      description: 'Real-time supply chain visibility.',
    },
    {
      title: 'Resource Optimization',
      description: 'Efficient asset and workforce management.',
    },
  ],
  integrations: [
    'SAP TMS',
    'Oracle Transportation',
    'Manhattan Associates',
    'Descartes',
    'BluJay Solutions',
  ],
  metrics: [
    {
      label: 'Delivery Time',
      value: '-40%',
      description: 'Faster delivery completion',
    },
    {
      label: 'Route Efficiency',
      value: '+55%',
      description: 'Improved route optimization',
    },
    {
      label: 'Resource Usage',
      value: '+45%',
      description: 'Better asset utilization',
    },
  ],
  testimonial: {
    quote: "The AI logistics system has transformed our supply chain operations. We're delivering faster and more efficiently than ever.",
    author: "Michael Torres",
    position: "Operations Director",
    company: "Global Logistics Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=600',
};