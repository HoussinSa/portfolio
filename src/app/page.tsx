"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Scalable Spring Boot Search Service",
      description: "Enterprise-grade search service handling thousands of daily requests with 99% uptime, deployed across 11 multi-region Kubernetes clusters for high availability.",
      tech: ["Spring Boot", "Kubernetes", "Docker", "Multi-Region"],
      github: "#",
      demo: "#",
    },
    {
      title: "ZotMeet (ICSSC)",
      description: "Svelte-based scheduling app used by 300+ UCI students, reducing meeting coordination time by 80% through real-time booking with secure Lucia authentication.",
      tech: ["Svelte", "Lucia", "TypeScript", "Real-time"],
      github: "https://github.com/HoussinSa",
      demo: "#",
    },
    {
      title: "School Sync",
      description: "Highly scalable SaaS learning management system with chat functionality, assignment calendar, and class overviews. Improved user engagement by 40%.",
      tech: ["React", "Flutter", "AWS Amplify", "SaaS"],
      github: "https://github.com/HoussinSa",
      demo: "#",
    },
    {
      title: "Infrastructure as Code Automation",
      description: "Automated creation of PostgreSQL, Kafka, and Redis instances using Terraform and Crossplane, reducing setup time by 70% for 10+ SaaS applications.",
      tech: ["Terraform", "Crossplane", "PostgreSQL", "Kafka", "Redis"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "Golang", "JavaScript", "C/C++", "Bash", "SQL"] },
    { category: "Cloud & DevOps", items: ["Kubernetes", "Docker", "AWS", "Azure", "GCP", "Terraform", "Helm"] },
    { category: "Observability", items: ["Prometheus", "Grafana", "ELK Stack", "Dynatrace", "Thanos"] },
    { category: "Backend & Data", items: ["Spring Boot", "PostgreSQL", "Kafka", "Redis", "Elasticsearch", "REST APIs"] },
    { category: "CI/CD & Tools", items: ["Jenkins", "GitHub Actions", "Azure DevOps", "ArgoCD", "Ansible", "Maven"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Svelte", "Flutter", "HTML/CSS"] },
  ];

  const experience = [
    {
      company: "SAP",
      role: "Software Engineer",
      period: "July 2024 – Present",
      location: "Newport Beach, CA",
      achievements: [
        "Designed and deployed a scalable Spring Boot search service handling thousands of daily requests with 99% up-time, using replication across 11 multi-region Kubernetes clusters to improve reliability and user experience.",
        "Led and coordinated cross-team observability initiatives, driving adoption of the ELK stack and Dynatrace across 50+ microservices, mentoring 4 engineers on tooling and reducing MTTR by 40%.",
        "Built and maintained CI/CD pipelines automating build, test, and deployment workflows across 11 environments, reducing deployment time and cutting release-related errors by 60%.",
        "Played key role in migrating from monolith to microservices, helping design and deploy 5+ high-load services supporting 1M+ daily requests, boosting scalability and reducing maintenance.",
        "Led initiative to automate cleanup of Kubernetes workloads and legacy resources, collaborating with DevOps team to reduce operational costs and improve cluster efficiency.",
      ],
    },
    {
      company: "SAP",
      role: "Software DevOps Engineer Intern",
      period: "May 2022 – June 2024",
      location: "Newport Beach, CA",
      achievements: [
        "Automated creation of PostgreSQL, Kafka, and Redis instances through Terraform and Cross-plane, reducing setup time by 70% for 10+ SaaS applications.",
        "Enhanced database metrics visibility by 50% by designing and implementing comprehensive Grafana dashboards leveraging Prometheus.",
        "Optimized CI/CD workflows by automating Docker image build and push processes across pipelines, doubling deployment speed and improving team productivity.",
        "Implemented Thanos deployment to extend time series data retention policies, enabling access to over a year of historical data and improving data-driven decision-making by 20%.",
        "Managed a full-time university curriculum alongside a 40-hour work week, collaborating with two scrum teams to manage SaaS infrastructure using Go-lang, Kubernetes, Azure, and cloud tools.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Houssin Saadeh
          </a>
          <div className="hidden md:flex gap-6">
            {["home", "about", "experience", "education", "skills", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize transition-colors text-sm ${
                  activeSection === section
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full">
          <div className="text-center space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">👋 Hello, I'm</span>
            </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Houssin Saadeh
              </h1>
              <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light">
                Software Engineer & Cloud Infrastructure Specialist
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Building scalable microservices and cloud-native solutions at SAP. Passionate about DevOps, 
                Kubernetes, and creating high-performance distributed systems that serve millions of users.
              </p>
            <div className="flex gap-4 justify-center pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            <div className="flex gap-6 justify-center pt-8">
              <a href="https://github.com/HoussinSa" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/houssin-saadeh-a4a1a2208" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:houssin.saadeh@yahoo.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I'm a <strong>Software Engineer at SAP</strong> specializing in cloud-native architecture, microservices, and DevOps. 
              I design and deploy scalable systems that handle millions of daily requests with 99% uptime across multi-region Kubernetes clusters.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Currently, I lead cross-team observability initiatives, implementing the ELK stack and Dynatrace across 50+ microservices 
              while reducing MTTR by 40%. I've also played a key role in SAP's migration from monolith to microservices, helping deploy 
              5+ high-load services supporting over 1 million daily requests.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I hold a <strong>B.S. in Computer Science from UC Irvine</strong>, where I built ZotMeet, a scheduling app used by 300+ students. 
              I'm passionate about infrastructure automation, CI/CD pipelines, and building tools that improve developer productivity.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 text-center">
              <div className="p-6 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Microservices Managed</div>
              </div>
              <div className="p-6 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">2.5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Years at SAP</div>
              </div>
              <div className="p-6 bg-linear-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-2xl">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">1M+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Daily Requests Handled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                      {job.role}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {job.period}
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1 shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                  University of California, Irvine
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-2">
                  B.S. Computer Science
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <p className="text-slate-500 dark:text-slate-500">
                  Irvine, CA
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Data Structures and Algorithms",
                  "Probability and Statistics in CS",
                  "Computer Networks",
                  "Introduction to AI",
                  "Machine Learning and Data Mining",
                  "Projects in AI",
                  "Project Data and Web Applications",
                  "Data Management",
                ].map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-slate-700 rounded-lg"
                  >
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300 text-sm">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-700 rounded-2xl">
              <p className="text-slate-700 dark:text-slate-300 text-center">
                <span className="font-semibold">Notable Achievement:</span> Maintained full-time curriculum while working 40 hours/week at SAP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-linear-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-linear-to-br from-blue-400 via-purple-400 to-pink-400"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <p className="text-lg text-slate-700 dark:text-slate-300 text-center mb-8">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out!
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-600 dark:text-slate-400">
                <a href="mailto:houssin.saadeh@yahoo.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  houssin.saadeh@yahoo.com
                </a>
                <a href="tel:+19495587312" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (949) 558-7312
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2026 Houssin Saadeh. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            Software Engineer @ SAP | UC Irvine CS Graduate
          </p>
        </div>
      </footer>
    </div>
  );
}
