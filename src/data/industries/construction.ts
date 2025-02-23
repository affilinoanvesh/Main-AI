import { Construction } from 'lucide-react';
import { Industry } from './types';

export const construction: Industry = {
  id: 'construction',
  name: 'Construction',
  icon: Construction,
  description: 'AI solutions for construction companies that optimize project management, safety compliance, and resource allocation.',
  challenges: [
    {
      title: 'Project Planning',
      description: 'Managing complex project timelines and resources.',
    },
    {
      title: 'Safety Compliance',
      description: 'Ensuring workplace safety and regulatory compliance.',
    },
    {
      title: 'Resource Allocation',
      description: 'Optimizing equipment and workforce deployment.',
    },
  ],
  solutions: [
    {
      title: 'Project AI',
      description: 'AI-powered project planning and management.',
      timesSaved: '30 hours/week',
      roi: '340%',
    },
    {
      title: 'Safety Monitor',
      description: 'Automated safety compliance and monitoring.',
      timesSaved: '25 hours/week',
      roi: '300%',
    },
    {
      title: 'Resource Optimizer',
      description: 'Smart resource allocation and scheduling.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
  ],
  features: [
    {
      title: 'Project Management',
      description: 'Intelligent project tracking and optimization.',
    },
    {
      title: 'Safety Compliance',
      description: 'Automated safety monitoring and reporting.',
    },
    {
      title: 'Resource Planning',
      description: 'Smart equipment and workforce management.',
    },
  ],
  integrations: [
    'Procore',
    'PlanGrid',
    'BuilderTREND',
    'Autodesk BIM 360',
    'ConstructConnect',
  ],
  metrics: [
    {
      label: 'Project Efficiency',
      value: '+40%',
      description: 'Improved project completion',
    },
    {
      label: 'Safety Incidents',
      value: '-65%',
      description: 'Reduced workplace accidents',
    },
    {
      label: 'Resource Utilization',
      value: '+35%',
      description: 'Better resource management',
    },
  ],
  testimonial: {
    quote: "The AI construction system has revolutionized how we manage projects. We're completing work faster and safer than ever before.",
    author: "John Martinez",
    position: "Project Director",
    company: "BuildTech Construction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&h=600',
};