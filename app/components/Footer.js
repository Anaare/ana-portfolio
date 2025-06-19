import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 text-gray-600 mt-16">
      <a href="https://github.com/yourgithub" target="_blank">
        <FaGithub size={20} />
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
        <FaLinkedin size={20} />
      </a>
      <a href="mailto:aarevadze41@gmail.com">
        <FaEnvelope size={20} />
      </a>
    </footer>
  );
}
