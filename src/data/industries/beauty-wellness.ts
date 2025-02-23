import { Brain } from 'lucide-react';
import type { Industry } from './types';

export const beautyWellness: Industry = {
  id: 'beauty-wellness',
  name: 'Beauty & Wellness',
  icon: Brain,
  description: 'AI solutions for salons, spas, and wellness centers that streamline bookings, reduce no-shows, and enhance client experience.',
  challenges: [
    {
      title: 'Complex Scheduling',
      description: 'Managing multiple practitioners, services, and appointment types while minimizing gaps and maximizing revenue.',
    },
    {
      title: 'High No-Show Rates',
      description: 'Lost revenue and wasted time due to last-minute cancellations and no-shows.',
    },
    {
      title: 'Client Communication',
      description: 'Time spent on appointment reminders, follow-ups, and managing client preferences.',
    },
  ],
  solutions: [
    {
      title: 'Smart Booking System',
      description: 'AI-powered scheduling that optimizes appointments and reduces gaps.',
      timesSaved: '15 hours/week',
      roi: '280%',
    },
    {
      title: 'Automated Client Communication',
      description: 'Intelligent reminders and follow-ups that reduce no-shows.',
      timesSaved: '10 hours/week',
      roi: '220%',
    },
    {
      title: 'Client Insights',
      description: 'Predictive analytics for personalized service recommendations.',
      timesSaved: '8 hours/week',
      roi: '190%',
    },
  ],
  features: [
    {
      title: 'Smart Scheduling',
      description: 'Optimizes appointment slots based on service duration and staff availability.',
    },
    {
      title: 'No-Show Prevention',
      description: 'AI-powered reminders and booking confirmation system.',
    },
    {
      title: 'Client Preferences',
      description: 'Tracks and suggests services based on client history.',
    },
  ],
  integrations: [
    'Mindbody',
    'Vagaro',
    'Square Appointments',
    'Booksy',
    'Fresha',
  ],
  metrics: [
    {
      label: 'No-Show Reduction',
      value: '75%',
      description: 'Average reduction in appointment no-shows',
    },
    {
      label: 'Revenue Increase',
      value: '35%',
      description: 'Through optimized scheduling and reduced gaps',
    },
    {
      label: 'Time Saved',
      value: '25hrs/week',
      description: 'On administrative tasks and scheduling',
    },
  ],
  testimonial: {
    quote: "The AI booking system has transformed our salon. We've cut no-shows dramatically and our schedule is always optimized for maximum revenue.",
    author: "Sarah Chen",
    position: "Owner",
    company: "Serenity Spa & Salon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&h=600',
};