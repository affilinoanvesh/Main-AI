import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Challenge {
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  description: string;
  timesSaved: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  challenges: Challenge[];
  solutions: Solution[];
  features: Feature[];
  integrations: string[];
  metrics: Metric[];
  image: string;
}