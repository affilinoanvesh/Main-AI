export interface LocalBusiness {
  id: string;
  name: string;
  logo: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  images: {
    main: string;
    store: string;
    solution: string;
  };
}

export const localBusinesses: Record<string, LocalBusiness> = {
  "bellas-boutique": {
    id: "bellas-boutique",
    name: "Bella's Boutique",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=300&h=150",
    description: "Local fashion boutique",
    fullDescription: "A family-owned fashion boutique offering curated collections for modern women",
    challenge: "Managing inventory across seasonal collections was becoming overwhelming. With limited staff, they struggled to predict which items would sell and when to reorder, leading to both overstock and stockouts.",
    solution: "Implemented a smart inventory management system with AI-powered sales prediction, helping them make data-driven decisions about stock levels and reordering.",
    implementation: [
      "Sales pattern analysis for seasonal trends",
      "Automated reorder suggestions",
      "Real-time inventory tracking",
      "Mobile app for quick stock checks",
      "Customer preference tracking"
    ],
    results: [
      "Reduced overstock by 40%",
      "Decreased stockouts by 60%",
      "Increased sales by 25%",
      "Saved 10 hours per week on inventory management",
      "Improved customer satisfaction with better product availability"
    ],
    testimonial: {
      quote: "The AI system has transformed how we manage our inventory. We're no longer guessing what will sell - we know, and that's made all the difference for our small business.",
      author: "Maria Garcia",
      position: "Owner, Bella's Boutique",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    },
    metrics: [
      {
        label: "Inventory Accuracy",
        value: "95%",
        description: "Up from 70% before implementation"
      },
      {
        label: "Time Saved",
        value: "10hrs/week",
        description: "On inventory management tasks"
      },
      {
        label: "Sales Increase",
        value: "25%",
        description: "Year over year after implementation"
      },
      {
        label: "ROI",
        value: "280%",
        description: "First year return on investment"
      }
    ],
    images: {
      main: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=600",
      store: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&h=600",
      solution: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600"
    }
  },
  "chen-accounting": {
    id: "chen-accounting",
    name: "Chen Accounting",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&h=150",
    description: "Small business accounting firm",
    fullDescription: "A local accounting firm specializing in small business finances",
    challenge: "Processing hundreds of client invoices manually was taking up to 4 hours daily, causing delays in client services and creating a backlog during tax season.",
    solution: "Developed a custom AI-powered invoice processing system that automatically extracts data and integrates with their accounting software.",
    implementation: [
      "Automated invoice data extraction",
      "QuickBooks integration",
      "Error detection system",
      "Client portal for invoice submission",
      "Mobile-friendly interface"
    ],
    results: [
      "Reduced processing time from 4 hours to 30 minutes daily",
      "Achieved 99% accuracy in data extraction",
      "Eliminated manual data entry errors",
      "Increased client capacity by 40%",
      "Improved work-life balance for staff"
    ],
    testimonial: {
      quote: "This AI solution has revolutionized how we handle client invoices. What used to take hours now takes minutes, and the accuracy is incredible.",
      author: "Sarah Chen",
      position: "Owner, Chen Accounting",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100"
    },
    metrics: [
      {
        label: "Time Saved",
        value: "87.5%",
        description: "Daily time savings on invoice processing"
      },
      {
        label: "Accuracy",
        value: "99%",
        description: "In automated data extraction"
      },
      {
        label: "Capacity Increase",
        value: "40%",
        description: "More clients served with same staff"
      },
      {
        label: "ROI",
        value: "320%",
        description: "First year return on investment"
      }
    ],
    images: {
      main: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&h=600",
      store: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=600",
      solution: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&h=600"
    }
  },
  "local-eats-co": {
    id: "local-eats-co",
    name: "Local Eats Co",
    logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=300&h=150",
    description: "Family-owned restaurant group",
    fullDescription: "A growing family restaurant business with three locations in the city",
    challenge: "Managing multiple locations led to inconsistent inventory levels, food waste, and difficulty in predicting daily preparation needs. Customer wait times were also increasing during peak hours.",
    solution: "Implemented an AI-powered kitchen management system that predicts daily demand, optimizes prep schedules, and manages inventory across locations.",
    implementation: [
      "Demand prediction by location",
      "Smart prep scheduling",
      "Cross-location inventory management",
      "Waste tracking and analysis",
      "Real-time kitchen performance monitoring"
    ],
    results: [
      "Reduced food waste by 35%",
      "Decreased customer wait times by 45%",
      "Improved inventory turnover by 25%",
      "Increased customer satisfaction scores by 30%",
      "Better staff scheduling efficiency"
    ],
    testimonial: {
      quote: "The AI system helps us predict exactly what we need each day. We're wasting less food, serving customers faster, and our staff is less stressed.",
      author: "James Wilson",
      position: "Owner, Local Eats Co",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    },
    metrics: [
      {
        label: "Waste Reduction",
        value: "35%",
        description: "Less food waste across all locations"
      },
      {
        label: "Wait Time",
        value: "-45%",
        description: "Reduction in customer wait times"
      },
      {
        label: "Efficiency",
        value: "+25%",
        description: "Improvement in kitchen efficiency"
      },
      {
        label: "Satisfaction",
        value: "+30%",
        description: "Increase in customer satisfaction"
      }
    ],
    images: {
      main: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&h=600",
      store: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=600",
      solution: "https://images.unsplash.com/photo-1557555187-23d685287bc3?auto=format&fit=crop&w=1200&h=600"
    }
  }
};