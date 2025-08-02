import { Code2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './theme-provider';
import { colors } from '../colors';

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const TechStack = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const technologies: TechItem[] = [
    // Languages
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'Languages' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
    // { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Languages' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Languages' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Languages' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Languages' },

    // Frontend
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
    { name: 'Tailwind', icon: 'https://devicon-website.vercel.app/api/tailwindcss/plain.svg', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'WebSocket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', category: 'Backend' },
    // { name: 'WebRTC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg', category: 'Backend' },
    // { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'Backend' },

    // Databases
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Databases' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Databases' },
    { name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', category: 'Databases' },
    // { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', category: 'Databases' },

    // DevOps & Cloud
    // { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
    // { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'DevOps' },
    // { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'Cloud' },
    // { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'DevOps' },

    // CI/CD & GitOps
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'CI/CD' },
    // { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', category: 'CI/CD' },
    // { name: 'Flux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flux/flux-original.svg', category: 'CI/CD' },

    // Performance & Monitoring
    // { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'Monitoring' },
    // { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'Monitoring' },
    // { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', category: 'Cloud' },
    // { name: 'CloudFront', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' },
    // { name: 'S3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'Cloud' },
    // { name: 'GCS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'Cloud' },

    // Testing & Quality Assurance
    // { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', category: 'Testing' },
    // { name: 'Vitest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg', category: 'Testing' },
    // { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg', category: 'Testing' },

    // Tools
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Tools' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Design' },
    // { name: 'ESLint', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg', category: 'Tools' },
    // { name: 'Prettier', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg', category: 'Tools' },
    // { name: 'Turborepo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/turborepo/turborepo-original.svg', category: 'Tools' },

    // Optional Tech
    // { name: 'Bun', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg', category: 'Runtime' },
    // { name: 'Cloudflare Workers', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', category: 'Serverless' },
  ];

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Design', 'Tools',];
  // 'DevOps', 'CI/CD', 'Monitoring', 'Testing', 'Cloud', 'Runtime', 'Serverless'

  const filteredTechnologies = activeFilter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeFilter);

  const getCategoryColor = (category: string, theme: string) => {
    const lightColors: { [key: string]: string } = {
      'All': 'from-gray-600 to-gray-800',
      'Languages': 'from-blue-500 to-cyan-500',
      'Frontend': 'from-green-500 to-emerald-500',
      'Backend': 'from-purple-500 to-violet-500',
      'Databases': 'from-orange-500 to-amber-500',
      'DevOps': 'from-red-500 to-pink-500',
      'Cloud': 'from-indigo-500 to-blue-500',
      'CI/CD': 'from-yellow-500 to-orange-500',
      'Monitoring': 'from-teal-500 to-cyan-500',
      'Testing': 'from-emerald-500 to-green-500',
      'Design': 'from-pink-500 to-rose-500',
      'Tools': 'from-gray-500 to-slate-500',
      'Runtime': 'from-violet-500 to-purple-500',
      'Serverless': 'from-sky-500 to-blue-500'
    };
    const darkColors: { [key: string]: string } = {
      'All': 'from-gray-400 to-gray-600',
      'Languages': 'from-blue-400 to-cyan-400',
      'Frontend': 'from-green-400 to-emerald-400',
      'Backend': 'from-purple-400 to-violet-400',
      'Databases': 'from-orange-400 to-amber-400',
      'DevOps': 'from-red-400 to-pink-400',
      'Cloud': 'from-indigo-400 to-blue-400',
      'CI/CD': 'from-yellow-400 to-orange-400',
      'Monitoring': 'from-teal-400 to-cyan-400',
      'Testing': 'from-emerald-400 to-green-400',
      'Design': 'from-pink-400 to-rose-400',
      'Tools': 'from-gray-400 to-slate-400',
      'Runtime': 'from-violet-400 to-purple-400',
      'Serverless': 'from-sky-400 to-blue-400'
    };
    return theme === 'dark' ? (darkColors[category] || 'from-gray-400 to-slate-400') : (lightColors[category] || 'from-gray-500 to-slate-500');
  };

  return (
    <section
          id="skills"
          className="py-24 relative overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: theme === 'dark' ? colors.background.dark : colors.background.light }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-16">
        <Code2 className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
          TechStack
        </h2>
      </div>


      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeFilter === category
                ? `bg-gradient-to-r ${getCategoryColor(category, theme)} text-white shadow-lg`
                : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 border border-gray-600 hover:border-gray-500 hover:shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-8 mb-12">
        {filteredTechnologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon Container */}
            <div className="relative mb-3">
              <div className={`absolute -inset-2 bg-gradient-to-r ${getCategoryColor(tech.category, theme)} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              <div className="relative w-16 h-16 flex items-center justify-center transition-all duration-500 hover:scale-110">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="w-8 h-8 object-contain"
                  style={{ width: '32px', height: '32px' }}
                  onError={(e) => {
                    // Fallback to a simple colored circle if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = `w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(tech.category, theme)}`;
                    fallback.style.width = '32px';
                    fallback.style.height = '32px';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>

              <div className="absolute -bottom-1 -right-1 w-6 h-6">
              </div>
            </div>

            {/* Label */}
            <div className="text-center">
              <span
                className="text-xs font-medium block mb-1"
                style={{
                  fontSize: '12px',
                  color: theme === 'dark' ? colors.text.dark : colors.text.light,
                  marginTop: '10px'
                }}
              >
                {tech.name}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(tech.category, theme)} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {tech.category}
              </span>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10"
              style={{ backgroundColor: theme === 'dark' ? colors.surface.dark : colors.surface.light, color: theme === 'dark' ? colors.text.dark : colors.text.light }}
            >
              <div className="text-center">
                <div className="font-semibold">{tech.name}</div>
                <div>{tech.category}</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent" style={{ borderTopColor: theme === 'dark' ? colors.surface.dark : colors.surface.light }}></div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
    </section>
  );
};

export default TechStack;