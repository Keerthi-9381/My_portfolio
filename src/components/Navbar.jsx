import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "experience", "projects", "achievements", "contact"];
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-4 transition-all ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Keerthi</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          {["about", "skills", "experience", "projects", "achievements", "contact"].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`hover:text-indigo-500 transition ${
                active === sec ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
