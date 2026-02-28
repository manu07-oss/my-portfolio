export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-500">Manogna</h1>

        <div className="flex items-center space-x-6 text-gray-300">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>

          <a
            href="https://github.com/manu07-oss"
            target="_blank"
            className="hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/manogna-vengala-0a9800193/"
            target="_blank"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}