import { GraduationCap } from 'lucide-react';
import { Industry } from './types';

export const education: Industry = {
  id: 'education',
  name: 'Education',
  icon: GraduationCap,
  description: 'AI solutions for schools, tutoring centers, and educational institutions that enhance learning and reduce administrative workload.',
  challenges: [
    {
      title: 'Student Assessment',
      description: 'Time-consuming grading and progress tracking.',
    },
    {
      title: 'Personalized Learning',
      description: 'Adapting to individual student needs and learning styles.',
    },
    {
      title: 'Administrative Tasks',
      description: 'Managing schedules, attendance, and parent communication.',
    },
  ],
  solutions: [
    {
      title: 'Automated Grading',
      description: 'AI-powered assessment and feedback system.',
      timesSaved: '15 hours/week',
      roi: '280%',
    },
    {
      title: 'Learning Analytics',
      description: 'Personalized learning paths based on student performance.',
      timesSaved: '10 hours/week',
      roi: '230%',
    },
    {
      title: 'Admin Automation',
      description: 'Streamlined scheduling and communication.',
      timesSaved: '12 hours/week',
      roi: '200%',
    },
  ],
  features: [
    {
      title: 'Smart Grading',
      description: 'Automated assessment with detailed feedback.',
    },
    {
      title: 'Progress Tracking',
      description: 'Real-time monitoring of student performance.',
    },
    {
      title: 'Parent Portal',
      description: 'Automated updates and communication.',
    },
  ],
  integrations: [
    'Google Classroom',
    'Canvas',
    'Blackboard',
    'Moodle',
    'Schoology',
  ],
  metrics: [
    {
      label: 'Grading Time',
      value: '-75%',
      description: 'Reduction in assessment time',
    },
    {
      label: 'Student Performance',
      value: '+35%',
      description: 'Improvement in test scores',
    },
    {
      label: 'Parent Engagement',
      value: '+60%',
      description: 'Increase in parent participation',
    },
  ],
  testimonial: {
    quote: "The AI tools have revolutionized how we teach and assess. Our teachers can focus on what matters most - helping students learn.",
    author: "Sarah Thompson",
    position: "Principal",
    company: "Innovation Academy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&h=600',
};