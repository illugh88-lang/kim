
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  description?: string;
  isWide?: boolean;
}

export interface Service {
  title: string;
  subItems: string[];
}

export interface Testimonial {
  id: string;
  number: string;
  quote: string;
  author: string;
  company: string;
  avatar: string;
}
