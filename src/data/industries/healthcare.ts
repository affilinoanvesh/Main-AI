import { Stethoscope } from 'lucide-react';
import { Industry } from './types';

export const healthcare: Industry = {
  id: 'healthcare',
  name: 'Healthcare',
  icon: Stethoscope,
  description: 'AI solutions for medical practices, clinics, and healthcare providers that streamline patient care and reduce administrative burden.',
  challenges: [
    {
      title: 'Patient Scheduling',
      description: 'Managing appointments, reducing wait times, and minimizing no-shows.',
    },
    {
      title: 'Documentation',
      description: 'Time-consuming medical record updates and paperwork.',
    },
    {
      title: 'Patient Communication',
      description: 'Following up with patients and providing timely information.',
    },
  ],
  solutions: [
    {
      title: 'Smart Scheduling',
      description: 'AI-powered appointment management with automated reminders.',
      timesSaved: '20 hours/week',
      roi: '310%',
    },
    {
      title: 'Voice-to-Text Documentation',
      description: 'Automated medical record updates using voice recognition.',
      timesSaved: '15 hours/week',
      roi: '250%',
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
      title: 'Intelligent Scheduling',
      description: 'Optimizes appointment slots and reduces wait times.',
    },
    {
      title: 'Voice Recognition',
      description: 'Accurate medical transcription and record updates.',
    },
    {
      title: 'Patient Portal',
      description: 'Self-service appointment booking and communication.',
    },
  ],
  integrations: [
    'Epic',
    'Cerner',
    'Athenahealth',
    'DrChrono',
    'Practice Fusion',
  ],
  metrics: [
    {
      label: 'Time Saved',
      value: '45hrs/week',
      description: 'On administrative tasks',
    },
    {
      label: 'Patient Satisfaction',
      value: '+40%',
      description: 'Improvement in satisfaction scores',
    },
    {
      label: 'No-Show Rate',
      value: '-70%',
      description: 'Reduction in missed appointments',
    },
  ],
  testimonial: {
    quote: "The AI system has transformed our practice. We spend less time on paperwork and more time with patients.",
    author: "Dr. Emily Chen",
    position: "Medical Director",
    company: "Wellness Medical Center",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&h=600',
};