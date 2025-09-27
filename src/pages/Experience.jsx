import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Associate Software Engineer – Taxmann Technologies</h3>
          <p className="text-sm text-gray-600">July 2024 – Present</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Built and optimized backend APIs for tax/legal software.</li>
            <li>Integrated Elasticsearch for enhanced search performance.</li>
            <li>Automated in-app purchase validation for Android/iOS.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Python Developer Intern – Taxmann</h3>
          <p className="text-sm text-gray-600">Jan 2024 – June 2024</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Worked on Django backend and VectorDB integration.</li>
            <li>Implemented RAG using HuggingFace models and embeddings.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">ML Engineer Intern – Quantum AI Global</h3>
          <p className="text-sm text-gray-600">Aug 2023 – Oct 2023</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Developed ATS using Transformers and FastAPI.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
