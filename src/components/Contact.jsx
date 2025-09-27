import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 drop-shadow-sm">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I’m always open to discussing new opportunities, collaborations, or tech talk 🚀
        </p>

        <div className="space-y-3 text-lg text-gray-700">
          <p>📧 <a href="mailto:nanikillamsetti2003@gmail.com" className="text-blue-600 font-semibold hover:underline">nanikillamsetti2003@gmail.com</a></p>
          <p>📞 <a href="tel:+919381709193" className="text-blue-600 font-semibold hover:underline">+91 9381709193</a></p>
        </div>

        <div className="mt-8 flex justify-center gap-8 text-gray-700">
          <a href="https://github.com/20131A0595" className="hover:text-black transition font-medium">GitHub</a>
          <a href="https://leetcode.com/20131a0595/" className="hover:text-black transition font-medium">LeetCode</a>
          <a href="https://www.linkedin.com/in/keerthi-killamsetti-157789215/" className="hover:text-black transition font-medium">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}
