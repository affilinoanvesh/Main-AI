import { Users } from 'lucide-react';
import { Industry } from './types';

export const hr: Industry = {
  id: 'hr',
  name: 'Human Resources',
  icon: Users,
  description: 'AI solutions for HR departments that streamline recruitment, employee onboarding, and talent management.',
  challenges: [
    {
      title: 'Recruitment Process',
      description: 'Screening hundreds of resumes and identifying qualified candidates efficiently.',
    },
    {
      title: 'Employee Onboarding',
      description: 'Managing paperwork and training for new hires.',
    },
    {
      title: 'Performance Management',
      description: 'Tracking employee performance and providing timely feedback.',
    },
  ],
  solutions: [
    {
      title: 'Smart Recruitment',
      description: 'AI-powered resume screening and candidate matching.',
      timesSaved: '30 hours/week',
      roi: '350%',
    },
    {
      title: 'Automated Onboarding',
      description: 'Digital onboarding workflow with automated document processing.',
      timesSaved: '20 hours/week',
      roi: '280%',
    },
    {
      title: 'Performance Analytics',
      description: 'AI-driven performance tracking and feedback system.',
      timesSaved: '15 hours/week',
      roi: '240%',
    },
  ],
  features: [
    {
      title: 'Resume Analysis',
      description: 'Automated skill matching and candidate scoring.',
    },
    {
      title: 'Digital Onboarding',
      description: 'Streamlined paperwork and training management.',
    },
    {
      title: 'Performance Tracking',
      description: 'Real-time employee performance monitoring.',
    },
  ],
  integrations: [
    'Workday',
    'BambooHR',
    'ADP',
    'LinkedIn Recruiter',
    'Greenhouse',
  ],
  metrics: [
    {
      label: 'Hiring Time',
      value: '-60%',
      description: 'Faster recruitment process',
    },
    {
      label: 'Onboarding Efficiency',
      value: '+75%',
      description: 'Improved onboarding completion',
    },
    {
      label: 'Employee Satisfaction',
      value: '+40%',
      description: 'Better HR service delivery',
    },
  ],
  testimonial: {
    quote: "The AI HR system has revolutionized our recruitment and onboarding processes. We're saving countless hours and making better hiring decisions.",
    author: "Jennifer Lee",
    position: "HR Director",
    company: "Global Innovations Inc",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&h=600',
};