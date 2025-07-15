import { useParallax } from "react-scroll-parallax";
import './experience.css';
import { useState, useEffect, useCallback } from "react";

const ExperienceSection = () => {
  const logos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node.js",
    },
  ];

  const jobs = [
    {
      company: "Equinix",
      description:"Managed the end-to-end development of an interactive data-centers map with Mapbox GL JS, ingesting and normalizing multi-source geospatial data and crafting custom styles and UI controls. I also integrated AEM logs into Splunk to accelerate issue detection by 80%, built an AEM-based SPA that cut a 5-hour cache-flush task down to 10 minutes (96.7% improvement), drove an API migration from TIBCO to Boomi for greater scalability, mentored new hires on our codebase and workflows, and architected full-stack applications using React, JavaScript, HTML/CSS, and Java back-ends to deliver robust, maintainable solutions.",
      position: "Senior Associate Engineer",
      dates: "01/2022 - Present",
    },
    {
      company: "Equinix",
      description:"During my internship at Equinix, I built and customized AEM components, templates, and workflows—handling everything from backend logic to the frontend user experience—and supported the seamless migration of the corporate website from WordPress to AEM.", 
      position: "Software Engineer Intern",
      dates: "05/2021 - 1/2022",
    },
    {
      company: "American Health Partners",
      description: "Automated manual HR processes with Python—shrinking a two-person, week-long task to under 20 minutes—and developed interactive Power BI dashboards to surface key organizational trends. I also collaborated closely with the system management team to handle sensitive employee documentation in UKG Pro.",
      position: "HR Specialist",
      dates: "06/2020 - 12/2020",
    },
  ];

  const education = {
    university: "Fisk University",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduation: "May 2020",
  };

  const projects =[{
    title: "Faq Generator",
    description: "AI-powered FAQ Generator built using React and Vite. It allows users to upload text or PDF files, or manually input text, and generates FAQs based on the content using OpenAI's GPT models.",  
    technologies: ["React", "TailwindCSS", "OpenAI API"],
    image: "src/assets/faq.jpg",
    liveUrl: "https://faq-generator-mu.vercel.app/",
    githubUrl: "https://github.com/christnm/faqGenerator",
    featured: true
  },
{
  title: "The ShoeMaster Store",
  description: "The ShoeMaster is my first-ever web development project, built to learn and explore the fundamentals of React and modern web technologies. It is an e-commerce application designed to showcase and sell men's shoes. The app features dynamic product displays, user authentication, and integration with Firebase for real-time data management. With a responsive design and clean UI built using React Bootstrap, ShoeMaster provides a seamless user experience. This project represents my initial step into software development and highlights my ability to learn and implement new technologies.",
  technologies: ["React", "Firebase", "Bootstrap"],
  image: "src/assets/logo512.png",
  liveUrl: "https://theshoemaster.web.app/",
  githubUrl: 'https://github.com/christnm/TheShoeMaster',
  featured: true
}]

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Professional Journey Title */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-300">
            Professional Journey
          </h3>
          <div className="grid gap-8 md:gap-12 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>

        {/* Skills and Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Skills Section */}
          <div className="order-2 lg:order-1">
            <SkillsWheels logos={logos} />
          </div>

          {/* Education Section */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-300">
              Education
            </h3>
            <EducationCard education={education} />
          </div>
        </div>
        <div className="mt-20">
        <ProjectsShowcase projects={projects} />
        </div>
          
      </div>
    </section>
  );
};

const ExperienceCard = ({ job, index }) => {
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Maximum characters before truncation

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "" : "lg:flex-row-reverse"}`}>
      {/* Timeline indicator */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        <div className="w-px h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>

      {/* Card */}
      <div className={`relative w-full max-w-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 neon-border hover:scale-105 transition-all duration-300 ${isEven ? "animate-slide-in-left" : "animate-slide-in-right"}`}>
        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-purple-500 rounded-tr-2xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500 rounded-bl-2xl opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-6">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 text-neon">
              {job.company}
            </h4>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-3"></div>
            <p className="text-lg font-semibold text-purple-300">{job.position}</p>
            <p className="text-sm text-gray-400 font-medium">{job.dates}</p>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {isExpanded || job.description.length <= maxLength
              ? job.description
              : `${job.description.substring(0, maxLength)}...`}
          </p>
          {job.description.length > maxLength && (
            <button
              onClick={toggleExpand}
              aria-label={isExpanded ? "Collapse description" : "Expand description"}
              className="mt-2 text-purple-400 hover:text-purple-500 transition-colors text-sm font-medium cursor-pointer"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </div>
  );
};

const SkillsWheels = ({ logos = [] }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Default logos if none provided
  const defaultLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
  ];

  const skillsToDisplay = logos.length > 0 ? logos : defaultLogos;

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
      
      {/* Main orbital track */}
      <div className="absolute inset-8 rounded-full border border-gray-700/50 bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm"></div>
      
      {/* Inner track */}
      <div className="absolute inset-16 rounded-full border border-gray-600/30"></div>

      {/* Rotating skills container */}
      <div
        className="absolute w-full h-full orbit-animation"
        style={{
          animation: "orbit 30s linear infinite",
        }}
      >
        {skillsToDisplay.map((logo, i) => {
          const angle = (360 / skillsToDisplay.length) * i;
          const radius = 42; // Percentage from center
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className="orbit-reverse-animation"
                style={{
                  animation: "orbit-reverse 30s linear infinite",
                }}
                onMouseEnter={() => setHoveredSkill(logo.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill icon container */}
                <div className={`
                  relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-full p-3 
                  border-2 border-gray-600
                  shadow-lg shadow-black/50
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:border-purple-400
                  hover:shadow-purple-500/50 hover:shadow-xl
                  cursor-pointer group
                  ${hoveredSkill === logo.name ? 'ring-2 ring-purple-400 ring-opacity-60' : ''}
                `}>
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  />
                  
                  {/* Skill name tooltip */}
                  <div className={`
                    absolute -bottom-8 left-1/2 transform -translate-x-1/2
                    px-2 py-1 bg-gray-900 border border-gray-600 rounded-md
                    text-xs font-medium text-white whitespace-nowrap
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    pointer-events-none z-20
                    shadow-lg shadow-black/50
                  `}>
                    {logo.name}
                    {/* Tooltip arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-600 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Center hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Center glow */}
          <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-lg"></div>
          
          {/* Center circle */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-600 shadow-xl shadow-black/50 flex items-center justify-center">
            {/* Inner glow */}
            <div className="absolute inset-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full"></div>
            
            {/* Text */}
            <div className="relative z-10 text-center">
              <span className="block text-white font-bold text-sm sm:text-base lg:text-lg drop-shadow-md">
                Skills
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-1 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Skill name display */}
      {hoveredSkill && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <div className="px-4 py-2 bg-gray-900/90 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg">
            <span className="text-white font-semibold text-sm">
              {hoveredSkill}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


const EducationCard = ({ education }) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-sm bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 neon-border hover:scale-105 transition-all duration-300">
        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-purple-500 rounded-tr-2xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-500 rounded-bl-2xl opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* University logo placeholder */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white p-2 shadow-xl border-2 border-gray-300 hover:border-purple-500 transition-all duration-300">
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">
              <img src="src/assets/fiskLogo.png" alt="FISK"></img>
            </div>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 text-neon">
            {education.university}
          </h4>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4"></div>

          <p className="text-lg font-semibold text-purple-300 mb-1">
            {education.degree}
          </p>
          <p className="text-base text-gray-400 font-medium mb-4">
            {education.major}
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-sm font-semibold text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
            🎓 {education.graduation}
          </div>

          {/* Brief Note */}
          <p className="mt-4 text-sm text-gray-400">
            Fisk University is a historically black university, part of the Black Ivy League, known for its academic excellence and commitment to social justice.
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </div>
  );
};

const ProjectsShowcase = ({ projects = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default projects if none provided
  const defaultProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/800x400/4c1d95/ffffff?text=E-Commerce+Platform",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Mobile-responsive task management application with drag-and-drop functionality, team collaboration features, and real-time notifications.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      image: "https://via.placeholder.com/800x400/7c3aed/ffffff?text=Task+Manager",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard that displays weather patterns and analytics using external APIs and interactive charts.",
      technologies: ["Python", "Flask", "D3.js", "API Integration"],
      image: "https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Weather+Dashboard",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Machine Learning Model",
      description: "Predictive analytics model for customer behavior analysis with 95% accuracy rate using scikit-learn and TensorFlow.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      image: "https://via.placeholder.com/800x400/a855f7/ffffff?text=ML+Model",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const projectsToDisplay = projects.length > 0 ? projects : defaultProjects;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projectsToDisplay.length);
  }, [projectsToDisplay]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projectsToDisplay.length) % projectsToDisplay.length);
  }, [projectsToDisplay]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-300">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-600 hover:border-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-600 hover:border-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 text-white group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Slide */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
          <ProjectCard project={projectsToDisplay[currentSlide]} />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {projectsToDisplay.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        {currentSlide + 1} of {projectsToDisplay.length}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  // New state for read-more functionality in project description
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Adjust as needed

  return (
    <div className="relative group">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white shadow-lg">
          Featured
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative h-64 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          {/* Action Buttons */}
          <div className="absolute bottom-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <a 
              href={project.liveUrl}
              aria-label="View live project"
              className="p-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href={project.githubUrl}
              aria-label="View project source on GitHub"
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
              {isExpanded || project.description.length <= maxLength
                ? project.description
                : `${project.description.substring(0, maxLength)}...`}
            </p>
            {project.description.length > maxLength && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-label={isExpanded ? "Collapse description" : "Expand description"}
                className="text-sm font-medium text-purple-400 hover:text-purple-500 transition-colors"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-purple-500 hover:text-purple-300 hover:bg-gray-700 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ExperienceSection;
