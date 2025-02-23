import { Camera } from 'lucide-react';
import { Industry } from './types';

export const media: Industry = {
  id: 'media',
  name: 'Media & Entertainment',
  icon: Camera,
  description: 'AI solutions for media companies that automate content creation, optimize distribution, and enhance audience engagement.',
  challenges: [
    {
      title: 'Content Creation',
      description: 'Producing engaging content efficiently.',
    },
    {
      title: 'Audience Targeting',
      description: 'Reaching the right audience with content.',
    },
    {
      title: 'Performance Tracking',
      description: 'Measuring and optimizing content impact.',
    },
  ],
  solutions: [
    {
      title: 'Content AI',
      description: 'AI-powered content creation and optimization.',
      timesSaved: '25 hours/week',
      roi: '310%',
    },
    {
      title: 'Audience Analytics',
      description: 'Smart audience targeting and engagement.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
    {
      title: 'Performance Tracking',
      description: 'Real-time content performance analysis.',
      timesSaved: '15 hours/week',
      roi: '250%',
    },
  ],
  features: [
    {
      title: 'Content Generation',
      description: 'AI-assisted content creation tools.',
    },
    {
      title: 'Audience Insights',
      description: 'Deep audience behavior analysis.',
    },
    {
      title: 'Distribution Optimization',
      description: 'Smart content distribution system.',
    },
  ],
  integrations: [
    'Adobe Creative Cloud',
    'Hootsuite',
    'Google Analytics',
    'Sprout Social',
    'Buffer',
  ],
  metrics: [
    {
      label: 'Content Output',
      value: '+60%',
      description: 'Increased content production',
    },
    {
      label: 'Engagement',
      value: '+45%',
      description: 'Higher audience interaction',
    },
    {
      label: 'ROI',
      value: '+35%',
      description: 'Better content performance',
    },
  ],
  testimonial: {
    quote: "The AI content system has transformed our production process. We're creating more engaging content in less time.",
    author: "Sarah Thompson",
    position: "Content Director",
    company: "Digital Media Group",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&w=1200&h=600',
};