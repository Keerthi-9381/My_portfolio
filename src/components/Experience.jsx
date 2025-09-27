import { motion } from "framer-motion";

const experience = [
  {
    role: "Associate Software Engineer",
    company: "Taxmann Technologies",
    period: "Jul 2024 – Present",
    points: [
      "Developed backend APIs for legal & tax software.",
      "Integrated Elasticsearch for efficient search & indexing.",
      "Validated in-app purchase data and managed subscription plans.",
      "Built responsive React UI components."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "Taxmann Technologies",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Developed backend APIs using Django.",
      "Implemented RAG approach on large datasets.",
      "Converted C# codebases into Python APIs."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Quantum AI Global",
    period: "Aug 2023 – Oct 2023",
    points: [
      "Developed a custom Applicant Tracking System.",
      "Worked with transformer models & FastAPI deployments."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background blobs for uniformity */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center text-gray-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-l-4 border-indigo-500`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
              <p className="text-gray-600 mt-1">{exp.company} • {exp.period}</p>
              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                {exp.points.map((p, idx) => (
                  <li key={idx} className="hover:text-indigo-600 transition">{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
