import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLock,
  FaCogs,
  FaRobot
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      items: "JavaScript, TypeScript, SQL, Python",
    },
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      items: "Angular, React, Next.js, HTML, CSS, Tailwind CSS",
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      items: "Node.js, Express.js, NestJS",
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      items: "MySQL, PostgreSQL, MongoDB, Redis",
    },
    {
      title: "Cloud & Dev Tools",
      icon: <FaCloud />,
      items: "AWS (Basics), Git, GitHub, Postman, Figma",
    },
    {
      title: "Security & Auth",
      icon: <FaLock />,
      items: "JWT, OAuth, RBAC, Authentication & Authorization",
    },
     {
       title: "AI Tools",
       icon: <FaRobot />,
      items: "ChatGPT, Copilot, Gemini, Claude",
    },
    {
      title: "Engineering Practices",
      icon: <FaCogs />,
      items: "REST APIs, Microservices, Performance Optimization, Agile Development",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-20 pt-24"
    >
      <h2 className="text-3xl font-bold text-center">
        Skills
      </h2>

      <p className="text-gray-400 text-center mt-2">
        Technologies and engineering practices I use to design and build scalable web applications
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 
                       hover:border-blue-500 hover:-translate-y-2 transition duration-300 group"
          >
            {/* ICON */}
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              <div className="text-blue-500 text-2xl group-hover:scale-110 transition">
                {skill.icon}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold">
              {skill.title}
            </h3>

            {/* CONTENT */}
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {skill.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;