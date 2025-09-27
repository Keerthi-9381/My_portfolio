import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      
      {/* Background decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center bg-white shadow-lg rounded-2xl p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 drop-shadow-sm">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-8">
          I am a <span className="font-semibold text-indigo-600">Software Engineer at Taxmann Technologies</span>  
          with expertise in <span className="font-semibold text-pink-500">backend development</span>,  
          <span className="font-semibold text-purple-500"> machine learning</span>, and <span className="font-semibold text-green-500">scalable systems</span>.  
          I love solving problems, exploring AI/ML, and contributing to impactful projects.  
          With a strong foundation in CS (<span className="font-semibold text-yellow-500">B.Tech Honors, CGPA 9.23</span>),  
          I aim to build technology that makes life easier and smarter.
        </p>
      </motion.div>
    </section>
  );
}
