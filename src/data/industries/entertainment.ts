import { Music } from 'lucide-react';
import { Industry } from './types';

export const entertainment: Industry = {
  id: 'entertainment',
  name: 'Entertainment & Gaming',
  icon: Music,
  description: 'AI solutions for entertainment companies that optimize content creation, user engagement, and revenue generation.',
  challenges: [
    {
      title: 'Content Personalization',
      description: 'Delivering personalized content recommendations.',
    },
    {
      title: 'User Engagement',
      description: 'Maintaining high levels of user interaction.',
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximizing monetization opportunities.',
    },
  ],
  solutions: [
    {
      title: 'Content AI',
      description: 'AI-powered content recommendation engine.',
      timesSaved: '30 hours/week',
      roi: '340%',
    },
    {
      title: 'Engagement Optimizer',
      description: 'Smart user interaction and retention system.',
      timesSaved: '25 hours/week',
      roi: '300%',
    },
    {
      title: 'Revenue Maximizer',
      description: 'Intelligent monetization and pricing system.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
  ],
  features: [
    {
      title: 'Smart Recommendations',
      description: 'Personalized content delivery system.',
    },
    {
      title: 'User Analytics',
      description: 'Deep user behavior analysis.',
    },
    {
      title: 'Monetization Tools',
      description: 'Advanced revenue optimization features.',
    },
  ],
  integrations: [
    'Unity',
    'Unreal Engine',
    'AWS GameLift',
    'Steam',
    'Twitch API',
  ],
  metrics: [
    {
      label: 'User Retention',
      value: '+45%',
      description: 'Improved user engagement',
    },
    {
      label: 'Revenue Growth',
      value: '+60%',
      description: 'Increased monetization',
    },
    {
      label: 'Content Engagement',
      value: '+50%',
      description: 'Better content performance',
    },
  ],
  testimonial: {
    quote: "The AI entertainment system has transformed how we engage with our users. We're seeing unprecedented levels of engagement and revenue growth.",
    author: "Alex Chen",
    position: "Product Director",
    company: "GameVerse Studios",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=600',
};