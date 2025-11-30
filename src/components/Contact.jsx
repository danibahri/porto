import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-8">
          {[
            { icon: <Github size={24} />, href: "#" },
            { icon: <Twitter size={24} />, href: "#" },
            { icon: <Linkedin size={24} />, href: "#" },
            { icon: <Mail size={24} />, href: "mailto:hello@example.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transition-all text-white border border-white/10"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <footer className="mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} Portfolio. Built with React & Tailwind.
        </footer>
      </div>
    </section>
  );
};

export default Contact;
