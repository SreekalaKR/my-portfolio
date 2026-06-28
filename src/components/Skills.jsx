import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLock,
  FaCogs,
  FaRobot,
  FaTools,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      items: [
        "Angular (14+)",
        "React",
        "RxJS",
        "NgRx",
        "Redux",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Asynchronous & Event-Driven Systems",
      ],
    },
    {
      title: "Databases & Storage",
      icon: <FaDatabase />,
      items: [
        "Cassandra (DataStax Astra)",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Redis",
      ],
    },
    {
      title: "ORMs & ODMs",
      icon: <FaLayerGroup />,
      items: ["Sequelize", "Mongoose"],
    },
    {
      title: "Cloud & AWS Services",
      icon: <FaCloud />,
      items: [
        "AWS S3",
        "DynamoDB",
        "Amazon CloudWatch",
        "AWS SQS",
        "AWS Lambda",
      ],
    },
    {
      title: "Authentication & Authorization",
      icon: <FaLock />,
      items: [
        "Auth0",
        "JWT",
        "Single Sign-On (SSO)",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      title: "Architecture & Development Practices",
      icon: <FaCogs />,
      items: [
        "Microservices Architecture",
        "Object-Oriented Design (OOP)",
        "Data Structures & Algorithms",
        "Performance Optimization",
        "Agile/Scrum",
        "Code Reviews",
        "Unit Testing (Jasmine, Karma)",
        "Debugging",
        "Cross-Browser Testing",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Chrome DevTools",
        "Jira",
        "Linear",
        "Figma",
      ],
    },
    {
      title: "AI-Assisted Development Tools",
      icon: <FaRobot />,
      items: [
        "ChatGPT",
        "GitHub Copilot",
        "Cursor AI",
        "Claude",
        "Gemini",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      items: [
        "Problem Solving",
        "Adaptability",
        "Learning Mindset",
        "Ownership",
        "Communication",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-16 py-20 pt-24"
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <p className="text-gray-400 text-center mt-2">
        Technologies, cloud services, AI tools, and engineering practices I use
        to build scalable, high-performance web applications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300 group h-full flex flex-col"
          >
            {/* Icon */}
            <div className="mb-4 w-10 h-10 flex items-center justify-center">
              <div className="text-blue-500 text-2xl group-hover:scale-110 transition">
                {skill.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4">
              {skill.title}
            </h3>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;