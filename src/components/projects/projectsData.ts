export interface Project {
  id: string
  code: string
  title: string
  category: string
  shortDescription: string
  description: string
  technologies: string[]
  highlights: string[]
  image: string
  liveUrl?: string
  githubUrl: string
  featured?: boolean
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'heavy-equipment-price-prediction',
    code: '01',
    title: 'Heavy Equipment Price Prediction',
    category: 'Machine Learning',
    shortDescription: 'End-to-end auction price prediction pipeline.',
    description:
      'End-to-end machine learning pipeline for predicting auction sale prices of heavy construction machinery. Built with temporal validation strategies, comprehensive feature engineering, and stacked gradient boosted models.',
    technologies: ['Python', 'Pandas', 'LightGBM', 'XGBoost', 'CatBoost'],
    highlights: [
      'Kaggle rank: 135 / 2,593 (Top 5.2%)',
      'Engineered domain-specific temporal and machine configuration features',
      'Ensemble modeling combining LightGBM, XGBoost, and CatBoost',
      'Evaluated using Root Mean Squared Logarithmic Error (RMSLE)',
    ],
    image: '/images/projects/heavy-equipment.png',
    liveUrl: 'https://anaskhan-pd.github.io/heavy-equipment-price-prediction/',
    githubUrl: 'https://github.com/anaskhan-pd/heavy-equipment-price-prediction',
    featured: true,
  },
  {
    id: 'hospix',
    code: '02',
    title: 'Hospix',
    category: 'Full-Stack Development',
    shortDescription: 'Full-stack hospital management platform.',
    description:
      'Comprehensive hospital management platform designed to orchestrate patient records, doctor scheduling, department workflows, and asynchronous background tasks.',
    technologies: ['Flask', 'Vue.js', 'SQLite', 'Redis', 'Celery'],
    highlights: [
      'Role-based access control for administrative staff, doctors, and patients',
      'Asynchronous task scheduling for automated reminders and reporting using Celery and Redis',
      'RESTful backend architecture built in Flask with relational SQLite storage',
      'Reactive user interface developed with Vue.js single page components',
    ],
    image: '/images/projects/hospix.png',
    githubUrl: 'https://github.com/anaskhan-pd/hospix',
    featured: false,
  },
  {
    id: 'bdm-capstone',
    code: '03',
    title: 'BDM Capstone',
    category: 'Business Analytics',
    shortDescription:
      'Business analytics project analysing enrollment and fee collection at Ganga Computer Center, Jaspur.',
    description:
      'Business analytics study evaluating longitudinal student enrollment numbers, payment compliance patterns, and course completion rates for Ganga Computer Center in Jaspur.',
    technologies: ['Python', 'Pandas', 'EDA', 'Chart.js'],
    highlights: [
      'Exploratory data analysis uncovering seasonal enrollment cycles and student drop-off stages',
      'Interactive visual dashboard tracking monthly fee dues and payment compliance',
      'Data cleaning and anomaly handling for fragmented historical records',
      'Strategic recommendations formulated to optimize course schedules and revenue collection',
    ],
    image: '/images/projects/bdm-capstone.png',
    liveUrl: 'https://anaskhan-pd.github.io/BDM-Capstone/',
    githubUrl: 'https://github.com/anaskhan-pd/BDM-Capstone',
    featured: false,
  },
  {
    id: 'excuse-generator-3000',
    code: '04',
    title: 'Excuse Generator 3000',
    category: 'Creative Web',
    shortDescription: 'Playful excuse-generation web application.',
    description:
      'Playful web application that dynamically generates context-aware, witty excuses for missed meetings, late deadlines, and unexpected social situations.',
    technologies: ['JavaScript', 'Cloudflare Workers', 'HTML/CSS'],
    highlights: [
      'Edge deployment deployed globally via Cloudflare Workers for sub-50ms latency',
      'Categorized excuse engine spanning workplace, social, and academic contexts',
      'Instant clipboard copy utility with responsive touch feedback',
      'Lightweight client architecture with zero external runtime dependencies',
    ],
    image: '/images/projects/excuse-generator.png',
    liveUrl: 'https://excuseme.anaspd.workers.dev/',
    githubUrl: 'https://github.com/anaskhan-pd/excuse-generator-3000',
    featured: false,
  },
]
