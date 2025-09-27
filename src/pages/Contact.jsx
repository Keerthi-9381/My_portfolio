import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="text-center text-lg text-gray-700">
        <p>Email: <a href="mailto:nanikillamsetti2003@gmail.com" className="text-blue-600 hover:underline">nanikillamsetti2003@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/keerthi-killamsetti-157789215" className="text-blue-600 hover:underline" target="_blank">View Profile</a></p>
        <p>GitHub: <a href="https://github.com/20131A0595" className="text-blue-600 hover:underline" target="_blank">20131A0595</a></p>
      </div>
    </section>
  );
};

export default Contact;
