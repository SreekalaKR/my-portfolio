import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    // Update URL hash
    window.history.pushState(null, "", `#${id}`);
  };

  const getClass = (section) =>
    `cursor-pointer transition ${
      activeSection === section
        ? "text-blue-400 font-bold"
        : "text-white"
    }`;

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between p-4 z-50">
      <h1 className="font-bold">My Portfolio</h1>

      <div className="space-x-6">
        <span onClick={() => scrollToSection("home")} className={getClass("home")}>
          Home
        </span>

        <span onClick={() => scrollToSection("about")} className={getClass("about")}>
          About
        </span>

        <span onClick={() => scrollToSection("skills")} className={getClass("skills")}>
          Skills
        </span>

        <span onClick={() => scrollToSection("projects")} className={getClass("projects")}>
          Projects
        </span>

        <span onClick={() => scrollToSection("contact")} className={getClass("contact")}>
          Contact
        </span>
      </div>
    </nav>
  );
}

export default Navbar;