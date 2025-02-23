export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  brief: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  implementation: string[];
  results: string[];
  images: {
    main: string;
    process: string;
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  'appointment-booking': {
    id: 'appointment-booking',
    title: 'Smart Appointment Booking',
    industry: 'Beauty & Wellness',
    client: 'Serenity Spa & Salon',
    brief: 'AI-powered booking system that reduced no-shows by 75% and optimised bookings by 40%',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'No-shows Reduced', value: '75%' },
      { label: 'Booking Increase', value: '40%' },
      { label: 'Staff Time Saved', value: '15hrs/week' },
    ],
    challenge: 'Managing appointments for a busy salon was becoming overwhelming. With multiple stylists and services, they struggled with high no-show rates and inefficient scheduling that cost them valuable time and revenue.',
    solution: 'Implemented an AI-powered booking system that predicts optimal scheduling times, sends smart reminders, and reduces booking conflicts.',
    implementation: [
      'Smart scheduling algorithm',
      'Automated reminder system',
      'Client preference tracking',
      'No-show prediction',
      'Mobile-friendly booking interface',
    ],
    results: [
      'Reduced no-show rate from 20% to 5%',
      'Increased monthly bookings by 40%',
      'Saved 15 hours per week in scheduling management',
      'Improved client satisfaction scores by 35%',
      'Better staff utilization during peak hours',
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80',
      process: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=1200&q=80',
    },
  },
  'customer-support': {
    id: 'customer-support',
    title: 'AI Customer Service Assistant',
    industry: 'Retail',
    client: 'Local Boutique',
    brief: 'Simple chatbot handling common questions 24/7, freeing up staff to help in-shop customers',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Response Time', value: '-85%' },
      { label: 'Questions Automated', value: '70%' },
      { label: 'Customer Satisfaction', value: '+45%' },
    ],
    challenge: 'The boutique was struggling to handle the volume of customer inquiries about product availability, shipping, and returns while maintaining quality in-store service. Staff were constantly interrupted by phone calls and messages.',
    solution: 'Developed a simple AI chatbot that handles common customer questions, checks inventory, and manages basic support requests through their website and Facebook Messenger.',
    implementation: [
      'Website chat integration',
      'Facebook Messenger bot',
      'Inventory checking system',
      'Order status lookup',
      'Smart handoff to human staff',
    ],
    results: [
      'Reduced average response time from 3 hours to 10 minutes',
      'Automated 70% of common customer questions',
      'Increased customer satisfaction by 45%',
      'Freed up 20 hours per week of staff time',
      'Improved in-store service quality',
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
      process: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    },
  },
  'inventory-management': {
    id: 'inventory-management',
    title: 'Smart Inventory Control',
    industry: 'Retail & Restaurant',
    client: 'Family Market',
    brief: 'AI-powered system that predicts stock needs and reduces waste for small retailers',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Waste Reduction', value: '35%' },
      { label: 'Stock Accuracy', value: '95%' },
      { label: 'Time Saved', value: '10hrs/week' },
    ],
    challenge: 'Managing inventory across multiple product categories was leading to significant waste and frequent stockouts. Manual inventory counts were time-consuming and often inaccurate.',
    solution: 'Implemented an AI-powered inventory management system that predicts demand, automates reordering, and optimizes stock levels based on historical sales data and seasonal trends.',
    implementation: [
      'Sales pattern analysis',
      'Automated reorder points',
      'Waste tracking system',
      'Mobile inventory counting',
      'Supplier integration',
    ],
    results: [
      'Reduced food waste by 35%',
      'Improved inventory accuracy to 95%',
      'Saved 10 hours per week on inventory management',
      'Decreased stockouts by 60%',
      'Increased profit margins by 15%',
    ],
    images: {
      main: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
      process: 'https://images.unsplash.com/photo-1556741533-974f8e62a27d?auto=format&fit=crop&w=1200&q=80',
    },
  },
};