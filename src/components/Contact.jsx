import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_2shammd",
        "template_inxjaa4",
        form.current,
        "hVr4jUAI4RmLcwWwo"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-16 py-20 pt-24"
    >
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Let's Connect 👋
          </h3>

          <p className="text-gray-400">
            Feel free to reach out for collaborations, project opportunities, or just a friendly hello.
          </p>

          {/* EMAIL TEXT (instead of icon) */}
          <p className="text-gray-400">
            📧 sreekalakr22@gmail.com
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl mt-4">
            <a
              href="https://github.com/SreekalaKR/SreekalaKR"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sreekalakr"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email (I will reply here)"
            required
            className="p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`p-3 rounded font-medium transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Failed to send message. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;