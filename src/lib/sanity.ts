import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: '3nean6sp', // Replace with your Sanity project ID
  dataset: 'production', // or the name of your dataset
  useCdn: true, // Enable CDN for faster response times
  apiVersion: '2025-07-12', // Use current date
});

// Image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// GROQ queries for fetching data
export const queries = {
  services: `*[_type == "service"] | order(popular desc, _createdAt asc) {
    _id,
    title,
    description,
    features,
    image,
    popular
  }`,
  
  galleryImages: `*[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    image,
    alt,
    category
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    image,
    rating,
    text,
    service
  }`,
  
  courses: `*[_type == "course"] | order(featured desc, _createdAt asc) {
    _id,
    title,
    duration,
    students,
    rating,
    price,
    image,
    description,
    highlights,
    featured
  }`
};

// TypeScript interfaces for type safety
export interface Service {
  _id: string;
  title: string;
  description: string;
  features: string[];
  image: any;
  popular: boolean;
}

export interface GalleryImage {
  _id: string;
  image: any;
  alt: string;
  category: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: any;
  rating: number;
  text: string;
  service: string;
}

export interface Course {
  _id: string;
  title: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  image: any;
  description: string;
  highlights: string[];
  featured: boolean;
}