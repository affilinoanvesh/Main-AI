import { Briefcase } from 'lucide-react';
import { Industry } from './types';

export const legal: Industry = {
  id: 'legal',
  name: 'Legal Services',
  icon: Briefcase,
  description: 'AI solutions for law firms that automate document review, improve case research, and streamline client communication.',
  challenges: [
    {
      title: 'Document Review',
      description: 'Processing large volumes of legal documents and contracts.',
    },
    {
      title: 'Case Research',
      description: 'Finding relevant precedents and legal information quickly.',
    },
    {
      title: 'Client Communication',
      description: 'Managing client inquiries and case updates efficiently.',
    },
  ],
  solutions: [
    {
      title: 'Document AI',
      description: 'AI-powered legal document analysis and review.',
      timesSaved: '35 hours/week',
      roi: '380%',
    },
    {
      title: 'Research Assistant',
      description: 'Automated case law research and analysis.',
      timesSaved: '25 hours/week',
      roi: '310%',
    },
    {
      title: 'Client Portal',
      description: 'Automated client communication and case tracking.',
      timesSaved: '20 hours/week',
      roi: '270%',
    },
  ],
  features: [
    {
      title: 'Document Analysis',
      description: 'AI-powered contract review and risk assessment.',
    },
    {
      title: 'Case Research',
      description: 'Intelligent legal precedent search and analysis.',
    },
    {
      title: 'Client Management',
      description: 'Automated updates and communication system.',
    },
  ],
  integrations: [
    'Clio',
    'LexisNexis',
    'Westlaw',
    'DocuSign',
    'NetDocuments',
  ],
  metrics: [
    {
      label: 'Document Review',
      value: '-70%',
      description: 'Faster document processing',
    },
    {
      label: 'Research Time',
      value: '-65%',
      description: 'More efficient case research',
    },
    {
      label: 'Client Satisfaction',
      value: '+45%',
      description: 'Improved service delivery',
    },
  ],
  testimonial: {
    quote: "The AI legal system has transformed how we handle cases. We're processing documents faster and providing better service to our clients.",
    author: "Michael Chang",
    position: "Managing Partner",
    company: "Chang Legal Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=600',
};