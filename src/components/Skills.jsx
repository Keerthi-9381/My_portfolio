import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "C++", "C#", "HTML", "CSS", "PHP", "Django",
  "Node.js", "Express", "React", "MySQL", "Elasticsearch",
  "Git", "GitHub", "Bitbucket", "Machine Learning", "NLP", "Transformers"
];

const gradients = [
  "from-indigo-400 to-purple-500",
  "from-pink-400 to-red-500",
  "from-yellow-400 to-orange-500",
  "from-green-400 to-teal-500",
  "from-blue-400 to-indigo-500"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background blobs for uniformity */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => {
            const gradient = gradients[i % gradients.length];
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${gradient} text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition transform cursor-default`}
              >
                {skill}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
