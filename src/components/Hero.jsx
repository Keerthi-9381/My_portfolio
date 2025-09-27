import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profile from "../assets/keerthi.jpeg";
import resume from "../assets/keerthi_resume.pdf";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white text-center px-6 overflow-hidden">
      
      {/* Animated background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Keerthi"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-44 h-44 rounded-full border-4 border-white shadow-2xl mb-6 hover:scale-105 transition-transform duration-300"
      />

      {/* Intro */}
      <motion.h1
        className="text-5xl font-extrabold drop-shadow-lg"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-yellow-300">Keerthi 👋</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-xl max-w-2xl text-gray-100"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Software Engineer @ <span className="font-semibold">Taxmann Technologies</span> | ML Enthusiast | Problem Solver
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-green-600 transition"
        >
          <FileText size={18} /> View Resume
        </a>
        <a
          href="mailto:nanikillamsetti2003@gmail.com"
          className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-gray-200 transition"
        >
          <Mail size={18} /> Email Me
        </a>
        <a
          href="https://github.com/20131A0595"
          className="flex items-center gap-2 bg-black px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-gray-800 transition"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/keerthi-killamsetti-157789215/"
          className="flex items-center gap-2 bg-blue-700 px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-blue-800 transition"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
