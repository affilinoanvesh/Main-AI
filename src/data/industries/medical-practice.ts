import { Stethoscope } from 'lucide-react';
import type { Industry } from './types';

export const medicalPractice: Industry = {
  id: 'medical-practice',
  name: 'Medical Practices',
  icon: Stethoscope,
  description: 'AI solutions for small medical practices that streamline patient care, reduce paperwork, and improve scheduling.',
  challenges: [
    {
      title: 'Patient Scheduling',
      description: 'Managing appointments and reducing no-shows for small practices.',
    },
    {
      title: 'Medical Records',
      description: 'Handling patient documentation and insurance paperwork efficiently.',
    },
    {
      title: 'Patient Communication',
      description: 'Following up with patients and managing reminders.',
    },
  ],
  solutions: [
    {
      title: 'Smart Scheduler',
      description: 'AI-powered appointment management with automated reminders.',
      timesSaved: '15 hours/week',
      roi: '280%',
    },
    {
      title: 'Documentation Assistant',
      description: 'Voice-to-text and automated medical record updates.',
      timesSaved: '12 hours/week',
      roi: '240%',
    },
    {
      title: 'Patient Engagement',
      description: 'Automated follow-ups and health reminders.',
      timesSaved: '10 hours/week',
      roi: '200%',
    },
  ],
  features: [
    {
      title: 'Appointment Management',
      description: 'Smart scheduling and reminder system.',
    },
    {
      title: 'Voice Documentation',
      description: 'Hands-free medical record updates.',
    },
    {
      title: 'Patient Portal',
      description: 'Self-service appointment booking and communication.',
    },
  ],
  integrations: [
    'DrChrono',
    'Practice Fusion',
    'Kareo',
    'eClinicalWorks',
    'athenahealth',
  ],
  metrics: [
    {
      label: 'No-Show Rate',
      value: '-70%',
      description: 'Reduction in missed appointments',
    },
    {
      label: 'Documentation Time',
      value: '-60%',
      description: 'Faster record keeping',
    },
    {
      label: 'Patient Satisfaction',
      value: '+45%',
      description: 'Improved service delivery',
    },
  ],
  testimonial: {
    quote: "The AI system has transformed our small practice. We spend less time on paperwork and more time with patients.",
    author: "Dr. Sarah Miller",
    position: "Family Physician",
    company: "Miller Family Practice",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&h=600',
};