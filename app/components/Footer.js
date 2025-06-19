import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 text-gray-600 mt-16">
      <a href="https://github.com/Anaare" target="_blank">
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/ana-arevadze-47b116332/"
        target="_blank"
      >
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:aarevadze41@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </footer>
  );
}
