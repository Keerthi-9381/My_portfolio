import React from 'react';

const projects = [
  {
    title: "YouTube Transcript Summarizer",
    description: "Summarizes YouTube videos using T5 model, supports multiple languages and voice.",
    tech: "Python, T5, gettranscript API",
    github: "https://github.com/20131A0595",
  },
  {
    title: "AI-Powered ATS",
    description: "An intelligent system to automate resume screening and candidate interviews using generative AI.",
    tech: "Sentence Transformers, T5, FastAPI",
    github: "https://github.com/20131A0595",
  },
  {
    title: "Retail Earnings Estimator",
    description: "Predicts total company earnings using decision tree ML model and a frontend for user inputs.",
    tech: "Decision Tree, ML, Web Dev",
    github: "https://github.com/20131A0595",
  },
  {
    title: "Aasishare (Accident Alert App)",
    description: "An alert system that notifies rescue teams in case of road accidents.",
    tech: "HTML, CSS, PHP, Bootstrap",
    github: "https://github.com/20131A0595",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <p className="text-sm text-gray-600 italic mb-3">Tech: {proj.tech}</p>
            <a href={proj.github} target="_blank" className="text-blue-500 hover:underline">GitHub ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
