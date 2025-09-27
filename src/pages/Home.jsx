import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-700 text-white" id="home">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Keerthi 👋</h1>
      <p className="text-xl md:text-2xl text-center max-w-xl">
        Associate Software Engineer | Backend & AI Developer | Django | ML | NLP | Elasticsearch
      </p>
    </section>
  );
};

export default Home;
