import { ExternalLink, Github, Star, Eye, TrendingUp, Rocket } from 'lucide-react';
import { projects as projectsData } from '../mockData';
import { Project } from '../mockData';
import { useTheme } from './theme-provider';
import { colors } from '../colors';
import { getSectionBackground } from '../sectionStyles';

const projects: Project[] = projectsData;

const ProjectsSection = () => {
  const { theme } = useTheme();
  const backgroundColor = getSectionBackground(theme, colors);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <Rocket className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
            Featured Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-20 mb-16">
          {projects.map((project, index) => {
            // Adjust gradient color for dark theme
            let colorClass = project.color;
            if (theme === 'dark') {
              const match = project.color.match(/from-(.*?)-500 to-(.*?)-500/);
              if (match) {
                colorClass = `from-${match[1]}-700 to-${match[2]}-700`;
              }
            }

            return (
              <div
                key={project.title}
                className={`group flex flex-col lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } gap-10 items-center`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2">
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${colorClass} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500`}
                  ></div>
                  <div className="relative overflow-hidden rounded-2xl transform transition-transform duration-700 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>

                    {/* Stats overlay */}
                    {project.stats && (
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white/90">
                        <div className="flex space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye size={14} />
                            <span className="text-sm font-medium">{project.stats.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star size={14} />
                            <span className="text-sm font-medium">{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp size={14} />
                            <span className="text-sm font-medium text-emerald-400">{project.stats.trend}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3
                      className={`text-3xl font-bold mb-4 ${
                        theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies by Category */}
                  <div className="space-y-4">
                    {project.technologies &&
                      Object.entries(project.technologies).map(([category, techs]) => {
                        if (techs.length === 0) return null;
                        return (
                          <div key={category}>
                            <h4
                              className={`mb-2 font-semibold capitalize ${
                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                              }`}
                            >
                              {category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {techs.map((tech: string) => (
                                <span
                                  key={tech}
                                  className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                                    theme === 'dark'
                                      ? 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600'
                                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                          : 'bg-neutral-900 text-white hover:bg-neutral-700'
                      }`}
                    >
                      <Github size={18} />
                      <span className="font-medium">View Code</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-2 px-6 py-3 rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="https://github.com/RahulPatil-96"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
