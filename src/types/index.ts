export interface Course {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  benefits: string[];
  badge?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

export interface NavItem {
  label: string;
  href: string;
}
