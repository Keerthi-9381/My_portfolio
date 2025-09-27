import { motion } from "framer-motion";

const achievements = [
  "Managing GVPCENSS website successfully",
  "Organised & participated in 20+ events as NSS Lead",
  "Solved 300+ problems on LeetCode",
  "Finalist in 1 out of 3 hackathons attended"
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background blobs for uniformity */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-gray-800 drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform border-l-4 border-indigo-500 flex items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-gray-700 font-medium">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
