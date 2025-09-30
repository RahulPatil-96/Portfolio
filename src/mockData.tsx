import React from 'react';
import { Code, Server, Terminal, Database, Zap, Github, Linkedin, Instagram, PackageSearch } from 'lucide-react';
import photo1 from '/photo1.jpg';
import photo2 from '/photo2.jpg';
import photo3 from '/photo3.jpg';
import photo4 from '/photo4.jpg';
import photo5 from '/photo5.jpg';
import photo6 from '/photo6.jpg';
import photo7 from '/photo7.jpg';
import photo8 from '/photo8.jpg';
import photo9 from '/photo9.jpg';
import photo10 from '/photo10.jpg';
import photo11 from '/photo11.jpg';
import cert1 from '/cert1.jpg';
import cert2 from '/cert2.jpg';
import cert3 from '/cert3.jpg';
import cert4 from '/cert4.jpg';
import cert5 from '/cert5.jpg';
import cert6 from '/cert6.jpg';
import cert7 from '/cert7.jpg';
import cert8 from '/cert8.jpg';

interface Technologies {
  frontend: string[];
  backend: string[];
  database: string[];
  deployment: string[];
}

export interface Project {
  stats: any;
  title: string;
  description: string;
  image: string;
  technologies: Technologies;
  live: string;
  github: string;
  icon: React.ReactNode;
  color: string;
  featured: boolean;
}

export const education = [
  {
    icon: 'Star',
    title: 'HSC (MSBSHSE)',
    institute: 'M. M College, Pachora',
    details: 'Percentage: 81.33% | Year: 2022',
  },
  {
    icon: 'Trophy',
    title: 'SSC (CBSE)',
    institute: 'Nirmal International School, Pachora',
    details: 'Percentage: 79.80% | Year: 2020',
  },
];

export const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'College Asset Management System',
    location: 'Pune, Maharashtra',
    period: 'Jul 2025 – Present',
    description:
      'Developed a full-stack web application to manage lab assets, issues, transfers, and approvals within a college infrastructure.',
    achievements: [
      'Implemented role-based access control for 4 distinct user types (HOD, Lab Incharge, Assistant, Faculty)',
      'Integrated real-time notifications and audit logging using Supabase and React',
      'Built data export features (Excel/PDF) and dynamic analytics dashboards using Chart.js'
    ],
    colorLight: 'from-emerald-500 to-lime-500',
    colorDark: 'from-emerald-700 to-lime-700',
    icon: <PackageSearch />,
    featured: true
  },
  {
    title: 'Full Stack Developer (Ongoing)',
    company: 'ERP System for College',
    location: 'Pune, Maharashtra',
    period: 'Mar 2025 – Present',
    description:
      'Designing and developing a college ERP system for academic record management and internal workflows.',
    achievements: [
      'Implemented real-time synchronization using Supabase',
      'Built secure authentication and scalable backend with Nest.js',
      'Integrated modern responsive UI with Tailwind CSS and React'
    ],
    colorLight: 'from-emerald-500 to-teal-500',
    colorDark: 'from-emerald-700 to-teal-700',
    icon: <Database />,
    featured: true
  },
  {
    title: 'Full Stack Developer (Ongoing)',
    company: 'Training & Placement Portal',
    location: 'Pune, Maharashtra',
    period: 'May 2025 – Present',
    description:
      'Developing a portal to manage student placements, job listings, and recruiter interactions.',
    achievements: [
      'Built core logic for student-job matching system',
      'Implemented backend APIs with Nest.js and Supabase',
      'Designed UI for profile management and real-time notifications'
    ],
    colorLight: 'from-indigo-500 to-blue-500',
    colorDark: 'from-indigo-700 to-blue-700',
    icon: <Zap />,
    featured: false
  },
  {
    title: 'AI & ML Developer',
    company: 'Smart Traffic Signal Project (Academic)',
    location: 'Pune, Maharashtra',
    period: 'Jan 2025 – Mar 2025',
    description:
      'Built an intelligent traffic signal system using YOLOv8 and OpenCV, with real-time visualization and monitoring.',
    achievements: [
      'Achieved over 85% vehicle detection accuracy',
      'Reduced intersection wait time by 30%',
      'Developed a Streamlit dashboard for live data of 4+ intersections'
    ],
    colorLight: 'from-orange-500 to-yellow-500',
    colorDark: 'from-orange-700 to-yellow-700',
    icon: <Terminal />,
    featured: false
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Pimpri Chinchwad Police Commissionerate',
    location: 'Pune, Maharashtra',
    period: 'Oct 2024 – Jan 2025',
    description:
      'Developed an Electron.js-based complaint and document tracking system to streamline internal operations for the police department.',
    achievements: [
      'Reduced paperwork by 50% and document retrieval time by 40%',
      'Used by 10+ officers to manage over 2,500 complaints and 1,000 documents',
      'Received recognition from the Commissioner of Police for system efficiency'
    ],
    colorLight: 'from-rose-500 to-pink-500',
    colorDark: 'from-rose-700 to-pink-700',
    icon: <Server />,
    featured: false
  },
];

export const certifications = [
  {
    title: "Appreciation Letter",
    issuer: "Commissioner Office",
    date: "2025",
    image: cert1,
    link: "https://drive.google.com/file/d/1R5e1YrEy4Tje2UkSJt7uF_FK8QpSGwwM/view?usp=sharing"
  },
  {
    title: "Genrative AI",
    issuer: "Google Cloud",
    date: "2024",
    image: cert2,
    link: "https://drive.google.com/file/d/1tVjij3KIpJQBjOcpCKoZsermuqLC_Y-W/view?usp=sharing"
  },
  {
    title: "AI-ML",
    issuer: "Google For Developer",
    date: "2024",
    image: cert3,
    link: "https://drive.google.com/file/d/12h9ZXiQgcRdbeKMOpQOz42kNqtAt3UZF/view?usp=sharing"
  },
  {
    title: "Networt Security Associate",
    issuer: "Fortinet",
    date: "2024",
    image: cert4,
    link: "https://drive.google.com/file/d/19eZuqgXsr0yYlJQq9RMf5t5hg23QVutT/view?usp=sharing"
  },
  {
    title: "Python",
    issuer: "IIT Bombay",
    date: "2023",
    image: cert5,
    link: "https://drive.google.com/file/d/10eEu85CKLr-Q8IA54FewU92jD0Ux9SaQ/view?usp=sharing"
  },
  {
    title: "MongoDB",
    issuer: "MongoDB",
    date: "2025",
    image: cert6,
    link: "https://drive.google.com/file/d/1Iu7IJQB5kpln6POnvDrqW-dn3MieUxEt/view?usp=sharing"
  },
  {
    title: "C++",
    issuer: "IIT Bombay",
    date: "2023",
    image: cert7,
    link: "https://drive.google.com/file/d/1TWVSumqaxPYTNKt0HUpKBlKelby5EsOb/view?usp=sharing"
  },
  {
    title: "Intoduction to AI",
    issuer: "IBM",
    date: "Year",
    image: cert8,
    link: "https://drive.google.com/file/d/1ViOHgs-lIDznG4MZA7viV8qcrOy24Ms0/view?usp=sharing"
  }
];

export const projects: Project[] = [
  {
    title: "College Asset Management System",
    description: "A comprehensive web-based Asset Management System for colleges to track and manage IT/lab equipment with role-based access control, automated workflows, and real-time notifications. Users can manage assets, track issues, and streamline lab operations.",
    image: "https://t4.ftcdn.net/jpg/05/38/09/63/360_F_538096344_ctEQT3NWRkRQ4egteP2mrZH37Kl1GROM.jpg",
    technologies: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS"],
      backend: ["Supabase"],
      database: ["PostgreSQL"],
      deployment: ["JSPM’s Rajarshi Shahu College of Engineering"],
    },
    github: "https://github.com/RahulPatil-96/Assets-Management",
    live: "https://assets-flow.vercel.app/",
    color: "from-teal-500 to-amber-500",
    stats: { views: "15K", stars: "220", trend: "+8%" },
    icon: <Server />,
    featured: true
  },
  {
    title: "Complaint Tracking System",
    description:
      "Built an Electron.js desktop app used by 10+ officers to track 2,500+ complaints reducing paperwork by 50% and retrieval time by 40%. Received recognition from the Commissioner of Police for enhancing internal tracking processes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["Electron.js", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js"],
      database: ["SQLite"],
      deployment: ["Pimpri Chinchwad Police Commissionerate"],
    },
    github: "https://github.com/RahulPatil-96/Complaint_Management_Portal",
    live: "#",
    color: "from-cyan-500 to-blue-500",
    stats: { views: "12.4K", stars: "180", trend: "+10%" },
    icon: <Server />,
    featured: true
  },
  {
    title: "Document Tracking System",
    description:
      "Built an Electron.js desktop app used by 10+ officers to track 1,000+ documents, reducing paperwork by 50% and retrieval time by 40%. Received recognition from the Commissioner of Police for enhancing internal tracking processes.",
    image:
      "https://static.tnn.in/thumb/msid-90675265,thumbsize-35012,width-1280,height-720,resizemode-75/90675265.jpg?quality=100",
    technologies: {
      frontend: ["Electron.js", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js"],
      database: ["SQLite"],
      deployment: [
        "Pimpri Chinchwad Police Commissionerate",
        "JSPM’s Rajarshi Shahu College of Engineering",
      ],
    },
    github: "https://github.com/RahulPatil-96/Inward-Outward-Portal",
    live: "#",
    color: "from-rose-500 to-pink-500",
    stats: { views: "9.8K", stars: "150", trend: "+12%" },
    icon: <Server />,
    featured: true
  },
  {
    title: "Real-time Smart Traffic Signal Management system",
    description:
      "Achieved 85%+ vehicle detection accuracy and cut wait times by 30%. Streamlit dashboard monitored 4+ intersections with real-time traffic analytics.",
    image:
      "https://img.freepik.com/free-photo/demographic-census-concept-representation_23-2149093905.jpg?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["Streamlit", "Plotly"],
      backend: ["Python"],
      database: [],
      deployment: [],
    },
    github: "https://github.com/RahulPatil-96/Traffic-Management",
    live: "#",
    color: "from-emerald-500 to-green-500",
    stats: { views: "8.2K", stars: "120", trend: "+7%" },
    icon: <Terminal />,
    featured: false
  },
  {
    title: "ERP for College",
    description:
      "Creating a full-stack ERP platform for managing academics, workflows, and user roles. Developed REST APIs and integrated real-time sync and auth with Nest.js and Supabase.",
    image:
      "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149373210.jpg?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Nest.js"],
      database: ["Supabase"],
      deployment: [],
    },
    github: "https://github.com/RahulPatil-96/ERP",
    live: "https://delta-edu-erp.vercel.app/",
    color: "from-purple-500 to-violet-500",
    stats: { views: "10.6K", stars: "210", trend: "+11%" },
    icon: <Database />,
    featured: false
  },
  {
    title: "Training and Placement Portal for College",
    description:
      "Designing a role-based portal for students, recruiters, and admins with real-time updates. Built backend logic for profiles, job listings, and applications using Nest.js and Supabase.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Nest.js"],
      database: ["Supabase"],
      deployment: [],
    },
    github: "https://github.com/RahulPatil-96/Training-and-placement-portal",
    live: "#",
    color: "from-indigo-500 to-blue-500",
    stats: { views: "11.1K", stars: "175", trend: "+9%" },
    icon: <Zap />,
    featured: false
  },
  {
    title: "Full Stack Paytm App",
    description: "A full stack app mimicking Paytm functionalities.",
    image:
      "https://img.freepik.com/free-vector/flat-design-minimal-technology-facebook-post_23-2149146031.jpg?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      deployment: [],
    },
    github: "https://github.com/example/repo3",
    live: "https://example.com/demo3",
    color: "from-pink-500 to-rose-500",
    stats: { views: "15.2K", stars: "312", trend: "+8%" },
    icon: <Code />,
    featured: false
  },
];


export const testimonials = [
  {
    id: 1,
    name: 'Vinoy Kumar Choubey',
    role: 'Commissioner of Police',
    message: 'The system significantly improved our internal document tracking and reduced manual workload across departments.',
    avatarUrl: 'https://mumbaimessenger.com/wp-content/uploads/2020/09/Vinoy-Choube-IPS.jpg',
  },
  {
    id: 2,
    name: 'Sandeep Doiphode',
    role: 'Deputy Commissioner of Police',
    message: 'A technically robust and user-friendly solution. It streamlined complaint handling and boosted operational efficiency.',
    avatarUrl: photo7,
  },
  {
    id: 3,
    name: 'Ravikiran Nale',
    role: 'Police Inspector',
    message: 'The application enhanced real-time tracking and made information access faster and more reliable.',
    avatarUrl: photo6,
  },
  {
    id: 4,
    name: 'Saagar Panmand',
    role: 'Police Inspector',
    message: 'An impactful tool that brought clarity and speed to our documentation and complaint systems.',
    avatarUrl: photo10,
  },
  {
    id: 5,
    name: 'Pravin Swami',
    role: 'Assistant Police Inspector',
    message: 'Very effective software that addressed real problems in our workflow. The interface is intuitive and efficient.',
    avatarUrl: photo9,
  },
  {
    id: 6,
    name: 'Sagar Poman',
    role: 'Police Sub Inspector',
    message: 'A practical and well-developed solution that helped reduce paperwork and saved valuable time.',
    avatarUrl: photo8,
  },
  {
    id: 7,
    name: 'Dr. Kavita Moholkar',
    role: 'HOD, CSBS Department, RSCOE',
    message: 'Demonstrated strong problem-solving and development skills through impactful academic and industry collaborations.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/faculty/5eed08d1-072a-44d3-a5f8-e551fa78c04b.png',
  },
  {
    id: 8,
    name: 'Prof. Vidyashree Kokane',
    role: 'Faculty, CSBS Department, RSCOE',
    message: 'Consistently displayed creativity and initiative in project development, with attention to detail and execution.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/faculty/bed32c86-3639-45f1-8a43-431dfe044a66.png',
  },
  {
    id: 9,
    name: 'Dr. Sunil Kandalkar',
    role: 'Dean, RSCOE',
    message: 'Exemplifies technical excellence and a strong commitment to delivering real-world solutions.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/Images/InternalPages/Deans/SGKandalkar.png',
  }
];


export const photoGallery = [
  {
    src: photo1,
    title: 'Leadership Dialogue with DCP Sandeep Doiphode',
    description: 'A thought-provoking exchange on leadership and community safety with Deputy Commissioner Sandeep Doiphode.'
  },
  {
    src: photo2,
    title: 'Honored by Pimpri Chinchwad Police',
    description: 'Receiving special recognition from the Pimpri Chinchwad Commissionerate for outstanding civic contribution.'
  },
  {
    src: photo3,
    title: 'Republic Day Celebrations at Commissioner’s Office',
    description: 'Marking India’s pride with a ceremonial salute at the Commissioner’s Office on Republic Day.'
  },
  {
    src: photo4,
    title: 'National Spirit at the Commissionerate',
    description: 'A moment of unity and patriotism during the Republic Day event at the Commissioner’s campus.'
  },
  {
    src: photo5,
    title: 'Felicitation for Remarkable Achievement',
    description: 'An inspiring honor at college in recognition of exemplary accomplishments and dedication.'
  },
  {
    src: photo11,
    title: "Project Demonstration and Development Showcase",
    description: "Showcasing innovative project work and key development highlights."
  }

];

export const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'rahulpatil096k@gmail.com',
    href: 'mailto:rahulpatil096k@gmail.com',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '9322473877',
    href: 'tel:9322473877',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: '#',
    color: 'from-purple-500 to-violet-500'
  }
];

export const socialLinks = [
  {
    icon: <Github size={24} />,
    href: 'https://github.com/RahulPatil-96',
    label: 'GitHub',
    color: 'hover:text-black hover:bg-neutral-200',
    followers: '2.5K'
  },
  {
    icon: <Linkedin size={24} />,
    href: 'https://linkedin.com/in/rahul-patil-096k',
    label: 'LinkedIn',
    color: 'hover:bg-[#0077B5] hover:text-white',
    followers: '5.2K'
  },
  {
    icon: <Instagram size={24} />,
    href: 'https://twitter.com',
    label: 'Instagram',
    color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white',
    followers: '1.8K'
  }
];
