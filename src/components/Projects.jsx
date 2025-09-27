import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Transcript Summarizer",
    desc: "Extracts and summarizes YouTube transcripts using T5 model with multilingual and voice assistance.",
  },
  {
    title: "ATS using Generative AI",
    desc: "Automated ATS with conversational AI for candidate screening and interview automation.",
  },
  {
    title: "Retail Chain Earnings Estimator",
    desc: "Decision tree ML model + website to predict retail company earnings.",
  },
  {
    title: "Aasishare (Accident Alert App)",
    desc: "Web app to send emergency alerts to team members during accidents for faster response.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background blobs for uniformity */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:shadow-2xl hover:scale-105 transition transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-700 mt-3 leading-7">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
